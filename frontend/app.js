// --- Backend Configuration ---
const BASE_URL = "https://amazonclone2-4.onrender.com";

// --- Mock Product Database ---
const productsDb = {
  // Smart Home Items
  "echo-dot": {
    title: "Echo Smart Speaker (5th Gen, 2026 Release) | Rich sound with Alexa",
    category: "Smart Home & Electronics",
    rating: "★★★★★",
    reviews: "12,402",
    priceMajor: "49",
    priceMinor: "99",
    image: "assets/sub_echo_dot.svg",
    bullets: [
      "OUR BEST-SOUNDING ECHO DOT YET - Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass, and vibrant sound in any room.",
      "YOUR FAVORITE MUSIC AND CONTENT - Play music, audiobooks, and podcasts from Amazon Music, Spotify, Pandora, and others, or via Bluetooth throughout your home.",
      "ALEXA IS HAPPY TO HELP - Ask Alexa for weather updates, to set hands-free timers, get answers to your questions, and even hear jokes.",
      "KEEP YOUR HOME COMFORTABLE - Control compatible smart home devices with your voice and routines triggered by built-in motion or indoor temperature sensors."
    ]
  },
  "ring-camera": {
    title: "Ring Video Doorbell Plus | Head-to-Toe HD Video, Motion Detection, & Wi-Fi",
    category: "Smart Home Security",
    rating: "★★★★½",
    reviews: "8,924",
    priceMajor: "89",
    priceMinor: "99",
    image: "assets/sub_ring_cam.svg",
    bullets: [
      "HEAD-TO-TOE HD VIDEO - See more of who stops by and check in on packages on the ground with 1536p HD Video.",
      "NIGHT VISION IN COLOR - Look out for things even after the sun goes down with sharp color night vision.",
      "MOBILE NOTIFICATIONS - Receive real-time alerts on your phone whenever anyone presses your doorbell or triggers the built-in motion sensors.",
      "EASY INSTALLATION - Operates on a built-in rechargeable battery or connects to existing doorbell wires for constant power."
    ]
  },
  "smart-plug": {
    title: "Mini Smart Plug Outlet | Works with Alexa & Google Home, No Hub Required",
    category: "Smart Home Accessories",
    rating: "★★★★½",
    reviews: "32,152",
    priceMajor: "14",
    priceMinor: "99",
    image: "assets/sub_smart_plug.svg",
    bullets: [
      "VOICE CONTROL - Works seamlessly with Alexa and Google Assistant. Turn electronics on or off from anywhere with simple voice commands.",
      "CONTROL FROM ANYWHERE - Schedule your smart plug to automatically power appliances on and off as needed, such as setting lights to come on at dusk.",
      "COMPACT DESIGN - Features a sleek new form factor that allows you to stack two smart plugs in a single outlet container.",
      "SIMPLE SETUP - Download the companion app, plug in the smart outlet, and pair via Bluetooth to get started instantly."
    ]
  },
  "smart-light": {
    title: "Smart LED Light Bulbs | Multicolor Changing RGB, Warm White, Dimmable",
    category: "Smart Lighting",
    rating: "★★★★☆",
    reviews: "5,419",
    priceMajor: "24",
    priceMinor: "99",
    image: "assets/sub_smart_light.svg",
    bullets: [
      "16 MILLION COLORS & SCENES - Create your favorite light effects with 16 million colors and the brightness of every color is dimmable.",
      "VOICE & REMOTE CONTROL - Control your smart bulbs via app or voice. Support groups control so you can adjust multiple lights simultaneously.",
      "MUSIC SYNC MODE - Synchronize lights to your favorite music to create a dynamic light show for parties and celebrations.",
      "ENERGY SAVING & LONG LIFE - Save up to 85% energy usage. Long-lasting LED technology offers up to 25,000 hours of light."
    ]
  },
  // PlayStation 5
  "gaming-console": {
    title: "PlayStation 5 Console (Slim Model) | 1TB SSD & Ultra HD Blu-ray Drive",
    category: "Video Games & Consoles",
    rating: "★★★★★",
    reviews: "45,821",
    priceMajor: "449",
    priceMinor: "99",
    image: "assets/deal_ps5.svg",
    bullets: [
      "SLIM DESIGN - With PS5, players get powerful gaming technology packed inside a sleek and compact console design.",
      "1TB OF STORAGE - Keep your favorite games ready and waiting for you to jump in and play with a built-in 1TB SSD.",
      "ULTRA-HIGH SPEED SSD - Maximize your play sessions with near-instant load times for installed PS5 games.",
      "STUNNING VISUALS - Experience ray tracing for lifelike reflections, 4K-TV gaming, and up to 120fps with 120Hz output."
    ]
  },
  // Clothing
  "summer-tee": {
    title: "Men's Classic Fit Short-Sleeve Summer T-Shirt | 100% Premium Cotton Blend",
    category: "Fashion & Apparel",
    rating: "★★★★☆",
    reviews: "3,115",
    priceMajor: "19",
    priceMinor: "99",
    image: "assets/sub_tee.svg",
    bullets: [
      "PREMIUM MATERIAL - Crafted from 100% ultra-soft combed cotton for ultimate comfort and breathability.",
      "CLASSIC FIT - Designed with a relaxed, standard fit that sits perfectly on the shoulders and torso.",
      "REINFORCED SEAMS - Double-needle stitching on sleeves and bottom hem for long-lasting durability.",
      "EASY CARE - Machine washable and shrink-resistant. Ideal for everyday wear and layering."
    ]
  },
  "sunglasses": {
    title: "Classic Polarized Sunglasses for Men and Women | UV400 Protection",
    category: "Fashion Accessories",
    rating: "★★★★½",
    reviews: "1,824",
    priceMajor: "15",
    priceMinor: "99",
    image: "assets/sub_glasses.svg",
    bullets: [
      "POLARIZED LENSES - Block 99% of harmful UVA and UVB radiation, reduce glare reflected off roads, water, and snow.",
      "DURABLE FRAME - Lightweight, high-quality composite frame ensures comfortable wear for long periods.",
      "CLASSIC DESIGN - Retro rivet style that complements diverse face shapes and styles, making it perfect for driving or outdoor activities.",
      "INCLUDES HARD CASE - Comes with a microfiber cleaning pouch, polarization test card, and protective hard shell zipper case."
    ]
  },
  "sneakers": {
    title: "Unisex Comfort Active Sneakers | Breathable Mesh Running Shoes",
    category: "Shoes & Footwear",
    rating: "★★★★½",
    reviews: "6,922",
    priceMajor: "45",
    priceMinor: "00",
    image: "assets/sub_shoes.svg",
    bullets: [
      "BREATHABLE MESH - Lightweight knit mesh upper lets air circulate freely, keeping your feet dry and cool.",
      "CUSHIONED SOLE - High-elasticity EVA midsole provides superior energy return and shock absorption with every stride.",
      "NON-SLIP OUTSOLE - Features specialized rubber grooves for maximum traction on both wet and dry surfaces.",
      "SLIP-ON DESIGN - Elastic collar and pull-tab make these shoes incredibly easy to slip on and off."
    ]
  },
  "active-shorts": {
    title: "Men's Lightweight Workout Shorts | 7\" Inseam Gym Shorts with Zip Pockets",
    category: "Athletic Wear",
    rating: "★★★★☆",
    reviews: "2,410",
    priceMajor: "21",
    priceMinor: "50",
    image: "assets/sub_shorts.svg",
    bullets: [
      "MOISTURE-WICKING - Advanced quick-dry fabric moves sweat away from the body to keep you comfortable during intense training.",
      "ELASTIC WAISTBAND - Features an internal drawstring that allows for a custom, secure fit around the waist.",
      "ZIPPER POCKETS - Deep side pockets with high-quality zippers to securely hold your keys, phone, and cards.",
      "VERSATILE WEAR - Perfect for running, weightlifting, cycling, hiking, or casual everyday lounging."
    ]
  },
  // Kindle
  "kindle-paperwhite": {
    title: "Kindle Paperwhite (16 GB) | Now with a 6.8\" display and adjustable warm light",
    category: "Kindle Store & Devices",
    rating: "★★★★★",
    reviews: "34,921",
    priceMajor: "139",
    priceMinor: "99",
    image: "assets/deal_kindle.svg",
    bullets: [
      "KINDLE PAPERWHITE - Now with a 6.8” display and thinner borders, adjustable warm light, up to 10 weeks of battery life, and 20% faster page turns.",
      "PURPOSE-BUILT FOR READING - With a flush-front design and 300 ppi glare-free display that reads like real paper, even in bright sunlight.",
      "EASY ON THE EYES - Now with adjustable warm light to shift screen shade from white to amber.",
      "WATERPROOF READING - Built to withstand accidental immersion in water, so you’re good from the beach to the bath."
    ]
  },
  // Books Slider
  "book-atomic-habits": {
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    category: "Books",
    rating: "★★★★★",
    reviews: "124,054",
    priceMajor: "11",
    priceMinor: "98",
    image: "assets/book_atomic.svg",
    bullets: [
      "THE MILLION-COPY BESTSELLER - Tiny Changes, Remarkable Results. Learn the science of how small habits compound into life-changing progress.",
      "PRACTICAL STRATEGIES - Author James Clear explains how to design habits that stick, overcome lack of willpower, and change your identity.",
      "ENGAGING NARRATIVE - Packed with inspiring real-world stories from Olympic gold medalists, award-winning artists, and business leaders."
    ]
  },
  "book-psychology-money": {
    title: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
    category: "Books",
    rating: "★★★★½",
    reviews: "38,219",
    priceMajor: "14",
    priceMinor: "29",
    image: "assets/book_money.svg",
    bullets: [
      "TIMELESS FINANCIAL LESSONS - Doing well with money isn’t necessarily about what you know. It’s about how you behave.",
      "19 SHORT STORIES - Author Morgan Housel shares 19 stories exploring the strange ways people think about money.",
      "UNIVERSAL APPEAL - Highly readable and essential for anyone looking to make better decisions regarding saving, investing, and wealth building."
    ]
  },
  "book-deep-work": {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    category: "Books",
    rating: "★★★★½",
    reviews: "29,482",
    priceMajor: "15",
    priceMinor: "99",
    image: "assets/book_deepwork.svg",
    bullets: [
      "FOCUSED SUCCESS - Focus is the new IQ. Deep work is the ability to focus without distraction on a cognitively demanding task.",
      "PRACTICAL RULES - Cal Newport presents a rigorous training regimen to transform your mind and habits.",
      "VALUABLE SKILL - Learn how to quickly master complicated information and produce better results in less time."
    ]
  },
  "book-lessons-in-chemistry": {
    title: "Lessons in Chemistry: A Novel | New York Times Bestseller",
    category: "Books",
    rating: "★★★★★",
    reviews: "85,419",
    priceMajor: "17",
    priceMinor: "99",
    image: "assets/book_chemistry.svg",
    bullets: [
      "BESTSELLER OF THE YEAR - A delightful, funny, and warm novel about Elizabeth Zott, a scientist in the 1960s who becomes a cooking show host.",
      "EMPOWERING THEME - Explores gender equality, standing up for one's beliefs, and chemistry in cooking and relationships.",
      "UPCOMING TV SERIES - The basis for the highly anticipated drama series starring Brie Larson."
    ]
  },
  "book-ikigai": {
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    category: "Books",
    rating: "★★★★☆",
    reviews: "48,154",
    priceMajor: "12",
    priceMinor: "50",
    image: "assets/book_ikigai.svg",
    bullets: [
      "DISCOVER YOUR IKIGAI - Find your reason for getting out of bed in the morning, which helps you live a longer, healthier, and happier life.",
      "BLUE ZONE INSIGHTS - The authors visit Okinawa, Japan, exploring the habits, diet, and community bonds of the world's longest-lived people.",
      "INSPIRING GUIDE - Packed with practical tips to incorporate mindfulness, movement, and purposeful action into your daily life."
    ]
  },
  "book-creative-act": {
    title: "The Creative Act: A Way of Being | Masterpiece on Art & Inspiration",
    category: "Books",
    rating: "★★★★★",
    reviews: "19,254",
    priceMajor: "19",
    priceMinor: "20",
    image: "assets/book_creative.svg",
    bullets: [
      "LEGENDARY PRODUCER - Rick Rubin shares the wisdom distilled over a lifetime of producing music and guiding artists.",
      "CREATIVITY AS A STATE OF BEING - Proposes that creativity is not a rare talent or job, but a relationship to the world that everyone can cultivate.",
      "BEAUTIFULLY FORMATTED - A gorgeous book containing short, meditative chapters designed to spark ideas and shift perspectives."
    ]
  },
  // Electronics Slider
  "headphones": {
    title: "Premium Active Noise Cancelling Headphones | 40H Playtime, Bluetooth 5.3",
    category: "Electronics & Audio",
    rating: "★★★★½",
    reviews: "5,291",
    priceMajor: "199",
    priceMinor: "99",
    image: "assets/elec_headphones.svg",
    bullets: [
      "HYBRID ACTIVE NOISE CANCELLATION - Advanced microphones block up to 95% of background noise, ensuring complete immersion.",
      "HIGH-RESOLUTION AUDIO - Custom 40mm dynamic drivers deliver exceptional sound quality with deep, punchy bass and crystal-clear highs.",
      "40-HOUR PLAYTIME - Enjoy up to 40 hours of listening in ANC mode, or up to 60 hours in standard wireless mode on a single charge.",
      "CLEAR HANDS-FREE CALLS - Multi-mic array with AI voice isolation filters environmental noise for crystal-clear phone conversations."
    ]
  },
  "smartwatch": {
    title: "Active Fit Smartwatch | 1.8\" Touchscreen with Blood Oxygen & Heart Rate Monitor",
    category: "Smart Tech & Wearables",
    rating: "★★★★☆",
    reviews: "12,185",
    priceMajor: "89",
    priceMinor: "99",
    image: "assets/elec_watch.svg",
    bullets: [
      "ALL-DAY FITNESS TRACKING - Automatically tracks steps, distance, calories burned, active minutes, and 24/7 heart rate.",
      "SLEEP & SPO2 MONITORING - Analyzes sleep patterns (deep, light, REM) and provides blood oxygen level insights.",
      "SMART NOTIFICATIONS - Syncs with iPhone and Android to show calls, texts, emails, and app alerts directly on your wrist.",
      "10-DAY BATTERY - Ultra-low power design offers up to 10 days of active use or 30 days of standby time on a magnetic charge."
    ]
  },
  "keyboard": {
    title: "Wireless Mechanical Keyboard | Tactile Brown Switches & Custom RGB Backlight",
    category: "Computer Accessories",
    rating: "★★★★★",
    reviews: "3,401",
    priceMajor: "129",
    priceMinor: "99",
    image: "assets/elec_keyboard.svg",
    bullets: [
      "HOT-SWAPPABLE TACTILE SWITCHES - Comes with pre-lubed brown switches for a satisfying tactile feel without excessive noise.",
      "TRI-MODE CONNECTIVITY - Connect up to 3 devices simultaneously via Bluetooth 5.1, ultra-fast 2.4GHz wireless, or USB-C wired mode.",
      "CUSTOMIZABLE RGB BACKLIGHT - Choose from 18 built-in lighting modes or customize your own effects through companion software.",
      "ERGONOMIC ALUMINUM FRAME - Sleek metal layout with adjustable folding feet for maximum wrist comfort during long coding or gaming sessions."
    ]
  },
  "monitor": {
    title: "32\" Curved Gaming Monitor | 165Hz Refresh Rate, 1ms Response, 1440p WQHD",
    category: "Computer Displays",
    rating: "★★★★½",
    reviews: "8,920",
    priceMajor: "279",
    priceMinor: "99",
    image: "assets/elec_monitor.svg",
    bullets: [
      "WQHD RESOLUTION - 2560 x 1440 resolution provides incredibly sharp detail and 77% more screen space than standard Full HD monitors.",
      "165HZ REFRESH RATE - Eliminates motion blur and lag for ultra-smooth gameplay in action-oriented, fast-paced titles.",
      "1800R CURVATURE - Wraps around your field of view to create an immersive visual experience and reduce eye strain.",
      "HDR10 COMPATIBLE - Delivers vivid colors and high contrast levels for realistic gaming, editing, and streaming content."
    ]
  },
  "camera": {
    title: "4K Vlog Mirrorless Camera | Flip-out Touchscreen, Fast Autofocus & 24.2 MP",
    category: "Camera & Photography",
    rating: "★★★★½",
    reviews: "1,529",
    priceMajor: "649",
    priceMinor: "00",
    image: "assets/elec_camera.svg",
    bullets: [
      "24.2 MEGAPIXEL SENSOR - Captures stunning high-resolution photos and brilliant 4K UHD video even in low light.",
      "FLIP-OUT SCREEN - 3.0-inch touchscreen tilts and flips out for easy selfie-framing and vlogging compositions.",
      "REAL-TIME EYE AUTOFOCUS - Intelligent tracking keeps human and animal eyes in sharp focus during motion shots.",
      "BUILT-IN WI-FI & BLUETOOTH - Share your photos and videos instantly to smartphones or tablets for quick social posting."
    ]
  },
  "speaker": {
    title: "Portable Waterproof Bluetooth Speaker | 24W Stereo Sound with BassUp",
    category: "Electronics & Audio",
    rating: "★★★★★",
    reviews: "22,045",
    priceMajor: "49",
    priceMinor: "99",
    image: "assets/elec_speaker.svg",
    bullets: [
      "INCREDIBLE SOUND - Two full-range drivers and dual passive radiators deliver 24W of rich, balanced sound with minimal distortion.",
      "BASSUP TECHNOLOGY - Exclusive digital signal processor analyzes and intensifies bass frequencies in real time.",
      "IPX7 WATERPROOF - Fully sealed housing protects against rain, spills, dust, and complete submersion in water.",
      "24-HOUR BATTERY - Industry-leading battery technology ensures continuous playback from morning to night on a single charge."
    ]
  }
};

