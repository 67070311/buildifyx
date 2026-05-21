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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="color-scheme" content="light" />
      </head>

      <body className={`${prompt.className} bg-white text-black`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
