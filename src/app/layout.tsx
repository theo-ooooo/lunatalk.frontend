import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";

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
    <html lang='ko'>
      <body>
        <main className='max-w-[600px] mx-auto'>
          <Header />
          <Menu />
          {children}
        </main>
      </body>
    </html>
  );
}