// --- Autocomplete Search Suggestions ---
const searchSuggestionsDb = [
  "echo dot smart speaker",
  "playstation 5 slim",
  "kindle paperwhite signature edition",
  "noise cancelling headphones",
  "mechanical gaming keyboard",
  "fitness smartwatch android ios",
  "curved gaming monitor 1440p",
  "4k vlog camera mirrorless",
  "waterproof bluetooth speaker",
  "atomic habits james clear",
  "psychology of money book",
  "deep work cal newport",
  "lessons in chemistry novel",
  "ikigai book japanese secret",
  "summer cotton t-shirts men",
  "polarized sunglasses uv400",
  "unisex running sneakers mesh",
  "workout gym shorts zip pockets",
  "alexa smart home hub devices",
  "best sellers in books fiction",
  "trending electronics deals"
];

// --- Application State ---
const state = {
  cart: {}, // Maps productId -> quantity
  deliverLocation: "United States",
  language: "EN",
  langFlag: "🇺🇸",
  activeSlide: 0,
  carouselTimer: null,
  currentUser: null // Logged-in user object { name, email }
};

// --- DOM Element Cache ---
const elements = {
  overlay: document.getElementById("page-overlay"),
  sidebar: document.getElementById("sidebar"),
  sidebarTrigger: document.getElementById("sidebar-trigger"),
  sidebarClose: document.getElementById("sidebar-close"),

  locationTrigger: document.getElementById("location-trigger"),
  currentLocation: document.getElementById("current-location"),
  locationModal: document.getElementById("location-modal"),
  locationModalClose: document.getElementById("location-modal-close"),
  locationCancelBtn: document.getElementById("location-cancel-btn"),
  locationSaveBtn: document.getElementById("location-save-btn"),
  zipInput: document.getElementById("zip-input"),
  zipApplyBtn: document.getElementById("zip-apply-btn"),
  zipError: document.getElementById("zip-error"),
  countrySelect: document.getElementById("country-select"),

  langTrigger: document.getElementById("lang-trigger"),
  langOptions: document.querySelectorAll(".lang-option"),

  searchInput: document.getElementById("search-input"),
  searchSuggestions: document.getElementById("search-suggestions"),
  searchBtn: document.getElementById("search-btn"),
  searchCategory: document.getElementById("search-category"),

  carouselTrack: document.getElementById("carousel-track"),
  carouselPrev: document.getElementById("carousel-prev"),
  carouselNext: document.getElementById("carousel-next"),
  carouselIndicators: document.getElementById("carousel-indicators"),
  carouselSlides: document.querySelectorAll(".carousel-slide"),

  productModal: document.getElementById("product-modal"),
  productModalClose: document.getElementById("product-modal-close"),
  modalProductCategory: document.getElementById("modal-product-category"),
  modalProductTitle: document.getElementById("modal-product-title"),
  modalProductImage: document.getElementById("modal-product-image"),
  modalProductRating: document.getElementById("modal-product-rating"),
  modalProductPriceMajor: document.getElementById("modal-product-price-major"),
  modalProductPriceMinor: document.getElementById("modal-product-price-minor"),
  modalProductBullets: document.getElementById("modal-product-bullets"),
  modalAddToCartBtn: document.getElementById("modal-add-to-cart-btn"),
  modalBuyNowBtn: document.getElementById("modal-buy-now-btn"),

  cartTrigger: document.getElementById("cart-trigger"),
  cartCount: document.getElementById("cart-count"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartDrawerClose: document.getElementById("cart-drawer-close"),
  cartEmptyMsg: document.getElementById("cart-empty-message"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartSummaryRow: document.getElementById("cart-summary-row"),
  cartSummaryQty: document.getElementById("cart-summary-qty"),
  cartSummaryTotal: document.getElementById("cart-summary-total"),
  cartDrawerFooter: document.getElementById("cart-drawer-footer"),
  clearCartBtn: document.getElementById("clear-cart-btn"),
  checkoutBtn: document.getElementById("checkout-btn"),

  // Auth Modal
  authModal: document.getElementById("auth-modal"),
  authModalTitle: document.getElementById("auth-modal-title"),
  authModalClose: document.getElementById("auth-modal-close"),
  authForm: document.getElementById("auth-form"),
  authNameGroup: document.getElementById("auth-name-group"),
  authName: document.getElementById("auth-name"),
  authEmail: document.getElementById("auth-email"),
  authPassword: document.getElementById("auth-password"),
  authSubmitBtn: document.getElementById("auth-submit-btn"),
  authErrorMsg: document.getElementById("auth-error-msg"),
  authSuccessMsg: document.getElementById("auth-success-msg"),
  authToggleLink: document.getElementById("auth-toggle-link"),

  // Header account text
  accountTextSmall: document.querySelector(".account-text .text-small"),
  accountTextBold: document.querySelector(".account-text .text-bold"),
  ordersHistoryLink: document.getElementById("orders-history-link"),
  ordersModal: document.getElementById("orders-modal"),
  ordersModalClose: document.getElementById("orders-modal-close"),
  ordersList: document.getElementById("orders-list"),

  // Sidebar dynamic elements
  sidebarGreeting: document.getElementById("sidebar-greeting"),
  sidebarSigninLink: document.getElementById("sidebar-signin-link"),
  sidebarOrdersLink: document.getElementById("sidebar-orders-link"),

  backToTop: document.getElementById("back-to-top")
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  setupSidebar();
  setupLocationModal();
  setupLanguageDropdown();
  setupSearchBar();
  setupCarousel();
  setupProductSliders();
  setupProductModal();
  setupCartDrawer();
  setupBackToTop();
  setupQuickShopLinks();
  setupAuth();
  setupPrimeDropdown();
});

// --- Auth Modal Logic ---
function setupAuth() {
  let isRegisterMode = false;

  // Open auth modal when ANY .sign-in-btn is clicked
  document.body.addEventListener("click", (e) => {
    if (e.target.closest(".sign-in-btn")) {
      if (state.currentUser) {
        // Already logged in — log out
        handleLogout();
      } else {
        openAuthModal(false);
      }
    }
  });

  // Close modal
  elements.authModalClose.addEventListener("click", () => {
    closeModal(elements.authModal);
    resetAuthForm();
  });

  // Toggle between Sign In and Create Account — use delegation so it survives innerHTML swaps
  elements.authToggleLink.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    e.preventDefault();
    isRegisterMode = !isRegisterMode;
    if (isRegisterMode) {
      elements.authModalTitle.textContent = "Create Account";
      elements.authSubmitBtn.textContent = "Create Account";
      elements.authNameGroup.style.display = "block";
      elements.authToggleLink.innerHTML = 'Already have an account? <a href="#">Sign in</a>';
    } else {
      elements.authModalTitle.textContent = "Sign In";
      elements.authSubmitBtn.textContent = "Sign In";
      elements.authNameGroup.style.display = "none";
      elements.authToggleLink.innerHTML = 'New customer? <a href="#">Create account</a>';
    }
    clearAuthMessages();
  });


  // Form submission
  elements.authForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearAuthMessages();
    elements.authSubmitBtn.disabled = true;
    elements.authSubmitBtn.textContent = isRegisterMode ? "Creating..." : "Signing in...";

    const email = elements.authEmail.value.trim();
    const password = elements.authPassword.value;
    const name = elements.authName.value.trim();

    try {
      const endpoint = isRegisterMode ? `${BASE_URL}/api/auth/register` : `${BASE_URL}/api/auth/login`;
      const body = isRegisterMode ? { name, email, password } : { email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        showAuthError(data.error || "Something went wrong. Please try again.");
      } else {
        state.currentUser = data.user || { name: name || email.split("@")[0], email };
        showAuthSuccess(isRegisterMode ? `Welcome, ${state.currentUser.name}! Account created.` : `Welcome back, ${state.currentUser.name}!`);
        updateHeaderForUser();
        setTimeout(() => {
          closeModal(elements.authModal);
          resetAuthForm();
        }, 1200);
      }
    } catch (err) {
      showAuthError("Network error. Make sure the server is running.");
    } finally {
      elements.authSubmitBtn.disabled = false;
      elements.authSubmitBtn.textContent = isRegisterMode ? "Create Account" : "Sign In";
    }
  });

  // Orders history link
  elements.ordersHistoryLink.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!state.currentUser) {
      openAuthModal(false);
      return;
    }
    await fetchAndShowOrders();
  });

  // Sidebar orders link
  elements.sidebarOrdersLink.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!state.currentUser) {
      openAuthModal(false);
      return;
    }
    await fetchAndShowOrders();
  });

  // Sidebar sign in / sign out link
  elements.sidebarSigninLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (state.currentUser) {
      handleLogout();
    } else {
      openAuthModal(false);
    }
  });

  // Orders modal close
  elements.ordersModalClose.addEventListener("click", () => {
    closeModal(elements.ordersModal);
  });
}

