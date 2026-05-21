import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buildifyx",
  description: "Company Website",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.className} bg-white text-black`}>
        <Navbar />

        <main className="bg-white text-black min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
