
import type { Metadata } from "next";
import "./globals.css";
import LangProvider from "../components/LangProvider";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Go Book Stay — Escape the noise",
  description: "Visa assistance, local guides, and hidden-gem experiences. Escape the noise with Go Book Stay.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LangProvider>
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
