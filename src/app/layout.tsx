import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "GDMR Foundation — Branding, Digital, Engineering & More",
  description: "GDMR Foundation is a multi-disciplinary agency in Thiruvananthapuram, Kerala. Branding, Digital Marketing, Engineering, Events & HR Solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
