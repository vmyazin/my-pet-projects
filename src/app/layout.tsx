import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next'
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vasily Simon's Projects",
  description: "Web Projects That I've Worked On",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 min-w-full min-h-full object-cover z-1"
        >
          <source src="/videos/sphere-green-wired-0041.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="fixed top-0 left-0 w-full h-full bg-slate-950 bg-opacity-80 z-2"></div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}