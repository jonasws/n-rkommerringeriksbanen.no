import React from "react";

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    minHeight: "100vh",
    margin: 0,
  },
  header: {
    backgroundColor: "#005B33",
    color: "#ffffff",
    padding: "16px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    fontFamily: "'Arial', sans-serif",
  },
  logoSub: {
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "0.1em",
    opacity: 0.85,
    display: "block",
    marginTop: "2px",
  },
  presseBadge: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    border: "1px solid rgba(255,255,255,0.6)",
    padding: "4px 10px",
    fontFamily: "'Arial', sans-serif",
  },
  container: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "48px 32px 64px",
  },
  meta: {
    fontFamily: "'Arial', sans-serif",
    fontSize: "13px",
    color: "#666",
    marginBottom: "32px",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "16px",
  },
  metaRow: {
    marginBottom: "4px",
  },
  headline: {
    fontSize: "clamp(24px, 4vw, 34px)",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "16px",
    color: "#111",
  },
  ingress: {
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#333",
    marginBottom: "32px",
    fontStyle: "italic",
    borderLeft: "4px solid #005B33",
    paddingLeft: "16px",
  },
  body: {
    fontSize: "16px",
    lineHeight: 1.75,
    marginBottom: "24px",
    color: "#222",
  },
  subheading: {
    fontSize: "20px",
    fontWeight: 700,
    marginTop: "40px",
    marginBottom: "12px",
    color: "#111",
  },
  quote: {
    backgroundColor: "#f7f7f5",
    borderLeft: "4px solid #005B33",
    padding: "20px 24px",
    margin: "32px 0",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.7,
    color: "#333",
  },
  quoteAttrib: {
    fontStyle: "normal",
    fontSize: "14px",
    color: "#666",
    marginTop: "12px",
    fontFamily: "'Arial', sans-serif",
  },
  factBox: {
    backgroundColor: "#f4f8f5",
    border: "1px solid #c8ddd0",
    padding: "24px 28px",
    margin: "40px 0",
  },
  factBoxTitle: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#005B33",
    fontFamily: "'Arial', sans-serif",
    marginBottom: "16px",
  },
  factRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "8px",
    fontSize: "15px",
    lineHeight: 1.5,
  },
  factLabel: {
    color: "#555",
    fontFamily: "'Arial', sans-serif",
    fontSize: "14px",
    minWidth: "200px",
    flexShrink: 0,
  },
  factValue: {
    color: "#111",
    fontWeight: 500,
  },
  footer: {
    borderTop: "2px solid #005B33",
    marginTop: "56px",
    paddingTop: "24px",
    fontFamily: "'Arial', sans-serif",
    fontSize: "13px",
    color: "#555",
  },
  footerTitle: {
    fontWeight: 700,
    fontSize: "14px",
    color: "#333",
    marginBottom: "8px",
  },
};

const facts = [
  ["Strekning", "Jong (Sandvika) – Hønefoss, ca. 40 km"],
  ["Tunnel Sandvika–Sundvollen", "23 km"],
  ["Tunnel Hole–Hønefoss", "3 km"],
  ["Nye stasjoner", "Sundvollen (ny), Hønefoss (oppgradert)"],
  ["Reisetid Oslo S–Hønefoss", "Ca. 22 minutter"],
  ["Effekt Oslo–Bergen", "Reisetiden reduseres med ca. 60 min"],
  ["Total kostnadsramme", "54,7 mrd. kr (bindende)"],
  ["Byggestart", "2. april 2026"],
  ["Planlagt åpning", "1. desember 2026"],
  ["Oppdragsgiver", "Nye Veier AS på vegne av staten"],
  ["Utførende konsortium", "NorRail Construction Group AS"],
];

