"use client";

import { useState } from "react";
import { ShoppingCart, X, Plus, Minus, Zap, Shield, Star, ChevronRight, Package, TrendingUp, Award } from "lucide-react";

const SHOPIFY_STORE = "lazzzyresells.myshopify.com";
const BASE = `https://${SHOPIFY_STORE}/products`;

// To find a variant ID: Shopify Admin → Products → click product → click variant → copy the number from the URL
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
    shopifyUrl: `${BASE}/2026`,
    variantId: null, // ← replace with your Shopify variant ID e.g. 12345678901234
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
    shopifyUrl: `${BASE}/all`,
    variantId: null,
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
    shopifyUrl: `${BASE}/shoes`,
    variantId: null,
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
    shopifyUrl: `${BASE}/other-example-product-4`,
    variantId: null,
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
    shopifyUrl: `${BASE}/jewelry`,
    variantId: null,
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
    shopifyUrl: `${BASE}/spider-t`,
    variantId: null,
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
    shopifyUrl: `${BASE}/other-example-product-1`,
    variantId: null,
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
    shopifyUrl: `${BASE}/lulu`,
    variantId: null,
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
    shopifyUrl: `${BASE}/other-example-product-2`,
    variantId: null,
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
    shopifyUrl: `${BASE}/cologne`,
    variantId: null,
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
    shopifyUrl: `${BASE}/clothing`,
    variantId: null,
  },
  {
    id: 12,
    name: "Cologne Supplier",
    badge: null,
    badgeColor: "",
    regularPrice: 20.00,
    salePrice: 14.99,
    emoji: "COLOGNE",
    gradient: "from-zinc-800/60 to-neutral-800/60",
    description: "Designer & niche fragrance suppliers. Cologne resale is booming — get in early.",
    tags: ["Designer", "Niche", "Fragrance"],
    shopifyUrl: `${BASE}/cologne`,
    variantId: null,
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
    shopifyUrl: `${BASE}/other-example-product-3`,
    variantId: null,
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

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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
      {/* Announcement Bar */}
      <div className="bg-green-500 text-black text-center py-2 text-sm font-bold tracking-wide">
        🔥 LIMITED TIME — 50% OFF ELITE BUNDLE &nbsp;|&nbsp; INSTANT DIGITAL DELIVERY ⚡
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
                  className={`relative bg-gradient-to-br ${p.gradient} border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all hover:-translate-y-1 group`}
                >
                  {p.badge && (
                    <div className={`absolute top-3 left-3 z-10 ${p.badgeColor} text-xs font-black px-2.5 py-1 rounded-full`}>
                      {p.badge}
                    </div>
                  )}
                  <div className="flex items-center justify-center h-44 text-7xl bg-black/30">
                    {p.emoji === "COLOGNE" ? (
                      <svg width="72" height="88" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* cap */}
                        <rect x="26" y="2" width="20" height="10" rx="3" fill="#4ade80" />
                        {/* neck */}
                        <rect x="30" y="12" width="12" height="8" rx="2" fill="#86efac" />
                        {/* spray nozzle */}
                        <rect x="42" y="14" width="10" height="4" rx="2" fill="#4ade80" />
                        {/* body */}
                        <rect x="18" y="20" width="36" height="56" rx="8" fill="#166534" />
                        {/* shine */}
                        <rect x="24" y="28" width="6" height="24" rx="3" fill="#4ade80" opacity="0.3" />
                        {/* label */}
                        <rect x="22" y="38" width="28" height="22" rx="4" fill="#14532d" />
                        <rect x="24" y="41" width="24" height="2" rx="1" fill="#4ade80" opacity="0.7" />
                        <rect x="26" y="46" width="20" height="1.5" rx="1" fill="#4ade80" opacity="0.4" />
                        <rect x="26" y="50" width="16" height="1.5" rx="1" fill="#4ade80" opacity="0.4" />
                        {/* base */}
                        <rect x="20" y="74" width="32" height="4" rx="2" fill="#15803d" />
                      </svg>
                    ) : (
                      p.emoji
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-base leading-tight mb-1">{p.name}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {p.tags.map((tag) => (
                        <span key={tag} className="bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-medium px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-green-400">${p.salePrice.toFixed(2)}</span>
                        <span className="text-zinc-500 text-sm line-through">${p.regularPrice.toFixed(2)}</span>
                      </div>
                      <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">
                        -{discount}%
                      </span>
                    </div>
                    {p.shopifyUrl ? (
                      <a
                        href={p.shopifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center bg-green-500 hover:bg-green-400 text-black font-black py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02] active:scale-95"
                      >
                        Buy Now
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-zinc-700 text-zinc-400 font-black py-2.5 rounded-xl text-sm cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
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

      {/* Testimonials */}
      <section className="py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Real Results</h2>
            <p className="text-zinc-400">From resellers just like you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Marcus T.", location: "Atlanta, GA", text: "Made back the cost of the bundle in my first week. The shoe supplier alone was worth it. Already up $400.", stars: 5 },
              { name: "Jasmine R.", location: "Houston, TX", text: "The all-in-one supplier changed everything. I'm sourcing 6 different product types now. Best $25 I've ever spent.", stars: 5 },
              { name: "Devon K.", location: "Chicago, IL", text: "Was skeptical at first but the links came instantly and every supplier checked out. Flipped $300 profit first month.", stars: 5 },
            ].map((review) => (
              <div key={review.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-green-400 text-green-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-zinc-500 text-xs">{review.location}</div>
                </div>
              </div>
            ))}
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
                <button className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-4 rounded-xl text-base transition-all hover:scale-[1.02] active:scale-95">
                  Checkout — ${cartTotal.toFixed(2)}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
