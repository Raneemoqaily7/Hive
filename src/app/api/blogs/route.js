import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    console.log(req, "Request details");
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");
  
    const query = {
      where: {
        ...(cat && { catSlug: cat }), // Filter by category slug if provided
      },
      include: {
        user: { // Include the user who created the blog
          select: {
            name: true, // Only include the user's name
            email: true, // Optionally include email
          },
        },
      },
    };
  
    try {
      const posts = await prisma.blog.findMany(query);
  
      return new NextResponse(JSON.stringify({ posts }), { status: 200 });
    } catch (err) {
      console.error("Error retrieving posts:", err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  };
  

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();

    const { title, desc, img, catSlug } = body;

    let slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    let uniqueSlug = slug;
    let suffix = 1;

    while (true) {
      const existingPost = await prisma.blog.findUnique({
        where: { slug: uniqueSlug },
      });

      if (!existingPost) break;

      uniqueSlug = `${slug}-${suffix}`;
      suffix += 1;
    }

    const post = await prisma.blog.create({
      data: {
        title,
        desc,
        img,
        slug: uniqueSlug,
        catSlug: catSlug || "style",
        userEmail: session.user.email,
      },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error("Error creating post:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