function openAuthModal(registerMode) {
  const isReg = !!registerMode;
  const authModal = elements.authModal;
  elements.authModalTitle.textContent = isReg ? "Create Account" : "Sign In";
  elements.authSubmitBtn.textContent = isReg ? "Create Account" : "Sign In";
  elements.authNameGroup.style.display = isReg ? "block" : "none";
  elements.authToggleLink.innerHTML = isReg
    ? 'Already have an account? <a href="#">Sign in</a>'
    : 'New customer? <a href="#">Create account</a>';
  clearAuthMessages();
  openModal(authModal);
  // Focus email field
  setTimeout(() => elements.authEmail.focus(), 50);
}

function handleLogout() {
  fetch(`${BASE_URL}/api/auth/logout`, { method: "POST", credentials: "include" }).catch(() => {});
  state.currentUser = null;
  updateHeaderForUser();
}

function updateHeaderForUser() {
  if (state.currentUser) {
    const firstName = state.currentUser.name ? state.currentUser.name.split(" ")[0] : "You";
    // Header
    elements.accountTextSmall.textContent = `Hello, ${firstName}`;
    elements.accountTextBold.innerHTML = `Account & Lists <svg class="dropdown-chevron" viewBox="0 0 24 24" width="12" height="12" style="display:inline;"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>`;
    // Sidebar greeting
    elements.sidebarGreeting.textContent = `Hello, ${firstName}`;
    elements.sidebarSigninLink.textContent = "Sign out";
    elements.sidebarSigninLink.style.color = "#c0392b";
    // Sign-in buttons → Sign out
    document.querySelectorAll(".sign-in-btn").forEach(btn => {
      btn.textContent = "Sign out";
      btn.style.background = "#555";
    });
  } else {
    // Header
    elements.accountTextSmall.textContent = "Hello, Sign in";
    elements.accountTextBold.innerHTML = `Account & Lists <svg class="dropdown-chevron" viewBox="0 0 24 24" width="12" height="12" style="display:inline;"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>`;
    // Sidebar greeting
    elements.sidebarGreeting.textContent = "Hello, Sign In";
    elements.sidebarSigninLink.textContent = "Sign in";
    elements.sidebarSigninLink.style.color = "";
    // Sign-in buttons → Sign in
    document.querySelectorAll(".sign-in-btn").forEach(btn => {
      btn.textContent = btn.closest(".promo-card-signin") ? "Sign in securely" : "Sign in";
      btn.style.background = "";
    });
  }
}

