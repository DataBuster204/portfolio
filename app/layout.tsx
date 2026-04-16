import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olumide Daramola — AI Solutions Developer",
  description:
    "NVIDIA-certified Generative AI developer based in Lagos, Nigeria. I build production-ready chatbots, RAG pipelines, and intelligent document systems for businesses that want to move faster with AI.",
  keywords: [
    "AI developer",
    "LangChain",
    "RAG pipeline",
    "GenAI",
    "chatbot development",
    "Lagos",
    "Nigeria",
    "NVIDIA certified",
    "OpenAI",
    "LLM",
  ],
  authors: [{ name: "Olumide Daramola" }],
  openGraph: {
    title: "Olumide Daramola — AI Solutions Developer",
    description:
      "I build production-ready GenAI applications — custom chatbots, RAG pipelines, and responsible AI tools for businesses that want to move faster with AI.",
    url: "https://olumidedaramola.dev",
    siteName: "Olumide Daramola",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olumide Daramola — AI Solutions Developer",
    description:
      "NVIDIA-certified GenAI developer. Custom chatbots, RAG pipelines, and intelligent document systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
