"use client";

const products = [
  { name: "2026 All-In-One Supplier", price: "$24.99", badge: "BEST SELLER", badgeColor: "#16a34a", image: "/allinone-product.png", tag: "Every Category Covered" },
  { name: "Elite Supplier Bundle", price: "$39.99", badge: "50% OFF", badgeColor: "#ef4444", image: "/elite-product.png", tag: "All 12 Suppliers" },
  { name: "Shoe Supplier", price: "$14.99", badge: "HOT", badgeColor: "#f97316", image: "/shoe-product.png", tag: "Sneakers & Footwear" },
  { name: "Watch Supplier", price: "$14.99", badge: "NEW", badgeColor: "#22c55e", image: "/watch-product.png", tag: "Luxury Timepieces" },
  { name: "Moissanite Supplier", price: "$14.99", badge: "POPULAR", badgeColor: "#10b981", image: "/moissanite-product.png", tag: "Rings, Chains & More" },
  { name: "Designer Bag Supplier", price: "$14.99", badge: "HOT", badgeColor: "#f97316", image: "/bag-product.png", tag: "LV · Gucci · Hermès" },
  { name: "Clothing Supplier", price: "$14.99", badge: "POPULAR", badgeColor: "#10b981", image: "/clothing-product.png", tag: "Streetwear & Boutique" },
  { name: "Cologne Supplier", price: "$14.99", badge: null, badgeColor: "", image: "/cologne-product.png", tag: "Designer Fragrances" },
  { name: "LazzzyPodz Supplier", price: "$14.99", badge: "EXCLUSIVE", badgeColor: "#16a34a", image: "/podz-product.png", tag: "AirPods & Headphones" },
  { name: "Looloo Supplier", price: "$14.99", badge: null, badgeColor: "", image: "/looloo-product.png", tag: "Women's Fashion" },
];

export default function ThumbnailsPage() {
  return (
    <div className="min-h-screen bg-[#050505] p-6">
      <div className="text-center mb-8">
        <p className="text-green-400 text-xs font-black uppercase tracking-widest mb-1">LazzzyVendors</p>
        <h1 className="text-white text-2xl font-black uppercase">Gumroad Thumbnails</h1>
        <p className="text-zinc-500 text-sm mt-1">Screenshot each card — 1:1 square format for Gumroad</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest">{p.name}</p>

            {/* Thumbnail — 1:1 square */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: "linear-gradient(145deg, #0a0a0a 0%, #0d0d0d 100%)",
                border: "1px solid rgba(74,222,128,0.2)",
                boxShadow: "0 0 40px rgba(34,197,94,0.08)",
              }}
            >
              {/* Green glow bg */}
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(34,197,94,0.08) 0%, transparent 70%)" }} />

              {/* Badge */}
              {p.badge && (
                <div className="absolute top-4 left-4 z-10 text-[11px] font-black px-3 py-1 rounded-full text-white uppercase" style={{ background: p.badgeColor }}>
                  {p.badge}
                </div>
              )}

              {/* Price */}
              <div className="absolute top-4 right-4 z-10 bg-black/70 border border-green-500/40 rounded-lg px-2.5 py-1.5 text-right">
                <div className="text-green-400 font-black text-sm leading-none">{p.price}</div>
              </div>

              {/* Product image */}
              <div className="absolute inset-0 flex items-center justify-center p-6 pt-14 pb-20">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-8 pb-4 px-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-green-400 mb-0.5">LazzzyVendors</div>
                <div className="text-white font-black text-sm uppercase leading-tight">{p.name}</div>
                <div className="text-zinc-500 text-[10px] mt-0.5">{p.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-zinc-700 text-xs mt-10">
        Screenshot each card on your phone and upload as the product cover image on Gumroad
      </p>
    </div>
  );
}
