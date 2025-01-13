import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
export const GET = async (req, { params }) => {
  const { slug } = await  params;
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const post = await prisma.blog.findFirst({
      where: { slug },
      
    });
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    });
    let currentUserId = user.id;

   

    const response = {
      ...post,
     
    };
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const PATCH = async (req) => {
  try {
    const url = new URL(req.url);
    const slug = url.pathname.split("/")[3];
    const { action } = await req.json();

    const session = await getAuthSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }),
        { status: 401 }
      );
    }

    const post = await prisma.blog.findUnique({
      where: { slug: slug },
    });

    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    const postId = post.id;

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    

    

   


    return new NextResponse(
      JSON.stringify({
        ...updatedPost,
        
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating post likes:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Error updating post likes",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
