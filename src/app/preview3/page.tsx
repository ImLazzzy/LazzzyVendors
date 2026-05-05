"use client";

/* ─────────────────────────────────────────────
   PREVIEW 3 — Clean black line-art product illustrations
   White/light bg · simple outlines · grouped items
   Matching the podwavez.com card style
───────────────────────────────────────────── */

const cards = [
  {
    label: "Cologne Vendors Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Tall rectangular bottle (Dior Sauvage style) */}
        {/* Nozzle */}
        <rect x="56" y="14" width="8" height="9" rx="1.5" stroke="#111" strokeWidth="2" fill="white"/>
        <rect x="58" y="8" width="4" height="7" rx="1" stroke="#111" strokeWidth="1.5" fill="white"/>
        {/* Cap */}
        <rect x="44" y="23" width="32" height="18" rx="3" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Neck */}
        <rect x="52" y="40" width="16" height="8" rx="1.5" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Body */}
        <rect x="36" y="48" width="48" height="94" rx="4" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Label lines */}
        <line x1="42" y1="80" x2="78" y2="80" stroke="#111" strokeWidth="1.5"/>
        <line x1="42" y1="88" x2="78" y2="88" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="42" y1="95" x2="78" y2="95" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>

        {/* JPG Le Male torso bottle */}
        {/* Cap - cylindrical */}
        <rect x="110" y="16" width="26" height="32" rx="13" stroke="#111" strokeWidth="2" fill="white"/>
        <line x1="110" y1="42" x2="136" y2="42" stroke="#111" strokeWidth="1.5"/>
        {/* Shoulders */}
        <path d="M104 52 Q104 44 123 44 Q142 44 142 52" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Torso body */}
        <path d="M104 52 Q100 65 100 82 L146 82 Q146 65 142 52 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Waist */}
        <path d="M100 82 Q104 88 106 96 L140 96 Q142 88 146 82 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Hips/lower */}
        <path d="M106 96 L104 150 Q104 158 123 158 Q142 158 142 150 L140 96 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Chest detail lines */}
        <path d="M108 62 Q115 58 120 62 Q120 70 115 72 Q108 70 108 62Z" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.3"/>
        <path d="M126 62 Q133 58 138 62 Q138 70 133 72 Q126 70 126 62Z" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.3"/>
        {/* Waist line */}
        <path d="M100 82 Q123 78 146 82" stroke="#333" strokeWidth="1" strokeOpacity="0.35" fill="none"/>

        {/* Small 3rd bottle behind */}
        <rect x="74" y="55" width="28" height="80" rx="3" stroke="#111" strokeWidth="1.8" fill="white"/>
        <rect x="80" y="46" width="16" height="10" rx="2" stroke="#111" strokeWidth="1.8" fill="white"/>
        <rect x="84" y="38" width="8" height="10" rx="1.5" stroke="#111" strokeWidth="1.5" fill="white"/>
        <line x1="78" y1="85" x2="98" y2="85" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="78" y1="93" x2="98" y2="93" stroke="#333" strokeWidth="1" strokeOpacity="0.3"/>
      </svg>
    ),
  },
  {
    label: "Shoe Vendors Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Shoe 1 — side profile left */}
        {/* Sole */}
        <path d="M20 138 Q24 148 60 150 Q96 152 118 146 Q124 140 120 136 L106 132 L26 132 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Midsole stripe */}
        <path d="M26 132 Q72 129 106 132" stroke="#333" strokeWidth="1" strokeOpacity="0.4" fill="none"/>
        {/* Upper */}
        <path d="M30 132 L28 118 Q26 106 38 98 Q50 90 68 88 L98 88 Q114 89 122 96 Q130 104 128 118 L126 132 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Toe cap */}
        <path d="M28 118 Q24 108 32 101 Q40 94 52 91" stroke="#333" strokeWidth="1.2" strokeOpacity="0.5" fill="none"/>
        {/* Tongue */}
        <path d="M68 88 Q78 82 90 88 L88 102 Q78 98 70 102 Z" stroke="#111" strokeWidth="1.5" fill="white"/>
        {/* Laces */}
        <line x1="72" y1="104" x2="88" y2="104" stroke="#111" strokeWidth="1.5"/>
        <line x1="70" y1="110" x2="89" y2="110" stroke="#111" strokeWidth="1.5"/>
        <line x1="70" y1="116" x2="89" y2="116" stroke="#111" strokeWidth="1.5"/>
        <line x1="70" y1="122" x2="89" y2="122" stroke="#111" strokeWidth="1.5"/>
        {/* Swoosh */}
        <path d="M44 116 Q62 108 108 118" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

        {/* Shoe 2 — slightly behind, overlapping right side */}
        <path d="M100 140 Q104 150 136 152 Q168 154 184 148 Q190 142 186 138 L172 134 L106 134 Z" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M106 134 L104 120 Q102 108 112 100 Q122 92 140 90 L168 90 Q182 91 188 98 Q194 106 192 120 L190 134 Z" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M136 90 Q146 84 158 90 L156 104 Q146 100 138 104 Z" stroke="#111" strokeWidth="1.5" fill="white"/>
        <line x1="140" y1="106" x2="156" y2="106" stroke="#111" strokeWidth="1.5"/>
        <line x1="138" y1="112" x2="157" y2="112" stroke="#111" strokeWidth="1.5"/>
        <line x1="138" y1="118" x2="157" y2="118" stroke="#111" strokeWidth="1.5"/>
        <line x1="138" y1="124" x2="157" y2="124" stroke="#111" strokeWidth="1.5"/>
        <path d="M116 118 Q134 110 178 120" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    label: "Watch Vendors Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Watch 1 — round */}
        {/* Strap top */}
        <rect x="54" y="12" width="28" height="28" rx="5" stroke="#111" strokeWidth="2" fill="white"/>
        <line x1="60" y1="19" x2="76" y2="19" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="58" y1="25" x2="78" y2="25" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="58" y1="31" x2="78" y2="31" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        {/* Case */}
        <rect x="34" y="38" width="68" height="68" rx="18" stroke="#111" strokeWidth="2.5" fill="white"/>
        {/* Bezel */}
        <rect x="40" y="44" width="56" height="56" rx="14" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.35"/>
        {/* Crown */}
        <rect x="102" y="64" width="10" height="16" rx="4" stroke="#111" strokeWidth="1.8" fill="white"/>
        {/* Hour markers */}
        {[0,90,180,270].map((deg, i) => {
          const rad = (deg - 90) * Math.PI / 180;
          const cx = 68, cy = 72, r = 22;
          return <line key={i} x1={cx + (r-4)*Math.cos(rad)} y1={cy + (r-4)*Math.sin(rad)} x2={cx + r*Math.cos(rad)} y2={cy + r*Math.sin(rad)} stroke="#111" strokeWidth="2"/>;
        })}
        {/* Hands */}
        <line x1="68" y1="72" x2="68" y2="56" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="68" y1="72" x2="82" y2="68" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="68" cy="72" r="3" fill="#111"/>
        {/* Strap bottom */}
        <rect x="54" y="106" width="28" height="30" rx="5" stroke="#111" strokeWidth="2" fill="white"/>
        <line x1="58" y1="114" x2="78" y2="114" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="58" y1="120" x2="78" y2="120" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="60" y1="126" x2="76" y2="126" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>

        {/* Watch 2 — square, offset right */}
        <rect x="116" y="22" width="22" height="24" rx="4" stroke="#111" strokeWidth="2" fill="white"/>
        <rect x="104" y="44" width="46" height="46" rx="8" stroke="#111" strokeWidth="2.5" fill="white"/>
        <rect x="109" y="49" width="36" height="36" rx="5" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.35"/>
        <rect x="150" y="58" width="8" height="14" rx="3" stroke="#111" strokeWidth="1.8" fill="white"/>
        <line x1="127" y1="72" x2="127" y2="60" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="127" y1="72" x2="137" y2="68" stroke="#111" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="127" cy="72" r="2.5" fill="#111"/>
        <rect x="116" y="90" width="22" height="22" rx="4" stroke="#111" strokeWidth="2" fill="white"/>
        <line x1="120" y1="97" x2="134" y2="97" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="120" y1="103" x2="134" y2="103" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    label: "Jewelry Vendors Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Ring 1 — large center */}
        <path d="M60 120 Q60 90 90 86 Q120 90 120 120 Q120 150 90 154 Q60 150 60 120Z" stroke="#111" strokeWidth="2.5" fill="white"/>
        <path d="M72 120 Q72 98 90 95 Q108 98 108 120 Q108 142 90 145 Q72 142 72 120Z" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.35"/>
        {/* Diamond setting prongs */}
        <path d="M74 88 L90 62 L106 88 Z" stroke="#111" strokeWidth="2" fill="white"/>
        <line x1="90" y1="62" x2="90" y2="88" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="74" y1="88" x2="106" y2="88" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="82" y1="75" x2="98" y2="75" stroke="#333" strokeWidth="0.8" strokeOpacity="0.3"/>
        {/* Prong tips */}
        <circle cx="74" cy="88" r="3" stroke="#111" strokeWidth="1.5" fill="white"/>
        <circle cx="106" cy="88" r="3" stroke="#111" strokeWidth="1.5" fill="white"/>
        <circle cx="90" cy="62" r="3.5" stroke="#111" strokeWidth="1.5" fill="white"/>

        {/* Earring 1 — drop style left */}
        <circle cx="28" cy="42" r="7" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M28 49 L28 80 Q28 90 22 90 Q16 90 16 82 Q16 74 22 74 Q28 74 28 80" stroke="#111" strokeWidth="1.8" fill="none"/>
        <ellipse cx="22" cy="84" rx="7" ry="10" stroke="#111" strokeWidth="1.8" fill="white"/>

        {/* Earring 2 — right */}
        <circle cx="168" cy="42" r="7" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M168 49 L168 80 Q168 90 174 90 Q180 90 180 82 Q180 74 174 74 Q168 74 168 80" stroke="#111" strokeWidth="1.8" fill="none"/>
        <ellipse cx="174" cy="84" rx="7" ry="10" stroke="#111" strokeWidth="1.8" fill="white"/>

        {/* Bracelet arc bottom */}
        <path d="M38 155 Q90 140 152 155" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M36 162 Q90 147 154 162" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Bracelet links */}
        {[48,68,90,112,132].map((x, i) => (
          <ellipse key={i} cx={x} cy={158} rx="6" ry="4" stroke="#333" strokeWidth="1.2" fill="none" strokeOpacity="0.5"/>
        ))}
        <circle cx="36" cy="160" r="4" stroke="#111" strokeWidth="1.5" fill="white"/>
        <circle cx="154" cy="160" r="4" stroke="#111" strokeWidth="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Designer Bag Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Bag 1 — structured tote */}
        {/* Handles */}
        <path d="M52 72 Q52 52 64 52 Q76 52 76 72" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M84 72 Q84 52 96 52 Q108 52 108 72" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Body */}
        <rect x="30" y="70" width="100" height="86" rx="8" stroke="#111" strokeWidth="2.5" fill="white"/>
        {/* Top flap */}
        <rect x="30" y="70" width="100" height="26" rx="8" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Clasp */}
        <rect x="70" y="82" width="20" height="12" rx="3" stroke="#111" strokeWidth="1.8" fill="white"/>
        <circle cx="80" cy="88" r="3" stroke="#111" strokeWidth="1.5" fill="white"/>
        {/* Body lines */}
        <line x1="30" y1="120" x2="130" y2="120" stroke="#333" strokeWidth="1" strokeOpacity="0.35"/>
        <line x1="30" y1="140" x2="130" y2="140" stroke="#333" strokeWidth="1" strokeOpacity="0.3"/>
        {/* Bottom studs */}
        <circle cx="38" cy="152" r="3.5" stroke="#111" strokeWidth="1.5" fill="white"/>
        <circle cx="122" cy="152" r="3.5" stroke="#111" strokeWidth="1.5" fill="white"/>

        {/* Bag 2 — smaller clutch offset */}
        <rect x="126" y="90" width="62" height="50" rx="6" stroke="#111" strokeWidth="2" fill="white"/>
        <rect x="126" y="90" width="62" height="16" rx="6" stroke="#111" strokeWidth="1.8" fill="white"/>
        <rect x="148" y="96" width="18" height="10" rx="3" stroke="#111" strokeWidth="1.5" fill="white"/>
        <circle cx="157" cy="101" r="2.5" stroke="#111" strokeWidth="1.2" fill="white"/>
        {/* Clutch strap */}
        <path d="M144 90 Q144 78 150 78 Q156 78 156 90" stroke="#111" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    label: "Clothing Vendors Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* T-Shirt 1 */}
        {/* Collar */}
        <path d="M72 22 Q80 32 88 22" stroke="#111" strokeWidth="2" fill="none"/>
        {/* Left sleeve */}
        <path d="M72 22 L42 36 L38 62 L58 66 L64 44" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Right sleeve */}
        <path d="M88 22 L118 36 L122 62 L102 66 L96 44" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Body */}
        <path d="M64 44 L62 130 L98 130 L96 44 Z" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M72 22 L64 44 L62 130" stroke="#111" strokeWidth="2" fill="none"/>
        <path d="M88 22 L96 44 L98 130" stroke="#111" strokeWidth="2" fill="none"/>
        <line x1="62" y1="130" x2="98" y2="130" stroke="#111" strokeWidth="2"/>
        {/* Collar line */}
        <path d="M72 22 Q80 16 88 22" stroke="#111" strokeWidth="1.5" fill="none" strokeOpacity="0.4"/>

        {/* Hoodie 2 — right side */}
        {/* Hood */}
        <path d="M118 44 Q118 22 138 20 Q158 22 158 44" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M124 44 Q124 32 138 30 Q152 32 152 44" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.35"/>
        {/* Body */}
        <path d="M118 44 L108 58 L106 152 L170 152 L168 58 L158 44 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Sleeves */}
        <path d="M108 58 L96 108 L112 112 L118 68" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M168 58 L180 108 L164 112 L158 68" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Cuffs */}
        <path d="M96 108 Q96 118 104 118 Q112 118 112 112" stroke="#111" strokeWidth="1.5" fill="none"/>
        <path d="M180 108 Q180 118 172 118 Q164 118 164 112" stroke="#111" strokeWidth="1.5" fill="none"/>
        {/* Pocket */}
        <path d="M122 110 Q122 126 138 126 Q154 126 154 110" stroke="#111" strokeWidth="1.5" fill="none" strokeOpacity="0.5"/>
        {/* Hem */}
        <line x1="106" y1="143" x2="170" y2="143" stroke="#333" strokeWidth="1" strokeOpacity="0.35"/>
      </svg>
    ),
  },
  {
    label: "Electronics Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* AirPods case */}
        <rect x="20" y="40" width="58" height="78" rx="16" stroke="#111" strokeWidth="2.5" fill="white"/>
        <line x1="20" y1="74" x2="78" y2="74" stroke="#333" strokeWidth="1.2" strokeOpacity="0.4"/>
        <rect x="20" y="40" width="58" height="35" rx="16" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.3"/>
        {/* Left earbud */}
        <ellipse cx="36" cy="96" rx="10" ry="14" stroke="#111" strokeWidth="1.8" fill="white"/>
        <circle cx="36" cy="91" r="4" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        {/* Right earbud */}
        <ellipse cx="62" cy="96" rx="10" ry="14" stroke="#111" strokeWidth="1.8" fill="white"/>
        <circle cx="62" cy="91" r="4" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        {/* Status LED */}
        <circle cx="49" cy="60" r="4" stroke="#111" strokeWidth="1.5" fill="white"/>
        {/* Lightning port */}
        <rect x="42" y="114" width="14" height="5" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>

        {/* Headphones */}
        <path d="M108 80 Q108 44 140 44 Q172 44 172 80" stroke="#111" strokeWidth="2.5" fill="none"/>
        {/* Left cup */}
        <rect x="98" y="74" width="22" height="30" rx="8" stroke="#111" strokeWidth="2.5" fill="white"/>
        <ellipse cx="109" cy="89" rx="7" ry="10" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        {/* Right cup */}
        <rect x="160" y="74" width="22" height="30" rx="8" stroke="#111" strokeWidth="2.5" fill="white"/>
        <ellipse cx="171" cy="89" rx="7" ry="10" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        {/* Headband padding */}
        <path d="M112 44 Q140 38 168 44" stroke="#333" strokeWidth="4" strokeOpacity="0.12" fill="none" strokeLinecap="round"/>

        {/* Earbud single right */}
        <ellipse cx="148" cy="145" rx="14" ry="18" stroke="#111" strokeWidth="2" fill="white"/>
        <ellipse cx="148" cy="139" rx="8" ry="8" stroke="#333" strokeWidth="1.2" fill="none" strokeOpacity="0.4"/>
        <path d="M148 163 Q148 170 142 170" stroke="#111" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="140" cy="170" r="3" stroke="#111" strokeWidth="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Lego Vendor Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Big brick — isometric 3D */}
        {/* Top face */}
        <path d="M30 80 L100 55 L170 80 L100 105 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Left face */}
        <path d="M30 80 L30 130 L100 155 L100 105 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Right face */}
        <path d="M100 105 L100 155 L170 130 L170 80 Z" stroke="#111" strokeWidth="2" fill="white"/>
        {/* Top studs */}
        <ellipse cx="67" cy="74" rx="10" ry="6" stroke="#111" strokeWidth="1.8" fill="white"/>
        <ellipse cx="67" cy="68" rx="10" ry="6" stroke="#111" strokeWidth="1.8" fill="white"/>
        <ellipse cx="100" cy="66" rx="10" ry="6" stroke="#111" strokeWidth="1.8" fill="white"/>
        <ellipse cx="100" cy="60" rx="10" ry="6" stroke="#111" strokeWidth="1.8" fill="white"/>
        <ellipse cx="133" cy="74" rx="10" ry="6" stroke="#111" strokeWidth="1.8" fill="white"/>
        <ellipse cx="133" cy="68" rx="10" ry="6" stroke="#111" strokeWidth="1.8" fill="white"/>
        {/* Left face edge lines */}
        <line x1="30" y1="105" x2="100" y2="130" stroke="#333" strokeWidth="1" strokeOpacity="0.35"/>
        <line x1="30" y1="120" x2="100" y2="145" stroke="#333" strokeWidth="1" strokeOpacity="0.3"/>
        {/* Right face edge lines */}
        <line x1="100" y1="130" x2="170" y2="105" stroke="#333" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="100" y1="145" x2="170" y2="120" stroke="#333" strokeWidth="1" strokeOpacity="0.25"/>

        {/* Small brick top right */}
        <path d="M148 36 L178 26 L178 46 L148 56 Z" stroke="#111" strokeWidth="1.5" fill="white"/>
        <path d="M148 36 L148 56 L118 46 L118 26 Z" stroke="#111" strokeWidth="1.5" fill="white"/>
        <path d="M118 26 L148 16 L178 26 L148 36 Z" stroke="#111" strokeWidth="1.5" fill="white"/>
        <ellipse cx="133" cy="21" rx="6" ry="3.5" stroke="#111" strokeWidth="1.2" fill="white"/>
        <ellipse cx="133" cy="17.5" rx="6" ry="3.5" stroke="#111" strokeWidth="1.2" fill="white"/>
        <ellipse cx="163" cy="21" rx="6" ry="3.5" stroke="#111" strokeWidth="1.2" fill="white"/>
        <ellipse cx="163" cy="17.5" rx="6" ry="3.5" stroke="#111" strokeWidth="1.2" fill="white"/>
      </svg>
    ),
  },
  {
    label: "All-In-One Bundle",
    svg: (
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Mini cologne top-left */}
        <rect x="14" y="18" width="18" height="38" rx="2" stroke="#111" strokeWidth="1.8" fill="white"/>
        <rect x="18" y="12" width="10" height="7" rx="1.5" stroke="#111" strokeWidth="1.5" fill="white"/>
        <rect x="20" y="8" width="6" height="5" rx="1" stroke="#111" strokeWidth="1.2" fill="white"/>
        <line x1="17" y1="34" x2="29" y2="34" stroke="#333" strokeWidth="1" strokeOpacity="0.4"/>

        {/* Mini sneaker top-right */}
        <path d="M152 32 L150 24 Q150 18 158 18 Q166 18 166 24 L166 32 Q166 40 158 40 Q150 40 150 32Z" stroke="#111" strokeWidth="1.8" fill="white"/>
        <path d="M148 40 Q158 37 168 40" stroke="#111" strokeWidth="1.5" fill="none"/>
        <path d="M150 36 Q158 33 166 36" stroke="#333" strokeWidth="1" strokeOpacity="0.4" fill="none"/>

        {/* Mini watch bottom-left */}
        <circle cx="30" cy="148" r="22" stroke="#111" strokeWidth="2" fill="white"/>
        <circle cx="30" cy="148" r="17" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.35"/>
        <rect x="20" y="120" width="20" height="12" rx="3" stroke="#111" strokeWidth="1.8" fill="white"/>
        <rect x="20" y="164" width="20" height="12" rx="3" stroke="#111" strokeWidth="1.8" fill="white"/>
        <line x1="30" y1="148" x2="30" y2="134" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="148" x2="40" y2="144" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="30" cy="148" r="2.5" fill="#111"/>

        {/* Mini ring bottom-right */}
        <path d="M154 135 Q154 122 165 120 Q176 122 176 135 Q176 148 165 150 Q154 148 154 135Z" stroke="#111" strokeWidth="2" fill="white"/>
        <path d="M158 135 Q158 127 165 126 Q172 127 172 135 Q172 143 165 144 Q158 143 158 135Z" stroke="#333" strokeWidth="1" fill="none" strokeOpacity="0.35"/>
        <path d="M158 120 L160 108 L170 108 L172 120" stroke="#111" strokeWidth="1.8" fill="none"/>
        <polygon points="165,108 158,120 172,120" stroke="#111" strokeWidth="1.5" fill="white"/>
        <line x1="165" y1="108" x2="165" y2="120" stroke="#333" strokeWidth="0.8" strokeOpacity="0.4"/>

        {/* Center bag */}
        <path d="M76 68 Q76 52 88 52 Q100 52 100 68" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M100 68 Q100 52 112 52 Q124 52 124 68" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <rect x="58" y="66" width="84" height="74" rx="7" stroke="#111" strokeWidth="2.5" fill="white"/>
        <rect x="58" y="66" width="84" height="22" rx="7" stroke="#111" strokeWidth="2" fill="white"/>
        <rect x="88" y="74" width="24" height="10" rx="3" stroke="#111" strokeWidth="1.5" fill="white"/>
        <circle cx="100" cy="79" r="2.5" stroke="#111" strokeWidth="1.2" fill="white"/>
        <line x1="62" y1="112" x2="138" y2="112" stroke="#333" strokeWidth="1" strokeOpacity="0.3"/>
      </svg>
    ),
  },
];

export default function Preview3() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Design Preview — Set 3</p>
          <h1 className="text-2xl font-black text-gray-900 mb-1">Clean Line Art Product Icons</h1>
          <p className="text-gray-500 text-sm">Matching the podwavez.com card style — white bg · black outlines · grouped items</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
              {/* Product image area */}
              <div className="relative bg-white flex items-center justify-center p-4" style={{ height: "180px" }}>
                {/* SALE badge */}
                <div className="absolute bottom-3 left-3 bg-black text-white text-[10px] font-black px-2.5 py-1 rounded">
                  SALE
                </div>
                {c.svg}
              </div>
              {/* Label */}
              <div className="px-4 py-3 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">{c.label}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-black text-gray-900 text-sm">$14.99</span>
                  <span className="text-gray-400 text-xs line-through">$29.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Approve and I'll apply these to your product cards on the main site.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/preview2" className="inline-block border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-full text-sm hover:border-gray-500 transition-colors">
              ← View Set 2 (colored bottles)
            </a>
            <a href="/" className="inline-block bg-green-500 hover:bg-green-400 text-black font-black px-6 py-2.5 rounded-full text-sm transition-colors">
              → Back to main site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