async function fetchAndShowOrders() {
  elements.ordersList.innerHTML = '<p style="padding:1rem;">Loading orders...</p>';
  openModal(elements.ordersModal);
  try {
    const res = await fetch(`${BASE_URL}/api/orders`, { credentials: "include" });
    const data = await res.json();
    if (!res.ok) {
      elements.ordersList.innerHTML = `<p style="padding:1rem;color:red;">${data.error || "Could not load orders."}</p>`;
      return;
    }
    if (!data.orders || data.orders.length === 0) {
      elements.ordersList.innerHTML = '<p style="padding:1rem;">You have no orders yet.</p>';
      return;
    }
    elements.ordersList.innerHTML = data.orders.map(order => `
      <div style="border:1px solid #ddd;border-radius:8px;padding:1rem;margin-bottom:1rem;">
        <div style="display:flex;justify-content:space-between;">
          <strong>Order #${order.id}</strong>
          <span style="color:#888;font-size:.85rem;">${new Date(order.created_at).toLocaleDateString()}</span>
        </div>
        <div style="margin-top:.5rem;color:#555;">Total: <strong>$${parseFloat(order.total_price).toFixed(2)}</strong></div>
        <div style="color:#888;font-size:.85rem;">Status: ${order.status || "Processing"}</div>
      </div>
    `).join("");
  } catch (err) {
    elements.ordersList.innerHTML = '<p style="padding:1rem;color:red;">Network error loading orders.</p>';
  }
}

