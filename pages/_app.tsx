import type { AppProps } from "next/app";
import Head from "next/head";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/ui/ToastProvider";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${sans.variable} font-sans min-h-screen`}>
      <Head>
        <title>Rotary Club of Agbara | Service Above Self</title>
        <meta
          name="description"
          content="Rotary Club of Agbara — local volunteers funding clean water, education and health programs in our community and beyond."
        />
      </Head>
      <ToastProvider>
        <Navbar />
        <main className="max-w-[1180px] mx-auto px-5 md:px-7">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ToastProvider>
    </div>
  );
}
