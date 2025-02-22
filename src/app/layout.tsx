import type { Metadata } from "next";
import { GeistSans } from 'geist/font'
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Natan Silva",
  description: "Desenvolvedor Mobile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider>
          <TopBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