function showAuthError(msg) {
  elements.authErrorMsg.textContent = msg;
  elements.authErrorMsg.style.display = "block";
  elements.authSuccessMsg.style.display = "none";
}

function showAuthSuccess(msg) {
  elements.authSuccessMsg.textContent = msg;
  elements.authSuccessMsg.style.display = "block";
  elements.authErrorMsg.style.display = "none";
}

function clearAuthMessages() {
  elements.authErrorMsg.textContent = "";
  elements.authErrorMsg.style.display = "none";
  elements.authSuccessMsg.textContent = "";
  elements.authSuccessMsg.style.display = "none";
}

function resetAuthForm() {
  elements.authForm.reset();
  clearAuthMessages();
}

// --- Sidebar Menu Logic ---
function setupSidebar() {
  const openSidebar = () => {
    elements.sidebar.classList.add("open");
    elements.overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling behind
  };

  const closeSidebar = () => {
    elements.sidebar.classList.remove("open");
    elements.overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  elements.sidebarTrigger.addEventListener("click", openSidebar);
  elements.sidebarClose.addEventListener("click", closeSidebar);
  elements.overlay.addEventListener("click", () => {
    closeSidebar();
    closeModal(elements.locationModal);
    closeModal(elements.productModal);
    closeModal(elements.cartDrawer);
    closeModal(elements.authModal);
    closeModal(elements.ordersModal);
  });
}

// --- Deliver Location Modal Logic ---
function setupLocationModal() {
  elements.locationTrigger.addEventListener("click", () => {
    openModal(elements.locationModal);
  });

  elements.locationModalClose.addEventListener("click", () => {
    closeModal(elements.locationModal);
  });

  elements.locationCancelBtn.addEventListener("click", () => {
    closeModal(elements.locationModal);
  });

  // Apply ZIP Code
  elements.zipApplyBtn.addEventListener("click", () => {
    const zip = elements.zipInput.value.trim();
    if (/^\d{5}$/.test(zip)) {
      elements.zipError.style.display = "none";
      state.deliverLocation = `ZIP ${zip}`;
      elements.currentLocation.textContent = state.deliverLocation;
      closeModal(elements.locationModal);
    } else {
      elements.zipError.style.display = "block";
    }
  });

  // Save Country Selection
  elements.locationSaveBtn.addEventListener("click", () => {
    state.deliverLocation = elements.countrySelect.value;
    elements.currentLocation.textContent = state.deliverLocation;
    closeModal(elements.locationModal);
  });
}

// --- Language Dropdown Logic ---
function setupLanguageDropdown() {
  elements.langOptions.forEach(option => {
    option.addEventListener("click", (e) => {
      elements.langOptions.forEach(opt => opt.classList.remove("active"));
      option.classList.add("active");

      const lang = option.getAttribute("data-lang");
      const flag = option.getAttribute("data-flag");

      state.language = lang;
      state.langFlag = flag;

      // Update display in Navbar
      const textBoldEl = elements.langTrigger.querySelector(".text-bold");
      const flagEl = elements.langTrigger.querySelector(".flag-icon");
      if (textBoldEl) textBoldEl.textContent = lang;
      if (flagEl) flagEl.textContent = flag;
    });
  });
}

// --- Prime Dropdown Logic ---
function setupPrimeDropdown() {
  const wrapper = document.getElementById("prime-nav-wrapper");
  if (!wrapper) return;

  const trigger = document.getElementById("prime-trigger");

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    wrapper.classList.toggle("open");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove("open");
    }
  });

  // Prevent clicks inside dropdown from closing it
  document.getElementById("prime-dropdown").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// --- Search Bar and Autocomplete Suggestions ---
