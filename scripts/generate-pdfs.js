const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../public/vendor-pdfs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const vendors = [
  { slug: "shoe-supplier",     title: "MY SHOE VENDOR",        number: "+86 134 8926 7454" },
  { slug: "cologne-supplier",  title: "MY COLOGNE VENDOR",     number: "+86 189 6517 5019" },
  { slug: "clothing-supplier", title: "MY CLOTHING VENDOR",    number: "+86 134 8928 1265" },
  { slug: "watch-supplier",    title: "MY WATCH VENDOR",       number: "+86 136 0600 9364" },
  { slug: "bag-supplier",      title: "MY BAG VENDOR",         number: "+86 153 5920 6650" },
  { slug: "airpods-supplier",  title: "MY AIRPOD VENDOR",      number: "+86 158 0501 8192" },
  { slug: "jewelry-supplier",  title: "MY JEWELRY VENDOR",     number: "+86 153 5920 6202" },
  { slug: "wallet-supplier",   title: "MY WALLET VENDOR",      number: "+86 153 5920 7563" },
  { slug: "hoodie-supplier",   title: "MY HOODIE VENDOR",      number: "+86 134 8928 1265" },
  { slug: "lego-supplier",     title: "MY LEGO VENDOR",        number: "+86 134 8928 1265" },
  { slug: "all-in-one",        title: "ALL-IN-ONE VENDORS",    number: "+86 134 8928 1265" },
  { slug: "bundle",            title: "ELITE BUNDLE VENDORS",  number: "+86 134 8928 1265" },
];

vendors.forEach(({ slug, title, number }) => {
  const doc = new PDFDocument({ size: "LETTER", margin: 0 });
  const filePath = path.join(outDir, `${slug}.pdf`);
  doc.pipe(fs.createWriteStream(filePath));

  const W = 612, H = 792;

  // Background
  doc.rect(0, 0, W, H).fill("#0a0a0a");

  // Subtle green radial glow in center
  const grad = doc.radialGradient(W / 2, H / 2, 0, W / 2, H / 2, 300);
  grad.stop(0, "#134e2a").stop(1, "#0a0a0a");
  doc.rect(0, 0, W, H).fill(grad);

  // Watermark "LAZZZYVENDORS" text — large, faint, rotated
  doc.save();
  doc.fontSize(90).fillColor("#ffffff").fillOpacity(0.04);
  doc.rotate(-35, { origin: [W / 2, H / 2] });
  doc.text("LAZZZY", W / 2 - 230, H / 2 - 60, { lineBreak: false });
  doc.text("VENDORS", W / 2 - 260, H / 2 + 20, { lineBreak: false });
  doc.restore();

  // Top-right brand label
  doc.fillOpacity(1).fontSize(11).fillColor("#4ade80");
  doc.text("LAZZZY", W - 120, 24, { lineBreak: false });
  doc.fillColor("#ffffff").text("VENDORS", W - 68, 24, { lineBreak: false });

  // Horizontal rule below brand
  doc.moveTo(40, 60).lineTo(W - 40, 60).strokeColor("#1f2937").lineWidth(1).stroke();

  // Main title — big, bold, italic white
  doc.fillColor("#ffffff").fillOpacity(1);
  doc.fontSize(54).font("Helvetica-BoldOblique");
  const titleY = H * 0.22;
  doc.text(title, 0, titleY, { align: "center", width: W });

  // Down arrow box
  const arrowX = W / 2 - 36, arrowY = titleY + 100;
  doc.roundedRect(arrowX, arrowY, 72, 72, 12).fill("#2563eb");
  doc.fontSize(36).font("Helvetica-Bold").fillColor("#ffffff");
  doc.text("↓", arrowX, arrowY + 14, { width: 72, align: "center" });

  // "WHATSAPP NUMBER" label
  doc.fontSize(16).font("Helvetica-Bold").fillColor("#9ca3af");
  doc.text("WHATSAPP NUMBER", 0, arrowY + 100, { align: "center", width: W });

  // The number — large green
  doc.fontSize(40).font("Helvetica-Bold").fillColor("#4ade80");
  doc.text(number, 0, arrowY + 126, { align: "center", width: W });

  // Divider
  const divY = arrowY + 200;
  doc.moveTo(W / 2 - 120, divY).lineTo(W / 2 + 120, divY).strokeColor("#1f2937").lineWidth(1).stroke();

  // Contact instructions
  doc.fontSize(14).font("Helvetica").fillColor("#d1d5db");
  doc.text("~ contact supplier on ", 40, divY + 30, { continued: true });
  doc.font("Helvetica-Oblique").fillColor("#4ade80").text("whatsapp");

  doc.font("Helvetica").fillColor("#d1d5db").fontSize(14);
  doc.text('AND SAY "', 40, divY + 58, { continued: true });
  doc.font("Helvetica-Bold").fillColor("#4ade80").text("LAZZZY VENDORS brought me here", { continued: true });
  doc.font("Helvetica").fillColor("#d1d5db").text('"');

  doc.fontSize(13).font("Helvetica").fillColor("#9ca3af");
  doc.text("So they know what you need.", 40, divY + 86);

  // Footer
  doc.fontSize(8).font("Helvetica").fillColor("#374151");
  doc.text(
    "© 2026 LazzzyVendors  ·  For personal reselling use only  ·  Do not share or redistribute",
    0, H - 30, { align: "center", width: W }
  );

  doc.end();
  console.log(`✅  ${slug}.pdf`);
});
