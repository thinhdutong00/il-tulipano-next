import Image from 'next/image';

export default function InformazioniPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO DELLA PAGINA (Immagine Bottiglie sfocate) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Sovrapposizione scura per leggere bene il testo */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <Image 
          src="/scaffale-dei-vini-tulipano.webp" // Assicurati che il nome sia corretto in public
          alt="Sfondo Informazioni"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white drop-shadow-2xl">
            Informazioni
          </h1>
        </div>
      </section>

      {/* 2. SEZIONE CITAZIONE: "Pensa, Credi, Sogna, Osa" */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] tracking-tight">
              Pensa, Credi, Sogna, Osa
            </h2>
          </div>

          {/* Testo in due colonne */}
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed text-lg">
            <div className="space-y-6">
              <p>
                Il Tulipano, nato a Carpi nel 2010, è situato a due passi dal centro storico della città 
                in via Aldo Moro Interna 1R, vicino allo stadio di Carpi. Da noi troverete un&apos;atmosfera 
                calda e accogliente, quasi familiare.
              </p>
              <p>
                Ogni dettaglio del nostro ristorante è stato pensato per rendere ancora più piacevole 
                la vostra esperienza e per farvi godere ogni attimo passato insieme a noi. 
                La specialità del Tulipano è sicuramente la pizza.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Ma non mancano di certo le proposte a base di pesce e i piatti tradizionali emiliani. 
                A pranzo inoltre potrete sperimentare il nostro menù del giorno, perfetto per chi 
                ha una pausa pranzo breve ma che non vuole rinunciare al gusto del buon cibo.
              </p>
              <p>
                Al Tulipano verrete accolti con un sorriso e professionalità e potrete scegliere se 
                accomodarvi nella nostra sala principale o nel nostro dehor, riscaldato in inverno 
                e fresco d&apos;estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE: I NOSTRI SPAZI (LAYOUT CON TESTO LATERALE) */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row mb-12 items-start justify-between">
            <div className="md:w-1/3">
              <h2 className="text-5xl font-serif text-[#333333] leading-tight tracking-tighter">
                I nostri<br />Spazi
              </h2>
            </div>
            <div className="md:w-2/3 mt-6 md:mt-0 md:pl-12 border-l border-gray-200">
              <p className="text-xl leading-relaxed text-gray-700 tracking-tight pl-8">
                Al Tulipano sarete accolti in un ambiente moderno ed elegante. 
                Dalla sala interna raffinata al dehor esterno perfetto per le serate estive.
                Ogni spazio è curato per farvi sentire come a casa.
              </p>
            </div>
          </div>
          
          {/* Immagine grande degli interni */}
          <div className="relative h-[500px] w-full mt-10 rounded-sm overflow-hidden shadow-2xl">
            <Image 
              src="/tavola-con-tovaglia-tulipano.webp" 
              alt="Interni Ristorante" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  );
}