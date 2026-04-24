"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, X, Plus, Minus, Zap, Shield, Star, ChevronRight, Package, TrendingUp, Award, Info } from "lucide-react";
import {
  AllInOneIcon, BundleIcon, ShoeIcon, WatchIcon, JewelryIcon,
  HoodieIcon, EarbudsIcon, DressIcon, HandbagIcon, LegoIcon,
  ShirtIcon, CologneIconSVG, PodsIcon,
} from "@/components/NeonProductIcons";

const iconMap: Record<number, () => React.ReactElement> = {
  1: AllInOneIcon, 2: BundleIcon, 3: ShoeIcon, 4: WatchIcon,
  5: JewelryIcon, 6: HoodieIcon, 7: EarbudsIcon, 8: DressIcon,
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
    name: "Spy Hoodie Supplier",
    badge: null,
    badgeColor: "",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "🧥",
    gradient: "from-zinc-800/60 to-neutral-800/60",
    description: "Trending spy/tactical hoodies. High demand streetwear niche.",
    tags: ["Hoodies", "Streetwear", "Tactical"],
    shopifyUrl: `${CHECKOUT}/53352380662078:1`,
    variantId: "53352380662078",
    details: {
      whatYouGet: ["Spy/tactical hoodie wholesalers", "Trending streetwear sources", "TikTok-viral style suppliers", "Instant email delivery after purchase"],
      bestFor: "Resellers targeting streetwear & viral fashion trends.",
      avgProfit: "$150–$350/mo",
      delivery: "Instant — links sent to your email within seconds",
    },
  },
  {
    id: 7,
    name: "Earbudz Supplier",
    badge: null,
    badgeColor: "",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "🎧",
    gradient: "from-zinc-800/60 to-neutral-800/60",
    description: "Wireless earbuds & audio accessories at wholesale prices.",
    tags: ["Earbuds", "Audio", "Tech"],
    shopifyUrl: `${CHECKOUT}/53342886854974:1`,
    variantId: "53342886854974",
    details: {
      whatYouGet: ["Wireless earbud wholesalers", "Audio accessory suppliers", "Budget to mid-range sources", "Instant email delivery after purchase"],
      bestFor: "Resellers in tech accessories — fast-moving, repeat buyers.",
      avgProfit: "$100–$300/mo",
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

const resellSlides = [
  {
    emoji: "👟",
    name: "Marcus T.",
    location: "Atlanta, GA",
    profit: "+$400",
    product: "Shoe Supplier",
    text: "Made back the cost of the bundle in my first week. The shoe supplier alone was worth it.",
    bg: "from-green-900/60 to-emerald-900/40",
  },
  {
    emoji: "👗",
    name: "Jasmine R.",
    location: "Houston, TX",
    profit: "+$850",
    product: "All-In-One Supplier",
    text: "The all-in-one supplier changed everything. I'm sourcing 6 different product types now.",
    bg: "from-teal-900/60 to-green-900/40",
  },
  {
    emoji: "👜",
    name: "Devon K.",
    location: "Chicago, IL",
    profit: "+$300",
    product: "Designer Bag Supplier",
    text: "Was skeptical at first but every supplier checked out. Flipped $300 profit first month.",
    bg: "from-emerald-900/60 to-lime-900/40",
  },
  {
    emoji: "⌚",
    name: "Trey M.",
    location: "Dallas, TX",
    profit: "+$620",
    product: "Watch Supplier",
    text: "Watch resale is underrated. Got my first 10 orders within 3 days using the supplier list.",
    bg: "from-green-900/60 to-teal-900/40",
  },
  {
    emoji: "💍",
    name: "Aaliyah S.",
    location: "Miami, FL",
    profit: "+$1,100",
    product: "Moissanite Supplier",
    text: "Jewelry resale is insane right now. I'm doing $1k+ months just on moissanite pieces.",
    bg: "from-lime-900/50 to-emerald-900/50",
  },
  {
    emoji: "🧥",
    name: "Jordan P.",
    location: "New York, NY",
    profit: "+$540",
    product: "Spy Hoodie Supplier",
    text: "The spy hoodie niche is blowing up on TikTok. This supplier list is the real deal.",
    bg: "from-zinc-800/70 to-green-900/40",
  },
];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [detailProduct, setDetailProduct] = useState<typeof products[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % resellSlides.length);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p) => {
              const discount = Math.round((1 - p.salePrice / p.regularPrice) * 100);
              return (
                <div
                  key={p.id}
                  className="relative rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group"
                  style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
                >
                  {/* Top banner with product name */}
                  <div className="relative px-4 pt-4 pb-2"
                    style={{
                      background: "radial-gradient(ellipse at top, #0f2010 0%, #050505 70%)",
                      backgroundImage: "radial-gradient(ellipse at top, #0f2010 0%, #050505 70%), repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.015) 4px, rgba(255,255,255,0.015) 5px)",
                    }}
                  >
                    <h3 className="text-center font-black uppercase text-green-400 text-lg tracking-wide leading-tight drop-shadow-lg"
                      style={{ textShadow: "0 0 20px rgba(74,222,128,0.5)" }}>
                      {p.name}
                    </h3>
                  </div>

                  {/* Emoji icon area */}
                  <div className="flex items-center justify-center py-6 text-8xl"
                    style={{
                      background: "repeating-linear-gradient(45deg, #0a0a0a, #0a0a0a 4px, #0d0d0d 4px, #0d0d0d 8px)",
                    }}
                  >
                    {p.badge && (
                      <div className={`absolute top-12 right-3 z-10 ${p.badgeColor} text-xs font-black px-2.5 py-1 rounded-full shadow-lg`}>
                        {p.badge}
                      </div>
                    )}
                    <span className="drop-shadow-2xl">{p.emoji}</span>
                  </div>

                  {/* Bottom info */}
                  <div className="p-4" style={{ background: "#0d0d0d" }}>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-black text-green-400">${p.salePrice.toFixed(2)}</span>
                      <span className="text-zinc-500 text-sm line-through">${p.regularPrice.toFixed(2)}</span>
                      <span className="ml-auto bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-md">
                        -{discount}%
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {p.shopifyUrl ? (
                        <a
                          href={p.shopifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 block text-center font-black py-3 rounded-xl text-sm transition-all hover:brightness-110 active:scale-95 uppercase tracking-wide"
                          style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", color: "#000", boxShadow: "0 2px 12px rgba(34,197,94,0.35)" }}
                        >
                          Get Access
                        </a>
                      ) : (
                        <button disabled className="flex-1 bg-zinc-800 text-zinc-500 font-black py-3 rounded-xl text-sm cursor-not-allowed uppercase">
                          Coming Soon
                        </button>
                      )}
                      <button
                        onClick={() => setDetailProduct(p)}
                        className="flex items-center justify-center w-12 rounded-xl transition-all hover:brightness-125"
                        style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
                        title="View details"
                      >
                        <Info size={16} className="text-zinc-400" />
                      </button>
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

      {/* Reseller Proof Carousel */}
      <section className="py-20 border-t border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Real Results</h2>
            <p className="text-zinc-400">Resellers flipping right now with our supplier lists</p>
          </div>

          {/* Main carousel */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="relative h-72 sm:h-64">
              {resellSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${slide.bg} border border-white/10 p-8 flex flex-col justify-between transition-all duration-700 ${
                    i === slideIndex
                      ? "opacity-100 translate-x-0 z-10"
                      : i === (slideIndex - 1 + resellSlides.length) % resellSlides.length
                      ? "opacity-0 -translate-x-12 z-0"
                      : "opacity-0 translate-x-12 z-0"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={14} className="fill-green-400 text-green-400" />
                      ))}
                    </div>
                    <div className="text-4xl">{slide.emoji}</div>
                  </div>
                  <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                    "{slide.text}"
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-bold text-sm">{slide.name}</div>
                      <div className="text-zinc-400 text-xs">{slide.location} · {slide.product}</div>
                    </div>
                    <div className="text-green-400 font-black text-2xl">{slide.profit}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {resellSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === slideIndex ? "bg-green-400 w-6 h-2" : "bg-white/20 w-2 h-2 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scrolling proof strip below */}
          <div className="overflow-hidden mt-4">
            <div className="flex animate-ticker gap-4">
              {[...resellSlides, ...resellSlides].map((slide, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4 min-w-[260px]"
                >
                  <span className="text-3xl">{slide.emoji}</span>
                  <div>
                    <div className="font-bold text-sm text-white">{slide.name}</div>
                    <div className="text-green-400 font-black text-lg">{slide.profit}</div>
                    <div className="text-zinc-500 text-xs">{slide.product}</div>
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

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-black tracking-tighter text-lg">
            <span className="text-green-400">Lazzzy</span><span className="text-white">Vendors</span>
          </div>
          <p className="text-zinc-600 text-sm">© 2026 LazzzyVendors. All rights reserved.</p>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
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
