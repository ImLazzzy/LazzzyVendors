"use client";

import { useState } from "react";
import {
  ShoppingCart, X, Plus, Minus, ChevronDown,
  Zap, Shield, Star, Package, TrendingUp, Award, Search, Menu
} from "lucide-react";

/* ─── Shopify config ─── */
const SHOPIFY_STORE = "lazzzyresells.myshopify.com";
const CHECKOUT = `https://${SHOPIFY_STORE}/cart`;

/* ─── Products ─── */
const products = [
  {
    id: 1, name: "2026 All-In-One Supplier", badge: "BEST SELLER",
    badgeColor: "#16a34a", regularPrice: 34.99, salePrice: 24.99,
    emoji: "🏆", tags: ["Clothes","Shoes","Jewelry","Handbags","Belts"],
    shopifyUrl: `${CHECKOUT}/53352382562622:1`, variantId: "53352382562622",
    description: "Every category covered — clothes, shoes, jewelry, belts, handbags & more.",
    details: {
      whatYouGet: ["Clothing suppliers (50+ sources)","Shoe & sneaker wholesalers","Jewelry & accessory suppliers","Handbag & belt sources","Instant email delivery"],
      bestFor: "Resellers who want to cover multiple niches from day one.",
      avgProfit: "$200–$600/mo per category", delivery: "Instant — links sent within seconds",
    },
  },
  {
    id: 2, name: "Elite Supplier Bundle", badge: "50% OFF",
    badgeColor: "#ef4444", regularPrice: 80.00, salePrice: 39.99,
    emoji: "💎", tags: ["All Categories","Best Value","Exclusive"],
    shopifyUrl: `${CHECKOUT}/53352541913406:1`, variantId: "53352541913406",
    description: "The ultimate bundle — all individual suppliers at the lowest price possible.",
    details: {
      whatYouGet: ["Every individual supplier list","13 categories in one purchase","Unlimited access — no expiry","Priority support","Instant email delivery"],
      bestFor: "Serious resellers who want the complete toolkit.",
      avgProfit: "$800–$2,000+/mo", delivery: "Instant — links sent within seconds",
    },
  },
  {
    id: 3, name: "Shoe Supplier", badge: "HOT",
    badgeColor: "#f97316", regularPrice: 20.00, salePrice: 14.99,
    emoji: "👟", image: "/shoe-product.svg", tags: ["Sneakers","Boots","Sandals"],
    shopifyUrl: `${CHECKOUT}/53352384233790:1`, variantId: "53352384233790",
    description: "Wholesale sneaker & footwear suppliers. Name brands at a fraction of retail.",
    details: {
      whatYouGet: ["Name-brand sneaker wholesalers","Boots & casual footwear sources","Sandal & seasonal suppliers","Instant email delivery"],
      bestFor: "Resellers focused on footwear.", avgProfit: "$150–$400/mo", delivery: "Instant",
    },
  },
  {
    id: 4, name: "Watch Supplier", badge: "NEW",
    badgeColor: "#22c55e", regularPrice: 20.00, salePrice: 14.99,
    emoji: "⌚", image: "/watch-product.jpeg", tags: ["Luxury","Fashion","Wholesale"],
    shopifyUrl: `${CHECKOUT}/53342887084350:1`, variantId: "53342887084350",
    description: "Luxury and fashion watch suppliers. High-margin resale opportunity.",
    details: {
      whatYouGet: ["Luxury watch wholesalers","Fashion & casual watch sources","High-margin resale contacts","Instant email delivery"],
      bestFor: "Resellers targeting the watch & accessories market.", avgProfit: "$200–$500/mo", delivery: "Instant",
    },
  },
  {
    id: 5, name: "Moissanite Supplier", badge: "POPULAR",
    badgeColor: "#10b981", regularPrice: 20.00, salePrice: 14.99,
    emoji: "💍", image: "/moissanite-product.png", tags: ["Earrings","Rings","Watches"],
    shopifyUrl: `${CHECKOUT}/53352384790846:1`, variantId: "53352384790846",
    description: "Earrings, rings & watches. Moissanite jewelry at wholesale pricing.",
    details: {
      whatYouGet: ["Moissanite ring suppliers","Earring wholesalers","Watch & bracelet sources","Instant email delivery"],
      bestFor: "Resellers in jewelry — one of the highest-margin niches.", avgProfit: "$300–$900/mo", delivery: "Instant",
    },
  },
  {
    id: 6, name: "Glasses Supplier", badge: null,
    badgeColor: "", regularPrice: 20.00, salePrice: 14.99,
    emoji: "🕶️", image: "/glasses-product.jpeg", tags: ["Sunglasses","Designer","Eyewear"],
    shopifyUrl: `${CHECKOUT}/53352380662078:1`, variantId: "53352380662078",
    description: "Designer & fashion eyewear. Sunglasses & frames at wholesale pricing.",
    details: {
      whatYouGet: ["Designer sunglasses wholesalers","Fashion frames & eyewear sources","Brand-inspired style suppliers","Instant email delivery"],
      bestFor: "Resellers targeting accessories.", avgProfit: "$150–$400/mo", delivery: "Instant",
    },
  },
  {
    id: 8, name: "Looloo Supplier", badge: null,
    badgeColor: "", regularPrice: 20.00, salePrice: 14.99,
    emoji: "👗", tags: ["Women's","Fashion","Boutique"],
    shopifyUrl: `${CHECKOUT}/53352387772734:1`, variantId: "53352387772734",
    description: "Women's fashion & boutique clothing at competitive wholesale prices.",
    details: {
      whatYouGet: ["Women's fashion wholesalers","Boutique clothing sources","Seasonal trend suppliers","Instant email delivery"],
      bestFor: "Resellers targeting women's fashion.", avgProfit: "$200–$500/mo", delivery: "Instant",
    },
  },
  {
    id: 9, name: "Designer Bag Supplier", badge: "HOT",
    badgeColor: "#f97316", regularPrice: 20.00, salePrice: 14.99,
    emoji: "👜", image: "/bag-product.svg", tags: ["Louis Vuitton","Gucci","Prada","Wholesale"],
    shopifyUrl: `${CHECKOUT}/53342886920510:1`, variantId: "53342886920510",
    description: "Luxury & designer bag suppliers. Premium handbag resale with high margins.",
    details: {
      whatYouGet: ["Louis Vuitton-style bag wholesalers","Gucci & Prada-inspired sources","Premium handbag suppliers","Instant email delivery"],
      bestFor: "Resellers targeting luxury-inspired accessories.", avgProfit: "$300–$800/mo", delivery: "Instant",
    },
  },
  {
    id: 10, name: "Lego Supplier", badge: "NEW",
    badgeColor: "#22c55e", regularPrice: 20.00, salePrice: 14.99,
    emoji: "🧱", image: "/lego-product.png", tags: ["Rare Sets","Bulk","Retired"],
    shopifyUrl: `${CHECKOUT}/53352373420350:1`, variantId: "53352373420350",
    description: "Rare & bulk Lego set suppliers. Highest resale margins in the toy niche.",
    details: {
      whatYouGet: ["Rare & retired set suppliers","Bulk Lego wholesalers","Collector-focused sources","Instant email delivery"],
      bestFor: "Resellers in toys & collectibles.", avgProfit: "$250–$700/mo", delivery: "Instant",
    },
  },
  {
    id: 11, name: "Clothing Supplier", badge: "POPULAR",
    badgeColor: "#10b981", regularPrice: 20.00, salePrice: 14.99,
    emoji: "👕", image: "/clothing-product.png", tags: ["Streetwear","Basics","Boutique"],
    shopifyUrl: `${CHECKOUT}/53352387281214:1`, variantId: "53352387281214",
    description: "Wholesale clothing suppliers for all styles. Streetwear, basics & boutique.",
    details: {
      whatYouGet: ["Streetwear wholesalers","Basic & essential clothing sources","Boutique style suppliers","Instant email delivery"],
      bestFor: "Resellers flipping everyday clothing.", avgProfit: "$200–$500/mo", delivery: "Instant",
    },
  },
  {
    id: 12, name: "Cologne Supplier", badge: null,
    badgeColor: "", regularPrice: 20.00, salePrice: 14.99,
    emoji: "🧴", image: "/cologne-product.png", tags: ["Designer","Niche","Fragrance"],
    shopifyUrl: `${CHECKOUT}/53352373420350:1`, variantId: "53352373420350",
    description: "Designer & niche fragrance suppliers. Cologne resale is booming.",
    details: {
      whatYouGet: ["Designer fragrance wholesalers","Niche & indie perfume sources","High-margin cologne suppliers","Instant email delivery"],
      bestFor: "Resellers in fragrance — booming niche with loyal customers.", avgProfit: "$150–$400/mo", delivery: "Instant",
    },
  },
  {
    id: 13, name: "LazzzyPodz Supplier", badge: "EXCLUSIVE",
    badgeColor: "#16a34a", regularPrice: 20.00, salePrice: 14.99,
    emoji: "🎵", image: "/podz-product.jpeg", tags: ["AirPods","Wireless","Exclusive"],
    shopifyUrl: `${CHECKOUT}/53342886986046:1`, variantId: "53342886986046",
    description: "AirPods & wireless earbud suppliers at wholesale pricing.",
    details: {
      whatYouGet: ["AirPods-compatible wholesalers","Wireless earbud suppliers","Exclusive LazzzyPodz source access","Instant email delivery"],
      bestFor: "Resellers targeting audio accessories.", avgProfit: "$150–$350/mo", delivery: "Instant",
    },
  },
];

