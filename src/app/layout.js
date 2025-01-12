
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ['latin'] })
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {ThemeContextProvider} from "@/themeContext/ThemeContext"
import ThemeProviders from "@/providers/ThemeProviders";

import AuthProvider from '@/providers/AuthProvider'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const Metadata = {
  title: "Blog App",
  description: "Best Ever Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      <ThemeContextProvider>
       <ThemeProviders>
        <div className="container">
          <div className="wrapper">
            <Navbar />

            {children}
            
            <Footer />
          </div>
        </div>
       </ThemeProviders>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
