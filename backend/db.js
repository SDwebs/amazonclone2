const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(DB_PATH);

// ─── Promisified helpers ──────────────────────────────────────────────────────
db.runAsync = (sql, params = []) => new Promise((resolve, reject) => {
  db.run(sql, params, function (err) {
    if (err) reject(err);
    else resolve(this); // `this` contains lastID, changes
  });
});

db.getAsync = (sql, params = []) => new Promise((resolve, reject) => {
  db.get(sql, params, (err, row) => {
    if (err) reject(err);
    else resolve(row);
  });
});

db.allAsync = (sql, params = []) => new Promise((resolve, reject) => {
  db.all(sql, params, (err, rows) => {
    if (err) reject(err);
    else resolve(rows);
  });
});

// ─── Initialize Schema ────────────────────────────────────────────────────────
async function initDb() {
  await db.runAsync('PRAGMA foreign_keys = ON');
  await db.runAsync('PRAGMA journal_mode = WAL');

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      name          TEXT    NOT NULL,
      email         TEXT    NOT NULL UNIQUE,
      password_hash TEXT    NOT NULL,
      created_at    TEXT    NOT NULL DEFAULT (datetime('now'))
    )
  `);

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id           TEXT PRIMARY KEY,
      title        TEXT NOT NULL,
      category     TEXT NOT NULL,
      rating       TEXT NOT NULL,
      reviews      TEXT NOT NULL,
      price_major  TEXT NOT NULL,
      price_minor  TEXT NOT NULL,
      image        TEXT NOT NULL,
      bullets_json TEXT NOT NULL
    )
  `);

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS cart_items (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      product_id TEXT    NOT NULL REFERENCES products(id) ON DELETE CASCADE,
      quantity   INTEGER NOT NULL DEFAULT 1,
      UNIQUE(user_id, product_id)
    )
  `);

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS orders (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      items_json  TEXT    NOT NULL,
      subtotal    REAL    NOT NULL,
      created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
    )
  `);

  // Seed products if table is empty
  const countRow = await db.getAsync('SELECT COUNT(*) as count FROM products');
  if (countRow.count === 0) {
    await seedProducts();
  }
}

