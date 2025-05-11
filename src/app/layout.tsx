import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ResizableNavBar from "@/components/ResizableNavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Studio KS",
  description: "Welcome to my potfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          {/* <Navbar /> */}
          <ResizableNavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
