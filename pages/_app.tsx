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
    <div className={`${display.variable} ${sans.variable} font-sans min-h-screen relative`}>
      <div
        className="fixed -inset-[15%] pointer-events-none z-0 animate-breathe"
        style={{
          background:
            "radial-gradient(650px 650px at 15% 10%, rgba(0,103,200,0.08), transparent 60%), radial-gradient(550px 550px at 90% 30%, rgba(247,168,27,0.06), transparent 55%)",
        }}
      />
      <Head>
        <title>Rotary Club of Agbara | Service Above Self</title>
        <meta
          name="description"
          content="Rotary Club of Agbara — local volunteers funding clean water, education and health programs in our community and beyond."
        />
      </Head>
      <ToastProvider>
        <Navbar />
        <main className="max-w-[1180px] mx-auto px-5 md:px-7 relative z-10">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ToastProvider>
    </div>
  );
}