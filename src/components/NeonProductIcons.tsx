const neonStyle = {
  stroke: "#00ff41",
  strokeWidth: 2.5,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GlowFilter = () => (
  <defs>
    <filter id="neon" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="b1" />
      <feGaussianBlur stdDeviation="5" result="b2" />
      <feMerge>
        <feMergeNode in="b2" />
        <feMergeNode in="b1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const wrap = (content: React.ReactNode) => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <GlowFilter />
    <rect width="120" height="120" fill="#000" />
    <g filter="url(#neon)" {...neonStyle}>
      {content}
    </g>
  </svg>
);

export const ShoeIcon = () => wrap(
  <>
    {/* Sole */}
    <path d="M15 82 Q15 88 25 90 L95 90 Q105 90 105 84 L105 80 Q95 77 80 78 L40 78 Q25 76 15 82Z" />
    {/* Upper */}
    <path d="M25 78 L25 62 Q26 52 38 48 L60 44 Q75 42 85 46 L100 54 Q106 60 105 68 L105 80" />
    {/* Toe */}
    <path d="M25 62 Q18 62 15 70 L15 82" />
    {/* Laces */}
    <line x1="42" y1="60" x2="70" y2="56" />
    <line x1="44" y1="66" x2="72" y2="62" />
    {/* Tongue */}
    <path d="M38 48 Q39 55 42 72" />
    {/* Back */}
    <path d="M85 46 Q92 50 92 60 L90 78" />
  </>
);

export const WatchIcon = () => wrap(
  <>
    {/* Watch face */}
    <circle cx="60" cy="62" r="28" />
    {/* Inner ring */}
    <circle cx="60" cy="62" r="23" />
    {/* Top strap */}
    <path d="M48 34 L48 22 Q48 18 52 18 L68 18 Q72 18 72 22 L72 34" />
    {/* Bottom strap */}
    <path d="M48 90 L48 102 Q48 106 52 106 L68 106 Q72 106 72 102 L72 90" />
    {/* Strap buckle */}
    <rect x="50" y="96" width="20" height="6" rx="2" />
    {/* Hour hand */}
    <line x1="60" y1="62" x2="60" y2="46" />
    {/* Minute hand */}
    <line x1="60" y1="62" x2="74" y2="62" />
    {/* Center dot */}
    <circle cx="60" cy="62" r="2" fill="#00ff41" />
    {/* Crown */}
    <rect x="88" y="58" width="8" height="8" rx="2" />
  </>
);

export const JewelryIcon = () => wrap(
  <>
    {/* Diamond top */}
    <polygon points="60,22 80,38 60,90 40,38" />
    {/* Diamond middle line */}
    <line x1="40" y1="38" x2="80" y2="38" />
    {/* Left facets */}
    <line x1="40" y1="38" x2="60" y2="22" />
    <line x1="40" y1="38" x2="50" y2="28" />
    <line x1="50" y1="28" x2="60" y2="22" />
    <line x1="50" y1="28" x2="60" y2="38" />
    {/* Right facets */}
    <line x1="80" y1="38" x2="60" y2="22" />
    <line x1="80" y1="38" x2="70" y2="28" />
    <line x1="70" y1="28" x2="60" y2="22" />
    <line x1="70" y1="28" x2="60" y2="38" />
    {/* Ring band */}
    <path d="M44 88 Q44 100 60 102 Q76 100 76 88" strokeDasharray="4 2" />
    <line x1="44" y1="88" x2="40" y2="38" />
    <line x1="76" y1="88" x2="80" y2="38" />
  </>
);

export const HoodieIcon = () => wrap(
  <>
    {/* Body */}
    <path d="M28 50 L20 100 L100 100 L92 50" />
    {/* Left sleeve */}
    <path d="M28 50 L14 72 L26 76 L36 58" />
    {/* Right sleeve */}
    <path d="M92 50 L106 72 L94 76 L84 58" />
    {/* Hood left */}
    <path d="M36 58 Q34 30 60 24" />
    {/* Hood right */}
    <path d="M84 58 Q86 30 60 24" />
    {/* Hood opening */}
    <path d="M36 58 Q48 50 60 52 Q72 50 84 58" />
    {/* Pocket */}
    <path d="M42 78 L42 94 L78 94 L78 78" />
    {/* Zipper */}
    <line x1="60" y1="52" x2="60" y2="100" strokeDasharray="3 2" />
    {/* Drawstrings */}
    <line x1="52" y1="58" x2="46" y2="72" />
    <line x1="68" y1="58" x2="74" y2="72" />
  </>
);

export const EarbudsIcon = () => wrap(
  <>
    {/* Case outline */}
    <rect x="20" y="30" width="80" height="60" rx="16" />
    {/* Left earbud */}
    <circle cx="42" cy="60" r="14" />
    <circle cx="42" cy="60" r="6" />
    <line x1="42" y1="46" x2="42" y2="38" />
    {/* Right earbud */}
    <circle cx="78" cy="60" r="14" />
    <circle cx="78" cy="60" r="6" />
    <line x1="78" y1="46" x2="78" y2="38" />
    {/* Charging indicator */}
    <circle cx="60" cy="85" r="3" fill="#00ff41" stroke="none" />
    {/* Hinge line */}
    <line x1="56" y1="30" x2="64" y2="30" strokeWidth="4" />
  </>
);

export const DressIcon = () => wrap(
  <>
    {/* Torso */}
    <path d="M42 22 L35 42 L85 42 L78 22" />
    {/* Neckline */}
    <path d="M42 22 Q60 32 78 22" />
    {/* Left strap */}
    <line x1="46" y1="22" x2="44" y2="14" />
    {/* Right strap */}
    <line x1="74" y1="22" x2="76" y2="14" />
    {/* Skirt */}
    <path d="M35 42 Q22 70 18 100 L102 100 Q98 70 85 42" />
    {/* Waist line accent */}
    <path d="M37 50 Q60 46 83 50" />
    {/* Skirt flow lines */}
    <path d="M45 58 Q40 75 36 92" />
    <path d="M75 58 Q80 75 84 92" />
    <path d="M60 46 L60 100" strokeDasharray="3 3" strokeWidth="1" />
  </>
);

export const HandbagIcon = () => wrap(
  <>
    {/* Bag body */}
    <rect x="18" y="46" width="84" height="62" rx="10" />
    {/* Flap */}
    <path d="M18 46 Q18 28 60 26 Q102 28 102 46" />
    {/* Handle left */}
    <path d="M36 26 Q36 10 48 10 Q60 10 60 22" />
    {/* Handle right */}
    <path d="M84 26 Q84 10 72 10 Q60 10 60 22" />
    {/* Clasp */}
    <rect x="50" y="42" width="20" height="10" rx="5" />
    <circle cx="60" cy="47" r="3" />
    {/* Flap stitch line */}
    <path d="M24 46 Q24 32 60 30 Q96 32 96 46" strokeDasharray="4 3" strokeWidth="1.5" />
    {/* Pocket line */}
    <line x1="30" y1="72" x2="90" y2="72" />
    {/* Bottom seam */}
    <line x1="26" y1="96" x2="94" y2="96" strokeDasharray="4 3" strokeWidth="1.5" />
  </>
);

export const LegoIcon = () => wrap(
  <>
    {/* Main brick body */}
    <rect x="16" y="46" width="88" height="58" rx="4" />
    {/* Top face */}
    <path d="M16 46 L28 28 L104 28 L104 46" />
    <line x1="104" y1="28" x2="104" y2="46" />
    {/* Right face */}
    <path d="M104 46 L104 104 L102 104" />
    {/* Studs - top row left */}
    <ellipse cx="38" cy="26" rx="10" ry="5" />
    <line x1="28" y1="26" x2="28" y2="18" />
    <line x1="48" y1="26" x2="48" y2="18" />
    <ellipse cx="38" cy="18" rx="10" ry="5" />
    {/* Studs - top row right */}
    <ellipse cx="82" cy="26" rx="10" ry="5" />
    <line x1="72" y1="26" x2="72" y2="18" />
    <line x1="92" y1="26" x2="92" y2="18" />
    <ellipse cx="82" cy="18" rx="10" ry="5" />
    {/* Front studs */}
    <circle cx="38" cy="68" r="10" />
    <circle cx="38" cy="68" r="5" />
    <circle cx="82" cy="68" r="10" />
    <circle cx="82" cy="68" r="5" />
    {/* LEGO text area */}
    <rect x="26" y="86" width="62" height="12" rx="2" />
  </>
);

export const ShirtIcon = () => wrap(
  <>
    {/* Body */}
    <path d="M36 36 L20 56 L36 62 L36 100 L84 100 L84 62 L100 56 L84 36" />
    {/* Left sleeve */}
    <path d="M36 36 L20 56 L36 62" />
    {/* Right sleeve */}
    <path d="M84 36 L100 56 L84 62" />
    {/* Collar left */}
    <path d="M36 36 Q48 28 60 34" />
    {/* Collar right */}
    <path d="M84 36 Q72 28 60 34" />
    {/* Button line */}
    <line x1="60" y1="34" x2="60" y2="100" strokeDasharray="3 4" />
    {/* Buttons */}
    <circle cx="60" cy="50" r="2.5" fill="#00ff41" stroke="none" />
    <circle cx="60" cy="64" r="2.5" fill="#00ff41" stroke="none" />
    <circle cx="60" cy="78" r="2.5" fill="#00ff41" stroke="none" />
    {/* Chest pocket */}
    <rect x="38" y="48" width="16" height="14" rx="2" />
  </>
);

export const CologneIconSVG = () => wrap(
  <>
    {/* Cap */}
    <rect x="42" y="14" width="36" height="14" rx="4" />
    {/* Neck */}
    <rect x="48" y="28" width="24" height="12" rx="3" />
    {/* Nozzle */}
    <rect x="72" y="32" width="16" height="6" rx="3" />
    {/* Body */}
    <rect x="28" y="40" width="64" height="66" rx="10" />
    {/* Label */}
    <rect x="36" y="54" width="48" height="36" rx="4" />
    {/* Label lines */}
    <line x1="42" y1="64" x2="78" y2="64" />
    <line x1="44" y1="72" x2="76" y2="72" />
    <line x1="46" y1="80" x2="74" y2="80" />
    {/* Shine */}
    <path d="M38 44 Q40 42 42 56" strokeWidth="1.5" opacity="0.6" />
    {/* Base */}
    <line x1="32" y1="104" x2="88" y2="104" strokeWidth="3" />
    {/* Spray mist */}
    <path d="M90 28 Q96 24 100 20" strokeDasharray="2 2" />
    <path d="M90 32 Q98 30 104 28" strokeDasharray="2 2" />
    <path d="M90 36 Q96 36 100 40" strokeDasharray="2 2" />
  </>
);

export const PodsIcon = () => wrap(
  <>
    {/* Case body */}
    <rect x="28" y="36" width="64" height="72" rx="18" />
    {/* Case lid line */}
    <path d="M28 64 Q28 52 60 52 Q92 52 92 64" />
    {/* Left pod stem */}
    <rect x="42" y="24" width="10" height="22" rx="5" />
    {/* Right pod stem */}
    <rect x="68" y="24" width="10" height="22" rx="5" />
    {/* Left pod head */}
    <circle cx="47" cy="20" r="8" />
    {/* Right pod head */}
    <circle cx="73" cy="20" r="8" />
    {/* Left pod speaker */}
    <circle cx="47" cy="20" r="3" fill="#00ff41" stroke="none" />
    {/* Right pod speaker */}
    <circle cx="73" cy="20" r="3" fill="#00ff41" stroke="none" />
    {/* Charging port */}
    <rect x="54" y="104" width="12" height="6" rx="2" />
    {/* LED light */}
    <circle cx="60" cy="80" r="4" fill="#00ff41" stroke="none" />
    {/* Hinge */}
    <line x1="52" y1="36" x2="68" y2="36" strokeWidth="4" />
  </>
);

export const BundleIcon = () => wrap(
  <>
    {/* Crown base */}
    <path d="M20 90 L20 72 L100 72 L100 90 Z" />
    {/* Crown points */}
    <path d="M20 72 L20 40 L38 56 L60 24 L82 56 L100 40 L100 72" />
    {/* Crown gems */}
    <circle cx="60" cy="36" r="5" fill="#00ff41" stroke="none" />
    <circle cx="38" cy="56" r="4" />
    <circle cx="82" cy="56" r="4" />
    {/* Band decoration */}
    <line x1="20" y1="80" x2="100" y2="80" />
    <circle cx="40" cy="80" r="3" fill="#00ff41" stroke="none" />
    <circle cx="60" cy="80" r="3" fill="#00ff41" stroke="none" />
    <circle cx="80" cy="80" r="3" fill="#00ff41" stroke="none" />
    {/* Shine lines */}
    <line x1="30" y1="74" x2="26" y2="88" strokeWidth="1.5" />
    <line x1="90" y1="74" x2="94" y2="88" strokeWidth="1.5" />
  </>
);

export const AllInOneIcon = () => wrap(
  <>
    {/* Grid of mini icons */}
    {/* Top row */}
    <rect x="14" y="14" width="28" height="28" rx="4" />
    <text x="28" y="34" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">👟</text>
    <rect x="46" y="14" width="28" height="28" rx="4" />
    <text x="60" y="34" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">👜</text>
    <rect x="78" y="14" width="28" height="28" rx="4" />
    <text x="92" y="34" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">💍</text>
    {/* Middle row */}
    <rect x="14" y="46" width="28" height="28" rx="4" />
    <text x="28" y="66" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">👕</text>
    <rect x="46" y="46" width="28" height="28" rx="4" />
    <text x="60" y="66" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">⌚</text>
    <rect x="78" y="46" width="28" height="28" rx="4" />
    <text x="92" y="66" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">🧥</text>
    {/* Bottom row */}
    <rect x="14" y="78" width="28" height="28" rx="4" />
    <text x="28" y="98" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">🎧</text>
    <rect x="46" y="78" width="28" height="28" rx="4" />
    <text x="60" y="98" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">🧴</text>
    <rect x="78" y="78" width="28" height="28" rx="4" />
    <text x="92" y="98" textAnchor="middle" fontSize="16" fill="#00ff41" stroke="none" fontFamily="sans-serif">🧱</text>
    {/* Outer border */}
    <rect x="10" y="10" width="100" height="100" rx="6" strokeWidth="1.5" />
  </>
);
