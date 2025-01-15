/** @type {import('next').NextConfig} */
const nextConfig = {
   
      env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      },
    images:{
        domains: ["lh3.googleusercontent.com"]
    }
};

export default nextConfig;
