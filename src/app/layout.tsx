import type { Metadata } from "next";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.titleLineOne} | ${profile.titleLineTwo}`,
    template: `%s | ${profile.projectName}`,
  },
  description: profile.summary,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
