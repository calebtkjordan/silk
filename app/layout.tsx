import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silk",
  description: "Road of Silk — clothing marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} ${afacad.className} antialiased`}>
        <div className="mx-auto max-w-md">{children}</div>
      </body>
    </html>
  );
}
