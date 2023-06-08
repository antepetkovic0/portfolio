import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ante Petkovic | Software engineer",
  description: "Personal porftolio built by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-slate-900 text-slate-400 py-24">{children}</body>
    </html>
  );
}