export default function AprilFoolsPage() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>
          NYE VEIER
          <span style={styles.logoSub}>nye veier as • samferdselsdepartementet</span>
        </div>
        <div style={styles.presseBadge}>Pressemelding</div>
      </header>

      <div style={styles.container}>
        <div style={styles.meta}>
          <div style={styles.metaRow}><strong>Dato:</strong> 1. april 2026, kl. 06:00</div>
          <div style={styles.metaRow}><strong>Fra:</strong> Nye Veier AS / Samferdselsdepartementet</div>
          <div style={styles.metaRow}><strong>Til:</strong> Redaksjoner, interessenter og allmenheten</div>
          <div style={styles.metaRow}><strong>Sak:</strong> Stortingsvedtak om Ringeriksbanen – byggestart</div>
        </div>

        <h1 style={styles.headline}>
          Stortinget vedtar Ringeriksbanen enstemmig – arbeidet starter i morgen
        </h1>

        <p style={styles.ingress}>
          Etter tiår med utredninger, konsekvensanalyser og politiske behandlinger er det i
          natt fattet historisk vedtak: Ringeriksbanen skal bygges, og byggearbeidene
          starter allerede 2. april 2026.
        </p>

        <p style={styles.body}>
          Oslo – I en ekstraordinær plenumssesjon stemte Stortinget 149 mot 0 for å bevilge
          54,7 milliarder kroner til umiddelbar realisering av Ringeriksbanen. Vedtaket markerer
          slutten på en planleggingsprosess som har pågått siden de første utredningene på
          begynnelsen av 1990-tallet. Reguleringsplanen ble godkjent i 2019, og Nye Veier AS
          har forvaltet prosjektet siden 2021.
        </p>

        <p style={styles.body}>
          Samferdselsministeren var synlig rørt da han talte til pressen utenfor Stortinget
          kl. 04:12 i natt.
        </p>

        <div style={styles.quote}>
          «Jeg vet at mange har mistet troen på at dette noensinne ville skje. Det har
          jeg full forståelse for. Men i dag kan jeg se dere i øynene og si: Ringeriksbanen
          blir bygget. Ikke om ti år. Ikke om fem år. Nå.»
          <div style={styles.quoteAttrib}>
            – Samferdselsministeren, utenfor Stortinget, 1. april 2026 kl. 04:12
          </div>
        </div>

        <h2 style={styles.subheading}>Anbudet tildelt, tunnelboremaskinene på plass</h2>

        <p style={styles.body}>
          Nye Veier AS opplyser at anbudskonkurransen ble sluttført kl. 02:00 i natt etter
          intensive forhandlinger, og at kontrakten er tildelt det norsk-svenske konsortiet
          NorRail Construction Group AS. De to tunnelboremaskinene som skal drive gjennom
          den 23 kilometer lange tunnelen mellom Sandvika og Sundvollen, er allerede
          fraktet til Jong stasjon og klargjøres nå for oppstart.
        </p>

        <p style={styles.body}>
          «Vi er klar over at noen vil stille spørsmål ved tempoet», sier prosjektleder
          Ivar Togheim i Nye Veier. «Men vi har brukt de siste fire årene på å forberede
          oss på nøyaktig dette øyeblikket. Alle nødvendige tillatelser er på plass,
          grunnervervet er fullført, og maskinene er klare. Alt er klart.»
        </p>

        <h2 style={styles.subheading}>Planlagt åpning 1. desember 2026</h2>

        <p style={styles.body}>
          Nye Veier presenterte i morges en detaljert fremdriftsplan. Tunneldriving i
          Sandvika-tunnelen starter 3. april og forventes sluttført innen utgangen av
          september. Overflatearbeidene på Ringerike og stasjonsarbeidene på Sundvollen
          og Hønefoss gjennomføres parallelt i perioden mai–november. Elektrifiering
          og signalanlegg installeres i oktober og november. Prøvekjøring gjennomføres
          i november, og ordinær passasjertrafikk starter planmessig 1. desember 2026.
        </p>

        <p style={styles.body}>
          Den samlede kostnadsrammen er satt til 54,7 milliarder kroner.
          Nye Veier presiserer at dette er en bindende ramme som ikke vil bli overskredet.
        </p>

        <div style={styles.factBox}>
          <div style={styles.factBoxTitle}>Nøkkelfakta – Ringeriksbanen</div>
          {facts.map(([label, value]) => (
            <div key={label} style={styles.factRow}>
              <span style={styles.factLabel}>{label}</span>
              <span style={styles.factValue}>{value}</span>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          <div style={styles.footerTitle}>Kontakt for media</div>
          <div>Pressevakt Nye Veier AS: presse@nyeveier.no</div>
          <div>Pressevakt Samferdselsdepartementet: postmottak@sd.dep.no</div>
          <br />
          <div style={{ color: "#888", fontSize: "12px" }}>
            Nye Veier AS er et statlig aksjeselskap med ansvar for utbygging, drift og
            vedlikehold av riksveier og jernbane. Selskapet ble etablert i 2015.
          </div>
        </div>
      </div>
    </div>
  );
}
