import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const merri = Merriweather({
  weight: ["300","400","700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Eduarda e Adyson",
  description: "Nosso casamento, Eduarda e Adyson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merri.className}>{children}</body>
    </html>
  );
}
