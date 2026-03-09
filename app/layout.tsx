import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Importante per i collegamenti

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Il Tulipano Carpi | Ristorante Pizzeria",
  description: "Cucina tradizionale emiliana e pizza gourmet a Carpi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${playfair.className} antialiased tracking-tight bg-white text-[#333333]`}>
        
        {/* --- HEADER FISSO --- */}
        <nav className="fixed top-0 w-full z-[100] bg-black/30 backdrop-blur-md border-b border-white/10 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center text-white">
            
            {/* Titolo/Logo */}
            <Link href="/" className="font-serif text-2xl uppercase tracking-tighter hover:opacity-80 transition">
              Il Tulipano
            </Link>

            {/* Menu di Navigazione */}
            <div className="flex gap-8 items-center text-[11px] uppercase tracking-[0.2em] font-bold">
              <Link href="/" className="hover:text-[#E5B54F] transition">
                Home
              </Link>
              <Link href="/informazioni" className="hover:text-[#E5B54F] transition">
                Informazioni
              </Link>
              {/* Tasto Prenota */}
              <Link href="tel:0599110390">
                <button className="bg-[#800020] px-5 py-2 hover:bg-[#600018] transition shadow-lg">
                  PRENOTA
                </button>
              </Link>
            </div>

          </div>
        </nav>
        {/* --- FINE HEADER --- */}

        {children}
      </body>
    </html>
  );
}
