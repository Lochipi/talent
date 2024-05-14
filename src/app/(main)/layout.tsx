import "~/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Talent Space",
  description: "A platform for finding and hiring talent",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
