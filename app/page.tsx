import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
        {/* Immagine di sfondo - Sostituisci con una delle tue immagini in /public */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0">
          {/* Sostituisci 'hero-bg.jpg' con il nome del tuo file */}
          <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Benvenuti al Tulipano</h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-bold transition">
              Guarda il menù
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-md font-bold transition">
              Prenota un tavolo
            </button>
          </div>
        </div>
      </section>

      {/* 2. INFO RAPIDE (Prenotazione e Orari) */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">Prenotazioni</h3>
            <p>Chiama allo <span className="font-bold">059 9110390</span></p>
            <p className="text-sm mt-2 text-gray-500 underline cursor-pointer">Prenota Online</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">Orari Apertura</h3>
            <p>Tutti i giorni: 12:00-14:30 / 19:00-00:00</p>
            <p className="text-xs text-red-600 mt-1">INCLUSI I FESTIVI</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">Servizi</h3>
            <p>Consegne a domicilio e asporto</p>
            <p className="text-sm mt-2 text-gray-500 italic">Ristorante & Pizzeria</p>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE CUCINA & PIZZA */}
      <section className="py-20 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-6 text-red-800">Ristorante Pizzeria</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            La specialità del Tulipano è sicuramente la pizza in tutte le sue varietà, 
            ma non mancano di certo le proposte a base di pesce e i piatti tradizionali emiliani.
          </p>
        </div>
      </section>

      {/* 4. PREVIEW MENU (Dati estratti dal sito) */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">I Nostri Piatti Tradizionali</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            <MenuItem name="Gnocco Fritto con Affettati Misti" price="14,00€" />
            <MenuItem name="Tortelli Verdi Vecchia Modena" price="12,00€" />
            <MenuItem name="Carbonara Romana" price="12,00€" />
            <MenuItem name="Filetto di Fassona Piemontese" price="29,00€" />
            <MenuItem name="Antipasto di Mare Tulipano" price="24,00€" />
            <MenuItem name="Spaghettone allo Scoglio" price="19,00€" />
          </div>
          <div className="text-center mt-12">
             <button className="border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition">
                Guarda tutto il menù
             </button>
          </div>
        </div>
      </section>

      {/* 5. SEZIONE SPAZI */}
      <section className="py-20 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          {/* Trascina una foto del locale in public e rinominala locale.jpg */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
             <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 italic">
               Foto Locale
             </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif mb-6">I nostri Spazi</h2>
          <p className="text-gray-600 mb-6">
            Scegli se rilassarti nella nostra elegante sala principale o nel nostro accogliente dehor, 
            riscaldato d&apos;inverno e fresco d&apos;estate.
          </p>
          <button className="text-red-700 font-bold border-b-2 border-red-700 pb-1">Riserva un tavolo</button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-black mb-4 uppercase">Vieni a trovarci</h4>
            <p>Via A. Moro Interna, 1R</p>
            <p>41012 Carpi (MO)</p>
            <p className="mt-4 text-red-700 font-bold">VAI ALLE INDICAZIONI</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4 uppercase">Orari</h4>
            <p>Aperto tutti i giorni:</p>
            <p>Pranzo: 12:00/15:00</p>
            <p>Cena: 18:00/00:00</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4 uppercase">Contatti</h4>
            <p>Enjoy SRL</p>
            <p>P. IVA 03831040369</p>
            <p className="mt-4">Facebook / Instagram</p>
          </div>
        </div>
        <div className="text-center mt-12 text-xs text-gray-400">
          Copyright © Il Tulipano - Powered by YourNewNextApp
        </div>
      </footer>

    </main>
  );
}

// Sotto-componente per gli elementi del menu
// Versione corretta per TypeScript (.tsx)
function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
      <span className="text-lg font-light uppercase tracking-wide">{name}</span>
      <span className="text-red-500 font-bold">{price}</span>
    </div>
  );
}