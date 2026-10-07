import type { Metadata } from "next";
import Script from "next/script";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDock from "@/components/ContactDock";
import SiteAnalytics from "@/components/SiteAnalytics";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ohserve.com"),
  title: "OhServe Solutions | Home & Office Services in Kochi",
  description:
    "Book trusted cleaning, maid, plumbing, electrical, carpentry, and handyman services in Kochi. Certified experts, transparent pricing, easy booking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M76C724Q');`}
        </Script>
      </head>
      <body className="bg-paper text-ink font-sans antialiased pb-16 md:pb-0">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M76C724Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <SiteAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactDock />
      </body>
    </html>
  );
}
