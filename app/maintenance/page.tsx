export const metadata = {
  title: "Sito temporaneamente non disponibile",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#f7f3ec",
        color: "#2b2520",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "680px",
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: "24px",
          padding: "48px 36px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            marginBottom: "18px",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "#f0e6d8",
            color: "#6b4f35",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
          }}
        >
          Avviso
        </div>

        <h1
          style={{
            margin: "0 0 18px",
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.05,
          }}
        >
          Sito temporaneamente non disponibile
        </h1>

        <p
          style={{
            margin: "0 auto",
            maxWidth: "540px",
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#5f5750",
          }}
        >
          Il sito è momentaneamente offline per passaggio di gestione e
          aggiornamenti amministrativi. Tornerà online prossimamente.
        </p>

        <p
          style={{
            marginTop: "24px",
            fontSize: "15px",
            color: "#8a8178",
          }}
        >
          Grazie per la comprensione.
        </p>
      </section>
    </main>
  );
}