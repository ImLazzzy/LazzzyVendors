"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, X, Plus, Minus, Zap, Shield, Star, ChevronRight, Package, TrendingUp, Award, Info } from "lucide-react";
import {
  AllInOneIcon, BundleIcon, ShoeIcon, WatchIcon, JewelryIcon,
  EarbudsIcon, DressIcon, HandbagIcon, LegoIcon,
  ShirtIcon, CologneIconSVG, PodsIcon,
} from "@/components/NeonProductIcons";

const iconMap: Record<number, () => React.ReactElement> = {
  1: AllInOneIcon, 2: BundleIcon, 3: ShoeIcon, 4: WatchIcon,
  5: JewelryIcon, 8: DressIcon,
  9: HandbagIcon, 10: LegoIcon, 11: ShirtIcon, 12: CologneIconSVG, 13: PodsIcon,
};
function ProductIcon({ id }: { id: number }) {
  const Icon = iconMap[id];
  return Icon ? <Icon /> : null;
}

const SHOPIFY_STORE = "lazzzyresells.myshopify.com";
const BASE = `https://${SHOPIFY_STORE}/products`;
const CHECKOUT = `https://${SHOPIFY_STORE}/cart`;
const products = [
  {
    id: 1,
    name: "2026 All-In-One Supplier",
    badge: "BEST SELLER",
    badgeColor: "bg-green-400 text-black",
    regularPrice: 34.99,
    salePrice: 24.99,
    emoji: "🏆",
    gradient: "from-green-900/40 to-emerald-900/40",
    description: "Every category covered — clothes, shoes, jewelry, belts, handbags & more. Instant email delivery.",
    tags: ["Clothes", "Shoes", "Jewelry", "Handbags", "Belts"],
    shopifyUrl: `${CHECKOUT}/53352382562622:1`,
    variantId: "53352382562622",
    details: {
      whatYouGet: ["Clothing suppliers (50+ sources)", "Shoe & sneaker wholesalers", "Jewelry & accessory suppliers", "Handbag & belt sources", "Instant email delivery after purchase"],
      bestFor: "Resellers who want to cover multiple niches from day one.",
      avgProfit: "$200–$600/mo per category",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 2,
    name: "Elite Supplier Bundle",
    badge: "50% OFF",
    badgeColor: "bg-red-500 text-white",
    regularPrice: 80.00,
    salePrice: 39.99,
    emoji: "💎",
    gradient: "from-emerald-900/40 to-teal-900/40",
    description: "The ultimate bundle — all individual suppliers in one package at the lowest price possible.",
    tags: ["All Categories", "Best Value", "Exclusive"],
    shopifyUrl: `${CHECKOUT}/53352541913406:1`,
    variantId: "53352541913406",
    details: {
      whatYouGet: ["Every individual supplier list included", "13 categories in one purchase", "Unlimited access — no expiry", "Priority support", "Instant email delivery after purchase"],
      bestFor: "Serious resellers who want the complete toolkit at the lowest price.",
      avgProfit: "$800–$2,000+/mo across all niches",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 3,
    name: "Shoe Supplier",
    badge: "HOT",
    badgeColor: "bg-orange-500 text-white",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "👟",
    gradient: "from-green-900/30 to-lime-900/30",
    description: "Wholesale sneaker & footwear suppliers. Name brands at fraction of retail cost.",
    tags: ["Sneakers", "Boots", "Sandals"],
    shopifyUrl: `${CHECKOUT}/53352384233790:1`,
    variantId: "53352384233790",
    details: {
      whatYouGet: ["Name-brand sneaker wholesalers", "Boots & casual footwear sources", "Sandal & seasonal suppliers", "Instant email delivery after purchase"],
      bestFor: "Resellers focused on footwear — high demand, year-round sales.",
      avgProfit: "$150–$400/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 4,
    name: "Watch Supplier",
    badge: "NEW",
    badgeColor: "bg-green-500 text-white",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "⌚",
    gradient: "from-green-900/40 to-emerald-900/40",
    description: "Luxury and fashion watch suppliers. High-margin resale opportunity.",
    tags: ["Luxury", "Fashion", "Wholesale"],
    shopifyUrl: `${CHECKOUT}/53342887084350:1`,
    variantId: "53342887084350",
    details: {
      whatYouGet: ["Luxury watch wholesalers", "Fashion & casual watch sources", "High-margin resale contacts", "Instant email delivery after purchase"],
      bestFor: "Resellers targeting the watch & accessories market.",
      avgProfit: "$200–$500/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 5,
    name: "Moissanite Supplier",
    badge: "POPULAR",
    badgeColor: "bg-emerald-500 text-white",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "💍",
    gradient: "from-teal-900/40 to-green-900/40",
    description: "Earrings, rings & watches. Moissanite jewelry at wholesale pricing.",
    tags: ["Earrings", "Rings", "Watches"],
    shopifyUrl: `${CHECKOUT}/53352384790846:1`,
    variantId: "53352384790846",
    details: {
      whatYouGet: ["Moissanite ring suppliers", "Earring wholesalers", "Watch & bracelet sources", "Instant email delivery after purchase"],
      bestFor: "Resellers in jewelry — one of the highest-margin niches available.",
      avgProfit: "$300–$900/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 6,
    name: "Glasses Supplier",
    badge: null,
    badgeColor: "",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "🕶️",
    gradient: "from-zinc-800/60 to-neutral-800/60",
    description: "Designer & fashion eyewear suppliers. Sunglasses & frames at wholesale pricing.",
    tags: ["Sunglasses", "Designer", "Eyewear"],
    shopifyUrl: `${CHECKOUT}/53352380662078:1`,
    variantId: "53352380662078",
    details: {
      whatYouGet: ["Designer sunglasses wholesalers", "Fashion frames & eyewear sources", "Brand-inspired style suppliers", "Instant email delivery after purchase"],
      bestFor: "Resellers targeting accessories — eyewear sells year-round with high margins.",
      avgProfit: "$150–$400/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 8,
    name: "Looloo Supplier",
    badge: null,
    badgeColor: "",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "👗",
    gradient: "from-zinc-800/60 to-neutral-800/60",
    description: "Women's fashion & boutique clothing at competitive wholesale prices.",
    tags: ["Women's", "Fashion", "Boutique"],
    shopifyUrl: `${CHECKOUT}/53352387772734:1`,
    variantId: "53352387772734",
    details: {
      whatYouGet: ["Women's fashion wholesalers", "Boutique clothing sources", "Seasonal trend suppliers", "Instant email delivery after purchase"],
      bestFor: "Resellers targeting women's fashion — huge and consistent demand.",
      avgProfit: "$200–$500/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 9,
    name: "Designer Bag Supplier",
    badge: "HOT",
    badgeColor: "bg-orange-500 text-white",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "👜",
    gradient: "from-green-900/40 to-emerald-900/40",
    description: "Luxury & designer bag suppliers. High-margin handbag resale with premium sourcing.",
    tags: ["Louis Vuitton", "Gucci", "Prada", "Wholesale"],
    shopifyUrl: `${CHECKOUT}/53342886920510:1`,
    variantId: "53342886920510",
    details: {
      whatYouGet: ["Louis Vuitton-style bag wholesalers", "Gucci & Prada-inspired sources", "Premium handbag suppliers", "Instant email delivery after purchase"],
      bestFor: "Resellers targeting luxury-inspired accessories — high ticket, great margins.",
      avgProfit: "$300–$800/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 10,
    name: "Lego Supplier",
    badge: "NEW",
    badgeColor: "bg-green-500 text-white",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "🧱",
    gradient: "from-emerald-900/40 to-teal-900/40",
    description: "Rare & bulk Lego set suppliers. One of the highest resale margins in the toy niche.",
    tags: ["Rare Sets", "Bulk", "Retired"],
    shopifyUrl: `${CHECKOUT}/53352373420350:1`,
    variantId: "53352373420350",
    details: {
      whatYouGet: ["Rare & retired set suppliers", "Bulk Lego wholesalers", "Collector-focused sources", "Instant email delivery after purchase"],
      bestFor: "Resellers in the toy & collectibles niche — one of the highest ROI categories.",
      avgProfit: "$250–$700/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 11,
    name: "Clothing Supplier",
    badge: "POPULAR",
    badgeColor: "bg-emerald-500 text-white",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "👕",
    gradient: "from-green-900/30 to-lime-900/30",
    description: "Wholesale clothing suppliers for all styles. Streetwear, basics, and boutique fits.",
    tags: ["Streetwear", "Basics", "Boutique"],
    shopifyUrl: `${CHECKOUT}/53352387281214:1`,
    variantId: "53352387281214",
    details: {
      whatYouGet: ["Streetwear wholesalers", "Basic & essential clothing sources", "Boutique style suppliers", "Instant email delivery after purchase"],
      bestFor: "Resellers who want to flip everyday clothing across all demographics.",
      avgProfit: "$200–$500/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 12,
    name: "Cologne Supplier",
    badge: null,
    badgeColor: "",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "🧴",
    gradient: "from-zinc-800/60 to-neutral-800/60",
    description: "Designer & niche fragrance suppliers. Cologne resale is booming — get in early.",
    tags: ["Designer", "Niche", "Fragrance"],
    shopifyUrl: `${CHECKOUT}/53352373420350:1`,
    variantId: "53352373420350",
    details: {
      whatYouGet: ["Designer fragrance wholesalers", "Niche & indie perfume sources", "High-margin cologne suppliers", "Instant email delivery after purchase"],
      bestFor: "Resellers getting into fragrance — booming niche with loyal repeat customers.",
      avgProfit: "$150–$400/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 13,
    name: "LazzzyPodz Supplier",
    badge: "EXCLUSIVE",
    badgeColor: "bg-green-400 text-black",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "🎵",
    gradient: "from-green-900/40 to-emerald-900/40",
    description: "AirPods & wireless earbud suppliers at wholesale pricing. Our exclusive LazzzyPodz source.",
    tags: ["AirPods", "Wireless", "Exclusive"],
    shopifyUrl: `${CHECKOUT}/53342886986046:1`,
    variantId: "53342886986046",
    details: {
      whatYouGet: ["AirPods-compatible wholesalers", "Wireless earbud suppliers", "Exclusive LazzzyPodz source access", "Instant email delivery after purchase"],
      bestFor: "Resellers targeting audio accessories — fast-selling, affordable to source.",
      avgProfit: "$150–$350/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
];

// Builds a Shopify cart permalink with all items pre-loaded, then redirects to checkout
function buildShopifyCheckoutUrl(cartItems: { variantId: string | null; qty: number; shopifyUrl: string }[]): string {
  const itemsWithVariant = cartItems.filter((i) => i.variantId);
  if (itemsWithVariant.length === 0) {
    // Fallback: open the first item's product page if no variant IDs are set yet
    return cartItems[0]?.shopifyUrl ?? `https://${SHOPIFY_STORE}`;
  }
  const cartParam = itemsWithVariant.map((i) => `${i.variantId}:${i.qty}`).join(",");
  return `https://${SHOPIFY_STORE}/cart/${cartParam}`;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  qty: number;
  variantId: string | null;
  shopifyUrl: string;
}

const proofSlides = [
  {
    img: "/haul-tech.jpeg",
    label: "Tech & Electronics Haul",
    caption: "AirPods, headphones & more — bulk lot",
    name: "Marcus T.",
    location: "Atlanta, GA",
    profit: "+$2,000+",
    niche: "Electronics Supplier",
    quote: "Whole room covered in boxes. AirPods Max alone go for $300+ each. This supplier is insane.",
  },
  {
    img: "/haul-sneakers.jpeg",
    label: "Sneaker Haul",
    caption: "Dior, ASICS, New Balance — wholesale",
    name: "Trey M.",
    location: "Dallas, TX",
    profit: "+$1,400+",
    niche: "Shoe Supplier",
    quote: "9 pairs of heat came through. Dior B22s, ASICS, New Balance. Flipped every single one.",
  },
  {
    img: "/haul-jewelry.jpeg",
    label: "Van Cleef Jewelry Haul",
    caption: "8 Van Cleef & Arpels pieces, boxed",
    name: "Aaliyah S.",
    location: "Miami, FL",
    profit: "+$1,800+",
    niche: "Moissanite Supplier",
    quote: "Van Cleef bracelets with auth cards and bags. Sold all 8 pieces in under a week.",
  },
  {
    img: "/haul-cologne.jpeg",
    label: "Designer Cologne Haul",
    caption: "Valentino, Chanel, YSL, Creed, Dior & more",
    name: "Devon K.",
    location: "Chicago, IL",
    profit: "+$1,500+",
    niche: "Cologne Supplier",
    quote: "Valentino alone flipped for $80 each. Made my money back day one off this cologne haul.",
  },
  {
    img: "/haul-bags.webp",
    label: "Designer Bag Haul",
    caption: "12 Coach bags, boxed & ready to flip",
    name: "Jasmine R.",
    location: "Houston, TX",
    profit: "+$850",
    niche: "Designer Bag Supplier",
    quote: "Got 12 Coach bags in the mail. Listed same day, sold 8 within 48 hours.",
  },
  {
    img: "/haul-hoodies.jpeg",
    label: "SP5DER Hoodie Haul",
    caption: "Bulk SP5DER hoodies — resale ready",
    name: "Jordan P.",
    location: "New York, NY",
    profit: "+$600+",
    niche: "Spy Hoodie Supplier",
    quote: "Flipped all 3 hoodies in one weekend on Instagram. The hoodie supplier is the real deal.",
  },
];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [detailProduct, setDetailProduct] = useState<typeof products[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % proofSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: product.id, name: product.name, price: product.salePrice, emoji: product.emoji, qty: 1, variantId: product.variantId ?? null, shopifyUrl: product.shopifyUrl }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i)
        .filter((i) => i.qty > 0)
    );
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Scrolling Ticker */}
      <div className="bg-green-500 text-black py-2 text-sm font-bold tracking-wide overflow-hidden whitespace-nowrap">
        <div className="flex animate-ticker">
          {[
            "🔥 LIMITED TIME — 50% OFF ELITE BUNDLE",
            "⚡ INSTANT DIGITAL DELIVERY",
            "🏆 10,000+ HAPPY RESELLERS",
            "💰 START FLIPPING THIS WEEK",
            "🔒 SECURE CHECKOUT",
            "📦 ALL CATEGORIES COVERED",
            "✅ VETTED SUPPLIERS ONLY",
            "🔥 LIMITED TIME — 50% OFF ELITE BUNDLE",
            "⚡ INSTANT DIGITAL DELIVERY",
            "🏆 10,000+ HAPPY RESELLERS",
            "💰 START FLIPPING THIS WEEK",
            "🔒 SECURE CHECKOUT",
            "📦 ALL CATEGORIES COVERED",
            "✅ VETTED SUPPLIERS ONLY",
          ].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-8">
              {item}
              <span className="opacity-40 mx-2">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-green-400">Lazzzy</span><span className="text-white">Vendors</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <a href="#products" className="hover:text-white transition-colors">Products</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors"
            >
              <ShoppingCart size={16} />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center relative">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Zap size={12} />
            #1 Reseller Supplier Source
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight mb-6">
            Start Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Reselling
            </span>
            <br />
            Journey Today
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Access premium supplier directories that took years to build — at a fraction of what others charge.
            Start flipping products and making profit <span className="text-white font-semibold">this week</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-green-500/20"
            >
              Shop Suppliers <ChevronRight size={20} />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              How It Works
            </a>
          </div>
          {/* Trust stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { value: "10,000+", label: "Happy Resellers" },
              { value: "⚡ Instant", label: "Digital Delivery" },
              { value: "$0 Hidden", label: "Fees Ever" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-green-400">{stat.value}</div>
                <div className="text-zinc-500 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">How It Works</h2>
            <p className="text-zinc-400">Three simple steps to start making money</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Package size={28} />, step: "01", title: "Buy a Supplier List", desc: "Choose the supplier package that fits your niche. Instant checkout via secure payment." },
              { icon: <Zap size={28} />, step: "02", title: "Get Links Instantly", desc: "Receive supplier links directly to your email within seconds of purchase." },
              { icon: <TrendingUp size={28} />, step: "03", title: "Start Flipping", desc: "Source products at wholesale, sell at retail. Keep 100% of your profits." },
            ].map((step) => (
              <div key={step.step} className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/40 transition-colors group">
                <div className="text-green-400/20 font-black text-6xl absolute top-4 right-6 leading-none select-none">{step.step}</div>
                <div className="text-green-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Supplier Packages</h2>
            <p className="text-zinc-400">Digital delivery — access within seconds of purchase</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {products.map((p) => {
              return (
                <div
                  key={p.id}
                  className="relative rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  style={{ background: "#111", border: "1px solid #222", boxShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
                >
                  {/* Top banner — bold italic name like Shopify store */}
                  <div
                    className="px-3 pt-3 pb-2 text-center"
                    style={{
                      background: "repeating-linear-gradient(45deg,#0a0a0a,#0a0a0a 3px,#0e0e0e 3px,#0e0e0e 6px)",
                    }}
                  >
                    <span
                      className="font-black uppercase italic text-green-400 leading-tight block"
                      style={{ fontSize: "clamp(0.7rem, 2.5vw, 1rem)", textShadow: "0 0 12px rgba(74,222,128,0.6)", lineHeight: 1.15 }}
                    >
                      {p.name.split(" ").slice(0, Math.ceil(p.name.split(" ").length / 2)).join(" ")}
                    </span>
                    <span
                      className="font-black uppercase italic text-white leading-tight block"
                      style={{ fontSize: "clamp(0.75rem, 2.8vw, 1.05rem)", lineHeight: 1.15 }}
                    >
                      {p.name.split(" ").slice(Math.ceil(p.name.split(" ").length / 2)).join(" ")}
                    </span>
                  </div>

                  {/* Emoji + SALE badge */}
                  <div
                    className="relative flex items-center justify-center py-4 text-6xl sm:text-7xl"
                    style={{
                      background: "repeating-linear-gradient(45deg,#0a0a0a,#0a0a0a 3px,#0e0e0e 3px,#0e0e0e 6px)",
                      minHeight: "110px",
                    }}
                  >
                    <span className="drop-shadow-xl">{p.emoji}</span>
                    {p.badge && (
                      <div className="absolute bottom-2 right-2 bg-green-400 text-black text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                        {p.badge}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3 flex flex-col gap-2 flex-1" style={{ background: "#111" }}>
                    <p className="font-black uppercase text-white text-xs sm:text-sm leading-tight">
                      {p.name}
                    </p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-black text-green-400 text-base sm:text-lg">${p.salePrice.toFixed(2)}</span>
                      <span className="text-zinc-500 text-xs line-through">${p.regularPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-1.5 mt-auto">
                      <button
                        onClick={() => setDetailProduct(p)}
                        className="flex items-center justify-center rounded-lg transition-all hover:brightness-125 shrink-0"
                        style={{ background: "#222", border: "1px solid #333", width: "36px", height: "36px" }}
                        title="View details"
                      >
                        <ShoppingCart size={14} className="text-zinc-300" />
                      </button>
                      {p.shopifyUrl ? (
                        <a
                          href={p.shopifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 block text-center font-black py-2 rounded-lg text-xs sm:text-sm transition-all hover:brightness-110 active:scale-95 uppercase tracking-wide"
                          style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#000", boxShadow: "0 2px 10px rgba(34,197,94,0.3)" }}
                        >
                          Get Access
                        </a>
                      ) : (
                        <button disabled className="flex-1 bg-zinc-800 text-zinc-500 font-black py-2 rounded-lg text-xs uppercase cursor-not-allowed">
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={24} />,
                title: "Instant Delivery",
                desc: "Supplier links are sent to your email the moment your payment is confirmed — no waiting.",
              },
              {
                icon: <Shield size={24} />,
                title: "Secure Checkout",
                desc: "Payments processed through encrypted secure checkout. Your info is always protected.",
              },
              {
                icon: <Award size={24} />,
                title: "Vetted Suppliers",
                desc: "Every supplier on our list has been personally tested and verified for quality & reliability.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="text-green-400 mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller Proof — 4-Phone Haul Slideshow */}
      <section className="py-20 border-t border-white/10 overflow-hidden" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">What Our Customers Say</h2>
            <p className="text-zinc-400">Real haul photos from resellers using our supplier lists</p>
          </div>

          {/* 4-phone row — slides as a group */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(calc(-${slideIndex} * (100% / 4 + 6px)))` }}
              >
                {/* Render all slides, 4 visible at a time on desktop */}
                {proofSlides.map((slide, i) => {
                  const isActive = i === slideIndex || i === slideIndex + 1 || i === slideIndex + 2 || i === slideIndex + 3;
                  return (
                    <div
                      key={i}
                      onClick={() => setSlideIndex(i)}
                      className="flex-shrink-0 cursor-pointer transition-all duration-500"
                      style={{ width: "calc(25% - 18px)", minWidth: "200px" }}
                    >
                      {/* Phone shell */}
                      <div
                        className="relative overflow-hidden shadow-2xl mx-auto"
                        style={{
                          borderRadius: "2.8rem",
                          border: "3px solid #2a2a2a",
                          background: "#0a0a0a",
                          aspectRatio: "9/19",
                          maxWidth: "220px",
                          opacity: isActive ? 1 : 0.3,
                        }}
                      >
                        {/* Dynamic island */}
                        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-20" />
                        {/* Status bar */}
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-3 z-10">
                          <span className="text-white text-[10px] font-semibold">9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="flex gap-[2px] items-end">
                              {[3,5,7,9].map((h,j) => <div key={j} className="w-[3px] bg-white rounded-sm" style={{height:`${h}px`}} />)}
                            </div>
                            <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                            <div className="w-5 h-2.5 border border-white/50 rounded-sm flex items-center px-[2px]"><div className="bg-white h-[7px] rounded-sm" style={{width:"70%"}} /></div>
                          </div>
                        </div>

                        {/* Haul photo fills screen */}
                        <img src={slide.img} alt={slide.label} className="absolute inset-0 w-full h-full object-cover" />

                        {/* Gradient overlay bottom */}
                        <div className="absolute inset-x-0 bottom-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 50%, transparent)" }}>
                          <div className="px-3 pb-5 pt-10">
                            <div className="text-green-400 font-black text-lg leading-none mb-1">{slide.profit}</div>
                            <div className="text-white font-bold text-[11px] leading-tight">{slide.label}</div>
                            <div className="text-zinc-500 text-[10px] mt-0.5 leading-tight">{slide.caption}</div>
                          </div>
                        </div>

                        {/* "REAL HAUL" badge top right */}
                        <div className="absolute top-9 right-2.5 z-20 bg-green-400 text-black text-[9px] font-black px-2 py-0.5 rounded-full">
                          REAL HAUL
                        </div>
                      </div>

                      {/* Name + stars below each phone */}
                      <div className="mt-3 text-center px-2">
                        <div className="flex justify-center gap-0.5 mb-1">
                          {Array.from({length:5}).map((_,j) => <Star key={j} size={10} className="fill-green-400 text-green-400" />)}
                        </div>
                        <div className="text-white font-bold text-xs">{slide.name}</div>
                        <div className="text-zinc-500 text-[10px]">{slide.location}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Arrow buttons */}
            <button
              onClick={() => setSlideIndex((p) => Math.max(0, p - 1))}
              disabled={slideIndex === 0}
              className="absolute -left-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-2xl transition-all disabled:opacity-20 z-10"
            >‹</button>
            <button
              onClick={() => setSlideIndex((p) => Math.min(proofSlides.length - 1, p + 1))}
              disabled={slideIndex >= proofSlides.length - 1}
              className="absolute -right-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-2xl transition-all disabled:opacity-20 z-10"
            >›</button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {proofSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`rounded-full transition-all duration-300 ${i === slideIndex ? "bg-green-400 w-6 h-2" : "bg-white/20 w-2 h-2 hover:bg-white/40"}`}
              />
            ))}
          </div>

          {/* Scrolling haul strip */}
          <div className="overflow-hidden mt-12">
            <div className="flex animate-ticker gap-4">
              {[...proofSlides, ...proofSlides].map((slide, i) => (
                <div key={i} className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center min-w-[240px]">
                  <img src={slide.img} alt={slide.label} className="w-16 h-16 object-cover flex-shrink-0" />
                  <div className="px-4 py-3">
                    <div className="font-bold text-xs text-white">{slide.label}</div>
                    <div className="text-green-400 font-black text-base">{slide.profit}</div>
                    <div className="text-zinc-500 text-[10px]">{slide.niche}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">FAQ</h2>
            <p className="text-zinc-400">Got questions? We got answers.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How do I receive my supplier links?", a: "Immediately after purchase, supplier links are sent to the email you used at checkout. Check spam if you don't see it within 5 minutes." },
              { q: "Is this a subscription?", a: "Some packages are offered as a one-time or subscription purchase. The product page will clearly state if it's recurring." },
              { q: "Can I resell what I source from these suppliers?", a: "Yes — that's the entire point. Source wholesale, sell retail, keep 100% of your margins." },
              { q: "What if the supplier links don't work?", a: "All suppliers are vetted and updated regularly. If you experience any issues, contact us and we'll make it right immediately." },
              { q: "Is there a refund policy?", a: "Due to the digital nature of the products, all sales are final. We stand behind the quality of every supplier on our list." },
            ].map((item) => (
              <details key={item.q} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-sm select-none hover:text-green-400 transition-colors">
                  {item.q}
                  <ChevronRight size={16} className="flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
            <h2 className="text-4xl sm:text-5xl font-black mb-4 relative">
              Ready to Start{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Winning
              </span>
              ?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 relative">
              Join thousands of resellers already using LazzzyVendors to build their income.
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-2xl shadow-green-500/30 relative"
            >
              Shop Suppliers Now <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section id="policy" className="py-20 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Policies</h2>
            <p className="text-zinc-400">Please read before purchasing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* What You're Buying */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">📦</div>
                <h3 className="font-black text-base">What You're Purchasing</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                All products sold on LazzzyVendors are <span className="text-white font-semibold">digital supplier directories</span> — lists of vetted wholesale supplier links, contacts, and sourcing resources delivered electronically. You are not purchasing physical goods, inventory, or guaranteed profit. You are purchasing access to supplier information.
              </p>
            </div>

            {/* Delivery Policy */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">⚡</div>
                <h3 className="font-black text-base">Digital Delivery</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                All supplier links are delivered <span className="text-white font-semibold">instantly via email</span> to the address provided at checkout — typically within seconds of payment confirmation. Please check your spam/junk folder if not received within 5 minutes. LazzzyVendors is not responsible for delivery failures due to incorrect email addresses entered at checkout.
              </p>
            </div>

            {/* Refund Policy */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">🚫</div>
                <h3 className="font-black text-base">No Refund Policy</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Due to the <span className="text-white font-semibold">instant digital nature</span> of our products, <span className="text-white font-semibold">all sales are final</span>. No refunds, exchanges, or chargebacks will be issued once supplier links have been delivered. By completing a purchase you acknowledge that you have read and agree to this policy. If you experience a technical issue with your order, contact us and we will resolve it promptly.
              </p>
            </div>

            {/* Usage Policy */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">✅</div>
                <h3 className="font-black text-base">Permitted Use</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Supplier directories are for <span className="text-white font-semibold">personal reselling use only</span>. You may not redistribute, resell, share, or publicly publish the supplier links or information provided. Each purchase is licensed to one individual buyer. Violations may result in permanent account termination and legal action.
              </p>
            </div>

            {/* Results Disclaimer */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400">⚠️</div>
                <h3 className="font-black text-base">Results Disclaimer</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Profit figures and testimonials shown are examples of real customer results and are not guarantees. Individual results will vary based on effort, market conditions, and business decisions. LazzzyVendors provides supplier access only — <span className="text-white font-semibold">your results depend entirely on how you use the information</span>.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">💬</div>
                <h3 className="font-black text-base">Support & Contact</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                For order issues, missing links, or questions about your purchase, reach out via our support channel. We aim to respond within <span className="text-white font-semibold">24 hours</span>. Please include your order number and the email used at checkout. We stand behind every supplier list and will make it right if something isn't working.
              </p>
            </div>

          </div>
          <p className="text-center text-zinc-600 text-xs mt-10">
            By purchasing from LazzzyVendors you confirm you are 18+ and agree to all policies listed above. Last updated April 2026.
          </p>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 border-t border-white/10 bg-black">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Follow Us on Instagram</h2>
          <p className="text-zinc-400 text-sm mb-6">See real hauls, supplier previews & reseller tips daily</p>
          <a
            href="https://www.instagram.com/lazzzvendors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 text-white font-black px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @lazzzvendors
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-black tracking-tighter text-lg">
            <span className="text-green-400">Lazzzy</span><span className="text-white">Vendors</span>
          </div>
          <p className="text-zinc-600 text-sm">© 2026 LazzzyVendors. All rights reserved.</p>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <a href="#policy" className="hover:text-white transition-colors">Terms</a>
            <a href="#policy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#policy" className="hover:text-white transition-colors">Contact</a>
            <a href="https://www.instagram.com/lazzzvendors" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-md bg-[#111] border-l border-white/10 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="font-black text-lg">Your Cart {cartCount > 0 && <span className="text-green-400">({cartCount})</span>}</h2>
              <button onClick={() => setCartOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-zinc-500">
                  <ShoppingCart size={40} className="mx-auto mb-3 opacity-30" />
                  <p>Your cart is empty</p>
                  <button onClick={() => setCartOpen(false)} className="mt-4 text-green-400 text-sm font-semibold hover:underline">
                    Browse Suppliers
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center bg-black/30 rounded-lg flex-shrink-0">
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm leading-tight truncate">{item.name}</div>
                      <div className="text-green-400 font-bold text-sm mt-0.5">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-5 text-center font-bold text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="px-6 py-4 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="font-black text-xl">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-xs font-semibold">
                  <Zap size={12} />
                  Instant digital delivery after checkout
                </div>
                <a
                  href={buildShopifyCheckoutUrl(cart.map((i) => ({ variantId: i.variantId, qty: i.qty, shopifyUrl: i.shopifyUrl })))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-green-500 hover:bg-green-400 text-black font-black py-4 rounded-xl text-base transition-all hover:scale-[1.02] active:scale-95"
                >
                  Checkout — ${cartTotal.toFixed(2)}
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {detailProduct && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDetailProduct(null)} />
          <div className="relative w-full sm:max-w-lg bg-[#111] border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className={`bg-gradient-to-br ${detailProduct.gradient} px-6 pt-6 pb-8`}>
              <div className="flex items-start justify-between mb-4">
                {detailProduct.badge && (
                  <span className={`${detailProduct.badgeColor} text-xs font-black px-2.5 py-1 rounded-full`}>
                    {detailProduct.badge}
                  </span>
                )}
                <button
                  onClick={() => setDetailProduct(null)}
                  className="ml-auto text-white/60 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-5xl w-16 h-16 flex items-center justify-center bg-black/30 rounded-2xl flex-shrink-0">
                  {detailProduct.emoji}
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">{detailProduct.name}</h2>
                  <p className="text-white/60 text-sm mt-0.5">{detailProduct.description}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-5 max-h-[55vh] overflow-y-auto">
              {/* What you get */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-green-400 mb-3">What You Get</h3>
                <ul className="space-y-2">
                  {detailProduct.details.whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-xs text-zinc-500 mb-1">Avg. Monthly Profit</div>
                  <div className="text-green-400 font-black text-sm">{detailProduct.details.avgProfit}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-xs text-zinc-500 mb-1">Delivery</div>
                  <div className="text-white font-bold text-xs leading-tight">{detailProduct.details.delivery}</div>
                </div>
              </div>

              {/* Best for */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="text-xs font-black uppercase tracking-widest text-green-400 mb-1">Best For</div>
                <p className="text-zinc-300 text-sm leading-relaxed">{detailProduct.details.bestFor}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {detailProduct.tags.map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer actions */}
            <div className="px-6 py-4 border-t border-white/10 flex gap-3">
              <button
                onClick={() => {
                  addToCart(detailProduct);
                  setDetailProduct(null);
                }}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-sm transition-all"
              >
                Add to Cart
              </button>
              <a
                href={detailProduct.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block text-center bg-green-500 hover:bg-green-400 text-black font-black py-3 rounded-xl text-sm transition-all"
              >
                Buy Now — ${detailProduct.salePrice.toFixed(2)}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
