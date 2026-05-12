import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Section 174 Tax Deduction Calculator",
  description: "Optimize your software development tax deductions under Section 174. Built for developers, freelancers, and small dev agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="aec2e92f-803b-43b4-8ebc-b01f80f89961"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
