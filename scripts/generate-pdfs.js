const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../vendor-pdfs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// type: "phone" | "url"
const vendors = [
  { slug: "bag-supplier",        title: "MY BAG VENDOR",        type: "phone", contact: "+86 153 5920 6650" },
  { slug: "watch-supplier",      title: "MY WATCH VENDOR",      type: "phone", contact: "+86 136 0600 9364" },
  { slug: "shoe-supplier",       title: "MY SHOE VENDOR",       type: "phone", contact: "+86 134 8926 7454" },
  { slug: "cologne-supplier",    title: "MY COLOGNE VENDOR",    type: "phone", contact: "+86 189 6517 5019" },
  { slug: "clothing-supplier",   title: "MY CLOTHING VENDOR",   type: "phone", contact: "+86 134 8928 1265" },
  { slug: "airpods-supplier",    title: "MY AIRPOD VENDOR",     type: "phone", contact: "+86 158 0501 8192" },
  { slug: "looloo-supplier",     title: "MY LOOLOO VENDOR",     type: "phone", contact: "+1 (541) 675-7934" },
  { slug: "lego-supplier",       title: "MY LEGO VENDOR",       type: "phone", contact: "+351 935 556 574" },
  { slug: "glasses-supplier",    title: "MY GLASSES VENDOR",    type: "phone", contact: "+86 158 0238 0240", url: "x.yupoo.com/category/4876037" },
  { slug: "moissanite-supplier", title: "MY JEWELRY VENDOR",    type: "url",   contact: "moissap.com" },
  { slug: "all-in-one-supplier", title: "MY ALL-IN-ONE VENDOR", type: "url",   contact: "goldfish-supply.x.yupoo.com/albums/" },
];

// All suppliers for the elite bundle
const eliteEntries = [
  { emoji: "👜", label: "BAG VENDOR",        type: "phone", contact: "+86 153 5920 6650" },
  { emoji: "⌚", label: "WATCH VENDOR",      type: "phone", contact: "+86 136 0600 9364" },
  { emoji: "👟", label: "SHOE VENDOR",       type: "phone", contact: "+86 134 8926 7454" },
  { emoji: "🧴", label: "COLOGNE VENDOR",    type: "phone", contact: "+86 189 6517 5019" },
  { emoji: "👕", label: "CLOTHING VENDOR",   type: "phone", contact: "+86 134 8928 1265" },
  { emoji: "🎵", label: "AIRPOD VENDOR",     type: "phone", contact: "+86 158 0501 8192" },
  { emoji: "👗", label: "LOOLOO VENDOR",     type: "phone", contact: "+1 (541) 675-7934" },
  { emoji: "🧱", label: "LEGO VENDOR",       type: "phone", contact: "+351 935 556 574" },
  { emoji: "🕶️", label: "GLASSES VENDOR",    type: "phone", contact: "+86 158 0238 0240" },
  { emoji: "💍", label: "JEWELRY VENDOR",    type: "url",   contact: "moissap.com" },
  { emoji: "🏆", label: "ALL-IN-ONE VENDOR", type: "url",   contact: "goldfish-supply.x.yupoo.com/albums/" },
];

function drawBackground(doc, W, H) {
  doc.rect(0, 0, W, H).fill("#0a0a0a");
  const grad = doc.radialGradient(W / 2, H / 2, 0, W / 2, H / 2, 280);
  grad.stop(0, "#0d2b1a").stop(1, "#0a0a0a");
  doc.rect(0, 0, W, H).fill(grad);
}

function drawWatermark(doc, W, H) {
  doc.save();
  doc.fontSize(88).fillColor("#ffffff").fillOpacity(0.035);
  doc.rotate(-35, { origin: [W / 2, H / 2] });
  doc.font("Helvetica-BoldOblique");
  doc.text("LAZZZY", W / 2 - 220, H / 2 - 70, { lineBreak: false });
  doc.text("VENDORS", W / 2 - 255, H / 2 + 30, { lineBreak: false });
  doc.restore();
}

function drawBrandHeader(doc, W) {
  doc.fillOpacity(1).fontSize(12).font("Helvetica-Bold");
  doc.fillColor("#4ade80").text("LAZZZY", W - 130, 22, { lineBreak: false, characterSpacing: 1 });
  doc.fillColor("#ffffff").text("VENDORS", W - 78, 22, { lineBreak: false, characterSpacing: 1 });
  doc.moveTo(40, 58).lineTo(W - 40, 58).strokeColor("#1a2a1a").lineWidth(1).stroke();
}

function drawFooter(doc, W, H) {
  doc.moveTo(40, H - 44).lineTo(W - 40, H - 44).strokeColor("#1a2a1a").lineWidth(1).stroke();
  doc.fontSize(8).font("Helvetica").fillColor("#374151");
  doc.text(
    "© 2026 LazzzyVendors  ·  For personal reselling use only  ·  Do not share or redistribute",
    0, H - 28, { align: "center", width: W }
  );
}

