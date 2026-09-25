import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fcsamartex.com"),
  title: "FC Samartex 1996 — The Timber Giants",
  description:
    "The official home of FC Samartex 1996 — The Timber Giants of Samreboi, Ghana.",
  openGraph: {
    title: "FC Samartex 1996 — The Timber Giants",
    description: "Rooted in Samreboi. Ready for more.",
    images: [{ url: "/assets/news-one.jpg", width: 1200, height: 850, alt: "FC Samartex club photography" }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07110c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
