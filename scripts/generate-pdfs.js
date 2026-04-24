const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../vendor-pdfs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const vendors = [
  { slug: "bag-supplier",      title: "MY BAG VENDOR",      number: "+86 153 5920 6650" },
  { slug: "watch-supplier",    title: "MY WATCH VENDOR",    number: "+86 136 0600 9364" },
  { slug: "shoe-supplier",     title: "MY SHOE VENDOR",     number: "+86 134 8926 7454" },
  { slug: "cologne-supplier",  title: "MY COLOGNE VENDOR",  number: "+86 189 6517 5019" },
  { slug: "clothing-supplier", title: "MY CLOTHING VENDOR", number: "+86 134 8928 1265" },
  { slug: "airpods-supplier",  title: "MY AIRPOD VENDOR",   number: "+86 158 0501 8192" },
];

vendors.forEach(({ slug, title, number }) => {
  const doc = new PDFDocument({ size: "LETTER", margin: 0 });
  const filePath = path.join(outDir, `${slug}.pdf`);
  doc.pipe(fs.createWriteStream(filePath));

  const W = 612, H = 792;

  // Black background
  doc.rect(0, 0, W, H).fill("#0a0a0a");

  // Green radial glow
  const grad = doc.radialGradient(W / 2, H / 2, 0, W / 2, H / 2, 280);
  grad.stop(0, "#0d2b1a").stop(1, "#0a0a0a");
  doc.rect(0, 0, W, H).fill(grad);

  // Watermark — large faint diagonal text
  doc.save();
  doc.fontSize(88).fillColor("#ffffff").fillOpacity(0.035);
  doc.rotate(-35, { origin: [W / 2, H / 2] });
  doc.font("Helvetica-BoldOblique");
  doc.text("LAZZZY", W / 2 - 220, H / 2 - 70, { lineBreak: false });
  doc.text("VENDORS", W / 2 - 255, H / 2 + 30, { lineBreak: false });
  doc.restore();

  // Top brand — top right corner
  doc.fillOpacity(1).fontSize(12).font("Helvetica-Bold");
  doc.fillColor("#4ade80").text("LAZZZY", W - 130, 22, { lineBreak: false, characterSpacing: 1 });
  doc.fillColor("#ffffff").text("VENDORS", W - 78, 22, { lineBreak: false, characterSpacing: 1 });

  // Top rule
  doc.moveTo(40, 58).lineTo(W - 40, 58).strokeColor("#1a2a1a").lineWidth(1).stroke();

  // Main title
  doc.fillColor("#ffffff").fillOpacity(1);
  doc.fontSize(58).font("Helvetica-BoldOblique");
  doc.text(title, 0, H * 0.21, { align: "center", width: W });

  // Blue download arrow box
  const arrowBoxX = W / 2 - 36;
  const arrowBoxY = H * 0.21 + 110;
  doc.roundedRect(arrowBoxX, arrowBoxY, 72, 72, 14).fill("#2563eb");
  doc.fontSize(34).font("Helvetica-Bold").fillColor("#ffffff");
  doc.text("↓", arrowBoxX, arrowBoxY + 16, { width: 72, align: "center" });

  // "WHATSAPP NUMBER" label
  doc.fontSize(15).font("Helvetica-Bold").fillColor("#9ca3af");
  doc.text("WHATSAPP NUMBER", 0, arrowBoxY + 95, { align: "center", width: W, characterSpacing: 2 });

  // The number — big green
  doc.fontSize(42).font("Helvetica-Bold").fillColor("#4ade80");
  doc.text(number, 0, arrowBoxY + 120, { align: "center", width: W });

  // Divider
  const divY = arrowBoxY + 195;
  doc.moveTo(W / 2 - 110, divY).lineTo(W / 2 + 110, divY).strokeColor("#1f2937").lineWidth(1).stroke();

  // WhatsApp icon (circle + phone shape)
  const iconX = 72, iconY = divY + 32;
  doc.circle(iconX, iconY + 6, 14).fill("#25D366");
  doc.fontSize(14).fillColor("#ffffff").font("Helvetica-Bold");
  doc.text("W", iconX - 5, iconY - 1, { lineBreak: false });

  // Contact instructions
  doc.fontSize(14).font("Helvetica").fillColor("#d1d5db");
  doc.text("~ contact supplier on ", 96, divY + 26, { continued: true });
  doc.font("Helvetica-Oblique").fillColor("#4ade80").text("whatsapp");

  doc.font("Helvetica").fillColor("#d1d5db").fontSize(14);
  doc.text('AND SAY "', 96, divY + 52, { continued: true });
  doc.font("Helvetica-Bold").fillColor("#4ade80")
    .text("LAZZZY VENDORS brought me here", { continued: true });
  doc.font("Helvetica").fillColor("#d1d5db").text('"');

  doc.fontSize(13).font("Helvetica").fillColor("#9ca3af");
  doc.text("So they know what you need.", 96, divY + 80);

  // Bottom rule
  doc.moveTo(40, H - 44).lineTo(W - 40, H - 44).strokeColor("#1a2a1a").lineWidth(1).stroke();

  // Footer
  doc.fontSize(8).font("Helvetica").fillColor("#374151");
  doc.text(
    "© 2026 LazzzyVendors  ·  For personal reselling use only  ·  Do not share or redistribute",
    0, H - 28, { align: "center", width: W }
  );

  doc.end();
  console.log(`✅  ${slug}.pdf  →  ${filePath}`);
});