// Generate individual vendor PDFs
vendors.forEach(({ slug, title, type, contact, url }) => {
  const doc = new PDFDocument({ size: "LETTER", margin: 0 });
  const filePath = path.join(outDir, `${slug}.pdf`);
  doc.pipe(fs.createWriteStream(filePath));

  const W = 612, H = 792;

  drawBackground(doc, W, H);
  drawWatermark(doc, W, H);
  drawBrandHeader(doc, W);

  // Main title
  doc.fillColor("#ffffff").fillOpacity(1);
  doc.fontSize(58).font("Helvetica-BoldOblique");
  doc.text(title, 0, H * 0.21, { align: "center", width: W });

  // Blue arrow box
  const arrowBoxX = W / 2 - 36;
  const arrowBoxY = H * 0.21 + 110;
  doc.roundedRect(arrowBoxX, arrowBoxY, 72, 72, 14).fill("#2563eb");
  doc.fontSize(34).font("Helvetica-Bold").fillColor("#ffffff");
  doc.text("↓", arrowBoxX, arrowBoxY + 16, { width: 72, align: "center" });

  if (type === "phone") {
    // WHATSAPP NUMBER label
    doc.fontSize(15).font("Helvetica-Bold").fillColor("#9ca3af");
    doc.text("WHATSAPP NUMBER", 0, arrowBoxY + 95, { align: "center", width: W, characterSpacing: 2 });

    // The number
    doc.fontSize(42).font("Helvetica-Bold").fillColor("#4ade80");
    doc.text(contact, 0, arrowBoxY + 120, { align: "center", width: W });

    // Extra URL if provided (glasses has a yupoo catalogue)
    let divY = arrowBoxY + 195;
    if (url) {
      doc.fontSize(13).font("Helvetica").fillColor("#6b7280");
      doc.text("Catalog: " + url, 0, arrowBoxY + 175, { align: "center", width: W });
      divY = arrowBoxY + 210;
    }

    // Divider
    doc.moveTo(W / 2 - 110, divY).lineTo(W / 2 + 110, divY).strokeColor("#1f2937").lineWidth(1).stroke();

    // WhatsApp icon
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

  } else {
    // URL-based supplier
    doc.fontSize(15).font("Helvetica-Bold").fillColor("#9ca3af");
    doc.text("VISIT WEBSITE", 0, arrowBoxY + 95, { align: "center", width: W, characterSpacing: 2 });

    doc.fontSize(36).font("Helvetica-Bold").fillColor("#4ade80");
    doc.text(contact, 0, arrowBoxY + 122, { align: "center", width: W });

    const divY = arrowBoxY + 195;
    doc.moveTo(W / 2 - 110, divY).lineTo(W / 2 + 110, divY).strokeColor("#1f2937").lineWidth(1).stroke();

    doc.fontSize(14).font("Helvetica").fillColor("#d1d5db");
    doc.text("~ visit the website above", 96, divY + 26);
    doc.text('~ WhatsApp contact is listed on their page', 96, divY + 52);

    doc.font("Helvetica").fillColor("#d1d5db").fontSize(14);
    doc.text('AND SAY "', 96, divY + 80, { continued: true });
    doc.font("Helvetica-Bold").fillColor("#4ade80")
      .text("LAZZZY VENDORS brought me here", { continued: true });
    doc.font("Helvetica").fillColor("#d1d5db").text('"');
  }

  drawFooter(doc, W, H);
  doc.end();
  console.log(`✅  ${slug}.pdf  →  ${filePath}`);
});

