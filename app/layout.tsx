import type { Metadata } from "next";
import type { ReactNode } from "react";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "AEROFORM | Engineered For Motion",
  description:
    "AEROFORM is a minimal functional running system built through cinematic motion, precise materials, and lightweight performance design.",
  icons: {
    icon: withBasePath("/assets/brand/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
