import "./globals.css";
import type { Metadata } from "next";
import { ThemeProviders } from "../providers/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "ChantierSync – Digitalisez vos chantiers",
  description:
    "Solution SaaS pour la gestion des chantiers, collaboration et suivi en temps réel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <ThemeProviders>
          <Header />
          <main className="flex-grow text-gray-800 dark:text-gray-100">
            {children}
          </main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
