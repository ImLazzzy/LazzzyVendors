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

const dmSlides = [
  {
    handle: "Vouches IIII",
    date: "August 20",
    avatarBg: "#7c3aed",
    avatar: "V",
    profit: "+$1,000+",
    vendorTag: "COLOGNE VENDOR",
    productImg: "🧴",
    messages: [
      { side: "left", text: "BIG COLOGNE PACKAGES COMING THRU, BRO FLIPPED THIS FOR ATLEAST $1000 😤" },
      { side: "left", text: "Big package came thru 🙏" },
      { side: "right", text: "hell yea" },
      { side: "right", text: "ts looks good" },
      { side: "right", text: "atleast a 1.5k there if sold correctly" },
    ],
    reactions: ["hell yea", "ts looks 🔥", "good"],
  },
  {
    handle: "Vouches IIII",
    date: "May 16",
    avatarBg: "#7c3aed",
    avatar: "V",
    profit: "+$600+",
    vendorTag: "SP5DER VENDOR",
    productImg: "🧥",
    messages: [
      { side: "left", text: "Yoo I just got 3 hoodies" },
      { side: "left", text: "10/10 QUALITY FROM MY SP5DER VENDOR! 🟩" },
      { side: "right", text: "it's what asap" },
      { side: "right", text: "10/10 Quality bro" },
      { side: "left", text: "yessir" },
    ],
    reactions: ["🔥🔥", "W vendor", "10/10"],
  },
  {
    handle: "Vouches IIII",
    date: "August 18",
    avatarBg: "#7c3aed",
    avatar: "V",
    profit: "+$800+",
    vendorTag: "WATCH VENDOR",
    productImg: "⌚",
    messages: [
      { side: "left", text: "THAT WATCH VENDOR DO NOT PLAY AROUND, BRO GOT THAT AP 🤯" },
      { side: "right", text: "omggg" },
      { side: "right", text: "that's tuff asf" },
      { side: "left", text: "Yea" },
      { side: "right", text: "from my vendor?" },
      { side: "left", text: "shit tuff asf" },
    ],
    reactions: ["W", "omggg 🔥", "tuff asf"],
  },
  {
    handle: "Vouches IIII",
    date: "March 12",
    avatarBg: "#7c3aed",
    avatar: "V",
    profit: "+$500+",
    vendorTag: "SHOE VENDOR",
    productImg: "👟",
    messages: [
      { side: "left", text: "bro the shoe vendor just hit different 🔥" },
      { side: "left", text: "got 4 pairs came in today, flipping all of em" },
      { side: "right", text: "how much you pay per pair?" },
      { side: "left", text: "like $30 selling for $120+ each" },
      { side: "right", text: "THAT'S CRAZY W vendor no cap" },
    ],
    reactions: ["W vendor 🙌", "need this", "facts"],
  },
  {
    handle: "Vouches IIII",
    date: "April 3",
    avatarBg: "#7c3aed",
    avatar: "V",
    profit: "+$1,100",
    vendorTag: "JEWELRY VENDOR",
    productImg: "💍",
    messages: [
      { side: "left", text: "moissanite jewelry vendor is INSANE bro" },
      { side: "left", text: "sold 6 rings this week alone 😭" },
      { side: "right", text: "how much profit?" },
      { side: "left", text: "like $1,100 on the week not even capping" },
      { side: "right", text: "bro that vendor a goldmine fr" },
    ],
    reactions: ["no cap 💎", "W", "need the link"],
  },
  {
    handle: "Vouches IIII",
    date: "January 29",
    avatarBg: "#7c3aed",
    avatar: "V",
    profit: "+$850",
    vendorTag: "BAG VENDOR",
    productImg: "👜",
    messages: [
      { side: "left", text: "designer bag vendor just dropped 🔥🔥" },
      { side: "left", text: "people going CRAZY for these on depop" },
      { side: "right", text: "how fast they moving?" },
      { side: "left", text: "listed 5 bags, 4 sold same day bro" },
      { side: "right", text: "that vendor is crazy W" },
    ],
    reactions: ["same day 🤯", "W vendor", "🔥🔥"],
  },
];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [detailProduct, setDetailProduct] = useState<typeof products[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % dmSlides.length);
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

      {/* Reseller Proof — Phone DM Mockups */}
      <section className="py-20 border-t border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">What Our Customers Say</h2>
            <p className="text-zinc-400">Real DMs from resellers using our supplier lists</p>
          </div>

          {/* Phone mockup carousel */}
          <div className="relative px-8">
            <div className="overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(calc(-${slideIndex} * (min(260px, 42vw) + 20px)))` }}
              >
                {dmSlides.map((slide, i) => {
                  const isActive = i === slideIndex;
                  return (
                    <div
                      key={i}
                      onClick={() => setSlideIndex(i)}
                      className="flex-shrink-0 cursor-pointer transition-all duration-500"
                      style={{ width: "min(260px, 42vw)", opacity: isActive ? 1 : 0.45, transform: isActive ? "scale(1)" : "scale(0.94)" }}
                    >
                      {/* Phone shell */}
                      <div
                        className="relative rounded-[2.2rem] overflow-hidden shadow-2xl"
                        style={{ border: "3px solid #3a3a3c", background: "#1c1c1e", aspectRatio: "9/19.5" }}
                      >
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#1c1c1e] rounded-b-2xl z-10" />
                        {/* Status bar */}
                        <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-[#1c1c1e]">
                          <span className="text-white text-[10px] font-bold">1:11</span>
                          <div className="flex items-center gap-1">
                            <div className="flex gap-[2px] items-end h-3">
                              {[30,50,70,100].map((h, j) => (
                                <div key={j} className="w-[3px] bg-white rounded-sm" style={{ height: `${h * 0.1 + 2}px` }} />
                              ))}
                            </div>
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                            <div className="w-5 h-2.5 border border-white/60 rounded-sm flex items-center px-[2px]">
                              <div className="bg-white h-[7px] rounded-sm" style={{ width: "70%" }} />
                            </div>
                          </div>
                        </div>
                        {/* DM header */}
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#1c1c1e] border-b border-white/10">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                            style={{ background: slide.avatarBg }}
                          >
                            {slide.avatar}
                          </div>
                          <div className="min-w-0">
                            <div className="text-white text-[11px] font-bold flex items-center gap-1">
                              <span className="truncate">{slide.handle}</span>
                              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-blue-400 flex-shrink-0"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                            </div>
                            <div className="text-zinc-500 text-[9px]">{slide.date}</div>
                          </div>
                        </div>
                        {/* Chat body */}
                        <div className="p-2.5 flex flex-col gap-1.5 bg-black" style={{ minHeight: "calc(100% - 88px)" }}>
                          {slide.messages.map((msg, j) => (
                            <div key={j} className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}>
                              <div
                                className="rounded-2xl px-2.5 py-1.5 text-[10px] leading-snug max-w-[80%] font-medium text-white"
                                style={{ background: msg.side === "right" ? "#7c3aed" : "#2a2a2e" }}
                              >
                                {msg.text}
                              </div>
                            </div>
                          ))}
                          {/* Product emoji "photo" */}
                          <div className="flex justify-start mt-1">
                            <div
                              className="rounded-xl w-16 h-14 flex items-center justify-center text-4xl"
                              style={{ background: "#1a1a1a", border: "1px solid #333" }}
                            >
                              {slide.productImg}
                            </div>
                          </div>
                          {/* Vendor tag pill */}
                          <div className="flex justify-center mt-1.5">
                            <div className="flex items-center gap-1 bg-[#1c1c1e] border border-zinc-700 rounded-full px-3 py-1">
                              <span className="text-[10px]">🔗</span>
                              <span className="text-white text-[9px] font-black uppercase tracking-wide">{slide.vendorTag}</span>
                            </div>
                          </div>
                          {/* Reactions */}
                          <div className="flex gap-2 flex-wrap px-1 mt-0.5">
                            {slide.reactions.map((r, j) => (
                              <span key={j} className="text-zinc-400 text-[9px] font-semibold">{r}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Profit badge under phone */}
                      <div className="text-center mt-3">
                        <span className="text-green-400 font-black text-lg">{slide.profit}</span>
                        <div className="text-zinc-500 text-xs mt-0.5">{slide.vendorTag}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={() => setSlideIndex((p) => Math.max(0, p - 1))}
              disabled={slideIndex === 0}
              className="absolute left-0 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-all disabled:opacity-20"
            >‹</button>
            <button
              onClick={() => setSlideIndex((p) => Math.min(dmSlides.length - 1, p + 1))}
              disabled={slideIndex === dmSlides.length - 1}
              className="absolute right-0 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-all disabled:opacity-20"
            >›</button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {dmSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === slideIndex ? "bg-green-400 w-6 h-2" : "bg-white/20 w-2 h-2 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Scrolling profit strip */}
          <div className="overflow-hidden mt-12">
            <div className="flex animate-ticker gap-4">
              {[...dmSlides, ...dmSlides].map((slide, i) => (
                <div key={i} className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4 min-w-[220px]">
                  <span className="text-3xl">{slide.productImg}</span>
                  <div>
                    <div className="font-bold text-sm text-white">{slide.handle}</div>
                    <div className="text-green-400 font-black text-base">{slide.profit}</div>
                    <div className="text-zinc-500 text-xs">{slide.vendorTag}</div>
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
