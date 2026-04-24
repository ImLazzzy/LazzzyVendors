import { notFound } from "next/navigation";

const vendors: Record<string, {
  title: string;
  emoji: string;
  number: string;
  note?: string;
}> = {
  "shoe-supplier": {
    title: "MY SHOE VENDOR",
    emoji: "👟",
    number: "+86 134 8926 7454",
  },
  "cologne-supplier": {
    title: "MY COLOGNE VENDOR",
    emoji: "🧴",
    number: "+86 189 6517 5019",
  },
  "clothing-supplier": {
    title: "MY CLOTHING VENDOR",
    emoji: "👕",
    number: "+86 134 8928 1265",
  },
  "watch-supplier": {
    title: "MY WATCH VENDOR",
    emoji: "⌚",
    number: "+86 136 0600 9364",
  },
  "bag-supplier": {
    title: "MY BAG VENDOR",
    emoji: "👜",
    number: "+86 153 5920 6650",
  },
  "airpods-supplier": {
    title: "MY AIRPOD VENDOR",
    emoji: "🎵",
    number: "+86 158 0501 8192",
  },
  "jewelry-supplier": {
    title: "MY JEWELRY VENDOR",
    emoji: "💍",
    number: "+86 153 5920 6202",
    note: "Also carries belts & accessories",
  },
  "wallet-supplier": {
    title: "MY WALLET VENDOR",
    emoji: "👜",
    number: "+86 153 5920 7563",
  },
  "hoodie-supplier": {
    title: "MY HOODIE VENDOR",
    emoji: "🧥",
    number: "+86 134 8928 1265",
  },
  "lego-supplier": {
    title: "MY LEGO VENDOR",
    emoji: "🧱",
    number: "+86 134 8928 1265",
  },
  "all-in-one": {
    title: "ALL-IN-ONE VENDORS",
    emoji: "🏆",
    number: "+86 134 8928 1265",
    note: "Use this number for clothing, hoodies, basics & more",
  },
  "bundle": {
    title: "ELITE BUNDLE — ALL VENDORS",
    emoji: "💎",
    number: "+86 134 8928 1265",
    note: "This is your master contact. Reference the category when messaging.",
  },
};

export function generateStaticParams() {
  return Object.keys(vendors).map((slug) => ({ slug }));
}

export default async function VendorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vendor = vendors[slug];
  if (!vendor) notFound();

  const whatsappUrl = `https://wa.me/${vendor.number.replace(/\D/g, "")}?text=LAZZZY%20VENDORS%20brought%20me%20here`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "#0a0a0a", fontFamily: "Impact, 'Arial Black', sans-serif" }}
    >
      {/* Watermark logo — large, faded, centered */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.04 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lazzzy-vendors-pfp.svg"
          alt=""
          style={{ width: "80vw", maxWidth: "700px" }}
        />
      </div>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
      />

      {/* Logo top-right */}
      <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lazzzy-vendors-pfp.svg" alt="LazzzyVendors" style={{ width: "48px", height: "48px" }} />
        <span style={{ fontFamily: "Impact, sans-serif", fontSize: "1rem", color: "#4ade80", letterSpacing: "0.05em" }}>
          LAZZZY<span style={{ color: "#fff" }}>VENDORS</span>
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full">

        {/* Big title */}
        <h1
          style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
            fontSize: "clamp(2.5rem, 10vw, 5.5rem)",
            color: "#fff",
            fontStyle: "italic",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            lineHeight: 1,
            textShadow: "0 0 40px rgba(0,0,0,0.8), 3px 3px 0px rgba(0,0,0,0.5)",
            marginBottom: "1.5rem",
          }}
        >
          {vendor.title}
        </h1>

        {/* Down arrow */}
        <div
          style={{
            width: "64px",
            height: "64px",
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            marginBottom: "2rem",
            boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
          }}
        >
          ⬇️
        </div>

        {/* WhatsApp number */}
        <p
          style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
            fontSize: "clamp(1rem, 4vw, 1.5rem)",
            color: "#d1d5db",
            letterSpacing: "0.08em",
            marginBottom: "0.4rem",
          }}
        >
          WHATSAPP NUMBER
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
            fontSize: "clamp(1.6rem, 6vw, 3rem)",
            color: "#4ade80",
            letterSpacing: "0.05em",
            textDecoration: "none",
            lineHeight: 1.1,
            marginBottom: "3rem",
            display: "block",
            textShadow: "0 0 30px rgba(74,222,128,0.4)",
            transition: "opacity 0.2s",
          }}
        >
          {vendor.number}
        </a>

        {/* Divider */}
        <div style={{ width: "60%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "2.5rem" }} />

        {/* Contact instructions */}
        <div style={{ textAlign: "left", width: "100%", maxWidth: "460px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" style={{ width: "40px", height: "40px", flexShrink: 0 }} fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "#d1d5db", margin: 0, lineHeight: 1.5 }}>
              ~ contact supplier on <em style={{ color: "#4ade80" }}>whatsapp</em>
            </p>
          </div>

          <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1rem, 3vw, 1.15rem)", color: "#d1d5db", marginBottom: "0.6rem", lineHeight: 1.5 }}>
            AND SAY{" "}
            <span style={{ color: "#4ade80", fontWeight: "bold" }}>
              "LAZZZY VENDORS brought me here"
            </span>
          </p>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>
            So they know what you need.
          </p>

          {vendor.note && (
            <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.85rem", color: "#6b7280", marginTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem", lineHeight: 1.5 }}>
              📝 {vendor.note}
            </p>
          )}
        </div>

        {/* Footer */}
        <p style={{ marginTop: "3rem", fontSize: "0.7rem", color: "#374151", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "sans-serif" }}>
          © 2026 LazzzyVendors · For personal reselling use only · Do not share or redistribute
        </p>
      </div>
    </div>
  );
}
