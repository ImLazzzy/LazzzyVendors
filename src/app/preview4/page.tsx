"use client";

/* Cologne icon — dark filled cartoon style, 3 bottles grouped */
export function CologneIcon() {
  return (
    <svg viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

      {/* ── CENTER: JPG torso-style bottle (tallest, behind) ── */}
      {/* Atomizer tip */}
      <rect x="122" y="14" width="16" height="10" rx="3" fill="#5a5a5a"/>
      <rect x="125" y="10" width="10" height="6" rx="2" fill="#6a6a6a"/>
      {/* Atomizer collar rings */}
      <rect x="118" y="24" width="24" height="5" rx="1" fill="#888"/>
      <rect x="120" y="28" width="20" height="4" rx="1" fill="#999"/>
      <rect x="118" y="32" width="24" height="3" rx="1" fill="#777"/>
      {/* Neck */}
      <rect x="122" y="35" width="16" height="16" rx="3" fill="#333"/>
      {/* Shoulder curve */}
      <path d="M108 56 Q108 50 130 50 Q152 50 152 56 L152 60 Q152 54 130 52 Q108 54 108 60Z" fill="#2a2a2a"/>
      {/* Torso body - main fill */}
      <path d="M108 56 Q102 72 100 92 L160 92 Q158 72 152 56 Q152 54 130 52 Q108 54 108 56Z" fill="#2a2a2a"/>
      {/* Chest bulge left */}
      <path d="M106 66 Q106 56 116 56 Q108 62 108 72Z" fill="#333"/>
      {/* Chest bulge right */}
      <path d="M154 66 Q154 56 144 56 Q152 62 152 72Z" fill="#333"/>
      {/* Waist */}
      <path d="M100 92 Q106 100 108 112 L152 112 Q154 100 160 92Z" fill="#252525"/>
      {/* Lower body */}
      <path d="M108 112 L106 192 Q106 202 130 202 Q154 202 154 192 L152 112Z" fill="#222"/>
      {/* Body highlight left */}
      <path d="M104 70 Q102 100 104 185" stroke="#444" strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Chest detail lines */}
      <path d="M112 70 Q118 66 122 70 Q122 80 118 82 Q112 80 112 70Z" fill="#1a1a1a"/>
      <path d="M138 70 Q144 66 148 70 Q148 80 144 82 Q138 80 138 70Z" fill="#1a1a1a"/>
      {/* Belly button */}
      <ellipse cx="130" cy="128" rx="5" ry="4" fill="#1a1a1a"/>
      {/* Vertical body lines */}
      <line x1="130" y1="95" x2="130" y2="195" stroke="#1a1a1a" strokeWidth="1.5" strokeOpacity="0.6"/>
      {/* Bottom base */}
      <rect x="106" y="192" width="48" height="8" rx="4" fill="#333"/>

      {/* ── LEFT: Round diamond-textured bottle ── */}
      {/* Cap - square boxy */}
      <rect x="28" y="108" width="52" height="36" rx="5" fill="#555"/>
      {/* Cap highlight */}
      <rect x="31" y="111" width="14" height="30" rx="3" fill="#666" fillOpacity="0.5"/>
      {/* Cap studs/rivets */}
      <circle cx="38" cy="118" r="3.5" fill="#444"/>
      <circle cx="48" cy="118" r="3.5" fill="#444"/>
      <circle cx="58" cy="118" r="3.5" fill="#444"/>
      <circle cx="68" cy="118" r="3.5" fill="#444"/>
      <circle cx="38" cy="128" r="3.5" fill="#444"/>
      <circle cx="48" cy="128" r="3.5" fill="#444"/>
      <circle cx="58" cy="128" r="3.5" fill="#444"/>
      <circle cx="68" cy="128" r="3.5" fill="#444"/>
      <circle cx="38" cy="138" r="3.5" fill="#444"/>
      <circle cx="48" cy="138" r="3.5" fill="#444"/>
      <circle cx="58" cy="138" r="3.5" fill="#444"/>
      <circle cx="68" cy="138" r="3.5" fill="#444"/>
      {/* Neck connector */}
      <rect x="38" y="143" width="32" height="8" rx="2" fill="#4a4a4a"/>
      {/* Round bottle body */}
      <ellipse cx="54" cy="200" rx="46" ry="52" fill="#3a3a3a"/>
      {/* Diamond texture pattern */}
      {[0,1,2,3,4,5].map(row =>
        [0,1,2,3].map(col => {
          const x = 18 + col * 22 + (row % 2) * 11;
          const y = 162 + row * 18;
          return (
            <path key={`${row}-${col}`}
              d={`M${x},${y+8} L${x+10},${y} L${x+20},${y+8} L${x+10},${y+16} Z`}
              fill="#2e2e2e" stroke="#444" strokeWidth="0.8"
            />
          );
        })
      )}
      {/* Bottle highlight */}
      <ellipse cx="36" cy="185" rx="8" ry="20" fill="#555" fillOpacity="0.4"/>
      {/* Label on bottle */}
      <rect x="24" y="188" width="60" height="26" rx="3" fill="#222"/>
      <rect x="27" y="191" width="54" height="2" fill="#555" fillOpacity="0.5"/>
      <rect x="27" y="209" width="54" height="2" fill="#555" fillOpacity="0.5"/>
      {/* Bottom base */}
      <ellipse cx="54" cy="248" rx="42" ry="7" fill="#2a2a2a"/>

      {/* ── RIGHT: Chunky rectangular bottle ── */}
      {/* Nozzle */}
      <rect x="186" y="98" width="20" height="10" rx="2" fill="#6a6a6a"/>
      <rect x="188" y="92" width="16" height="8" rx="2" fill="#777"/>
      {/* Cap - ribbed rings */}
      <rect x="176" y="108" width="60" height="8" rx="2" fill="#888"/>
      <rect x="176" y="115" width="60" height="7" rx="1" fill="#999"/>
      <rect x="176" y="121" width="60" height="7" rx="1" fill="#888"/>
      <rect x="176" y="127" width="60" height="7" rx="1" fill="#999"/>
      <rect x="176" y="133" width="60" height="7" rx="1" fill="#888"/>
      <rect x="176" y="139" width="60" height="6" rx="1" fill="#777"/>
      {/* Neck/shoulder */}
      <rect x="182" y="144" width="48" height="10" rx="2" fill="#444"/>
      {/* Main body */}
      <rect x="172" y="154" width="68" height="96" rx="6" fill="#333"/>
      {/* Body highlight left strip */}
      <rect x="176" y="158" width="10" height="88" rx="4" fill="#444" fillOpacity="0.6"/>
      {/* Body highlight top edge */}
      <rect x="172" y="154" width="68" height="10" rx="6" fill="#3d3d3d"/>
      {/* Label area darker */}
      <rect x="178" y="178" width="56" height="50" rx="3" fill="#222"/>
      {/* Label detail lines */}
      <rect x="181" y="182" width="50" height="2" fill="#444" fillOpacity="0.6"/>
      <rect x="181" y="222" width="50" height="2" fill="#444" fillOpacity="0.6"/>
      {/* Side reflection */}
      <rect x="230" y="158" width="6" height="88" rx="3" fill="#555" fillOpacity="0.3"/>
      {/* Bottom base */}
      <rect x="172" y="246" width="68" height="8" rx="4" fill="#2a2a2a"/>

      {/* Ground shadow */}
      <ellipse cx="130" cy="270" rx="110" ry="10" fill="#ccc" fillOpacity="0.3"/>
    </svg>
  );
}