function setupSearchBar() {
  const showSuggestions = (query) => {
    elements.searchSuggestions.innerHTML = "";
    if (!query) {
      elements.searchSuggestions.classList.remove("active");
      return;
    }

    const filtered = searchSuggestionsDb.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      elements.searchSuggestions.classList.remove("active");
      return;
    }

    filtered.slice(0, 8).forEach(item => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span>${item}</span>
      `;

      div.addEventListener("click", () => {
        elements.searchInput.value = item;
        elements.searchSuggestions.classList.remove("active");
        handleSearch(item);
      });
      elements.searchSuggestions.appendChild(div);
    });

    elements.searchSuggestions.classList.add("active");
  };

  elements.searchInput.addEventListener("input", (e) => {
    showSuggestions(e.target.value.trim());
  });

  // Close suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!elements.searchInput.contains(e.target) && !elements.searchSuggestions.contains(e.target)) {
      elements.searchSuggestions.classList.remove("active");
    }
  });

  // Handle Search Trigger
  const triggerSearch = () => {
    const query = elements.searchInput.value.trim();
    if (query) {
      handleSearch(query);
    }
  };

  elements.searchBtn.addEventListener("click", triggerSearch);
  elements.searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      triggerSearch();
    }
  });
}

function handleSearch(query) {
  // Find matching product in database
  const queryLower = query.toLowerCase();
  let foundId = null;

  for (const [id, prod] of Object.entries(productsDb)) {
    if (prod.title.toLowerCase().includes(queryLower) || id.includes(queryLower)) {
      foundId = id;
      break;
    }
  }

  if (foundId) {
    showProductDetails(foundId);
  } else {
    alert(`Searching Amazon Clone database for: "${query}" in Category: "${elements.searchCategory.value}"\n\n(For demonstration, try searching words like: "Echo", "PlayStation", "Kindle", "Atomic Habits", "Headphones", "Speaker", "Tee")`);
  }
}

// --- Hero Carousel Banners Logic ---
function setupCarousel() {
  const slides = elements.carouselSlides;
  const indicators = elements.carouselIndicators.querySelectorAll(".indicator");
  const slideCount = slides.length;

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove("active"));
    indicators.forEach(ind => ind.classList.remove("active"));

    state.activeSlide = (index + slideCount) % slideCount;
    slides[state.activeSlide].classList.add("active");
    indicators[state.activeSlide].classList.add("active");
  };

  const nextSlide = () => {
    showSlide(state.activeSlide + 1);
  };

  const prevSlide = () => {
    showSlide(state.activeSlide - 1);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    state.carouselTimer = setInterval(nextSlide, 5000);
  };

  const stopAutoPlay = () => {
    if (state.carouselTimer) {
      clearInterval(state.carouselTimer);
    }
  };

  elements.carouselNext.addEventListener("click", () => {
    nextSlide();
    startAutoPlay();
  });

  elements.carouselPrev.addEventListener("click", () => {
    prevSlide();
    startAutoPlay();
  });

  indicators.forEach(ind => {
    ind.addEventListener("click", () => {
      const target = parseInt(ind.getAttribute("data-slide"));
      showSlide(target);
      startAutoPlay();
    });
  });

  // Pause carousel on hover
  const container = document.querySelector(".carousel-container");
  container.addEventListener("mouseenter", stopAutoPlay);
  container.addEventListener("mouseleave", startAutoPlay);

  startAutoPlay();
}

// --- Product Sliders (Horizontal Scroll) ---
function setupProductSliders() {
  const sliders = document.querySelectorAll(".slider-outer-wrapper");

  sliders.forEach(slider => {
    const track = slider.querySelector(".slider-track");
    const prevBtn = slider.querySelector(".slider-nav.prev");
    const nextBtn = slider.querySelector(".slider-nav.next");

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: 350, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -350, behavior: "smooth" });
    });

    // Toggle button visibility based on scroll position
    const toggleButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.style.display = track.scrollLeft <= 5 ? "none" : "flex";
      nextBtn.style.display = track.scrollLeft >= maxScroll - 5 ? "none" : "flex";
    };

    track.addEventListener("scroll", toggleButtons);
    // Trigger initially and on resize
    toggleButtons();
    window.addEventListener("resize", toggleButtons);
  });
}

// --- Product Detail Modal Logic ---
function setupProductModal() {
  elements.productModalClose.addEventListener("click", () => {
    closeModal(elements.productModal);
  });

  // Add event listener to triggers dynamically
  document.body.addEventListener("click", (e) => {
    const trigger = e.target.closest(".product-card-trigger");
    if (trigger) {
      const productId = trigger.getAttribute("data-product-id");
      if (productId) {
        showProductDetails(productId);
      }
    }
  });

  // Add to Cart from modal
  elements.modalAddToCartBtn.addEventListener("click", () => {
    const activeProductId = elements.productModal.getAttribute("data-active-id");
    if (activeProductId) {
      addToCart(activeProductId);
      closeModal(elements.productModal);
      // Trigger cart drawer open automatically
      openCartDrawer();
    }
  });
}

function showProductDetails(productId) {
  const prod = productsDb[productId];
  if (!prod) return;

  elements.productModal.setAttribute("data-active-id", productId);
  elements.modalProductCategory.textContent = prod.category;
  elements.modalProductTitle.textContent = prod.title;
  elements.modalProductImage.src = prod.image;
  elements.modalProductImage.alt = prod.title;
  elements.modalProductRating.innerHTML = `${prod.rating} <span class="rating-count">(${prod.reviews} ratings)</span>`;
  elements.modalProductPriceMajor.textContent = prod.priceMajor;
  elements.modalProductPriceMinor.textContent = prod.priceMinor;

  // Bullets
  elements.modalProductBullets.innerHTML = "";
  prod.bullets.forEach(bullet => {
    const li = document.createElement("li");
    li.textContent = bullet;
    elements.modalProductBullets.appendChild(li);
  });

  openModal(elements.productModal);
}

// --- Shopping Cart Drawer and State Logic ---
function setupCartDrawer() {
  elements.cartTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    openCartDrawer();
  });

  elements.cartDrawerClose.addEventListener("click", () => {
    closeModal(elements.cartDrawer);
  });

  elements.clearCartBtn.addEventListener("click", () => {
    state.cart = {};
    updateCartUI();
  });

  elements.checkoutBtn.addEventListener("click", () => {
    alert("Proceeding to checkout with mock items! Thank you for testing the Amazon Clone.");
    state.cart = {};
    updateCartUI();
    closeModal(elements.cartDrawer);
  });
}

function openCartDrawer() {
  openModal(elements.cartDrawer);
}

function addToCart(productId) {
  if (state.cart[productId]) {
    state.cart[productId] += 1;
  } else {
    state.cart[productId] = 1;
  }
  updateCartUI();
}

function removeFromCart(productId) {
  if (state.cart[productId]) {
    delete state.cart[productId];
  }
  updateCartUI();
}

function updateCartUI() {
  // Update Cart count badge
  let totalQty = 0;
  let totalPrice = 0;

  elements.cartItemsList.innerHTML = "";

  const entries = Object.entries(state.cart);
  if (entries.length === 0) {
    elements.cartEmptyMsg.style.display = "block";
    elements.cartSummaryRow.style.display = "none";
    elements.cartDrawerFooter.style.display = "none";
    elements.cartCount.textContent = "0";
    return;
  }

  elements.cartEmptyMsg.style.display = "none";
  elements.cartSummaryRow.style.display = "flex";
  elements.cartDrawerFooter.style.display = "flex";

  entries.forEach(([id, qty]) => {
    const prod = productsDb[id];
    if (!prod) return;

    totalQty += qty;
    const itemPriceNum = parseFloat(`${prod.priceMajor}.${prod.priceMinor}`);
    const itemSubtotal = itemPriceNum * qty;
    totalPrice += itemSubtotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}" class="cart-item-img">
      <div class="cart-item-info">
        <span class="cart-item-name">${prod.title}</span>
        <div class="cart-item-qty-row">
          <span class="cart-item-qty">Qty: ${qty}</span>
          <span class="cart-item-price">$${itemSubtotal.toFixed(2)}</span>
          <button class="cart-item-remove" data-id="${id}">Delete</button>
        </div>
      </div>
    `;

    itemDiv.querySelector(".cart-item-remove").addEventListener("click", () => {
      removeFromCart(id);
    });

    elements.cartItemsList.appendChild(itemDiv);
  });

  elements.cartCount.textContent = totalQty;
  elements.cartSummaryQty.textContent = totalQty;
  elements.cartSummaryTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

