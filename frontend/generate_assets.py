import os

# Create assets directory if it doesn't exist
assets_dir = r"C:\Users\Subhajit Dhar\.gemini\antigravity\scratch\amazon-clone\assets"
os.makedirs(assets_dir, exist_ok=True)

# Helper function to generate an SVG template
def save_svg(filename, content):
    filepath = os.path.join(assets_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Saved {filename}")

# --- Hero Banners (1200x600) ---
save_svg("hero_deals.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#203a43;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  
  <!-- Stylized TV representation -->
  <rect x="750" y="150" width="350" height="220" rx="10" fill="#111" stroke="#444" stroke-width="6"/>
  <rect x="760" y="160" width="330" height="200" rx="4" fill="#0d1b2a"/>
  <!-- TV Stand -->
  <path d="M900,370 L900,420 L950,420 L950,370 Z" fill="#333"/>
  <ellipse cx="925" cy="420" rx="60" ry="10" fill="#222"/>
  
  <!-- Glowing effects on TV -->
  <circle cx="925" cy="260" r="60" fill="#ffd814" opacity="0.15" filter="blur(20px)"/>
  <polygon points="900,220 960,260 900,300" fill="#ffd814" opacity="0.8"/>
  
  <!-- Speaker bar -->
  <rect x="780" y="440" width="290" height="25" rx="5" fill="#1e272c" stroke="#111" stroke-width="2"/>
  <circle cx="795" cy="452" r="4" fill="#00ff00"/>
  <circle cx="1055" cy="452" r="4" fill="#333"/>
  
  <!-- Text highlights -->
  <text x="80" y="150" font-family="'Outfit', sans-serif" font-size="48" font-weight="800" fill="#ffd814">40% OFF</text>
  <text x="80" y="210" font-family="'Outfit', sans-serif" font-size="32" font-weight="700" fill="#ffffff">Smart Entertainment Deals</text>
</svg>""")

save_svg("hero_fashion.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f857a6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff5858;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  
  <!-- Stylized Hanger & Clothes -->
  <path d="M925,120 C925,90 900,90 900,105 C900,120 925,125 925,140 L925,160 M825,200 L925,160 L1025,200 Z" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Dress/Shirt Silhouette -->
  <path d="M850,200 L810,380 L880,380 L890,500 L960,500 L970,380 L1040,380 L1000,200 Z" fill="#ffffff" opacity="0.9"/>
  
  <!-- Sunglasses Icon -->
  <path d="M840,430 C820,430 810,445 810,460 C810,480 830,490 850,490 C870,490 880,475 880,460" fill="none" stroke="#222" stroke-width="6"/>
  <path d="M920,430 C900,430 890,445 890,460 C890,480 910,490 930,490 C950,490 960,475 960,460" fill="none" stroke="#222" stroke-width="6"/>
  <line x1="880" y1="450" x2="890" y2="450" stroke="#222" stroke-width="6"/>
  
  <text x="80" y="150" font-family="'Outfit', sans-serif" font-size="48" font-weight="800" fill="#ffffff">SUMMER LOOKS</text>
  <text x="80" y="210" font-family="'Outfit', sans-serif" font-size="32" font-weight="700" fill="#ffd814">Fresh Styles & Accessories</text>
</svg>""")

save_svg("hero_gaming.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4e54c8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8f94fb;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  
  <!-- Console Controller Icon -->
  <rect x="750" y="180" width="340" height="200" rx="100" fill="#ffffff" opacity="0.95" stroke="#333" stroke-width="4"/>
  <!-- D-Pad -->
  <path d="M830,280 L850,280 L850,260 L870,260 L870,280 L890,280 L890,300 L870,300 L870,320 L850,320 L850,300 L830,300 Z" fill="#4e54c8"/>
  <!-- Buttons -->
  <circle cx="970" cy="270" r="15" fill="#ff5858"/>
  <circle cx="1000" cy="290" r="15" fill="#ffb800"/>
  <circle cx="970" cy="310" r="15" fill="#00e5ff"/>
  <circle cx="940" cy="290" r="15" fill="#00ff66"/>
  <!-- Thumbsticks -->
  <circle cx="890" cy="330" r="30" fill="#ccc" stroke="#888" stroke-width="3"/>
  <circle cx="950" cy="330" r="30" fill="#ccc" stroke="#888" stroke-width="3"/>
  
  <text x="80" y="150" font-family="'Outfit', sans-serif" font-size="48" font-weight="800" fill="#ffffff">LEVEL UP YOUR SETUP</text>
  <text x="80" y="210" font-family="'Outfit', sans-serif" font-size="32" font-weight="700" fill="#ffd814">Consoles, Accessories & PC Gear</text>
</svg>""")

# --- Smart Home Cards (200x200) ---
save_svg("sub_echo_dot.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="90" fill="#3a4750"/>
  <circle cx="100" cy="100" r="82" fill="#1e272c"/>
  <ellipse cx="100" cy="100" rx="76" ry="72" fill="#2d373e"/>
  <!-- LED Ring -->
  <ellipse cx="100" cy="170" rx="55" ry="12" fill="none" stroke="#00e5ff" stroke-width="5" opacity="0.85"/>
  <!-- Buttons -->
  <circle cx="100" cy="50" r="8" fill="#111"/>
  <path d="M96,50 L104,50 M100,46 L100,54" stroke="#fff" stroke-width="2"/>
  <circle cx="70" cy="65" r="8" fill="#111"/>
  <line x1="66" y1="65" x2="74" y2="65" stroke="#fff" stroke-width="2"/>
  <circle cx="130" cy="65" r="8" fill="#111"/>
  <line x1="126" y1="65" x2="134" y2="65" stroke="#fff" stroke-width="2"/>
</svg>""")

save_svg("sub_ring_cam.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- Body -->
  <rect x="65" y="30" width="70" height="140" rx="8" fill="#ffffff" stroke="#ddd" stroke-width="2"/>
  <rect x="65" y="30" width="70" height="65" rx="8" fill="#1a1a1a"/>
  <!-- Camera lens -->
  <circle cx="100" cy="62" r="18" fill="#333" stroke="#555" stroke-width="2"/>
  <circle cx="100" cy="62" r="8" fill="#111"/>
  <circle cx="103" cy="59" r="3" fill="#fff" opacity="0.7"/>
  <!-- Doorbell Button -->
  <circle cx="100" cy="130" r="22" fill="#f0f0f0" stroke="#ccc" stroke-width="2"/>
  <circle cx="100" cy="130" r="18" fill="none" stroke="#00aaff" stroke-width="3"/>
</svg>""")

save_svg("sub_smart_plug.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect x="50" y="60" width="100" height="80" rx="15" fill="#fcfcfc" stroke="#eee" stroke-width="2"/>
  <circle cx="100" cy="100" r="24" fill="#f0f0f0"/>
  <!-- Plug holes -->
  <rect x="88" y="94" width="6" height="12" rx="2" fill="#444"/>
  <rect x="106" y="94" width="6" height="12" rx="2" fill="#444"/>
  <circle cx="100" cy="115" r="5" fill="#444"/>
  <!-- Power button -->
  <circle cx="132" cy="78" r="8" fill="#e0e0e0"/>
  <path d="M132,74 L132,77 M130,79 C130,81 134,81 134,79" fill="none" stroke="#444" stroke-width="1.5"/>
</svg>""")

save_svg("sub_smart_light.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- Bulb Glass -->
  <path d="M100,30 C65,30 65,85 80,110 L85,135 L115,135 L120,110 C135,85 135,30 100,30 Z" fill="#ffd814" opacity="0.9"/>
  <!-- Screw base -->
  <rect x="85" y="135" width="30" height="8" rx="2" fill="#aaa"/>
  <rect x="87" y="143" width="26" height="8" rx="2" fill="#888"/>
  <rect x="89" y="151" width="22" height="8" rx="2" fill="#666"/>
  <path d="M92,159 L108,159 L100,167 Z" fill="#444"/>
  <!-- Glow effect -->
  <circle cx="100" cy="75" r="45" fill="#ffffff" opacity="0.3" filter="blur(5px)"/>
</svg>""")

# --- PlayStation 5 (300x300) ---
save_svg("deal_ps5.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <!-- Stylized PS5 Console -->
  <path d="M100,60 L105,250 C105,260 115,270 150,270 C185,270 195,260 195,250 L200,60 C200,60 170,40 150,80 C130,40 100,60 100,60 Z" fill="#ffffff" stroke="#ddd" stroke-width="2"/>
  <!-- Inner black core -->
  <path d="M112,70 L115,248 C115,255 125,260 150,260 C175,260 185,255 185,248 L188,70 C188,70 165,58 150,84 C135,58 112,70 112,70 Z" fill="#111111"/>
  <!-- Blue glowing lights -->
  <path d="M115,70 C135,58 150,84 150,84" fill="none" stroke="#007bff" stroke-width="2" opacity="0.8"/>
  <path d="M185,70 C165,58 150,84 150,84" fill="none" stroke="#007bff" stroke-width="2" opacity="0.8"/>
</svg>""")

# --- Fashion Sub-items (200x200) ---
save_svg("sub_tee.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <path d="M60,40 L90,40 C95,45 105,45 110,40 L140,40 L160,70 L140,80 L135,70 L135,170 L65,170 L65,70 L60,80 L40,70 Z" fill="#e06666" stroke="#c0392b" stroke-width="3"/>
  <rect x="80" y="90" width="40" height="30" rx="3" fill="#fff" opacity="0.5"/>
</svg>""")

save_svg("sub_glasses.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- Frame -->
  <path d="M30,90 C30,75 75,70 90,85 C105,70 150,75 150,90 C150,115 115,125 95,110 C75,125 30,115 30,90 Z" fill="#222"/>
  <!-- Left Lens -->
  <path d="M36,90 C36,79 70,76 84,88 C80,105 50,115 36,90 Z" fill="#555"/>
  <polygon points="45,85 65,80 50,105" fill="#fff" opacity="0.3"/>
  <!-- Right Lens -->
  <path d="M96,88 C110,76 144,79 144,90 C130,115 100,105 96,88 Z" fill="#555"/>
  <polygon points="105,85 125,80 110,105" fill="#fff" opacity="0.3"/>
  <!-- Bridge -->
  <rect x="85" y="87" width="10" height="6" fill="#222"/>
</svg>""")

save_svg("sub_shoes.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <path d="M40,130 C40,130 50,90 90,90 C120,90 140,110 170,110 C180,110 185,115 185,125 C185,135 170,145 130,145 C90,145 40,140 40,130 Z" fill="#4a90e2"/>
  <!-- Sole -->
  <path d="M40,130 C40,130 90,135 130,135 C170,135 185,133 185,133 L180,145 C170,145 130,148 90,148 C50,148 40,142 40,142 Z" fill="#ffffff" stroke="#ddd" stroke-width="1"/>
  <!-- Laces -->
  <line x1="95" y1="95" x2="110" y2="110" stroke="#fff" stroke-width="3"/>
  <line x1="102" y1="92" x2="117" y2="107" stroke="#fff" stroke-width="3"/>
</svg>""")

save_svg("sub_shorts.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <path d="M50,50 L150,50 L160,140 L115,140 L100,95 L85,140 L40,140 Z" fill="#35495e"/>
  <!-- Waistband -->
  <rect x="50" y="50" width="100" height="15" fill="#2c3e50"/>
  <!-- Drawstring -->
  <path d="M97,60 L90,80 M103,60 L110,80" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
</svg>""")

# --- Kindle (300x300) ---
save_svg("deal_kindle.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <!-- Kindle Body -->
  <rect x="75" y="40" width="150" height="220" rx="10" fill="#1c1d21" stroke="#333" stroke-width="3"/>
  <!-- Screen -->
  <rect x="85" y="52" width="130" height="180" fill="#e0e4e6"/>
  <!-- Kindle Logo text -->
  <text x="130" y="248" font-family="Outfit" font-size="10" fill="#666" font-weight="700">kindle</text>
  <!-- Stylized Book Page Text -->
  <rect x="95" y="70" width="110" height="6" rx="2" fill="#888" opacity="0.6"/>
  <rect x="95" y="82" width="110" height="6" rx="2" fill="#888" opacity="0.6"/>
  <rect x="95" y="94" width="95" height="6" rx="2" fill="#888" opacity="0.6"/>
  <rect x="95" y="112" width="110" height="6" rx="2" fill="#888" opacity="0.6"/>
  <rect x="95" y="124" width="110" height="6" rx="2" fill="#888" opacity="0.6"/>
  <rect x="95" y="136" width="70" height="6" rx="2" fill="#888" opacity="0.6"/>
</svg>""")

# --- Books (160x180) ---
def make_book(filename, color, title_word1, title_word2):
    save_svg(filename, f"""<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
  <rect x="20" y="10" width="120" height="160" rx="5" fill="{color}" stroke="#ddd" stroke-width="1"/>
  <!-- Spine effect -->
  <rect x="20" y="10" width="10" height="160" fill="#000" opacity="0.15"/>
  <!-- Cover design -->
  <rect x="35" y="25" width="90" height="130" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
  <!-- Text -->
  <text x="80" y="65" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">{title_word1}</text>
  <text x="80" y="85" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">{title_word2}</text>
  
  <circle cx="80" cy="125" r="15" fill="#ffffff" opacity="0.2"/>
</svg>""")

make_book("book_atomic.svg", "#0f4c81", "ATOMIC", "HABITS")
make_book("book_money.svg", "#1b4d3e", "PSYCHOLOGY", "OF MONEY")
make_book("book_deepwork.svg", "#800020", "DEEP", "WORK")
make_book("book_chemistry.svg", "#d4af37", "LESSONS IN", "CHEMISTRY")
make_book("book_ikigai.svg", "#4682b4", "IKIGAI", "SECRET")
make_book("book_creative.svg", "#4a0e4e", "CREATIVE", "ACT")

# --- Electronics (160x180) ---
save_svg("elec_headphones.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
  <rect width="100%" height="100%" fill="#f8f9fa"/>
  <!-- Headband -->
  <path d="M40,90 C40,40 120,40 120,90" fill="none" stroke="#222" stroke-width="8" stroke-linecap="round"/>
  <!-- Ear cups -->
  <rect x="25" y="80" width="22" height="40" rx="10" fill="#444" stroke="#222" stroke-width="2"/>
  <rect x="113" y="80" width="22" height="40" rx="10" fill="#444" stroke="#222" stroke-width="2"/>
  <!-- Metallic connector -->
  <line x1="36" y1="80" x2="36" y2="95" stroke="#aaa" stroke-width="4"/>
  <line x1="124" y1="80" x2="124" y2="95" stroke="#aaa" stroke-width="4"/>
</svg>""")

save_svg("elec_watch.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
  <rect width="100%" height="100%" fill="#f8f9fa"/>
  <!-- Strap -->
  <rect x="68" y="20" width="24" height="140" rx="5" fill="#333"/>
  <!-- Watch Body -->
  <rect x="52" y="62" width="56" height="56" rx="15" fill="#111" stroke="#555" stroke-width="3"/>
  <!-- Screen screen -->
  <rect x="58" y="68" width="44" height="44" rx="10" fill="#00e5ff"/>
  <text x="80" y="96" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#111" text-anchor="middle">09:42</text>
</svg>""")

save_svg("elec_keyboard.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
  <rect width="100%" height="100%" fill="#f8f9fa"/>
  <!-- Keyboard Base -->
  <rect x="15" y="65" width="130" height="50" rx="5" fill="#333" stroke="#222" stroke-width="2"/>
  <!-- Key rows -->
  <rect x="22" y="72" width="12" height="8" rx="1" fill="#666"/>
  <rect x="38" y="72" width="12" height="8" rx="1" fill="#666"/>
  <rect x="54" y="72" width="12" height="8" rx="1" fill="#666"/>
  <rect x="70" y="72" width="12" height="8" rx="1" fill="#666"/>
  <rect x="86" y="72" width="12" height="8" rx="1" fill="#666"/>
  <rect x="102" y="72" width="12" height="8" rx="1" fill="#666"/>
  <rect x="118" y="72" width="20" height="8" rx="1" fill="#e67e22"/>
  
  <rect x="22" y="84" width="16" height="8" rx="1" fill="#666"/>
  <rect x="42" y="84" width="12" height="8" rx="1" fill="#ffd814"/>
  <rect x="58" y="84" width="12" height="8" rx="1" fill="#666"/>
  <rect x="74" y="84" width="12" height="8" rx="1" fill="#666"/>
  <rect x="90" y="84" width="12" height="8" rx="1" fill="#666"/>
  <rect x="106" y="84" width="32" height="8" rx="1" fill="#666"/>

  <rect x="22" y="96" width="30" height="8" rx="1" fill="#666"/>
  <rect x="56" y="96" width="55" height="8" rx="1" fill="#888"/>
  <rect x="115" y="96" width="23" height="8" rx="1" fill="#666"/>
</svg>""")

save_svg("elec_monitor.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
  <rect width="100%" height="100%" fill="#f8f9fa"/>
  <!-- Screen bezel -->
  <rect x="15" y="45" width="130" height="80" rx="4" fill="#111" stroke="#333" stroke-width="2"/>
  <rect x="18" y="48" width="124" height="71" rx="2" fill="#0c1020"/>
  <!-- Stand -->
  <path d="M75,125 L70,150 L90,150 L85,125 Z" fill="#222"/>
  <ellipse cx="80" cy="150" rx="30" ry="6" fill="#111"/>
  <!-- Image on screen -->
  <circle cx="80" cy="80" r="20" fill="#e74c3c" opacity="0.8"/>
  <polygon points="50,110 80,75 110,110" fill="#2ecc71" opacity="0.7"/>
</svg>""")

save_svg("elec_camera.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
  <rect width="100%" height="100%" fill="#f8f9fa"/>
  <!-- Camera body -->
  <rect x="25" y="60" width="110" height="70" rx="8" fill="#333" stroke="#222" stroke-width="2"/>
  <!-- Top dials -->
  <rect x="35" y="52" width="18" height="8" rx="1" fill="#111"/>
  <rect x="105" y="52" width="20" height="8" rx="1" fill="#111"/>
  <!-- Red dot -->
  <circle cx="115" cy="72" r="3" fill="#e74c3c"/>
  <!-- Lens -->
  <circle cx="80" cy="95" r="30" fill="#222" stroke="#555" stroke-width="3"/>
  <circle cx="80" cy="95" r="20" fill="#111"/>
  <circle cx="80" cy="95" r="10" fill="#0c1020"/>
  <circle cx="85" cy="90" r="4" fill="#fff" opacity="0.6"/>
</svg>""")

save_svg("elec_speaker.svg", """<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
  <rect width="100%" height="100%" fill="#f8f9fa"/>
  <!-- Speaker Body -->
  <rect x="40" y="40" width="80" height="100" rx="15" fill="#cc0c39" stroke="#990022" stroke-width="2"/>
  <!-- Grill effect -->
  <rect x="48" y="48" width="64" height="65" rx="10" fill="#111" opacity="0.9"/>
  <!-- Sound dots -->
  <circle cx="60" cy="60" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="72" cy="60" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="84" cy="60" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="96" cy="60" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="60" cy="72" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="72" cy="72" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="84" cy="72" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="96" cy="72" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="60" cy="84" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="72" cy="84" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="84" cy="84" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="96" cy="84" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="60" cy="96" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="72" cy="96" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="84" cy="96" r="4" fill="#fff" opacity="0.3"/>
  <circle cx="96" cy="96" r="4" fill="#fff" opacity="0.3"/>
  <!-- Brand logo -->
  <text x="80" y="130" font-family="'Outfit', sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">SOUNDBASS</text>
</svg>""")

print("Successfully generated all assets.")
