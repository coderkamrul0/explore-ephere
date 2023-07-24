'use client'
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <ScrollToTop color="white" smooth />
        <Navbar />
        <div className="pt-20">
        {children}

        </div>

        <Footer />
      </body>
    </html>
  );
}
