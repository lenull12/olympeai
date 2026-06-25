import type { Metadata } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "OlympeAI — L'intelligence au service de votre métier",
  description:
    "Un collègue qui ne dort jamais — déjà dans vos e-mails et sur WhatsApp. OlympeAI assiste les avocats, experts-comptables et artisans. 99€/mois, hébergement Europe.",
  metadataBase: new URL("https://olympeai.fr"),
  openGraph: {
    title: "OlympeAI — L'intelligence au service de votre métier",
    description:
      "Un collègue qui ne dort jamais — déjà dans vos e-mails et sur WhatsApp. OlympeAI, l'assistant IA pour professionnels. 99€/mois.",
    url: "https://olympeai.fr",
    siteName: "OlympeAI",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className="font-sans antialiased bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