// ─── Seed Data ────────────────────────────────────────────────────────────────
async function seedProducts() {
  const products = [
    { id: 'echo-dot', title: 'Echo Smart Speaker (5th Gen, 2026 Release) | Rich sound with Alexa', category: 'Smart Home & Electronics', rating: '★★★★★', reviews: '12,402', price_major: '49', price_minor: '99', image: 'assets/sub_echo_dot.svg', bullets: ['OUR BEST-SOUNDING ECHO DOT YET - Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass, and vibrant sound in any room.', 'YOUR FAVORITE MUSIC AND CONTENT - Play music, audiobooks, and podcasts from Amazon Music, Spotify, Pandora, and others, or via Bluetooth throughout your home.', 'ALEXA IS HAPPY TO HELP - Ask Alexa for weather updates, to set hands-free timers, get answers to your questions, and even hear jokes.', 'KEEP YOUR HOME COMFORTABLE - Control compatible smart home devices with your voice and routines triggered by built-in motion or indoor temperature sensors.'] },
    { id: 'ring-camera', title: 'Ring Video Doorbell Plus | Head-to-Toe HD Video, Motion Detection, & Wi-Fi', category: 'Smart Home Security', rating: '★★★★½', reviews: '8,924', price_major: '89', price_minor: '99', image: 'assets/sub_ring_cam.svg', bullets: ['HEAD-TO-TOE HD VIDEO - See more of who stops by with 1536p HD Video.', 'NIGHT VISION IN COLOR - Look out for things even after the sun goes down.', 'MOBILE NOTIFICATIONS - Receive real-time alerts on your phone.', 'EASY INSTALLATION - Operates on a built-in rechargeable battery or wired.'] },
    { id: 'smart-plug', title: 'Mini Smart Plug Outlet | Works with Alexa & Google Home, No Hub Required', category: 'Smart Home Accessories', rating: '★★★★½', reviews: '32,152', price_major: '14', price_minor: '99', image: 'assets/sub_smart_plug.svg', bullets: ['VOICE CONTROL - Works seamlessly with Alexa and Google Assistant.', 'CONTROL FROM ANYWHERE - Schedule your smart plug automatically.', 'COMPACT DESIGN - Stack two smart plugs in a single outlet.', 'SIMPLE SETUP - Download the companion app and pair via Bluetooth.'] },
    { id: 'smart-light', title: 'Smart LED Light Bulbs | Multicolor Changing RGB, Warm White, Dimmable', category: 'Smart Lighting', rating: '★★★★☆', reviews: '5,419', price_major: '24', price_minor: '99', image: 'assets/sub_smart_light.svg', bullets: ['16 MILLION COLORS & SCENES - Create favorite light effects with 16 million colors.', 'VOICE & REMOTE CONTROL - Control via app or voice.', 'MUSIC SYNC MODE - Synchronize lights to your favorite music.', 'ENERGY SAVING & LONG LIFE - Save up to 85% energy usage.'] },
    { id: 'gaming-console', title: 'PlayStation 5 Console (Slim Model) | 1TB SSD & Ultra HD Blu-ray Drive', category: 'Video Games & Consoles', rating: '★★★★★', reviews: '45,821', price_major: '449', price_minor: '99', image: 'assets/deal_ps5.svg', bullets: ['SLIM DESIGN - Powerful gaming technology in a compact design.', '1TB OF STORAGE - Keep your favorite games ready with a 1TB SSD.', 'ULTRA-HIGH SPEED SSD - Near-instant load times for PS5 games.', 'STUNNING VISUALS - Ray tracing, 4K-TV gaming, and up to 120fps.'] },
    { id: 'summer-tee', title: "Men's Classic Fit Short-Sleeve Summer T-Shirt | 100% Premium Cotton Blend", category: 'Fashion & Apparel', rating: '★★★★☆', reviews: '3,115', price_major: '19', price_minor: '99', image: 'assets/sub_tee.svg', bullets: ['PREMIUM MATERIAL - Crafted from 100% ultra-soft combed cotton.', 'CLASSIC FIT - Relaxed, standard fit.', 'REINFORCED SEAMS - Double-needle stitching for durability.', 'EASY CARE - Machine washable and shrink-resistant.'] },
    { id: 'sunglasses', title: 'Classic Polarized Sunglasses for Men and Women | UV400 Protection', category: 'Fashion Accessories', rating: '★★★★½', reviews: '1,824', price_major: '15', price_minor: '99', image: 'assets/sub_glasses.svg', bullets: ['POLARIZED LENSES - Block 99% of harmful UVA and UVB radiation.', 'DURABLE FRAME - Lightweight composite frame.', 'CLASSIC DESIGN - Retro rivet style.', 'INCLUDES HARD CASE - With microfiber cleaning pouch and test card.'] },
    { id: 'sneakers', title: 'Unisex Comfort Active Sneakers | Breathable Mesh Running Shoes', category: 'Shoes & Footwear', rating: '★★★★½', reviews: '6,922', price_major: '45', price_minor: '00', image: 'assets/sub_shoes.svg', bullets: ['BREATHABLE MESH - Lightweight knit mesh upper.', 'CUSHIONED SOLE - High-elasticity EVA midsole.', 'NON-SLIP OUTSOLE - Specialized rubber grooves.', 'SLIP-ON DESIGN - Elastic collar and pull-tab.'] },
    { id: 'active-shorts', title: "Men's Lightweight Workout Shorts | 7\" Inseam Gym Shorts with Zip Pockets", category: 'Athletic Wear', rating: '★★★★☆', reviews: '2,410', price_major: '21', price_minor: '50', image: 'assets/sub_shorts.svg', bullets: ['MOISTURE-WICKING - Advanced quick-dry fabric.', 'ELASTIC WAISTBAND - Internal drawstring for custom fit.', 'ZIPPER POCKETS - Deep side pockets with high-quality zippers.', 'VERSATILE WEAR - Perfect for running, weightlifting, cycling.'] },
    { id: 'kindle-paperwhite', title: 'Kindle Paperwhite (16 GB) | Now with a 6.8" display and adjustable warm light', category: 'Kindle Store & Devices', rating: '★★★★★', reviews: '34,921', price_major: '139', price_minor: '99', image: 'assets/deal_kindle.svg', bullets: ['KINDLE PAPERWHITE - 6.8" display, adjustable warm light, 10 weeks battery life.', 'PURPOSE-BUILT FOR READING - 300 ppi glare-free display.', 'EASY ON THE EYES - Adjustable warm light.', 'WATERPROOF READING - Waterproof at 1 meter depth.'] },
    { id: 'book-atomic-habits', title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', category: 'Books', rating: '★★★★★', reviews: '124,054', price_major: '11', price_minor: '98', image: 'assets/book_atomic.svg', bullets: ['THE MILLION-COPY BESTSELLER - Tiny Changes, Remarkable Results.', 'PRACTICAL STRATEGIES - Design habits that stick.', 'ENGAGING NARRATIVE - Real-world stories from champions.'] },
    { id: 'book-psychology-money', title: 'The Psychology of Money: Timeless lessons on wealth, greed, and happiness', category: 'Books', rating: '★★★★½', reviews: '38,219', price_major: '14', price_minor: '29', image: 'assets/book_money.svg', bullets: ['TIMELESS FINANCIAL LESSONS - Doing well with money is about behavior.', '19 SHORT STORIES - Strange ways people think about money.', 'UNIVERSAL APPEAL - Essential for anyone looking to make better financial decisions.'] },
    { id: 'book-deep-work', title: 'Deep Work: Rules for Focused Success in a Distracted World', category: 'Books', rating: '★★★★½', reviews: '29,482', price_major: '15', price_minor: '99', image: 'assets/book_deepwork.svg', bullets: ['FOCUSED SUCCESS - Focus is the new IQ.', 'PRACTICAL RULES - A rigorous training regimen.', 'VALUABLE SKILL - Master complicated information quickly.'] },
    { id: 'book-lessons-in-chemistry', title: 'Lessons in Chemistry: A Novel | New York Times Bestseller', category: 'Books', rating: '★★★★★', reviews: '85,419', price_major: '17', price_minor: '99', image: 'assets/book_chemistry.svg', bullets: ['BESTSELLER - A delightful novel about Elizabeth Zott.', 'EMPOWERING THEME - Explores gender equality.', 'UPCOMING TV SERIES - Starring Brie Larson.'] },
    { id: 'book-ikigai', title: 'Ikigai: The Japanese Secret to a Long and Happy Life', category: 'Books', rating: '★★★★☆', reviews: '48,154', price_major: '12', price_minor: '50', image: 'assets/book_ikigai.svg', bullets: ['DISCOVER YOUR IKIGAI - Find your reason for getting out of bed.', 'BLUE ZONE INSIGHTS - Habits of the world\'s longest-lived people.', 'INSPIRING GUIDE - Tips for mindfulness and purposeful action.'] },
    { id: 'book-creative-act', title: 'The Creative Act: A Way of Being | Masterpiece on Art & Inspiration', category: 'Books', rating: '★★★★★', reviews: '19,254', price_major: '19', price_minor: '20', image: 'assets/book_creative.svg', bullets: ['LEGENDARY PRODUCER - Rick Rubin\'s lifetime wisdom.', 'CREATIVITY AS A STATE OF BEING - Everyone can cultivate creativity.', 'BEAUTIFULLY FORMATTED - Short, meditative chapters.'] },
    { id: 'headphones', title: 'Premium Active Noise Cancelling Headphones | 40H Playtime, Bluetooth 5.3', category: 'Electronics & Audio', rating: '★★★★½', reviews: '5,291', price_major: '199', price_minor: '99', image: 'assets/elec_headphones.svg', bullets: ['HYBRID ACTIVE NOISE CANCELLATION - Block up to 95% of background noise.', 'HIGH-RESOLUTION AUDIO - 40mm dynamic drivers.', '40-HOUR PLAYTIME - 40 hours in ANC mode.', 'CLEAR HANDS-FREE CALLS - AI voice isolation.'] },
    { id: 'smartwatch', title: "Active Fit Smartwatch | 1.8\" Touchscreen with Blood Oxygen & Heart Rate Monitor", category: 'Smart Tech & Wearables', rating: '★★★★☆', reviews: '12,185', price_major: '89', price_minor: '99', image: 'assets/elec_watch.svg', bullets: ['ALL-DAY FITNESS TRACKING - Steps, distance, calories, heart rate.', 'SLEEP & SPO2 MONITORING - Blood oxygen level insights.', 'SMART NOTIFICATIONS - Calls, texts, emails on your wrist.', '10-DAY BATTERY - Up to 10 days of active use.'] },
    { id: 'keyboard', title: 'Wireless Mechanical Keyboard | Tactile Brown Switches & Custom RGB Backlight', category: 'Computer Accessories', rating: '★★★★★', reviews: '3,401', price_major: '129', price_minor: '99', image: 'assets/elec_keyboard.svg', bullets: ['HOT-SWAPPABLE TACTILE SWITCHES - Pre-lubed brown switches.', 'TRI-MODE CONNECTIVITY - Bluetooth 5.1, 2.4GHz, USB-C.', 'CUSTOMIZABLE RGB BACKLIGHT - 18 built-in lighting modes.', 'ERGONOMIC ALUMINUM FRAME - Adjustable folding feet.'] },
    { id: 'monitor', title: '32" Curved Gaming Monitor | 165Hz Refresh Rate, 1ms Response, 1440p WQHD', category: 'Computer Displays', rating: '★★★★½', reviews: '8,920', price_major: '279', price_minor: '99', image: 'assets/elec_monitor.svg', bullets: ['WQHD RESOLUTION - 2560x1440 resolution.', '165HZ REFRESH RATE - Ultra-smooth gameplay.', '1800R CURVATURE - Immersive visual experience.', 'HDR10 COMPATIBLE - Vivid colors and high contrast.'] },
    { id: 'camera', title: '4K Vlog Mirrorless Camera | Fast Autofocus, Flip Screen, 10-bit Video', category: 'Photography & Video', rating: '★★★★½', reviews: '1,501', price_major: '649', price_minor: '00', image: 'assets/elec_camera.svg', bullets: ['CINEMATIC 4K VIDEO - 4K/60fps with 10-bit color depth.', 'REAL-TIME TRACKING AF - AI-powered autofocus.', 'VLOG-OPTIMIZED DESIGN - Articulating touchscreen.', 'CREATOR READY - Compatible with streaming and editing platforms.'] },
    { id: 'speaker', title: 'Portable Waterproof Bluetooth Speaker | 360° Sound, 24H Battery, IPX7', category: 'Portable Audio', rating: '★★★★★', reviews: '22,041', price_major: '49', price_minor: '99', image: 'assets/elec_speaker.svg', bullets: ['360° IMMERSIVE SOUND - Dual 10W drivers and dual passive radiators.', 'IPX7 WATERPROOF - Waterproof at 1 meter depth for 30 minutes.', '24-HOUR BATTERY - Full day of music on a single charge.', 'BLUETOOTH 5.3 - Stable connection up to 100 feet away.'] }
  ];

  const stmt = `INSERT OR IGNORE INTO products (id, title, category, rating, reviews, price_major, price_minor, image, bullets_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  for (const p of products) {
    await db.runAsync(stmt, [p.id, p.title, p.category, p.rating, p.reviews, p.price_major, p.price_minor, p.image, JSON.stringify(p.bullets)]);
  }

  console.log(`✅ Seeded ${products.length} products.`);
}

module.exports = { db, initDb };