/* ─── Proof slides ─── */
const proofSlides = [
  { img: "/haul-tech.jpeg", label: "Tech & Electronics Haul", name: "Marcus T.", location: "Atlanta, GA", profit: "+$2,000+", niche: "Electronics Supplier", quote: "Whole room covered in boxes. AirPods Max alone go for $300+ each. This supplier is insane." },
  { img: "/haul-sneakers.jpeg", label: "Sneaker Haul", name: "Trey M.", location: "Dallas, TX", profit: "+$1,400+", niche: "Shoe Supplier", quote: "9 pairs of heat came through. Dior B22s, ASICS, New Balance. Flipped every single one." },
  { img: "/haul-jewelry.jpeg", label: "Van Cleef Jewelry Haul", name: "Aaliyah S.", location: "Miami, FL", profit: "+$1,800+", niche: "Moissanite Supplier", quote: "Van Cleef bracelets with auth cards. Sold all 8 pieces in under a week." },
  { img: "/haul-cologne.jpeg", label: "Designer Cologne Haul", name: "Devon K.", location: "Chicago, IL", profit: "+$1,500+", niche: "Cologne Supplier", quote: "Valentino alone flipped for $80 each. Made my money back day one." },
  { img: "/haul-bags.webp", label: "Designer Bag Haul", name: "Jasmine R.", location: "Houston, TX", profit: "+$850", niche: "Designer Bag Supplier", quote: "Got 12 Coach bags in the mail. Listed same day, sold 8 within 48 hours." },
  { img: "/haul-hoodies.jpeg", label: "SP5DER Hoodie Haul", name: "Jordan P.", location: "New York, NY", profit: "+$600+", niche: "Clothing Supplier", quote: "Flipped all 3 hoodies in one weekend on Instagram. The supplier is the real deal." },
];

