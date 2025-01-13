import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  console.log (searchParams,"paraams")
  const postSlug = searchParams.get("postSlug");
  console.log(postSlug,"sluuuug")

  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 }
    );
  }
  console.log(session,"session")

  try {
    // Fetch comments with user data
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    console.log(comments,"commmnets")

    // Map comments to remove likes-related fields
    const simplifiedComments = comments.map((comment) => ({
      id: comment.id,
      createdAt: comment.createdAt,
      desc: comment.desc,
      userEmail: comment.userEmail,
      postSlug: comment.postSlug,
      user: comment.user,
    }));
    console.log(simplifiedComments,"simplifies")

    return new NextResponse(JSON.stringify(simplifiedComments), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
