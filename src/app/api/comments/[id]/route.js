import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  try {
    const url = new URL(req.url);
    const commentId = url.pathname.split("/").pop();

    const session = await getAuthSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }),
        { status: 401 }
      );
    }

    let userId = session.user.id;
    if (!userId) {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { id: true },
      });
      userId = user?.id;
    }

    if (!commentId) {
      return new NextResponse(
        JSON.stringify({ message: "Comment ID is required" }),
        { status: 400 }
      );
    }

    // Update comment (replace with specific functionality if needed)
    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: {
        desc: "Updated content", // Example update (replace with actual logic)
      },
    });

    return new NextResponse(JSON.stringify(updatedComment), { status: 200 });
  } catch (error) {
    console.error("Error updating comment:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Error updating comment",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};

export const GET = async (req, { params }) => {
  try {
    const commentId = params.id;

    if (!commentId) {
      return new NextResponse(
        JSON.stringify({ message: "Comment ID is required" }),
        { status: 400 }
      );
    }

    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return new NextResponse(
        JSON.stringify({ message: "Comment not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    console.error("Error fetching comment:", error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to fetch comment" }),
      { status: 500 }
    );
  }
};
