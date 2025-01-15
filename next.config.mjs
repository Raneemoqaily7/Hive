/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
      },
    images:{
        domains: ["lh3.googleusercontent.com"]
    }
};

export default nextConfig;