/* ─── FAQ ─── */
const faqs = [
  { q: "How do I receive my supplier links?", a: "Immediately after purchase, supplier links are sent to the email you used at checkout. Check spam if you don't see it within 5 minutes." },
  { q: "What exactly am I buying?", a: "You are purchasing a digital supplier directory — a curated list of vetted wholesale supplier contacts and links for your chosen niche. Delivered instantly via email." },
  { q: "Is this a subscription?", a: "Some packages are one-time purchases; others are subscription-based. The product page clearly states if it is recurring." },
  { q: "Can I resell what I source from these suppliers?", a: "Yes — that's the entire point. Source wholesale, sell retail, keep 100% of your margins." },
  { q: "What if the supplier links don't work?", a: "All suppliers are vetted and updated regularly. If you have any issues, contact us and we'll make it right immediately." },
  { q: "Is there a refund policy?", a: "Due to the instant digital nature of the products, all sales are final. We stand behind every supplier on our list." },
];

/* ─── Cart helpers ─── */
interface CartItem { id: number; name: string; price: number; emoji: string; qty: number; variantId: string; shopifyUrl: string; }
function buildCheckoutUrl(items: CartItem[]) {
  const valid = items.filter(i => i.variantId);
  if (!valid.length) return items[0]?.shopifyUrl ?? `https://${SHOPIFY_STORE}`;
  return `https://${SHOPIFY_STORE}/cart/${valid.map(i => `${i.variantId}:${i.qty}`).join(",")}`;
}

