import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "VINAY CHOUHAN | Java Full-Stack Developer",
  description: "Portfolio of VINAY CHOUHAN - Java Full-Stack Developer specializing in Spring Boot, WebFlux, React, Angular and Vue.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
