import "~/styles/globals.css";

import { Inter } from "next/font/google";
import MainProvider from "./_components/providers/mainProvider";
import { type ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Talent Space",
  description: "A platform for finding and hiring talent",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
