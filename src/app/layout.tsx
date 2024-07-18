import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next'
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vasily Simon's Pet Projects",
  description: "Web Apps That I've built",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <video
          autoPlay
          loop
          muted
          controls
          playsInline
          className="fixed top-0 left-0 min-w-full min-h-full object-cover z-1"
        >
          <source src="/videos/tunnel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="fixed top-0 left-0 w-full h-full bg-slate-950 bg-opacity-90 z-2"></div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}