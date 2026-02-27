import type { Metadata } from "next";
import "./globals.css";
import ScrollRestoration from "@/components/ui/scroll-restoration";

export const metadata: Metadata = {
  title: "Manor Laundromat",
  description: "Family-owned, self-service laundromat in Lancaster, PA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
