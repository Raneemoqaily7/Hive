import {NextResponse} from "next/server";
import prisma from "@/utils/connect";

export const GET =async (req)=> {
    const {searchParams}= new URL(req.url)
    const cat =searchParams.get("cat");
    try {

        const posts = await prisma.Blog.findMany()
        return new NextResponse(
            JSON.stringify(posts,{ status: 200})
        );
    }catch (err){
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!!"},{ status: 500})
        )
    }
}