export default function Preview4() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Design Preview — Set 4</p>
          <h1 className="text-2xl font-black text-gray-900 mb-1">Cologne Product Card</h1>
          <p className="text-gray-500 text-sm">Dark filled cartoon style — no outlines, solid fills with highlights</p>
        </div>

        {/* Single card preview matching podwavez layout */}
        <div className="max-w-xs mx-auto bg-white rounded-2xl overflow-hidden shadow border border-gray-100">
          <div className="relative bg-white flex items-center justify-center p-6" style={{ height: "260px" }}>
            {/* SALE badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black text-white text-xs font-black px-3 py-1.5 rounded-lg">
              🏷 SALE
            </div>
            <div className="w-full h-full">
              <CologneIcon />
            </div>
          </div>
          <div className="px-4 py-4 border-t border-gray-100">
            <p className="font-black text-gray-900 text-base">Cologne Vendors Bundle</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-black text-gray-900">$14.99</span>
              <span className="text-gray-400 text-sm line-through">$29.99</span>
            </div>
          </div>
        </div>

        {/* Also show larger isolated icon */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Icon isolated</p>
          <div className="w-64 h-64 mx-auto">
            <CologneIcon />
          </div>
        </div>

        <div className="mt-10 text-center flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/preview3" className="inline-block border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-full text-sm hover:border-gray-500 transition-colors">
            ← View Set 3
          </a>
          <a href="/" className="inline-block bg-green-500 hover:bg-green-400 text-black font-black px-6 py-2.5 rounded-full text-sm transition-colors">
            Approve → Apply to site
          </a>
        </div>
      </div>
    </div>
  );
}