// Generate ELITE BUNDLE — multi-page, one page per supplier
(function generateEliteBundle() {
  const doc = new PDFDocument({ size: "LETTER", margin: 0, autoFirstPage: false });
  const filePath = path.join(outDir, "elite-supplier-bundle.pdf");
  doc.pipe(fs.createWriteStream(filePath));

  const W = 612, H = 792;

  // ── Cover page ──────────────────────────────────────────────────
  doc.addPage();
  drawBackground(doc, W, H);

  // Bigger glow for cover
  const coverGrad = doc.radialGradient(W / 2, H / 2, 0, W / 2, H / 2, 320);
  coverGrad.stop(0, "#0f3d20").stop(1, "#0a0a0a");
  doc.rect(0, 0, W, H).fill(coverGrad);

  drawWatermark(doc, W, H);
  drawBrandHeader(doc, W);

  // Cover title
  doc.fillColor("#4ade80").fillOpacity(1).fontSize(16).font("Helvetica-Bold");
  doc.text("LAZZZY VENDORS PRESENTS", 0, H * 0.18, { align: "center", width: W, characterSpacing: 3 });

  doc.fillColor("#ffffff").fontSize(62).font("Helvetica-BoldOblique");
  doc.text("ELITE", 0, H * 0.18 + 36, { align: "center", width: W });
  doc.fillColor("#4ade80").fontSize(62).font("Helvetica-BoldOblique");
  doc.text("SUPPLIER", 0, H * 0.18 + 104, { align: "center", width: W });
  doc.fillColor("#ffffff").fontSize(62).font("Helvetica-BoldOblique");
  doc.text("BUNDLE", 0, H * 0.18 + 172, { align: "center", width: W });

  // Divider
  doc.moveTo(W / 2 - 120, H * 0.18 + 258).lineTo(W / 2 + 120, H * 0.18 + 258).strokeColor("#4ade80").lineWidth(1).stroke();

  // Supplier count badge
  doc.roundedRect(W / 2 - 90, H * 0.18 + 275, 180, 52, 26).fill("#4ade80");
  doc.fillColor("#000000").fontSize(22).font("Helvetica-Bold");
  doc.text("11 SUPPLIERS", W / 2 - 90, H * 0.18 + 290, { width: 180, align: "center" });

  // Tagline
  doc.fillColor("#9ca3af").fontSize(13).font("Helvetica");
  doc.text("All categories. One purchase. Start flipping today.", 0, H * 0.18 + 346, { align: "center", width: W });

  // Supplier emoji row
  const emojis = eliteEntries.map(e => e.emoji).join("  ");
  doc.fillColor("#ffffff").fontSize(22).font("Helvetica");
  doc.text(emojis, 0, H * 0.18 + 390, { align: "center", width: W });

  drawFooter(doc, W, H);

  // ── One page per supplier ────────────────────────────────────────
  eliteEntries.forEach(({ emoji, label, type, contact }) => {
    doc.addPage();
    drawBackground(doc, W, H);
    drawWatermark(doc, W, H);
    drawBrandHeader(doc, W);

    // Small "ELITE BUNDLE" tag top-left
    doc.fillColor("#4ade80").fillOpacity(0.7).fontSize(9).font("Helvetica-Bold");
    doc.text("ELITE SUPPLIER BUNDLE", 40, 24, { lineBreak: false, characterSpacing: 1 });
    doc.fillOpacity(1);

    // Title
    doc.fillColor("#ffffff").fontSize(52).font("Helvetica-BoldOblique");
    doc.text("MY " + label, 0, H * 0.21, { align: "center", width: W });

    // Arrow box
    const arrowBoxX = W / 2 - 36;
    const arrowBoxY = H * 0.21 + 100;
    doc.roundedRect(arrowBoxX, arrowBoxY, 72, 72, 14).fill("#2563eb");
    doc.fontSize(34).font("Helvetica-Bold").fillColor("#ffffff");
    doc.text("↓", arrowBoxX, arrowBoxY + 16, { width: 72, align: "center" });

    if (type === "phone") {
      doc.fontSize(14).font("Helvetica-Bold").fillColor("#9ca3af");
      doc.text("WHATSAPP NUMBER", 0, arrowBoxY + 88, { align: "center", width: W, characterSpacing: 2 });

      doc.fontSize(38).font("Helvetica-Bold").fillColor("#4ade80");
      doc.text(contact, 0, arrowBoxY + 112, { align: "center", width: W });

      const divY = arrowBoxY + 182;
      doc.moveTo(W / 2 - 110, divY).lineTo(W / 2 + 110, divY).strokeColor("#1f2937").lineWidth(1).stroke();

      const iconX = 72, iconY = divY + 30;
      doc.circle(iconX, iconY + 6, 14).fill("#25D366");
      doc.fontSize(14).fillColor("#ffffff").font("Helvetica-Bold");
      doc.text("W", iconX - 5, iconY - 1, { lineBreak: false });

      doc.fontSize(13).font("Helvetica").fillColor("#d1d5db");
      doc.text("~ contact on ", 96, divY + 24, { continued: true });
      doc.font("Helvetica-Oblique").fillColor("#4ade80").text("whatsapp");

      doc.font("Helvetica").fillColor("#d1d5db").fontSize(13);
      doc.text('AND SAY "', 96, divY + 48, { continued: true });
      doc.font("Helvetica-Bold").fillColor("#4ade80")
        .text("LAZZZY VENDORS brought me here", { continued: true });
      doc.font("Helvetica").fillColor("#d1d5db").text('"');

    } else {
      doc.fontSize(14).font("Helvetica-Bold").fillColor("#9ca3af");
      doc.text("VISIT WEBSITE", 0, arrowBoxY + 88, { align: "center", width: W, characterSpacing: 2 });

      doc.fontSize(30).font("Helvetica-Bold").fillColor("#4ade80");
      doc.text(contact, 0, arrowBoxY + 114, { align: "center", width: W });

      const divY = arrowBoxY + 182;
      doc.moveTo(W / 2 - 110, divY).lineTo(W / 2 + 110, divY).strokeColor("#1f2937").lineWidth(1).stroke();

      doc.fontSize(13).font("Helvetica").fillColor("#d1d5db");
      doc.text("~ visit the website above", 96, divY + 24);
      doc.text("~ WhatsApp contact is listed on their page", 96, divY + 48);

      doc.font("Helvetica").fillColor("#d1d5db").fontSize(13);
      doc.text('AND SAY "', 96, divY + 74, { continued: true });
      doc.font("Helvetica-Bold").fillColor("#4ade80")
        .text("LAZZZY VENDORS brought me here", { continued: true });
      doc.font("Helvetica").fillColor("#d1d5db").text('"');
    }

    drawFooter(doc, W, H);
  });

  doc.end();
  console.log(`✅  elite-supplier-bundle.pdf  →  ${filePath}`);
})();
