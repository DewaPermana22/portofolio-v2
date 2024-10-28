import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Transisi from "@/components/Transisi";
import EfekTransisi from "@/components/EfekTransisi";

export const metadata: Metadata = {
  title: "LulaDev.com | Dewapermana",
  description: "LulaDev.com part of ShadewaGroup [Created & Published by Dewa Permana]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth bg-[#ffe6a7]" style={{scrollbarWidth:'none'}} lang="en">
      <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      <body>
        <Header/>
        <EfekTransisi/>
        <Transisi>
        {children}
        </Transisi>
      </body>
    </html>
  );
}
