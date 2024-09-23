import type { Metadata } from "next";
import { Corinthia, Fraunces, Merriweather } from "next/font/google";
import "./globals.css";

const merri = Merriweather({
  weight: ["300","400","700"],
  subsets: ["latin"]
});

export const corinthia = Corinthia({
  weight: ["400"],
  subsets: ["latin"]
});

export const fraunces = Fraunces({
  weight: ["400"],
  subsets: ["latin"]
});

const metadata: Metadata = {
  title: "Eduarda e Adyson",
  description: "Nosso casamento, Eduarda e Adyson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={merri.className}>{children}</body>
    </html>
  );
}