/* ─── FAQ Item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left text-sm font-semibold text-white hover:text-green-400 transition-colors gap-4"
      >
        <span>{q}</span>
        <ChevronDown size={18} className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-green-400" : "text-zinc-500"}`} />
      </button>
      {open && (
        <div className="pb-5 text-zinc-400 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── Product Detail Modal ─── */
function ProductModal({ product, onClose, onAddToCart }: { product: typeof products[0]; onClose: () => void; onAddToCart: (p: typeof products[0]) => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-[#111] border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10">
        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/20 px-6 pt-6 pb-8">
          <div className="flex items-start justify-between mb-4">
            {product.badge && (
              <span className="text-xs font-black px-3 py-1 rounded-full text-white" style={{ background: product.badgeColor }}>
                {product.badge}
              </span>
            )}
            <button onClick={onClose} className="ml-auto text-white/50 hover:text-white"><X size={20} /></button>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-black/40 rounded-2xl flex-shrink-0 overflow-hidden">
              {"image" in product && product.image
                ? <img src={product.image as string} alt={product.name} className="w-full h-full object-cover rounded-2xl" style={{ objectPosition: "center 15%", transform: "scale(1.08)" }}/>
                : <span className="text-5xl">{product.emoji}</span>}
            </div>
            <div>
              <h2 className="text-xl font-black text-white">{product.name}</h2>
              <p className="text-white/60 text-sm mt-1">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5 max-h-[50vh] overflow-y-auto">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-green-400 mb-3">What You Get</h3>
            <ul className="space-y-2">
              {product.details.whatYouGet.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-xs text-zinc-500 mb-1">Avg. Monthly Profit</div>
              <div className="text-green-400 font-black text-sm">{product.details.avgProfit}</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-xs text-zinc-500 mb-1">Delivery</div>
              <div className="text-white font-bold text-xs leading-tight">{product.details.delivery}</div>
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <div className="text-xs font-black uppercase tracking-widest text-green-400 mb-1">Best For</div>
            <p className="text-zinc-300 text-sm">{product.details.bestFor}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map(tag => (
              <span key={tag} className="bg-white/5 border border-white/10 text-zinc-400 text-xs px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="px-6 py-4 border-t border-white/10 flex gap-3">
          <button onClick={() => { onAddToCart(product); onClose(); }} className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-sm transition-all">
            Add to Cart
          </button>
          <a href={product.shopifyUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center bg-green-500 hover:bg-green-400 text-black font-black py-3 rounded-xl text-sm transition-all">
            Buy Now — ${product.salePrice.toFixed(2)}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<typeof products[0] | null>(null);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id: product.id, name: product.name, price: product.salePrice, emoji: product.emoji, qty: 1, variantId: product.variantId, shopifyUrl: product.shopifyUrl }];
    });
    setCartOpen(true);
  };
  const updateQty = (id: number, delta: number) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>

      {/* ── Announcement Bar ── */}
      <div className="bg-green-500 text-black text-xs font-bold text-center py-2 px-4 tracking-wide">
        ⚡ LIMITED TIME — 50% OFF THE ELITE BUNDLE &nbsp;·&nbsp; INSTANT DIGITAL DELIVERY &nbsp;·&nbsp; 10,000+ HAPPY RESELLERS
      </div>

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="text-xl font-black tracking-tighter shrink-0">
            <span className="text-green-400">Lazzzy</span><span className="text-white">Vendors</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#products" className="hover:text-white transition-colors">Shop</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#proof" className="hover:text-white transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex text-zinc-400 hover:text-white transition-colors p-2">
              <Search size={18} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors"
            >
              <ShoppingCart size={15} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold leading-none">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(o => !o)} className="md:hidden text-zinc-400 hover:text-white p-2">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0d0d0d] px-4 py-4 space-y-3">
            {[["#products","Shop"],["#how-it-works","How It Works"],["#proof","Reviews"],["#faq","FAQ"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-zinc-400 hover:text-white py-1 transition-colors">{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Products FIRST ── */}
      <section id="products" className="pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-2">Supplier Packages</h2>
            <p className="text-zinc-500 text-sm">Digital delivery — access within seconds of purchase</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(p => (
              <div key={p.id}
                className="group relative flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300">

                {/* Badge */}
                {p.badge && (
                  <div className="absolute top-3 left-3 z-10 text-[10px] font-black px-2 py-0.5 rounded-full text-white uppercase" style={{ background: p.badgeColor }}>
                    {p.badge}
                  </div>
                )}

                {/* Price top-right */}
                <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-sm border border-green-500/40 rounded-lg px-2 py-1 text-right">
                  <div className="text-green-400 font-black text-sm leading-none">${p.salePrice.toFixed(2)}</div>
                  <div className="text-zinc-500 text-[9px] line-through leading-none mt-0.5">${p.regularPrice.toFixed(2)}</div>
                </div>

                {/* Product image or emoji */}
                <div className="relative flex items-center justify-center bg-[#0a0a0a] border-b border-white/5 overflow-hidden" style={{ height: "160px" }}>
                  {"image" in p && p.image ? (
                    <>
                      <img
                        src={p.image as string}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center center" }}
                      />
                    </>
                  ) : (
                    <span className="text-6xl drop-shadow-xl">{p.emoji}</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-4 gap-2">
                  <p className="font-black text-sm leading-tight text-white uppercase">{p.name}</p>
                  <p className="text-zinc-500 text-xs leading-snug line-clamp-2">{p.description}</p>

                  <div className="flex gap-2 mt-auto pt-2">
                    <button
                      onClick={() => setDetailProduct(p)}
                      className="flex items-center justify-center w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all flex-shrink-0"
                      title="View details"
                    >
                      <Search size={13} className="text-zinc-400" />
                    </button>
                    <a
                      href={p.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center font-black py-2 rounded-lg text-xs uppercase tracking-wide transition-all hover:brightness-110 active:scale-95"
                      style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#000" }}
                    >
                      Get Access
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero (below products) ── */}
      <section className="relative overflow-hidden bg-[#0d0d0d] border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/6 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 text-center relative">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Zap size={11} /> #1 Reseller Supplier Source
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6 uppercase">
            Start Your<br />
            <span className="text-green-400">Reselling</span><br />
            Journey Today
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Access premium supplier directories that took years to build — at a fraction of what others charge.
            Start flipping products and making profit <span className="text-white font-semibold">this week</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a href="#products"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-xl shadow-green-500/25 uppercase tracking-wide">
              Shop Suppliers
            </a>
            <a href="#how-it-works"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors uppercase tracking-wide">
              How It Works
            </a>
          </div>
          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-10 border-t border-white/10">
            {[
              { icon: <Package size={18} />, value: "10,000+", label: "Happy Resellers" },
              { icon: <Zap size={18} />, value: "Instant", label: "Digital Delivery" },
              { icon: <Shield size={18} />, value: "Secure", label: "Checkout" },
              { icon: <Award size={18} />, value: "Vetted", label: "Suppliers Only" },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2 text-sm">
                <span className="text-green-400">{s.icon}</span>
                <span className="font-bold text-white">{s.value}</span>
                <span className="text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-3">How It Works</h2>
            <p className="text-zinc-500 text-sm">Three simple steps to start making money</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Package size={26} />, step: "01", title: "Pick Your Niche", desc: "Choose the supplier package for the niche you want to flip. One category or all of them — your choice." },
              { icon: <Zap size={26} />, step: "02", title: "Get Instant Access", desc: "Supplier links land in your inbox within seconds of payment. No waiting, no delays." },
              { icon: <TrendingUp size={26} />, step: "03", title: "Source & Flip", desc: "Buy wholesale, sell at retail. You keep 100% of every dollar of profit you make." },
            ].map(s => (
              <div key={s.step} className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-green-500/40 transition-all group">
                <div className="text-green-400/15 font-black text-7xl absolute top-3 right-5 leading-none select-none">{s.step}</div>
                <div className="text-green-400 mb-4">{s.icon}</div>
                <h3 className="text-lg font-black mb-2 uppercase">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer Wins — Scrolling Photo Strip ── */}
      <section id="proof" className="py-20 border-t border-white/10 bg-[#0d0d0d] overflow-hidden">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-3">Customer Wins 🌎</h2>
          <p className="text-zinc-500 text-sm">Real haul photos from resellers using our supplier lists</p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-4">
          <div className="flex animate-marquee gap-4" style={{ width: "max-content" }}>
            {[...proofSlides, ...proofSlides].map((slide, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                style={{ width: "280px", height: "200px" }}
              >
                <img src={slide.img} alt={slide.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-green-400 font-black text-lg leading-none">{slide.profit}</div>
                  <div className="text-white font-bold text-xs leading-tight">{slide.name} · {slide.location}</div>
                </div>
                <div className="absolute top-2 right-2 bg-green-400 text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  Real Haul
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              width: "max-content",
              animation: "marquee 26s linear infinite reverse",
            }}
          >
            {[...proofSlides.slice().reverse(), ...proofSlides.slice().reverse()].map((slide, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                style={{ width: "280px", height: "200px" }}
              >
                <img src={slide.img} alt={slide.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={10} className="fill-green-400 text-green-400" />)}
                  </div>
                  <div className="text-white text-xs italic leading-tight">"{slide.quote}"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Pillars ── */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={22} />, title: "Instant Delivery", desc: "Supplier links are sent to your email the moment your payment is confirmed — no waiting." },
              { icon: <Shield size={22} />, title: "Secure Checkout", desc: "Payments processed through Shopify's encrypted secure checkout. Your info is always protected." },
              { icon: <Award size={22} />, title: "Vetted Suppliers", desc: "Every supplier has been personally tested and verified for quality & reliability." },
            ].map(item => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="text-green-400 mt-0.5 flex-shrink-0 bg-green-500/10 p-2.5 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="font-black text-sm uppercase mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 border-t border-white/10 bg-[#0d0d0d]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-3">FAQ</h2>
            <p className="text-zinc-500 text-sm">Got questions? We've got answers.</p>
          </div>
          <div>
            {faqs.map(item => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-3xl p-12 sm:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent)] pointer-events-none" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase mb-4 relative">
              Start Your<br /><span className="text-green-400">Reselling Journey</span><br />Today
            </h2>
            <p className="text-zinc-400 text-base mb-8 max-w-md mx-auto relative">
              Join thousands of resellers already using LazzzyVendors to build their income.
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black px-10 py-4 rounded-full text-base transition-all hover:scale-105 shadow-2xl shadow-green-500/30 uppercase tracking-wide relative"
            >
              Get Access Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Policy Section ── */}
      <section id="policy" className="py-16 border-t border-white/10 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black uppercase mb-2">Policies</h2>
            <p className="text-zinc-500 text-sm">Please read before purchasing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "📦", title: "What You're Purchasing", color: "green", body: "All products sold on LazzzyVendors are digital supplier directories — lists of vetted wholesale supplier links and sourcing resources delivered electronically. You are purchasing access to supplier information, not physical goods." },
              { icon: "⚡", title: "Digital Delivery", color: "green", body: "All supplier links are delivered instantly via email to the address provided at checkout — typically within seconds of payment confirmation. Check spam if not received within 5 minutes." },
              { icon: "🚫", title: "No Refund Policy", color: "red", body: "Due to the instant digital nature of our products, all sales are final. No refunds, exchanges, or chargebacks after delivery. If you experience a technical issue, contact us and we will resolve it." },
              { icon: "✅", title: "Permitted Use", color: "green", body: "Supplier directories are for personal reselling use only. You may not redistribute, resell, or share the supplier links. Each purchase is licensed to one individual buyer." },
              { icon: "⚠️", title: "Results Disclaimer", color: "yellow", body: "Profit figures shown are examples of real customer results and are not guarantees. Individual results vary based on effort, market conditions, and business decisions." },
              { icon: "💬", title: "Support & Contact", color: "green", body: "For order issues or missing links, reach out via our support channel. We aim to respond within 24 hours. Include your order number and email used at checkout." },
            ].map(p => (
              <div key={p.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-base">{p.icon}</div>
                  <h3 className="font-black text-sm uppercase">{p.title}</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-700 text-xs mt-8">
            By purchasing from LazzzyVendors you confirm you are 18+ and agree to all policies listed above. Last updated April 2026.
          </p>
        </div>
      </section>

      {/* ── Community / Social ── */}
      <section className="py-14 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black uppercase mb-2">Join the Community</h2>
          <p className="text-zinc-500 text-sm mb-8">Follow for hauls, tips & exclusive drops</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.instagram.com/lazzzyvendors" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 text-white font-black px-7 py-3.5 rounded-2xl text-sm transition-all hover:scale-105 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-75">Follow on Instagram</div>
                <div className="text-sm font-black">@lazzzyvendors</div>
              </div>
            </a>
            <a href="https://discord.gg/kK5sU8xzV" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-black px-7 py-3.5 rounded-2xl text-sm transition-all hover:scale-105 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-75">Join our Discord</div>
                <div className="text-sm font-black">LazzzyVendors Server</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 py-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <div className="font-black text-2xl tracking-tighter">
              <span className="text-green-400">Lazzzy</span><span className="text-white">Vendors</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-zinc-500 text-sm">
              <a href="#products" className="hover:text-white transition-colors">Shop</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#policy" className="hover:text-white transition-colors">Terms & Policies</a>
              <a href="https://www.instagram.com/lazzzyvendors" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a>
              <a href="https://discord.gg/kK5sU8xzV" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Discord</a>
            </div>

            {/* Payment icons row */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {["VISA","MC","AMEX","PAYPAL","APPLE PAY","GOOGLE PAY","SHOP","AFTERPAY"].map(pm => (
                <div key={pm} className="bg-white/5 border border-white/10 rounded-md px-2.5 py-1 text-[9px] font-black text-zinc-500 tracking-wider uppercase">
                  {pm}
                </div>
              ))}
            </div>

            <p className="text-zinc-700 text-xs">© 2026 LazzzyVendors. All rights reserved. · info@lazzzyvendors.com</p>
          </div>
        </div>
      </footer>

      {/* ── Cart Drawer ── */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-md bg-[#111] border-l border-white/10 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="font-black text-lg uppercase">Cart {cartCount > 0 && <span className="text-green-400">({cartCount})</span>}</h2>
              <button onClick={() => setCartOpen(false)} className="text-zinc-400 hover:text-white"><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-zinc-500">
                  <ShoppingCart size={36} className="mx-auto mb-3 opacity-20" />
                  <p className="text-sm">Your cart is empty</p>
                  <button onClick={() => setCartOpen(false)} className="mt-4 text-green-400 text-sm font-semibold hover:underline">Browse Suppliers</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="text-2xl w-10 h-10 flex items-center justify-center bg-black/30 rounded-lg flex-shrink-0">{item.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs leading-tight truncate">{item.name}</div>
                      <div className="text-green-400 font-bold text-sm">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"><Minus size={11} /></button>
                      <span className="w-5 text-center font-bold text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"><Plus size={11} /></button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="px-6 py-4 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Subtotal</span>
                  <span className="font-black text-xl">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                  <Zap size={11} /> Instant digital delivery after checkout
                </div>
                <a
                  href={buildCheckoutUrl(cart)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-green-500 hover:bg-green-400 text-black font-black py-4 rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-95"
                >
                  Checkout — ${cartTotal.toFixed(2)}
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Product Detail Modal ── */}
      {detailProduct && (
        <ProductModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onAddToCart={p => { addToCart(p); setDetailProduct(null); }}
        />
      )}
    </div>
  );
}
