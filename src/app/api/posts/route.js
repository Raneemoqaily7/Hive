import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url); // Parse query parameters
  const cat = searchParams.get("cat"); // Get the 'cat' parameter

  try {
    const posts = await prisma.Blog.findMany({
      where: cat ? { catSlug: cat } : {}, // Filter by catSlug if 'cat' is provided
    });

    return NextResponse.json(posts, { status: 200 }); // Return filtered posts
  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};
