"use client";

/* ─────────────────────────────────────────────
   PREVIEW PAGE — Product Icon Designs
   Dark bg + green smoke glow + product outline
   Approve before applying to the main site
───────────────────────────────────────────── */

const designs = [
  {
    label: "Cologne Supplier",
    sub: "Dior Sauvage / Designer Frags",
    svg: (
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Green smoke glow */}
        <radialGradient id="glow-c" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="130" rx="70" ry="60" fill="url(#glow-c)"/>
        {/* Smoke wisps */}
        <path d="M70 90 Q60 70 75 55 Q85 45 78 30" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeLinecap="round"/>
        <path d="M130 85 Q142 65 128 50 Q118 38 124 22" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.25" fill="none" strokeLinecap="round"/>
        <path d="M100 80 Q95 60 100 45 Q105 32 99 18" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.2" fill="none" strokeLinecap="round"/>

        {/* Bottle neck */}
        <rect x="86" y="52" width="28" height="12" rx="2" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f0f0f"/>
        {/* Bottle cap */}
        <rect x="82" y="38" width="36" height="16" rx="3" stroke="#4ade80" strokeWidth="2" fill="#0d1a0d"/>
        <line x1="82" y1="46" x2="118" y2="46" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5"/>
        {/* Bottle body */}
        <rect x="68" y="64" width="64" height="100" rx="6" stroke="#e2e8f0" strokeWidth="2" fill="#0f0f0f"/>
        {/* Glass highlight */}
        <rect x="72" y="70" width="8" height="88" rx="3" fill="#4ade80" fillOpacity="0.06"/>
        {/* Horizontal label lines */}
        <line x1="72" y1="110" x2="128" y2="110" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        <line x1="72" y1="130" x2="128" y2="130" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        {/* Brand text on bottle */}
        <text x="100" y="100" textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="serif" fontWeight="bold" letterSpacing="3">DIOR</text>
        <text x="100" y="122" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontFamily="sans-serif" letterSpacing="1.5" fillOpacity="0.7">SAUVAGE</text>
        <text x="100" y="148" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="sans-serif" fillOpacity="0.4">EAU DE PARFUM</text>
        {/* Atomizer nozzle */}
        <rect x="94" y="33" width="12" height="7" rx="1.5" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        <rect x="98" y="27" width="4" height="7" rx="1" fill="#4ade80" fillOpacity="0.6"/>
      </svg>
    ),
  },
  {
    label: "Shoe Supplier",
    sub: "Sneakers & Heat",
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-s" cx="50%" cy="65%" r="55%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="105" cy="140" rx="80" ry="45" fill="url(#glow-s)"/>
        {/* Ground shadow */}
        <ellipse cx="108" cy="158" rx="58" ry="8" fill="#4ade80" fillOpacity="0.08"/>
        {/* Sole */}
        <path d="M35 148 Q40 158 80 160 Q120 162 168 155 Q175 148 170 144 L155 140 L40 140 Z" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        {/* Midsole stripe */}
        <path d="M40 140 Q100 136 155 140" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5"/>
        {/* Upper body */}
        <path d="M45 140 L42 125 Q40 110 55 100 Q70 90 90 88 L125 87 Q145 88 158 95 Q168 103 165 118 L162 140 Z" stroke="#e2e8f0" strokeWidth="2" fill="#0f0f0f"/>
        {/* Toe box */}
        <path d="M42 125 Q38 112 48 103 Q58 95 72 92" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" fill="none"/>
        {/* Heel counter */}
        <path d="M158 95 Q172 105 168 125 L163 140" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" fill="none"/>
        {/* Tongue */}
        <path d="M90 88 Q100 82 112 87 L110 100 Q100 96 92 100 Z" stroke="#4ade80" strokeWidth="1.2" fill="#0d1a0d" strokeOpacity="0.8"/>
        {/* Laces */}
        <line x1="93" y1="102" x2="109" y2="102" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <line x1="91" y1="109" x2="111" y2="109" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <line x1="90" y1="116" x2="112" y2="116" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <line x1="90" y1="123" x2="112" y2="123" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7"/>
        {/* Side panel lines */}
        <path d="M72 92 Q90 102 90 125" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.35" fill="none"/>
        <path d="M125 87 Q140 98 142 125" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.35" fill="none"/>
        {/* Nike-esque swoosh hint */}
        <path d="M58 118 Q80 108 130 118" stroke="#4ade80" strokeWidth="2.5" strokeOpacity="0.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Watch Supplier",
    sub: "Luxury & Fashion Timepieces",
    svg: (
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-w" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="110" rx="65" ry="65" fill="url(#glow-w)"/>
        {/* Strap top */}
        <rect x="82" y="28" width="36" height="42" rx="6" stroke="#94a3b8" strokeWidth="1.5" fill="#0c0c0c"/>
        <line x1="90" y1="36" x2="110" y2="36" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        <line x1="88" y1="43" x2="112" y2="43" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        <line x1="88" y1="50" x2="112" y2="50" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        {/* Strap bottom */}
        <rect x="82" y="152" width="36" height="40" rx="6" stroke="#94a3b8" strokeWidth="1.5" fill="#0c0c0c"/>
        <line x1="88" y1="162" x2="112" y2="162" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        <line x1="88" y1="169" x2="112" y2="169" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        <line x1="90" y1="176" x2="110" y2="176" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        {/* Case */}
        <rect x="55" y="65" width="90" height="90" rx="22" stroke="#e2e8f0" strokeWidth="2.5" fill="#0f0f0f"/>
        {/* Crown */}
        <rect x="145" y="100" width="12" height="20" rx="4" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        {/* Bezel inner ring */}
        <rect x="61" y="71" width="78" height="78" rx="18" stroke="#4ade80" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        {/* Dial */}
        <rect x="66" y="76" width="68" height="68" rx="14" fill="#050f05" stroke="#4ade80" strokeWidth="0.5" strokeOpacity="0.3"/>
        {/* Hour markers */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
          const r = 26, cx2 = 100, cy2 = 110;
          const rad = (deg - 90) * Math.PI / 180;
          const x1 = cx2 + (r-3) * Math.cos(rad);
          const y1 = cy2 + (r-3) * Math.sin(rad);
          const x2 = cx2 + r * Math.cos(rad);
          const y2 = cy2 + r * Math.sin(rad);
          const isMain = i % 3 === 0;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={isMain ? "#4ade80" : "#4ade80"} strokeWidth={isMain ? 2 : 0.8} strokeOpacity={isMain ? 0.9 : 0.4}/>;
        })}
        {/* Hour hand */}
        <line x1="100" y1="110" x2="100" y2="92" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Minute hand */}
        <line x1="100" y1="110" x2="116" y2="104" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"/>
        {/* Second hand */}
        <line x1="100" y1="110" x2="88" y2="124" stroke="#4ade80" strokeWidth="1" strokeLinecap="round"/>
        {/* Center dot */}
        <circle cx="100" cy="110" r="3" fill="#4ade80"/>
        <circle cx="100" cy="110" r="1.5" fill="#ffffff"/>
        {/* Logo text on dial */}
        <text x="100" y="100" textAnchor="middle" fill="#4ade80" fontSize="5" fontFamily="serif" letterSpacing="1.5" fillOpacity="0.8">AP</text>
      </svg>
    ),
  },
  {
    label: "Moissanite Supplier",
    sub: "Rings, Earrings & Bracelets",
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-j" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        {/* Sparkle glow */}
        <ellipse cx="100" cy="88" rx="55" ry="55" fill="url(#glow-j)"/>
        {/* Diamond sparkles */}
        <line x1="100" y1="30" x2="100" y2="42" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.7"/>
        <line x1="96" y1="36" x2="104" y2="36" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.7"/>
        <line x1="130" y1="50" x2="134" y2="58" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.5"/>
        <line x1="130" y1="58" x2="134" y2="50" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.5"/>
        <line x1="65" y1="48" x2="69" y2="56" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.5"/>
        <line x1="65" y1="56" x2="69" y2="48" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.5"/>

        {/* Ring band */}
        <path d="M65 130 Q65 168 100 172 Q135 168 135 130" stroke="#e2e8f0" strokeWidth="2.5" fill="none"/>
        <path d="M65 130 Q65 92 100 88 Q135 92 135 130" stroke="#e2e8f0" strokeWidth="2.5" fill="none"/>
        {/* Band fill */}
        <path d="M65 130 Q65 92 100 88 Q135 92 135 130 Q135 168 100 172 Q65 168 65 130 Z" fill="#0f0f0f"/>
        {/* Inner band */}
        <path d="M75 130 Q75 100 100 97 Q125 100 125 130 Q125 160 100 163 Q75 160 75 130 Z" stroke="#4ade80" strokeWidth="0.8" fill="#080808" strokeOpacity="0.4"/>

        {/* Prong setting */}
        <path d="M82 90 L100 62 L118 90 Z" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d" strokeOpacity="0.9"/>
        {/* Diamond facets */}
        <polygon points="100,62 82,90 118,90" stroke="#4ade80" strokeWidth="1.5" fill="#0a180a" strokeOpacity="0.9"/>
        <line x1="100" y1="62" x2="100" y2="90" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="82" y1="90" x2="118" y2="90" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="91" y1="76" x2="109" y2="76" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.4"/>
        {/* Diamond shine */}
        <polygon points="100,65 90,80 100,78 110,80" fill="#4ade80" fillOpacity="0.15"/>
        {/* Prong tips */}
        <circle cx="82" cy="90" r="3" fill="#4ade80" fillOpacity="0.7"/>
        <circle cx="118" cy="90" r="3" fill="#4ade80" fillOpacity="0.7"/>
        <circle cx="100" cy="62" r="3" fill="#ffffff" fillOpacity="0.8"/>
      </svg>
    ),
  },
  {
    label: "Designer Bag Supplier",
    sub: "LV · Gucci · Prada",
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-b" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.28"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="120" rx="75" ry="60" fill="url(#glow-b)"/>
        {/* Handles */}
        <path d="M68 80 Q68 55 82 55 Q96 55 96 80" stroke="#e2e8f0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M104 80 Q104 55 118 55 Q132 55 132 80" stroke="#e2e8f0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Main body */}
        <rect x="42" y="78" width="116" height="88" rx="10" stroke="#e2e8f0" strokeWidth="2.5" fill="#0f0f0f"/>
        {/* Top flap */}
        <rect x="42" y="78" width="116" height="28" rx="10" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        {/* Closure clasp */}
        <rect x="87" y="95" width="26" height="16" rx="4" stroke="#4ade80" strokeWidth="2" fill="#0d1a0d"/>
        <rect x="93" y="100" width="14" height="7" rx="2" stroke="#4ade80" strokeWidth="1.2" fill="#050f05"/>
        <circle cx="100" cy="103" r="2.5" fill="#4ade80" fillOpacity="0.8"/>
        {/* Body texture - LV-inspired grid */}
        {[0,1,2,3,4].map(row =>
          [0,1,2,3,4,5].map(col => (
            <text key={`${row}-${col}`} x={52 + col*18} y={120 + row*16} fill="#4ade80" fontSize="8" fillOpacity="0.12" fontFamily="serif" fontWeight="bold">LV</text>
          ))
        )}
        {/* Side gusset lines */}
        <line x1="42" y1="100" x2="42" y2="166" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="158" y1="100" x2="158" y2="166" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        {/* Bottom trim */}
        <line x1="42" y1="156" x2="158" y2="156" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.4"/>
        {/* Corner studs */}
        <circle cx="50" cy="162" r="3" fill="#4ade80" fillOpacity="0.5"/>
        <circle cx="150" cy="162" r="3" fill="#4ade80" fillOpacity="0.5"/>
        <circle cx="50" cy="84" r="2.5" fill="#4ade80" fillOpacity="0.4"/>
        <circle cx="150" cy="84" r="2.5" fill="#4ade80" fillOpacity="0.4"/>
      </svg>
    ),
  },
  {
    label: "Clothing Supplier",
    sub: "Streetwear · Basics · Boutique",
    svg: (
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-cl" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="120" rx="70" ry="65" fill="url(#glow-cl)"/>
        {/* Hoodie outline */}
        {/* Hood */}
        <path d="M72 65 Q72 38 100 35 Q128 38 128 65" stroke="#e2e8f0" strokeWidth="2.5" fill="#0f0f0f"/>
        {/* Hood inner */}
        <path d="M80 65 Q80 50 100 47 Q120 50 120 65" stroke="#4ade80" strokeWidth="1.2" fill="none" strokeOpacity="0.5"/>
        {/* Neck */}
        <path d="M80 65 Q88 72 100 73 Q112 72 120 65" stroke="#e2e8f0" strokeWidth="1.5" fill="none"/>
        {/* Shoulders & body */}
        <path d="M72 65 L42 78 L38 108 L52 112 L52 178 L148 178 L148 112 L162 108 L158 78 L128 65" stroke="#e2e8f0" strokeWidth="2.5" fill="#0f0f0f"/>
        {/* Sleeves */}
        <path d="M42 78 L32 128 L52 132 L52 90" stroke="#e2e8f0" strokeWidth="2" fill="#0d0d0d"/>
        <path d="M158 78 L168 128 L148 132 L148 90" stroke="#e2e8f0" strokeWidth="2" fill="#0d0d0d"/>
        {/* Ribbed cuffs */}
        <path d="M32 128 Q32 140 42 140 Q52 140 52 132" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        <path d="M168 128 Q168 140 158 140 Q148 140 148 132" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        {/* Ribbed hem */}
        <path d="M52 168 L148 168" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5"/>
        <path d="M52 173 L148 173" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5"/>
        {/* Pocket */}
        <path d="M70 128 Q70 148 100 148 Q130 148 130 128" stroke="#4ade80" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
        {/* Center seam */}
        <line x1="100" y1="73" x2="100" y2="128" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.25"/>
        {/* SP5DER web hint on chest */}
        <path d="M88 100 L100 92 L112 100 L108 112 L100 116 L92 112 Z" stroke="#4ade80" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    label: "Glasses Supplier",
    sub: "Designer Sunglasses & Frames",
    svg: (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-g" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="88" rx="80" ry="50" fill="url(#glow-g)"/>
        {/* Left temple arm */}
        <path d="M28 82 L12 88 Q8 90 8 95" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Right temple arm */}
        <path d="M172 82 L188 88 Q192 90 192 95" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Bridge */}
        <path d="M82 82 Q100 75 118 82" stroke="#e2e8f0" strokeWidth="2" fill="none"/>
        {/* Left lens frame */}
        <rect x="28" y="60" width="54" height="44" rx="14" stroke="#e2e8f0" strokeWidth="2.5" fill="#0a0a0a"/>
        {/* Right lens frame */}
        <rect x="118" y="60" width="54" height="44" rx="14" stroke="#e2e8f0" strokeWidth="2.5" fill="#0a0a0a"/>
        {/* Left lens tint */}
        <rect x="32" y="64" width="46" height="36" rx="11" fill="#4ade80" fillOpacity="0.07"/>
        {/* Right lens tint */}
        <rect x="122" y="64" width="46" height="36" rx="11" fill="#4ade80" fillOpacity="0.07"/>
        {/* Left lens reflection */}
        <path d="M36 68 Q44 66 50 70" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.25" fill="none"/>
        <path d="M36 74 Q40 72 44 74" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.2" fill="none"/>
        {/* Right lens reflection */}
        <path d="M126 68 Q134 66 140 70" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.25" fill="none"/>
        <path d="M126 74 Q130 72 134 74" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.2" fill="none"/>
        {/* Frame accent lines */}
        <rect x="28" y="60" width="54" height="10" rx="5" fill="#4ade80" fillOpacity="0.08"/>
        <rect x="118" y="60" width="54" height="10" rx="5" fill="#4ade80" fillOpacity="0.08"/>
        {/* Nose pads */}
        <circle cx="84" cy="88" r="2.5" fill="#4ade80" fillOpacity="0.5"/>
        <circle cx="116" cy="88" r="2.5" fill="#4ade80" fillOpacity="0.5"/>
      </svg>
    ),
  },
  {
    label: "Designer Bag Supplier",
    sub: "Looloo Women's Fashion",
    svg: (
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-d" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="120" rx="65" ry="75" fill="url(#glow-d)"/>
        {/* Dress silhouette */}
        {/* Neckline */}
        <path d="M82 45 Q100 55 118 45" stroke="#4ade80" strokeWidth="1.5" fill="none" strokeOpacity="0.7"/>
        {/* Straps */}
        <path d="M82 45 L78 30" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M118 45 L122 30" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round"/>
        {/* Bodice */}
        <path d="M78 30 Q68 32 65 48 L60 75 Q60 88 100 90 Q140 88 140 75 L135 48 Q132 32 122 30" stroke="#e2e8f0" strokeWidth="2.5" fill="#0f0f0f"/>
        {/* Waist */}
        <path d="M60 75 Q80 80 100 80 Q120 80 140 75" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.5" fill="none"/>
        {/* Skirt flare */}
        <path d="M60 75 Q42 110 38 170 L162 170 Q158 110 140 75" stroke="#e2e8f0" strokeWidth="2.5" fill="#0f0f0f"/>
        {/* Skirt layers / ruffle lines */}
        <path d="M50 115 Q100 105 150 115" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.35" fill="none"/>
        <path d="M44 140 Q100 128 156 140" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.35" fill="none"/>
        <path d="M40 162 Q100 150 160 162" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.35" fill="none"/>
        {/* Center front detail */}
        <line x1="100" y1="55" x2="100" y2="80" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        {/* Bow/sash at waist */}
        <path d="M88 78 Q100 74 112 78" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7"/>
        {/* Hem */}
        <line x1="38" y1="168" x2="162" y2="168" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    label: "Lego Supplier",
    sub: "Rare & Retired Sets",
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-l" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="115" rx="75" ry="65" fill="url(#glow-l)"/>
        {/* Lego brick — 3D isometric style */}
        {/* Bottom face */}
        <path d="M35 145 L100 170 L165 145 L100 120 Z" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d" strokeOpacity="0.8"/>
        {/* Left face */}
        <path d="M35 80 L35 145 L100 170 L100 105 Z" stroke="#e2e8f0" strokeWidth="2" fill="#0f0f0f"/>
        {/* Right face */}
        <path d="M165 80 L165 145 L100 170 L100 105 Z" stroke="#e2e8f0" strokeWidth="2" fill="#141414"/>
        {/* Top face */}
        <path d="M35 80 L100 55 L165 80 L100 105 Z" stroke="#e2e8f0" strokeWidth="2" fill="#0f0f0f"/>
        {/* Studs on top (8 studs - 2x4) */}
        {[[72,72],[100,65],[128,72],[86,82],[114,82]].map(([cx,cy], i) => (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx="9" ry="5.5" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d" strokeOpacity="0.9"/>
            <ellipse cx={cx} cy={cy-2} rx="9" ry="5.5" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d" strokeOpacity="0.7"/>
          </g>
        ))}
        {/* Left face line details */}
        <line x1="35" y1="105" x2="100" y2="130" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="35" y1="125" x2="100" y2="150" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        {/* Right face line details */}
        <line x1="100" y1="130" x2="165" y2="105" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.2"/>
        <line x1="100" y1="150" x2="165" y2="125" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.2"/>
        {/* LEGO text on side */}
        <text x="62" y="128" fill="#4ade80" fontSize="11" fontFamily="sans-serif" fontWeight="900" letterSpacing="2" fillOpacity="0.7">LEGO</text>
      </svg>
    ),
  },
  {
    label: "LazzzyPodz Supplier",
    sub: "AirPods & Wireless Earbuds",
    svg: (
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-p" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="120" rx="65" ry="65" fill="url(#glow-p)"/>
        {/* Case body */}
        <rect x="55" y="62" width="90" height="118" rx="22" stroke="#e2e8f0" strokeWidth="2.5" fill="#0f0f0f"/>
        {/* Case lid hinge */}
        <line x1="55" y1="105" x2="145" y2="105" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.5"/>
        {/* Lid section */}
        <rect x="55" y="62" width="90" height="44" rx="22" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d" strokeOpacity="0.7"/>
        {/* Lightning port hint */}
        <rect x="91" y="176" width="18" height="6" rx="2" stroke="#4ade80" strokeWidth="1.2" fill="#0d1a0d" strokeOpacity="0.6"/>
        {/* Left earbud slot */}
        <ellipse cx="78" cy="140" rx="15" ry="22" stroke="#4ade80" strokeWidth="1.5" fill="#0a0a0a" strokeOpacity="0.7"/>
        {/* Right earbud slot */}
        <ellipse cx="122" cy="140" rx="15" ry="22" stroke="#4ade80" strokeWidth="1.5" fill="#0a0a0a" strokeOpacity="0.7"/>
        {/* Left earbud */}
        <ellipse cx="78" cy="135" rx="10" ry="14" stroke="#e2e8f0" strokeWidth="2" fill="#111"/>
        <circle cx="78" cy="130" r="4" fill="#4ade80" fillOpacity="0.5"/>
        {/* Right earbud */}
        <ellipse cx="122" cy="135" rx="10" ry="14" stroke="#e2e8f0" strokeWidth="2" fill="#111"/>
        <circle cx="122" cy="130" r="4" fill="#4ade80" fillOpacity="0.5"/>
        {/* Status LED */}
        <circle cx="100" cy="120" r="3.5" fill="#4ade80" fillOpacity="0.8"/>
        <circle cx="100" cy="120" r="6" fill="#4ade80" fillOpacity="0.15"/>
        {/* Apple logo suggestion */}
        <circle cx="100" cy="85" r="8" stroke="#4ade80" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        <line x1="100" y1="77" x2="100" y2="93" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="92" y1="85" x2="108" y2="85" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
      </svg>
    ),
  },
  {
    label: "All-In-One Supplier",
    sub: "Every Category Covered",
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-a" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="100" rx="80" ry="80" fill="url(#glow-a)"/>
        {/* Mini cologne bottle TL */}
        <rect x="28" y="35" width="16" height="30" rx="2" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        <rect x="31" y="28" width="10" height="8" rx="1.5" stroke="#4ade80" strokeWidth="1.2" fill="#0d1a0d" strokeOpacity="0.8"/>
        <text x="36" y="55" textAnchor="middle" fill="#4ade80" fontSize="4" fillOpacity="0.6" fontFamily="serif">DIOR</text>
        {/* Mini sneaker TR */}
        <path d="M152 42 L152 36 Q152 30 160 30 Q168 30 168 36 L168 42 Q168 50 160 50 Q152 50 152 42Z" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        <path d="M150 50 Q160 47 170 50" stroke="#e2e8f0" strokeWidth="1.5" fill="none"/>
        {/* Mini watch BL */}
        <circle cx="38" cy="155" r="16" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f0f0f"/>
        <circle cx="38" cy="155" r="12" stroke="#4ade80" strokeWidth="0.8" fill="none" strokeOpacity="0.4"/>
        <line x1="38" y1="155" x2="38" y2="146" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="38" y1="155" x2="44" y2="152" stroke="#ffffff" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="38" cy="155" r="2" fill="#4ade80"/>
        {/* Mini ring BR */}
        <path d="M157 140 Q157 130 165 130 Q173 130 173 140 Q173 150 165 150 Q157 150 157 140Z" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f0f0f"/>
        <path d="M160 130 L162 120 L168 120 L170 130" stroke="#4ade80" strokeWidth="1.5" fill="none"/>
        <polygon points="165,120 160,130 170,130" stroke="#4ade80" strokeWidth="1" fill="#0d1a0d" strokeOpacity="0.8"/>
        {/* Center trophy / star burst */}
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const rad = deg * Math.PI / 180;
          const inner = 18, outer = i % 2 === 0 ? 32 : 22;
          return (
            <line key={i}
              x1={100 + inner * Math.cos(rad)} y1={100 + inner * Math.sin(rad)}
              x2={100 + outer * Math.cos(rad)} y2={100 + outer * Math.sin(rad)}
              stroke="#4ade80" strokeWidth={i % 2 === 0 ? 2 : 1} strokeOpacity={i % 2 === 0 ? 0.9 : 0.4}
            />
          );
        })}
        <circle cx="100" cy="100" r="18" stroke="#4ade80" strokeWidth="1.5" fill="#0d1a0d"/>
        <text x="100" y="104" textAnchor="middle" fill="#4ade80" fontSize="11" fontFamily="serif" fontWeight="bold">🏆</text>
        {/* Connecting dots */}
        {[[36,65],[36,135],[164,65],[164,135]].map(([x,y],i) => (
          <line key={i} x1={x} y1={y} x2={100 + (x < 100 ? -22 : 22) * Math.cos(Math.atan2(y-100, x-100))} y2={100 + (y < 100 ? -22 : 22) * Math.sin(Math.atan2(y-100, x-100))} stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3,3"/>
        ))}
      </svg>
    ),
  },
  {
    label: "Elite Bundle",
    sub: "All 13 Categories · Best Value",
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <radialGradient id="glow-e" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="100" cy="100" rx="80" ry="80" fill="url(#glow-e)"/>
        {/* Diamond / gem shape */}
        <polygon points="100,30 145,75 100,170 55,75" stroke="#e2e8f0" strokeWidth="2.5" fill="#0d0d0d"/>
        {/* Diamond facets */}
        <line x1="100" y1="30" x2="55" y2="75" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="100" y1="30" x2="145" y2="75" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="55" y1="75" x2="145" y2="75" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6"/>
        <line x1="55" y1="75" x2="100" y2="170" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="145" y1="75" x2="100" y2="170" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.4"/>
        {/* Top facet fill */}
        <polygon points="100,30 70,75 130,75" fill="#4ade80" fillOpacity="0.12"/>
        {/* Side inner facets */}
        <line x1="78" y1="52" x2="70" y2="75" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        <line x1="122" y1="52" x2="130" y2="75" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.4"/>
        <line x1="70" y1="75" x2="100" y2="120" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="130" y1="75" x2="100" y2="120" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3"/>
        {/* Sparkle effect */}
        <line x1="100" y1="22" x2="100" y2="30" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.8"/>
        <line x1="96" y1="26" x2="104" y2="26" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.8"/>
        <line x1="148" y1="68" x2="154" y2="74" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6"/>
        <line x1="148" y1="74" x2="154" y2="68" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6"/>
        <line x1="46" y1="68" x2="52" y2="74" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6"/>
        <line x1="46" y1="74" x2="52" y2="68" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6"/>
        {/* ELITE text */}
        <text x="100" y="95" textAnchor="middle" fill="#4ade80" fontSize="10" fontFamily="sans-serif" fontWeight="900" letterSpacing="3">ELITE</text>
        <text x="100" y="108" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="sans-serif" letterSpacing="2" fillOpacity="0.5">BUNDLE</text>
      </svg>
    ),
  },
];

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            Design Preview
          </div>
          <h1 className="text-3xl font-black uppercase mb-2">Proposed Product Icons</h1>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            Dark background · green smoke glow · outlined product illustration — inspired by the "Vendor With Links" style.
            Approve before I apply to the site.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {designs.map((d, i) => (
            <div key={i} className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all">
              {/* Icon area */}
              <div className="relative bg-[#0a0a0a] flex items-center justify-center" style={{ height: "180px" }}>
                <div className="w-full h-full p-4">
                  {d.svg}
                </div>
              </div>
              {/* Label */}
              <div className="px-3 py-3 border-t border-white/5">
                <p className="font-black text-xs uppercase text-white leading-tight">{d.label}</p>
                <p className="text-zinc-500 text-[10px] mt-0.5">{d.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            Approve these designs and I'll apply them to the product cards on the main page.
          </p>
          <a href="/" className="inline-block mt-4 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">
            ← Back to main site
          </a>
        </div>
      </div>
    </div>
  );
}
