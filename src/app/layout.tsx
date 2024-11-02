// app/layout.tsx (Server Component)
import { Metadata } from "next";
import LayoutClient from "./LayoutClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sparkly Store",
  description: "Ropita Bonita y barata ♥",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutClient>{children}</LayoutClient>;
}