import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req) => {
   
  const { searchParams } = new URL(req.url); 
  const cat = searchParams.get("cat"); 

  try {
    const posts = await prisma.Blog.findMany({
      where: cat ? { catSlug: cat } : {}, 
      
    });
   

    return NextResponse.json(posts, { status: 200 }); 
  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};
