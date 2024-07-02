
import { Navbar } from "@/components";
import {Footer} from "@/components";
import "./globals.css";



export const metadata  = {
  title: " Fareed Car Hub",
  description: "Discover the Best Car in the World By Fareed Car Showrom Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
