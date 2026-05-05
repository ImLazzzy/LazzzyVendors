"use client";

/* ─────────────────────────────────────────────
   PREVIEW 2 — Realistic cologne bottle SVG illustrations
   Original artwork inspired by iconic bottle shapes & colorways
───────────────────────────────────────────── */

const bottles = [
  {
    name: "Dior Sauvage",
    sub: "Eau de Parfum",
    svg: (
      <svg viewBox="0 0 160 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-ds" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="bottle-ds" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a5f"/>
            <stop offset="30%" stopColor="#2d5a8e"/>
            <stop offset="55%" stopColor="#4a7fc1"/>
            <stop offset="75%" stopColor="#2d5a8e"/>
            <stop offset="100%" stopColor="#1a2f4a"/>
          </linearGradient>
          <linearGradient id="cap-ds" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8a8a8a"/>
            <stop offset="35%" stopColor="#d4d4d4"/>
            <stop offset="60%" stopColor="#f0f0f0"/>
            <stop offset="100%" stopColor="#7a7a7a"/>
          </linearGradient>
          <linearGradient id="label-ds" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d1f35"/>
            <stop offset="50%" stopColor="#162b48"/>
            <stop offset="100%" stopColor="#0d1f35"/>
          </linearGradient>
        </defs>
        {/* Glow */}
        <ellipse cx="80" cy="155" rx="60" ry="70" fill="url(#glow-ds)"/>
        {/* Cap */}
        <rect x="50" y="28" width="60" height="38" rx="4" fill="url(#cap-ds)"/>
        <rect x="53" y="31" width="54" height="2" rx="1" fill="white" fillOpacity="0.5"/>
        <rect x="50" y="60" width="60" height="6" rx="1" fill="#999"/>
        {/* Neck */}
        <rect x="60" y="64" width="40" height="14" rx="2" fill="#1a2f4a"/>
        <rect x="62" y="65" width="8" height="12" rx="1" fill="#2d5a8e" fillOpacity="0.4"/>
        {/* Body */}
        <rect x="36" y="78" width="88" height="140" rx="5" fill="url(#bottle-ds)"/>
        {/* Glass highlight left */}
        <rect x="40" y="84" width="10" height="128" rx="4" fill="white" fillOpacity="0.07"/>
        {/* Glass highlight right edge */}
        <rect x="118" y="84" width="4" height="128" rx="2" fill="white" fillOpacity="0.04"/>
        {/* Label area */}
        <rect x="40" y="118" width="80" height="62" rx="2" fill="url(#label-ds)"/>
        <rect x="40" y="118" width="80" height="1.5" fill="#4a7fc1" fillOpacity="0.6"/>
        <rect x="40" y="179" width="80" height="1.5" fill="#4a7fc1" fillOpacity="0.6"/>
        {/* Brand text */}
        <text x="80" y="140" textAnchor="middle" fill="#c8d8f0" fontSize="11" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="5">DIOR</text>
        <text x="80" y="156" textAnchor="middle" fill="#7baad4" fontSize="7.5" fontFamily="Georgia, serif" letterSpacing="2.5">SAUVAGE</text>
        <text x="80" y="170" textAnchor="middle" fill="#4a7fc1" fontSize="5.5" fontFamily="sans-serif" letterSpacing="1">EAU DE PARFUM</text>
        {/* Volume text */}
        <text x="80" y="200" textAnchor="middle" fill="#2d5a8e" fontSize="5" fontFamily="sans-serif">100 ml · 3.4 FL.OZ</text>
        {/* Spray nozzle on cap */}
        <rect x="75" y="18" width="10" height="12" rx="2" fill="#b0b0b0"/>
        <rect x="77" y="10" width="6" height="10" rx="1.5" fill="#c8c8c8"/>
        <rect x="78" y="5" width="4" height="7" rx="1" fill="#d8d8d8"/>
      </svg>
    ),
  },
  {
    name: "JPG Le Male",
    sub: "Jean Paul Gaultier",
    svg: (
      <svg viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-jpg" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="torso-jpg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a2a3a"/>
            <stop offset="20%" stopColor="#2a4060"/>
            <stop offset="45%" stopColor="#3a5a80"/>
            <stop offset="65%" stopColor="#2a4060"/>
            <stop offset="100%" stopColor="#162030"/>
          </linearGradient>
          <linearGradient id="stripe-jpg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15"/>
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15"/>
          </linearGradient>
        </defs>
        <ellipse cx="80" cy="155" rx="58" ry="75" fill="url(#glow-jpg)"/>
        {/* Cap — cylindrical silver */}
        <rect x="62" y="20" width="36" height="44" rx="18" fill="#c0c0c0"/>
        <rect x="64" y="22" width="10" height="40" rx="4" fill="white" fillOpacity="0.3"/>
        <rect x="62" y="58" width="36" height="5" rx="1" fill="#a0a0a0"/>
        {/* Torso-shaped bottle body */}
        {/* Shoulders */}
        <path d="M46 80 Q46 63 80 63 Q114 63 114 80 L114 82 Q114 78 80 76 Q46 78 46 82 Z" fill="url(#torso-jpg)"/>
        {/* Chest */}
        <path d="M46 82 Q44 95 44 112 L116 112 Q116 95 114 82 Q114 78 80 76 Q46 78 46 82Z" fill="url(#torso-jpg)"/>
        {/* Waist narrowing */}
        <path d="M44 112 Q50 118 50 130 L110 130 Q110 118 116 112 Z" fill="url(#torso-jpg)"/>
        {/* Lower body */}
        <path d="M50 130 L48 200 Q48 212 80 212 Q112 212 112 200 L110 130 Z" fill="url(#torso-jpg)"/>
        {/* Vertical stripes on torso */}
        {[54,62,70,78,86,94,102].map((x, i) => (
          <line key={i} x1={x} y1="68" x2={x} y2="210" stroke="white" strokeWidth="0.7" strokeOpacity={i % 2 === 0 ? 0.12 : 0.06}/>
        ))}
        {/* Chest muscle outline */}
        <path d="M52 90 Q62 86 72 90 Q72 102 62 104 Q52 102 52 90Z" stroke="white" strokeWidth="0.8" fill="none" strokeOpacity="0.2"/>
        <path d="M88 90 Q98 86 108 90 Q108 102 98 104 Q88 102 88 90Z" stroke="white" strokeWidth="0.8" fill="none" strokeOpacity="0.2"/>
        {/* Belly button area */}
        <ellipse cx="80" cy="148" rx="5" ry="4" stroke="white" strokeWidth="0.8" fill="none" strokeOpacity="0.25"/>
        {/* Brand label */}
        <text x="80" y="170" textAnchor="middle" fill="#a0c4f0" fontSize="8" fontFamily="sans-serif" fontWeight="900" letterSpacing="1.5">JEAN PAUL</text>
        <text x="80" y="181" textAnchor="middle" fill="#a0c4f0" fontSize="8" fontFamily="sans-serif" fontWeight="900" letterSpacing="1.5">GAULTIER</text>
        <text x="80" y="193" textAnchor="middle" fill="#6090c0" fontSize="7" fontFamily="Georgia, serif" letterSpacing="3">LE MALE</text>
        {/* Glass highlight */}
        <path d="M48 82 Q46 120 48 200" stroke="white" strokeWidth="6" strokeOpacity="0.04" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Valentino Born In Roma",
    sub: "Eau de Toilette",
    svg: (
      <svg viewBox="0 0 160 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-v" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="body-v" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a0a0a"/>
            <stop offset="20%" stopColor="#1a1a1a"/>
            <stop offset="50%" stopColor="#222222"/>
            <stop offset="80%" stopColor="#141414"/>
            <stop offset="100%" stopColor="#080808"/>
          </linearGradient>
          <linearGradient id="cap-v" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8a6a00"/>
            <stop offset="30%" stopColor="#d4a000"/>
            <stop offset="55%" stopColor="#f0c840"/>
            <stop offset="80%" stopColor="#c09000"/>
            <stop offset="100%" stopColor="#7a5a00"/>
          </linearGradient>
          <linearGradient id="stud-v" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0c840"/>
            <stop offset="100%" stopColor="#8a6a00"/>
          </linearGradient>
        </defs>
        <ellipse cx="80" cy="155" rx="60" ry="72" fill="url(#glow-v)"/>
        {/* Gold cap */}
        <rect x="46" y="22" width="68" height="46" rx="5" fill="url(#cap-v)"/>
        <rect x="49" y="25" width="20" height="40" rx="3" fill="#f0c840" fillOpacity="0.2"/>
        <rect x="46" y="62" width="68" height="6" rx="1" fill="#8a6a00"/>
        {/* Gold studs on cap (Valentino Rockstud) */}
        {[55,65,75,85,95,105].map((x, i) => (
          <polygon key={i} points={`${x},36 ${x-4},44 ${x+4},44`} fill="url(#stud-v)" opacity="0.8"/>
        ))}
        {[60,72,84,96].map((x, i) => (
          <polygon key={i} points={`${x},48 ${x-4},56 ${x+4},56`} fill="url(#stud-v)" opacity="0.6"/>
        ))}
        {/* Neck */}
        <rect x="64" y="68" width="32" height="16" rx="2" fill="#1a1a1a"/>
        <rect x="66" y="70" width="6" height="12" rx="1" fill="#2a2a2a"/>
        {/* Body */}
        <rect x="34" y="84" width="92" height="148" rx="4" fill="url(#body-v)"/>
        {/* Glass highlight */}
        <rect x="38" y="90" width="10" height="136" rx="4" fill="white" fillOpacity="0.05"/>
        {/* Valentino V logo area - gold border */}
        <rect x="38" y="118" width="84" height="80" rx="2" stroke="#c09000" strokeWidth="1.5" fill="none"/>
        <rect x="40" y="120" width="80" height="76" rx="1" fill="#0d0d0d" fillOpacity="0.5"/>
        {/* V logo */}
        <text x="80" y="148" textAnchor="middle" fill="#c09000" fontSize="28" fontFamily="Georgia, serif" fontWeight="bold">V</text>
        {/* Valentino text */}
        <text x="80" y="166" textAnchor="middle" fill="#c09000" fontSize="7" fontFamily="Georgia, serif" letterSpacing="3.5">VALENTINO</text>
        <line x1="44" y1="172" x2="116" y2="172" stroke="#c09000" strokeWidth="0.5" strokeOpacity="0.5"/>
        <text x="80" y="182" textAnchor="middle" fill="#8a6a00" fontSize="5.5" fontFamily="sans-serif" letterSpacing="2">BORN IN ROMA</text>
        {/* Studs along bottom edge of bottle */}
        {[44,56,68,80,92,104,116].map((x, i) => (
          <polygon key={i} points={`${x},226 ${x-3},220 ${x+3},220`} fill="url(#stud-v)" opacity="0.6"/>
        ))}
        <text x="80" y="216" textAnchor="middle" fill="#555" fontSize="5" fontFamily="sans-serif">100 ml · 3.4 FL.OZ</text>
        {/* Nozzle */}
        <rect x="74" y="12" width="12" height="12" rx="2" fill="#c09000"/>
        <rect x="76" y="5" width="8" height="9" rx="1.5" fill="#d4a000"/>
      </svg>
    ),
  },
  {
    name: "Bleu de Chanel",
    sub: "Eau de Parfum",
    svg: (
      <svg viewBox="0 0 160 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-ch" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="body-ch" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0e1520"/>
            <stop offset="25%" stopColor="#1a2840"/>
            <stop offset="50%" stopColor="#243560"/>
            <stop offset="75%" stopColor="#1a2840"/>
            <stop offset="100%" stopColor="#0a1018"/>
          </linearGradient>
          <linearGradient id="cap-ch" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a1a"/>
            <stop offset="40%" stopColor="#3a3a3a"/>
            <stop offset="60%" stopColor="#4a4a4a"/>
            <stop offset="100%" stopColor="#161616"/>
          </linearGradient>
        </defs>
        <ellipse cx="80" cy="150" rx="62" ry="68" fill="url(#glow-ch)"/>
        {/* Square chunky cap */}
        <rect x="42" y="22" width="76" height="50" rx="3" fill="url(#cap-ch)"/>
        <rect x="45" y="25" width="20" height="44" rx="2" fill="white" fillOpacity="0.05"/>
        <rect x="42" y="66" width="76" height="6" rx="1" fill="#252525"/>
        {/* Neck */}
        <rect x="58" y="72" width="44" height="16" rx="2" fill="#111"/>
        {/* Body — chunky square */}
        <rect x="30" y="88" width="100" height="142" rx="4" fill="url(#body-ch)"/>
        {/* Glass sheen */}
        <rect x="34" y="94" width="12" height="130" rx="5" fill="white" fillOpacity="0.06"/>
        <rect x="116" y="94" width="6" height="130" rx="3" fill="white" fillOpacity="0.03"/>
        {/* Engraved CC logo area */}
        <rect x="36" y="128" width="88" height="72" fill="none"/>
        {/* Chanel CC interlocking — simplified geometric */}
        <path d="M65 144 Q65 132 74 132 Q83 132 83 144 Q83 156 74 156 Q65 156 65 144Z" stroke="#8890c8" strokeWidth="1.8" fill="none"/>
        <path d="M77 144 Q77 132 86 132 Q95 132 95 144 Q95 156 86 156 Q77 156 77 144Z" stroke="#8890c8" strokeWidth="1.8" fill="none"/>
        {/* CHANEL text */}
        <text x="80" y="174" textAnchor="middle" fill="#8890c8" fontSize="9" fontFamily="Georgia, serif" letterSpacing="5">CHANEL</text>
        <line x1="36" y1="179" x2="124" y2="179" stroke="#8890c8" strokeWidth="0.5" strokeOpacity="0.5"/>
        <text x="80" y="191" textAnchor="middle" fill="#6068a0" fontSize="6" fontFamily="sans-serif" letterSpacing="2">BLEU DE CHANEL</text>
        <text x="80" y="202" textAnchor="middle" fill="#4048708" fontSize="5" fontFamily="sans-serif" fillOpacity="0.5">EAU DE PARFUM</text>
        <text x="80" y="218" textAnchor="middle" fill="#303860" fontSize="5" fontFamily="sans-serif">100 ml · 3.4 FL.OZ</text>
        {/* Nozzle */}
        <rect x="72" y="12" width="16" height="12" rx="2" fill="#2a2a2a"/>
        <rect x="74" y="5" width="12" height="9" rx="1.5" fill="#333"/>
        <rect x="76" y="2" width="8" height="5" rx="1" fill="#3a3a3a"/>
      </svg>
    ),
  },
  {
    name: "YSL Y / Libre",
    sub: "Yves Saint Laurent",
    svg: (
      <svg viewBox="0 0 160 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-ysl" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="body-ysl" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0c0c0c"/>
            <stop offset="30%" stopColor="#1e1e1e"/>
            <stop offset="55%" stopColor="#282828"/>
            <stop offset="80%" stopColor="#181818"/>
            <stop offset="100%" stopColor="#080808"/>
          </linearGradient>
          <linearGradient id="cap-ysl" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6a4e00"/>
            <stop offset="35%" stopColor="#c09000"/>
            <stop offset="60%" stopColor="#e8b800"/>
            <stop offset="85%" stopColor="#b08000"/>
            <stop offset="100%" stopColor="#5a4000"/>
          </linearGradient>
        </defs>
        <ellipse cx="80" cy="155" rx="60" ry="72" fill="url(#glow-ysl)"/>
        {/* Tall gold cap */}
        <rect x="52" y="18" width="56" height="54" rx="28" fill="url(#cap-ysl)"/>
        <rect x="55" y="21" width="14" height="48" rx="7" fill="white" fillOpacity="0.15"/>
        <rect x="52" y="66" width="56" height="5" rx="1" fill="#7a6000"/>
        {/* Neck */}
        <rect x="64" y="71" width="32" height="16" rx="2" fill="#141414"/>
        {/* Body — tall slim */}
        <rect x="38" y="87" width="84" height="148" rx="5" fill="url(#body-ysl)"/>
        {/* Glass highlight */}
        <rect x="42" y="93" width="10" height="136" rx="4" fill="white" fillOpacity="0.05"/>
        {/* Gold collar */}
        <rect x="38" y="87" width="84" height="12" rx="5" fill="#c09000" fillOpacity="0.3"/>
        <rect x="38" y="87" width="84" height="3" rx="2" fill="#c09000" fillOpacity="0.5"/>
        {/* YSL logo — large centered */}
        <text x="80" y="150" textAnchor="middle" fill="#c09000" fontSize="36" fontFamily="Georgia, serif" fontWeight="bold" fontStyle="italic">YSL</text>
        {/* Bottom label */}
        <line x1="42" y1="170" x2="118" y2="170" stroke="#c09000" strokeWidth="0.6" strokeOpacity="0.5"/>
        <text x="80" y="183" textAnchor="middle" fill="#c09000" fontSize="6.5" fontFamily="Georgia, serif" letterSpacing="3">YVES SAINT LAURENT</text>
        <text x="80" y="196" textAnchor="middle" fill="#8a6a00" fontSize="6" fontFamily="Georgia, serif" letterSpacing="2">LIBRE</text>
        <text x="80" y="220" textAnchor="middle" fill="#444" fontSize="5" fontFamily="sans-serif">90 ml · 3.0 FL.OZ</text>
        {/* Atomizer */}
        <rect x="74" y="8" width="12" height="12" rx="2" fill="#c09000" fillOpacity="0.7"/>
        <rect x="76" y="2" width="8" height="8" rx="1.5" fill="#d4a800"/>
      </svg>
    ),
  },
  {
    name: "Creed Aventus",
    sub: "Extrait de Parfum",
    svg: (
      <svg viewBox="0 0 160 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-cr" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#d1d5db" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="body-cr" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c8c0a8"/>
            <stop offset="25%" stopColor="#e0d8c0"/>
            <stop offset="50%" stopColor="#f0e8d0"/>
            <stop offset="75%" stopColor="#ddd5bd"/>
            <stop offset="100%" stopColor="#b8b0a0"/>
          </linearGradient>
          <linearGradient id="cap-cr" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6a6a5a"/>
            <stop offset="40%" stopColor="#c8c0a8"/>
            <stop offset="60%" stopColor="#ddd5bd"/>
            <stop offset="100%" stopColor="#5a5a4a"/>
          </linearGradient>
        </defs>
        <ellipse cx="80" cy="155" rx="60" ry="70" fill="url(#glow-cr)"/>
        {/* Classic rectangular cap */}
        <rect x="48" y="22" width="64" height="48" rx="4" fill="url(#cap-cr)"/>
        <rect x="51" y="25" width="16" height="42" rx="3" fill="white" fillOpacity="0.2"/>
        {/* Creed emblem on cap */}
        <text x="80" y="52" textAnchor="middle" fill="#4a4a3a" fontSize="8" fontFamily="Georgia, serif" letterSpacing="1" fontStyle="italic">CREED</text>
        <rect x="48" y="64" width="64" height="5" rx="1" fill="#8a8070"/>
        {/* Neck */}
        <rect x="62" y="69" width="36" height="16" rx="2" fill="#d8d0b8"/>
        {/* Body — classic rectangular */}
        <rect x="34" y="85" width="92" height="150" rx="4" fill="url(#body-cr)"/>
        {/* Glass highlight */}
        <rect x="38" y="91" width="12" height="138" rx="5" fill="white" fillOpacity="0.15"/>
        {/* Label — cream/ivory */}
        <rect x="38" y="115" width="84" height="90" rx="2" fill="#faf5e8"/>
        <rect x="38" y="115" width="84" height="2" fill="#8a7a60"/>
        <rect x="38" y="203" width="84" height="2" fill="#8a7a60"/>
        {/* Border on label */}
        <rect x="41" y="118" width="78" height="84" rx="1" stroke="#8a7a60" strokeWidth="0.8" fill="none"/>
        {/* Creed logo text */}
        <text x="80" y="138" textAnchor="middle" fill="#2a2018" fontSize="8" fontFamily="Georgia, serif" fontStyle="italic" letterSpacing="2">Creed</text>
        <line x1="45" y1="143" x2="115" y2="143" stroke="#8a7a60" strokeWidth="0.6"/>
        <text x="80" y="157" textAnchor="middle" fill="#1a1510" fontSize="9.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="2">AVENTUS</text>
        <line x1="45" y1="163" x2="115" y2="163" stroke="#8a7a60" strokeWidth="0.6"/>
        <text x="80" y="175" textAnchor="middle" fill="#4a4030" fontSize="5.5" fontFamily="sans-serif" letterSpacing="1.5">EXTRAIT DE PARFUM</text>
        <text x="80" y="187" textAnchor="middle" fill="#6a6050" fontSize="5" fontFamily="sans-serif">POUR HOMME</text>
        <text x="80" y="220" textAnchor="middle" fill="#888070" fontSize="5" fontFamily="sans-serif">100 ml · 3.4 FL.OZ</text>
        {/* Atomizer */}
        <rect x="72" y="12" width="16" height="12" rx="2" fill="#c8c0a8"/>
        <rect x="74" y="4" width="12" height="10" rx="2" fill="#d8d0b8"/>
        <rect x="76" y="1" width="8" height="5" rx="1" fill="#e0d8c0"/>
      </svg>
    ),
  },
  {
    name: "Versace Eros",
    sub: "Eau de Toilette",
    svg: (
      <svg viewBox="0 0 160 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-ve" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="body-ve" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a2030"/>
            <stop offset="20%" stopColor="#083a60"/>
            <stop offset="45%" stopColor="#0a5080"/>
            <stop offset="70%" stopColor="#083a60"/>
            <stop offset="100%" stopColor="#061525"/>
          </linearGradient>
          <linearGradient id="cap-ve" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7a6a00"/>
            <stop offset="35%" stopColor="#d4b400"/>
            <stop offset="60%" stopColor="#f0cc00"/>
            <stop offset="85%" stopColor="#c0a400"/>
            <stop offset="100%" stopColor="#6a5a00"/>
          </linearGradient>
        </defs>
        <ellipse cx="80" cy="155" rx="58" ry="72" fill="url(#glow-ve)"/>
        {/* Medusa head cap */}
        <circle cx="80" cy="44" r="30" fill="url(#cap-ve)"/>
        <circle cx="80" cy="44" r="26" stroke="#c0a400" strokeWidth="1" fill="#c09000" fillOpacity="0.3"/>
        {/* Medusa simplified — Greek key pattern around */}
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const r = 22, rad = deg * Math.PI / 180;
          return <circle key={i} cx={80 + r * Math.cos(rad)} cy={44 + r * Math.sin(rad)} r="2" fill="#8a7000" fillOpacity="0.7"/>;
        })}
        {/* Face outline */}
        <circle cx="80" cy="44" r="14" stroke="#f0cc00" strokeWidth="1.5" fill="none" strokeOpacity="0.5"/>
        <text x="80" y="49" textAnchor="middle" fill="#f0cc00" fontSize="13" fontFamily="serif" fontWeight="bold">M</text>
        <rect x="52" y="72" width="56" height="6" rx="1" fill="#9a8000"/>
        {/* Neck */}
        <rect x="63" y="78" width="34" height="14" rx="2" fill="#0a2030"/>
        {/* Body */}
        <rect x="36" y="92" width="88" height="146" rx="5" fill="url(#body-ve)"/>
        {/* Glass highlight */}
        <rect x="40" y="98" width="10" height="134" rx="4" fill="white" fillOpacity="0.06"/>
        {/* Greek key border top */}
        <rect x="36" y="92" width="88" height="14" fill="#0a5080" fillOpacity="0.3"/>
        <rect x="36" y="92" width="88" height="2" fill="#c0a400" fillOpacity="0.6"/>
        {/* EROS text */}
        <text x="80" y="145" textAnchor="middle" fill="#f0cc00" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="5">EROS</text>
        {/* Versace text */}
        <text x="80" y="163" textAnchor="middle" fill="#a0c8e0" fontSize="7" fontFamily="sans-serif" letterSpacing="4">VERSACE</text>
        <line x1="40" y1="168" x2="120" y2="168" stroke="#c0a400" strokeWidth="0.5" strokeOpacity="0.5"/>
        <text x="80" y="180" textAnchor="middle" fill="#407090" fontSize="5.5" fontFamily="sans-serif" letterSpacing="2">EAU DE TOILETTE</text>
        <text x="80" y="220" textAnchor="middle" fill="#305060" fontSize="5" fontFamily="sans-serif">100 ml · 3.4 FL.OZ</text>
        {/* Atomizer */}
        <rect x="74" y="10" width="12" height="10" rx="2" fill="#c0a400"/>
        <rect x="76" y="3" width="8" height="8" rx="1.5" fill="#d4b400"/>
      </svg>
    ),
  },
  {
    name: "Acqua di Giò",
    sub: "Giorgio Armani",
    svg: (
      <svg viewBox="0 0 160 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glow-ag" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="body-ag" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a1a2e"/>
            <stop offset="20%" stopColor="#123052"/>
            <stop offset="45%" stopColor="#1a4878"/>
            <stop offset="70%" stopColor="#123052"/>
            <stop offset="100%" stopColor="#08121e"/>
          </linearGradient>
          <linearGradient id="cap-ag" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f0f0f0"/>
            <stop offset="40%" stopColor="#ffffff"/>
            <stop offset="70%" stopColor="#e8e8e8"/>
            <stop offset="100%" stopColor="#d0d0d0"/>
          </linearGradient>
        </defs>
        <ellipse cx="80" cy="155" rx="60" ry="70" fill="url(#glow-ag)"/>
        {/* Clean white cap */}
        <rect x="50" y="24" width="60" height="44" rx="5" fill="url(#cap-ag)"/>
        <rect x="53" y="27" width="16" height="38" rx="3" fill="white" fillOpacity="0.4"/>
        <rect x="50" y="62" width="60" height="5" rx="1" fill="#d8d8d8"/>
        {/* Neck */}
        <rect x="62" y="67" width="36" height="18" rx="2" fill="#101820"/>
        {/* Body — rounded rectangular */}
        <rect x="34" y="85" width="92" height="152" rx="10" fill="url(#body-ag)"/>
        {/* Wave texture */}
        <path d="M34 120 Q50 110 66 120 Q82 130 98 120 Q114 110 126 120" stroke="#38bdf8" strokeWidth="1" fill="none" strokeOpacity="0.2"/>
        <path d="M34 134 Q52 122 68 134 Q84 146 100 134 Q116 122 126 134" stroke="#38bdf8" strokeWidth="1" fill="none" strokeOpacity="0.15"/>
        {/* Glass sheen */}
        <rect x="38" y="91" width="12" height="140" rx="5" fill="white" fillOpacity="0.07"/>
        {/* Label */}
        <text x="80" y="162" textAnchor="middle" fill="#b8d8f0" fontSize="8.5" fontFamily="Georgia, serif" letterSpacing="1">ACQUA DI GIÒ</text>
        <line x1="40" y1="167" x2="120" y2="167" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.4"/>
        <text x="80" y="179" textAnchor="middle" fill="#6090b8" fontSize="6.5" fontFamily="sans-serif" letterSpacing="3">ARMANI</text>
        <text x="80" y="192" textAnchor="middle" fill="#405870" fontSize="5.5" fontFamily="sans-serif" letterSpacing="1.5">EAU DE TOILETTE</text>
        <text x="80" y="222" textAnchor="middle" fill="#304050" fontSize="5" fontFamily="sans-serif">200 ml · 6.7 FL.OZ</text>
        {/* Atomizer */}
        <rect x="72" y="14" width="16" height="12" rx="3" fill="#e8e8e8"/>
        <rect x="74" y="6" width="12" height="10" rx="2.5" fill="#f0f0f0"/>
        <rect x="76" y="2" width="8" height="6" rx="1.5" fill="white"/>
      </svg>
    ),
  },
];

