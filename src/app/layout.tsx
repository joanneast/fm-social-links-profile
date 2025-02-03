import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
  description: "Frontend practice with Next.js + Tailwind CSS.",
  icons: "/assets/images/favicon-32x32.png",
};

//Inter-VariableFont_slnt,wght.ttf
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-custgrey900">
        {children}
      </body>
    </html>
  );
}
