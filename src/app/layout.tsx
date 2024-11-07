"use cliente";

import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";


// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheffia",
  description: "App para gestão de restaurantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${roboto.className} bg-slate-100`}
      >
          {children}
      </body>
    </html>
  );
}
