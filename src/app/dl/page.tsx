export default function DownloadsPage() {
  const pdfs = [
    { icon: "💎", name: "ELITE SUPPLIER BUNDLE", file: "elite-supplier-bundle.pdf", sub: "All suppliers — one PDF", elite: true },
    { icon: "🏆", name: "2026 ALL-IN-ONE SUPPLIER", file: "all-in-one-supplier.pdf", sub: "Every category covered" },
    { icon: "👟", name: "SHOE SUPPLIER", file: "shoe-supplier.pdf", sub: "Sneakers & footwear" },
    { icon: "⌚", name: "WATCH SUPPLIER", file: "watch-supplier.pdf", sub: "Luxury & fashion watches" },
    { icon: "💍", name: "MOISSANITE SUPPLIER", file: "moissanite-supplier.pdf", sub: "Rings, earrings & bracelets" },
    { icon: "🕶️", name: "GLASSES SUPPLIER", file: "glasses-supplier.pdf", sub: "Designer eyewear" },
    { icon: "👗", name: "LOOLOO SUPPLIER", file: "looloo-supplier.pdf", sub: "Women's fashion" },
    { icon: "👜", name: "DESIGNER BAG SUPPLIER", file: "bag-supplier.pdf", sub: "LV, Gucci, Prada" },
    { icon: "🧱", name: "LEGO SUPPLIER", file: "lego-supplier.pdf", sub: "Rare & retired sets" },
    { icon: "👕", name: "CLOTHING SUPPLIER", file: "clothing-supplier.pdf", sub: "Streetwear & boutique" },
    { icon: "🧴", name: "COLOGNE SUPPLIER", file: "cologne-supplier.pdf", sub: "Designer fragrances" },
    { icon: "🎵", name: "LAZZZYPODZ SUPPLIER", file: "airpods-supplier.pdf", sub: "AirPods & wireless earbuds" },
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1rem" }}>
      <div style={{ color: "#4ade80", fontSize: "1.5rem", fontWeight: 900, letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
        LazzzyVendors PDFs
      </div>
      <div style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: "2rem" }}>
        Tap any file below to download
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "440px" }}>
        {pdfs.map((p) => (
          <a
            key={p.file}
            href={`/dl/${p.file}`}
            download
            style={{
              display: "flex", alignItems: "center", gap: "14px",
              background: p.elite ? "linear-gradient(135deg, #111 60%, #0d2b1a)" : "#111",
              border: `1px solid ${p.elite ? "#4ade80" : "#222"}`,
              borderRadius: "14px", padding: "14px 18px",
              color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>{p.icon}</span>
            <div style={{ flex: 1 }}>
              <div>{p.name}</div>
              <div style={{ fontSize: "0.72rem", color: "#6b7280", fontWeight: 400, marginTop: "2px" }}>{p.sub}</div>
            </div>
            <span style={{ background: "#22c55e", color: "#000", fontSize: "0.72rem", fontWeight: 800, padding: "4px 10px", borderRadius: "999px", whiteSpace: "nowrap" }}>
              ↓ PDF
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