export default function Preview2() {
  return (
    <div className="min-h-screen bg-[#050505] text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            Design Preview — Set 2
          </div>
          <h1 className="text-3xl font-black uppercase mb-2">Cologne Bottle Illustrations</h1>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            Hand-crafted SVG illustrations based on iconic bottle shapes & colorways —
            Dior · JPG · Valentino · Chanel · YSL · Creed · Versace · Armani
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {bottles.map((b, i) => (
            <div key={i}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all group">
              {/* Dark card with glow bg */}
              <div className="relative flex items-end justify-center bg-[#080808] overflow-hidden"
                style={{ height: "220px", background: "radial-gradient(ellipse at 50% 80%, rgba(74,222,128,0.06) 0%, transparent 70%)" }}>
                <div className="w-24 h-full flex items-end justify-center pb-2">
                  {b.svg}
                </div>
              </div>
              {/* Name */}
              <div className="px-3 py-3 border-t border-white/5">
                <p className="font-black text-xs uppercase text-white leading-tight">{b.name}</p>
                <p className="text-zinc-500 text-[10px] mt-0.5 italic">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-center">
          <p className="text-zinc-400 text-sm mb-1 font-semibold">These are original SVG illustrations — not copied brand images</p>
          <p className="text-zinc-600 text-xs max-w-lg mx-auto">
            Inspired by the iconic shapes and colorways of each bottle. Safe to use on your site with no copyright concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <a href="/preview" className="inline-block border border-white/20 hover:border-white/40 text-zinc-400 hover:text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">
              ← View Set 1 (all products)
            </a>
            <a href="/" className="inline-block border border-green-500/40 hover:border-green-500/70 text-green-400 font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">
              → Back to main site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
