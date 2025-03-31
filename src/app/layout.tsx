import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "@/components/molecules/navigation-menu";
import Sticky from "@/components/molecules/sticky";

const degular = localFont({
  src: [
    {
      path: "../../public/font/Degular-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${degular.className} p-[16px] `}>
        <main className="w-full 2xl:w-[1500px] 2xl:m-auto">
          <NavMenu />
          <Sticky />
          <div className="py-[80px] px-[140px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
