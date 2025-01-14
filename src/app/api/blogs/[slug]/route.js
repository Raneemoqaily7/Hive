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
    // const name=await prisma.blog.findUnique({
    //     where:{ slug},
    //     include: {user:true}
    // })

   

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


export const PUT = async (req) => {
    console.log(req,"req")
    try {
      const url = new URL(req.url);
      const slug = url.pathname.split("/")[3];
      const { title, desc, img } = await req.json();
      console.log(title, desc, img,"titllllle")

      
      const session = await getAuthSession();
      if (!session) {
        return new NextResponse(
          JSON.stringify({ message: "Not Authenticated!" }),
          { status: 401 }
        );
      }
  console.log(session,"sessson")
      // Fetch the blog post by slug
      const post = await prisma.blog.findUnique({
        where: { slug },
        include: { user: true }, // Include user to verify ownership
      });
      console.log(post,"psssst")
  
      if (!post) {
        return new NextResponse(JSON.stringify({ message: "Post not found" }), {
          status: 404,
        });
      }
  
      // Check if the logged-in user is the owner of the post
      if (post.user.email !== session.user.email) {
        return new NextResponse(
          JSON.stringify({ message: "Unauthorized: Not the owner of the blog" }),
          { status: 403 }
        );
      }
  
      // Update the blog post
      const updatedPost = await prisma.blog.update({
        where: { slug },
        data: {
          title: title || post.title, // Update title if provided
          desc: desc || post.desc, // Update description if provided
          img: img || post.img, // Update image if provided
        },
      });
  
      return new NextResponse(
        JSON.stringify({
          message: "Blog updated successfully",
          post: updatedPost,
        }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error updating blog:", error);
      return new NextResponse(
        JSON.stringify({
          message: "Error updating blog",
          error: error.message,
        }),
        { status: 500 }
      );
    }
  };



  export const DELETE = async (req) => {
    try {
      const url = new URL(req.url);
      const slug = url.pathname.split("/")[3];
  
      const session = await getAuthSession();
      if (!session) {
        return new NextResponse(
          JSON.stringify({ message: "Not Authenticated!" }),
          { status: 401 }
        );
      }
  
      // Fetch the blog to verify ownership
      const post = await prisma.blog.findUnique({
        where: { slug },
        include: { user: true },
      });
  
      if (!post) {
        return new NextResponse(JSON.stringify({ message: "Post not found" }), {
          status: 404,
        });
      }
  
      // Check if the logged-in user is the owner of the blog
      if (post.user.email !== session.user.email) {
        return new NextResponse(
          JSON.stringify({ message: "Unauthorized: Not the owner of the blog" }),
          { status: 403 }
        );
      }
  
      // Delete the blog post
      await prisma.blog.delete({
        where: { slug },
      });
  
      return new NextResponse(
        JSON.stringify({ message: "Blog deleted successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting blog:", error);
      return new NextResponse(
        JSON.stringify({ message: "Error deleting blog", error: error.message }),
        { status: 500 }
      );
    }
  };

// export const PATCH = async (req) => {
//   try {
//     const url = new URL(req.url);
//     const slug = url.pathname.split("/")[3];
//     const { action } = await req.json();

//     const session = await getAuthSession();
//     if (!session) {
//       return new NextResponse(
//         JSON.stringify({ message: "Not Authenticated!" }),
//         { status: 401 }
//       );
//     }

//     const post = await prisma.blog.findUnique({
//       where: { slug: slug },
//       include: {user:true}
//     });

//     if (!post) {
//       return new NextResponse(JSON.stringify({ message: "Post not found" }), {
//         status: 404,
//       });
//     }

//     const postId = post.id;

//     const user = await prisma.user.findUnique({
//       where: { email: session.user.email },
//     });

//     if (!user) {
//       return new NextResponse(JSON.stringify({ message: "User not found" }), {
//         status: 404,
//       });
//     }

    

    

   


//     return new NextResponse(
//       JSON.stringify({
//         ...updatedPost,
        
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating post likes:", error);
//     return new NextResponse(
//       JSON.stringify({
//         message: "Error updating post likes",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// };