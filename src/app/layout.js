import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Software, App, and Agentic AI development | Dignifyd Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col font-inter">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
