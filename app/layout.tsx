import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hamburger from "@/components/Hamburger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: `Jon Uriu's awesome website!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <html lang="en" className="w-screen h-screen">
      <body className={inter.className + "w-full h-full"}>
        <div className="w-full h-[50px] fixed top-0 z-10 bg-slate-500/50">
          <div className="w-full h-full flex justify-between items-center">
            <div className="text-2xl flex justify-center items-center w-[50px] pl-10">
              J/U
            </div>
            <Navbar links={links} />
            <Hamburger links={links} />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
