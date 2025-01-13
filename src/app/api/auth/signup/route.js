import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { name, email, password, image } = body;

    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const existingUser  = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser ) {
      return new NextResponse(
        JSON.stringify({ message: "User  already exists" }),
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    console.log("Creating user with data:", {
      name,
      email,
      password: hashedPassword,
      image: image || "",
    });

    const newUser  = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        image: image || "",
      },
    });

    console.log("User  created:", newUser );

    return new NextResponse(
      JSON.stringify({
        message: "User  created",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);

    // Ensure that error.message is defined
    const errorMessage = error.message || "An unknown error occurred";

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", error: errorMessage }),
      { status: 500 }
    );
  }
};