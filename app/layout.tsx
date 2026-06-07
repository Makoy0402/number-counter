import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXT",
  description: "All-in-one platform for managing tasks, analytics, and integrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