// --- Carousel Button Targets (Quick Shop) ---
function setupQuickShopLinks() {
  document.querySelectorAll(".btn-carousel").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetId = btn.getAttribute("data-target-id");
      if (targetId) {
        showProductDetails(targetId);
      }
    });
  });
}

// --- Common Modal Helpers ---
function openModal(modalEl) {
  elements.overlay.classList.add("active");
  modalEl.show();
  // If dialog is cart drawer, handle showing it via showModal or CSS
  if (modalEl === elements.cartDrawer) {
    modalEl.setAttribute("open", "");
  }
}

function closeModal(modalEl) {
  modalEl.close();
  if (modalEl === elements.cartDrawer) {
    modalEl.removeAttribute("open");
  }
  // Check if any other modal is open before removing overlay
  const anyOpen = elements.locationModal.hasAttribute("open") ||
    elements.productModal.hasAttribute("open") ||
    elements.cartDrawer.hasAttribute("open") ||
    elements.authModal.hasAttribute("open") ||
    elements.ordersModal.hasAttribute("open") ||
    elements.sidebar.classList.contains("open");

  if (!anyOpen) {
    elements.overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// --- Back To Top Logic ---
function setupBackToTop() {
  elements.backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Toggle button state based on scroll height
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      elements.backToTop.style.opacity = "1";
    } else {
      elements.backToTop.style.opacity = "0.9";
    }
  });
}
