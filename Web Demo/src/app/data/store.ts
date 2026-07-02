// ─── Vaishali Electronics — Central Data Store ────────────────────────────────

export type Screen =
  | "splash" | "welcome" | "login" | "otp"
  | "home" | "category" | "product-detail" | "search-results"
  | "compare" | "filters" | "offers" | "wishlist"
  | "cart" | "checkout-address" | "checkout-payment" | "order-success"
  | "orders" | "order-detail"
  | "ai-chat" | "emi-calculator" | "store-visit-1" | "store-visit-2" | "store-visit-confirm"
  | "support" | "my-products" | "warranty" | "service-requests" | "raise-complaint"
  | "complaint-detail" | "ticket-tracking" | "technician-status" | "service-history"
  | "upload-photos" | "installation" | "amc-plans"
  | "profile" | "orders-list" | "addresses" | "notifications" | "language" | "help-center";

export interface Product {
  id: number;
  name: string;
  brand: string;
  cat: string;
  price: number;
  orig: number;
  rating: number;
  reviews: number;
  emi: number;
  tag: string;
  img: string;
  installIn: string;
  localStock: boolean;
  energySaving: string | null;
  jaipurInstalled: number;
  specs: { l: string; v: string }[];
  highlights: string[];
  desc: string;
}

export interface CartItem extends Product {
  qty: number;
}

export interface Ticket {
  id: string;
  prod: string;
  type: string;
  status: "Scheduled" | "In Progress" | "Resolved" | "Open";
  date: string;
  color: string;
  techName?: string;
  issue?: string;
}

export interface MyProduct {
  id: number;
  name: string;
  brand: string;
  serial: string;
  bought: string;
  warranty: string;
  daysLeft: number;
  img: string;
  model: string;
}

export interface Order {
  id: string;
  name: string;
  brand: string;
  date: string;
  status: string;
  statusColor: string;
  img: string;
  price: number;
  emi?: number;
}

export const COLORS = {
  blue: "#1A47CC",
  orange: "#F97316",
  green: "#16A34A",
  red: "#DC2626",
  navy: "#0F172A",
  slate: "#64748B",
  light: "#F1F5F9",
  purple: "#7C3AED",
  white: "#FFFFFF",
  bg: "#F5F7FA",
};

export const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");
export const disc = (price: number, orig: number) => Math.round((1 - price / orig) * 100);

export const PRODUCTS: Product[] = [
  {
    id: 1, name: "Voltas 1.5T 5★ Inverter Split AC", brand: "Voltas", cat: "AC",
    price: 47990, orig: 59990, rating: 4.5, reviews: 1284, emi: 3999, tag: "Best Seller",
    img: "/images/products/voltas-1-5t-5-inverter-split-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: "₹8,200/yr savings vs 3-star",
    jaipurInstalled: 847,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Inverter", v: "Dual Inverter" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-32 (Eco)" }, { l: "Noise Level", v: "28 dB" }],
    highlights: ["Jaipur's summer-tested — 847 homes installed this season", "5-star BEE: saves ₹8,200/year vs 3-star at 8 hrs/day", "R-32 refrigerant — environment-friendly, lower bills", "28 dB sleep mode — quieter than a library", "Same-week installation by certified Vaishali technician"],
    desc: "India's #1 AC brand, now in Jaipur's most popular variant. Dual inverter compressor adjusts speed intelligently — you get fast cooling in 45°C summers without the electricity shock at month-end.",
  },
  {
    id: 2, name: "Daikin 1.5T 5★ Inverter Split AC", brand: "Daikin", cat: "AC",
    price: 44990, orig: 55000, rating: 4.6, reviews: 987, emi: 3749, tag: "Energy Saver",
    img: "/images/products/daikin-1-5t-5-inverter-split-ac.jpg",
    installIn: "2–3 days", localStock: true, energySaving: "₹7,900/yr savings vs 3-star",
    jaipurInstalled: 612,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Inverter", v: "Yes" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "32 dB" }],
    highlights: ["Japanese engineering — most reliable brand in surveys", "5-star: ₹7,900/year savings on electricity", "Auto-clean filter — no manual cleaning needed", "2-3 day installation by Vaishali team", "612 families in Jaipur chose this exact model"],
    desc: "Daikin's global reputation for reliability makes this the favourite among Jaipur homeowners who want peace of mind for the next 10+ years.",
  },
  {
    id: 3, name: "Blue Star 1.5T 3★ Fixed Speed AC", brand: "Blue Star", cat: "AC",
    price: 32990, orig: 40000, rating: 4.2, reviews: 743, emi: 2749, tag: "Budget Pick",
    img: "/images/products/blue-star-1-5t-3-fixed-speed-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: null,
    jaipurInstalled: 389,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "3 Star BEE" }, { l: "Inverter", v: "No (Fixed)" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-22" }, { l: "Noise Level", v: "44 dB" }],
    highlights: ["Most affordable 1.5T from a premium brand", "Fixed speed — simple, reliable, easy to service", "Ideal if AC runs 4 hrs/day or less", "Same-week installation in Jaipur"],
    desc: "Budget-friendly pick for rooms that don't need AC all day. Fixed speed means simple electronics — easy to repair anywhere in India.",
  },
  {
    id: 4, name: "Carrier 1.0T 3★ Inverter Split AC", brand: "Carrier", cat: "AC",
    price: 28990, orig: 35990, rating: 4.1, reviews: 612, emi: 2416, tag: "Compact Pick",
    img: "/images/products/carrier-1-0t-3-inverter-split-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: "₹4,500/yr savings vs fixed speed",
    jaipurInstalled: 298,
    specs: [{ l: "Capacity", v: "1.0 Ton" }, { l: "Star Rating", v: "3 Star BEE" }, { l: "Inverter", v: "Yes" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "36 dB" }],
    highlights: ["Perfect for small bedrooms up to 110 sq ft", "Inverter compressor cuts power bills vs fixed speed", "Carrier's century-old cooling expertise", "Compact outdoor unit — easy on tight balconies"],
    desc: "A right-sized AC for smaller rooms. Carrier invented modern air conditioning, and this 1-ton inverter brings that legacy to budget-conscious Jaipur homes.",
  },
  {
    id: 5, name: "LG 1.5T 3★ Dual Inverter Split AC", brand: "LG", cat: "AC",
    price: 36990, orig: 45990, rating: 4.4, reviews: 1102, emi: 3083, tag: "",
    img: "/images/products/lg-1-5t-3-dual-inverter-split-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: "₹6,100/yr savings vs fixed speed",
    jaipurInstalled: 534,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "3 Star BEE" }, { l: "Inverter", v: "Dual Inverter" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "30 dB" }],
    highlights: ["Dual Inverter compressor — 10-year warranty on compressor", "HD filter with anti-virus protection", "ThinQ app control — turn AC on before you reach home", "534 Jaipur installs and counting"],
    desc: "LG's dual inverter tech balances price and performance — a 3-star unit that performs closer to 5-star thanks to smarter compressor control.",
  },
  {
    id: 6, name: "Hitachi 1.5T 5★ Inverter Split AC", brand: "Hitachi", cat: "AC",
    price: 52990, orig: 64990, rating: 4.7, reviews: 456, emi: 4416, tag: "Premium",
    img: "/images/products/hitachi-1-5t-5-inverter-split-ac.jpg",
    installIn: "2–3 days", localStock: true, energySaving: "₹9,000/yr savings vs 3-star",
    jaipurInstalled: 187,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Inverter", v: "Yes" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "26 dB" }],
    highlights: ["Quietest AC in our lineup at just 26 dB", "Premium build — Hitachi's Japanese reliability", "Fastest cooling mode — 45°C to comfortable in minutes", "Trusted by 187 premium Jaipur homes"],
    desc: "For buyers who want the best — Hitachi's flagship inverter AC barely makes a sound and cools Jaipur's harshest summer days fastest in our range.",
  },
  {
    id: 7, name: "Samsung 1.5T 3★ Windfree Split AC", brand: "Samsung", cat: "AC",
    price: 38990, orig: 47990, rating: 4.3, reviews: 821, emi: 3249, tag: "",
    img: "/images/products/samsung-1-5t-3-windfree-split-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: "₹5,800/yr savings vs fixed speed",
    jaipurInstalled: 412,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "3 Star BEE" }, { l: "Inverter", v: "Yes" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "33 dB" }],
    highlights: ["WindFree mode — cools without direct cold blast", "10-year compressor warranty", "SmartThings app control from anywhere", "412 sold across Jaipur"],
    desc: "Samsung's WindFree technology distributes cool air through thousands of micro air holes instead of blasting it directly — gentler on the body for all-night comfort.",
  },
  {
    id: 8, name: "Panasonic 1.5T 3★ Inverter Split AC", brand: "Panasonic", cat: "AC",
    price: 35990, orig: 43990, rating: 4.2, reviews: 567, emi: 2999, tag: "",
    img: "/images/products/panasonic-1-5t-3-inverter-split-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: "₹5,500/yr savings vs fixed speed",
    jaipurInstalled: 276,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "3 Star BEE" }, { l: "Inverter", v: "Yes" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "34 dB" }],
    highlights: ["Twin Cool Inverter — two compressor modes for efficiency", "Nanoe-G air purification built in", "PM 0.1 filter captures fine summer dust", "Solid mid-range choice for Jaipur households"],
    desc: "Panasonic's twin-inverter compressor switches between modes for the best balance of speed and efficiency — plus built-in air purification for Jaipur's dusty summers.",
  },
  {
    id: 9, name: "Godrej 1.5T 3★ Inverter Split AC", brand: "Godrej", cat: "AC",
    price: 33990, orig: 41990, rating: 4.0, reviews: 389, emi: 2833, tag: "Made in India",
    img: "/images/products/godrej-1-5t-3-inverter-split-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: "₹5,200/yr savings vs fixed speed",
    jaipurInstalled: 198,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "3 Star BEE" }, { l: "Inverter", v: "Yes" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "35 dB" }],
    highlights: ["100% Made in India manufacturing", "Solid budget-inverter performance", "Easy local spares availability", "Backed by Godrej's century-long trust"],
    desc: "An Indian-manufactured inverter AC that keeps costs down while still delivering real energy savings over fixed-speed units — popular with value-conscious buyers.",
  },
  {
    id: 10, name: "Lloyd 1.5T 5★ Inverter Split AC", brand: "Lloyd", cat: "AC",
    price: 41990, orig: 51990, rating: 4.1, reviews: 298, emi: 3499, tag: "Hot Deal",
    img: "/images/products/lloyd-1-5t-5-inverter-split-ac.jpg",
    installIn: "Same week", localStock: true, energySaving: "₹7,600/yr savings vs 3-star",
    jaipurInstalled: 156,
    specs: [{ l: "Capacity", v: "1.5 Ton" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Inverter", v: "Yes" }, { l: "Warranty", v: "1 Yr + 5 Yr Comp." }, { l: "Refrigerant", v: "R-32" }, { l: "Noise Level", v: "31 dB" }],
    highlights: ["5-star efficiency at a sharper price point", "Havells-backed brand with growing Jaipur presence", "Copper condenser coil — better cooling, longer life", "Aggressive pricing on this exact 5-star model"],
    desc: "Lloyd undercuts the big names on price while keeping 5-star efficiency and a copper condenser — a smart pick if budget is the deciding factor.",
  },
  {
    id: 11, name: "Samsung 55\" Crystal 4K Smart TV", brand: "Samsung", cat: "TV",
    price: 52990, orig: 74990, rating: 4.4, reviews: 2341, emi: 2208, tag: "30% Off",
    img: "/images/products/samsung-55-crystal-4k-smart-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 1203,
    specs: [{ l: "Screen Size", v: "55 inches" }, { l: "Resolution", v: "4K UHD 3840×2160" }, { l: "Smart OS", v: "Tizen (Samsung)" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "HDR10+" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["30% off — lowest price in Jaipur right now", "Crystal UHD — vivid colours for IPL, movies & OTT", "Tizen OS: Netflix, Prime, Hotstar pre-installed", "1,203 units sold in Jaipur — most popular TV", "Same-day wall mounting by our team"],
    desc: "The most popular TV in Jaipur. Crystal UHD gives you bright, vivid 4K at a price that makes sense. Perfect for a 10–15 ft living room.",
  },
  {
    id: 12, name: "LG OLED 55\" evo C3 4K TV", brand: "LG", cat: "TV",
    price: 89990, orig: 119990, rating: 4.8, reviews: 643, emi: 7499, tag: "Premium",
    img: "/images/products/lg-oled-55-evo-c3-4k-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 198,
    specs: [{ l: "Screen Size", v: "55 inches" }, { l: "Resolution", v: "4K OLED evo" }, { l: "Smart OS", v: "webOS 23" }, { l: "Warranty", v: "2 Years" }, { l: "HDR", v: "Dolby Vision IQ" }, { l: "Refresh Rate", v: "120Hz" }],
    highlights: ["OLED: each pixel is its own light — deepest blacks", "120Hz — cricket & gaming feels butter smooth", "Dolby Vision + Atmos: cinema in your living room", "2-year warranty + LG India's strongest service network", "See it live on our demo wall before you buy"],
    desc: "When picture quality is non-negotiable. OLED evo panel delivers blacks that Samsung LCD can't match — a difference you'll see in 5 seconds on our demo wall.",
  },
  {
    id: 13, name: "Sony Bravia 50\" 4K Google TV", brand: "Sony", cat: "TV",
    price: 64990, orig: 84990, rating: 4.6, reviews: 512, emi: 5416, tag: "",
    img: "/images/products/sony-bravia-50-4k-google-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 267,
    specs: [{ l: "Screen Size", v: "50 inches" }, { l: "Resolution", v: "4K UHD 3840×2160" }, { l: "Smart OS", v: "Google TV" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "HDR10, Dolby Vision" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["Sony's X1 picture processor — sharper detail, accurate colour", "Google TV: built-in Chromecast & Assistant", "Triluminos Pro display for richer reds and greens", "Trusted Sony reliability with strong India service"],
    desc: "Sony's color science is legendary — this Bravia brings cinema-accurate picture quality and full Google TV smarts to a mid-size living room.",
  },
  {
    id: 14, name: "Mi 43\" 4K Smart Google TV", brand: "Xiaomi", cat: "TV",
    price: 24990, orig: 32990, rating: 4.2, reviews: 3102, emi: 2083, tag: "Budget Pick",
    img: "/images/products/mi-43-4k-smart-google-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 1456,
    specs: [{ l: "Screen Size", v: "43 inches" }, { l: "Resolution", v: "4K UHD 3840×2160" }, { l: "Smart OS", v: "Google TV" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "HDR10" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["Best 4K-for-the-price in Jaipur right now", "Google TV with all major OTT apps", "1,456 units sold — Jaipur's top budget 4K TV", "Compact 43\" fits smaller bedrooms and study rooms"],
    desc: "Xiaomi disrupted the budget TV market — this 43\" 4K set gives you a genuine smart-TV experience without the premium price tag.",
  },
  {
    id: 15, name: "OnePlus 55\" Y1S Pro 4K TV", brand: "OnePlus", cat: "TV",
    price: 38990, orig: 49990, rating: 4.3, reviews: 876, emi: 3249, tag: "Hot Deal",
    img: "/images/products/oneplus-55-y1s-pro-4k-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 432,
    specs: [{ l: "Screen Size", v: "55 inches" }, { l: "Resolution", v: "4K UHD 3840×2160" }, { l: "Smart OS", v: "Android TV" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "HDR10" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["Big 55\" screen at a mid-range price", "Android TV — full Play Store access", "Gamma Engine picture processing", "Strong pick for first-time large-screen buyers"],
    desc: "OnePlus brings its phone-brand polish to TVs — this 55\" set is for buyers who want a genuinely large screen without paying flagship prices.",
  },
  {
    id: 16, name: "TCL 50\" QLED 4K Google TV", brand: "TCL", cat: "TV",
    price: 34990, orig: 44990, rating: 4.1, reviews: 521, emi: 2916, tag: "",
    img: "/images/products/tcl-50-qled-4k-google-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 267,
    specs: [{ l: "Screen Size", v: "50 inches" }, { l: "Resolution", v: "4K QLED" }, { l: "Smart OS", v: "Google TV" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "HDR10+" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["QLED panel — wider colour gamut than standard LED", "Google TV with hands-free voice search", "Game Master mode for low-latency console gaming", "Solid mid-range alternative to Samsung Crystal"],
    desc: "TCL's QLED panel punches above its price — wider colour range than typical LED panels at this budget, with full Google TV smarts.",
  },
  {
    id: 17, name: "Hisense 65\" ULED 4K Smart TV", brand: "Hisense", cat: "TV",
    price: 58990, orig: 76990, rating: 4.3, reviews: 298, emi: 4916, tag: "Big Screen",
    img: "/images/products/hisense-65-uled-4k-smart-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 145,
    specs: [{ l: "Screen Size", v: "65 inches" }, { l: "Resolution", v: "4K ULED" }, { l: "Smart OS", v: "VIDAA" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "Dolby Vision" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["65\" — ideal for living rooms 14 ft and wider", "ULED tech for enhanced contrast and brightness", "Dolby Vision + Atmos for home cinema feel", "Largest screen size in our regular lineup"],
    desc: "Go big — this 65\" Hisense ULED is for living rooms that can handle a true cinema-scale screen, at a price well below the premium brands.",
  },
  {
    id: 18, name: "Samsung 65\" Neo QLED 4K TV", brand: "Samsung", cat: "TV",
    price: 109990, orig: 144990, rating: 4.7, reviews: 234, emi: 9166, tag: "Flagship",
    img: "/images/products/samsung-65-neo-qled-4k-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 98,
    specs: [{ l: "Screen Size", v: "65 inches" }, { l: "Resolution", v: "4K Neo QLED" }, { l: "Smart OS", v: "Tizen (Samsung)" }, { l: "Warranty", v: "2 Years" }, { l: "HDR", v: "Quantum HDR 32x" }, { l: "Refresh Rate", v: "120Hz" }],
    highlights: ["Mini-LED backlight — QLED brightness with OLED-like contrast", "120Hz for sports and gaming", "Quantum Matrix Pro processor for precise local dimming", "Samsung's top-tier flagship for serious home theatres"],
    desc: "Samsung's Neo QLED line sits just below OLED in black levels but beats it on peak brightness — a flagship pick for bright Jaipur living rooms.",
  },
  {
    id: 19, name: "Panasonic 43\" 4K Smart TV", brand: "Panasonic", cat: "TV",
    price: 27990, orig: 35990, rating: 4.0, reviews: 412, emi: 2333, tag: "",
    img: "/images/products/panasonic-43-4k-smart-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 234,
    specs: [{ l: "Screen Size", v: "43 inches" }, { l: "Resolution", v: "4K UHD 3840×2160" }, { l: "Smart OS", v: "Android TV" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "HDR10" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["Trusted Panasonic build quality at a sharp price", "Android TV with Chromecast built-in", "Compact 43\" — easy fit for bedrooms", "Reliable mid-range choice"],
    desc: "Panasonic's straightforward 43\" 4K TV is built for buyers who want dependable picture quality without extra frills.",
  },
  {
    id: 20, name: "Acer 32\" HD Ready Smart TV", brand: "Acer", cat: "TV",
    price: 11990, orig: 15990, rating: 3.9, reviews: 678, emi: 999, tag: "Entry Level",
    img: "/images/products/acer-32-hd-ready-smart-tv.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 389,
    specs: [{ l: "Screen Size", v: "32 inches" }, { l: "Resolution", v: "HD Ready 1366×768" }, { l: "Smart OS", v: "Android TV" }, { l: "Warranty", v: "1 Year" }, { l: "HDR", v: "—" }, { l: "Refresh Rate", v: "60Hz" }],
    highlights: ["Most affordable smart TV in our range", "Great as a second TV for kitchen or kids' room", "Android TV with all key streaming apps", "Compact size, easy installation"],
    desc: "An entry-level smart TV for a second room, hostel, or rental — full Android TV smarts without the 4K price tag.",
  },
  {
    id: 21, name: "Whirlpool 265L Frost-Free Fridge", brand: "Whirlpool", cat: "Refrigerator",
    price: 28990, orig: 35000, rating: 4.3, reviews: 1876, emi: 2416, tag: "Hot Deal",
    img: "/images/products/whirlpool-265l-frost-free-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 934,
    specs: [{ l: "Capacity", v: "265 Litres" }, { l: "Type", v: "Double Door" }, { l: "Frost Free", v: "Yes" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "3 Star" }, { l: "Width", v: "59.5 cm" }],
    highlights: ["Whirlpool — most trusted fridge brand in Jaipur", "265L: fits a family of 4 comfortably", "Frost-free: no manual defrosting ever", "10-year compressor warranty for peace of mind", "934 Jaipur families trust this model"],
    desc: "Jaipur's favourite fridge brand. Whirlpool's strong after-sales network means any issue is resolved fast — a key reason families choose it over online-only brands.",
  },
  {
    id: 22, name: "Samsung 253L Double Door Fridge", brand: "Samsung", cat: "Refrigerator",
    price: 26490, orig: 32000, rating: 4.2, reviews: 1234, emi: 2208, tag: "",
    img: "/images/products/samsung-253l-double-door-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 687,
    specs: [{ l: "Capacity", v: "253 Litres" }, { l: "Type", v: "Double Door" }, { l: "Frost Free", v: "Yes" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "2 Star" }, { l: "Width", v: "54.5 cm" }],
    highlights: ["Samsung's slim 54.5cm width fits most Indian kitchens", "Digital Inverter compressor — energy efficient & quiet", "Converts from fridge to freezer if needed", "687 sold in Jaipur last year"],
    desc: "Slightly smaller footprint than the Whirlpool — ideal if your kitchen is compact. Samsung's digital inverter motor reduces noise and electricity use.",
  },
  {
    id: 23, name: "LG 260L Frost-Free Double Door Fridge", brand: "LG", cat: "Refrigerator",
    price: 27990, orig: 34990, rating: 4.5, reviews: 1543, emi: 2333, tag: "Top Rated",
    img: "/images/products/lg-260l-frost-free-double-door-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: "₹2,100/yr savings vs non-inverter",
    jaipurInstalled: 765,
    specs: [{ l: "Capacity", v: "260 Litres" }, { l: "Type", v: "Double Door" }, { l: "Frost Free", v: "Yes" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "3 Star" }, { l: "Width", v: "58.7 cm" }],
    highlights: ["Smart Inverter Compressor — 10-year warranty", "Door cooling+ for even temperature throughout", "Moist 'N' Fresh tray keeps vegetables fresh longer", "765 Jaipur homes — LG's most-installed fridge here"],
    desc: "LG's Door Cooling+ technology pushes cold air directly through door vents, keeping items in the door as fresh as those on the shelves.",
  },
  {
    id: 24, name: "Haier 256L Triple Door Fridge", brand: "Haier", cat: "Refrigerator",
    price: 31990, orig: 39990, rating: 4.1, reviews: 432, emi: 2666, tag: "",
    img: "/images/products/haier-256l-triple-door-fridge.jpg",
    installIn: "Next day", localStock: true, energySaving: null,
    jaipurInstalled: 198,
    specs: [{ l: "Capacity", v: "256 Litres" }, { l: "Type", v: "Triple Door" }, { l: "Frost Free", v: "Yes" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "3 Star" }, { l: "Width", v: "60 cm" }],
    highlights: ["Triple door layout — dedicated mid-section for frequently used items", "Twin Inverter Technology for quiet, efficient cooling", "Stylish glass finish exterior", "Good option for buyers wanting something different from standard double-door"],
    desc: "Haier's triple-door layout adds a dedicated middle compartment for everyday items like milk and snacks — handy if you're tired of bending to the bottom shelf.",
  },
  {
    id: 25, name: "Godrej 236L Direct Cool Fridge", brand: "Godrej", cat: "Refrigerator",
    price: 18990, orig: 23990, rating: 4.0, reviews: 967, emi: 1583, tag: "Budget Pick",
    img: "/images/products/godrej-236l-direct-cool-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 543,
    specs: [{ l: "Capacity", v: "236 Litres" }, { l: "Type", v: "Single Door" }, { l: "Frost Free", v: "No (Direct Cool)" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "3 Star" }, { l: "Width", v: "54.5 cm" }],
    highlights: ["Most affordable fridge in our lineup", "Direct cool — lower running cost than frost-free", "Toughened glass shelves resist cracking", "Great for small families or starter homes"],
    desc: "A no-frills, dependable direct-cool fridge for buyers who want reliability and a lower price over frost-free convenience.",
  },
  {
    id: 26, name: "Panasonic 307L Frost-Free Fridge", brand: "Panasonic", cat: "Refrigerator",
    price: 33990, orig: 41990, rating: 4.3, reviews: 543, emi: 2833, tag: "",
    img: "/images/products/panasonic-307l-frost-free-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: "₹2,400/yr savings vs non-inverter",
    jaipurInstalled: 267,
    specs: [{ l: "Capacity", v: "307 Litres" }, { l: "Type", v: "Double Door" }, { l: "Frost Free", v: "Yes" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "3 Star" }, { l: "Width", v: "61 cm" }],
    highlights: ["Bigger 307L capacity for larger families", "AG Clean Technology — odour-free interior", "Inverter compressor for steady cooling", "Spacious vegetable crisper"],
    desc: "A larger-capacity option for families of 5+. Panasonic's AG Clean tech keeps the interior odour-free even when fridge is fully stocked.",
  },
  {
    id: 27, name: "Whirlpool 192L Single Door Fridge", brand: "Whirlpool", cat: "Refrigerator",
    price: 15990, orig: 19990, rating: 4.2, reviews: 1342, emi: 1333, tag: "Compact Pick",
    img: "/images/products/whirlpool-192l-single-door-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 723,
    specs: [{ l: "Capacity", v: "192 Litres" }, { l: "Type", v: "Single Door" }, { l: "Frost Free", v: "No (Direct Cool)" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "2 Star" }, { l: "Width", v: "50.5 cm" }],
    highlights: ["Compact size — ideal for 1-2 person households or rentals", "Whirlpool's reliable compressor and service network", "Lowest price point in our fridge range", "Easy to fit in small kitchens or bachelor pads"],
    desc: "A compact single-door fridge for individuals, couples, or rental homes — Whirlpool reliability at the most accessible price point.",
  },
  {
    id: 28, name: "Samsung 580L Side-by-Side Fridge", brand: "Samsung", cat: "Refrigerator",
    price: 84990, orig: 109990, rating: 4.6, reviews: 187, emi: 7083, tag: "Premium",
    img: "/images/products/samsung-580l-side-by-side-fridge.jpg",
    installIn: "Next day", localStock: true, energySaving: null,
    jaipurInstalled: 76,
    specs: [{ l: "Capacity", v: "580 Litres" }, { l: "Type", v: "Side-by-Side" }, { l: "Frost Free", v: "Yes" }, { l: "Warranty", v: "1 Yr + 20 Yr Comp." }, { l: "Star Rating", v: "3 Star" }, { l: "Width", v: "91.2 cm" }],
    highlights: ["Massive 580L capacity for large families or entertaining", "Side-by-side layout — full-height fridge and freezer access", "Twin cooling system keeps fridge and freezer odours separate", "20-year compressor warranty"],
    desc: "For large households or those who entertain often — this side-by-side giant offers restaurant-level storage with Samsung's most advanced cooling system.",
  },
  {
    id: 29, name: "LG 190L Direct Cool Single Door Fridge", brand: "LG", cat: "Refrigerator",
    price: 16990, orig: 20990, rating: 4.1, reviews: 876, emi: 1416, tag: "",
    img: "/images/products/lg-190l-direct-cool-single-door-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 456,
    specs: [{ l: "Capacity", v: "190 Litres" }, { l: "Type", v: "Single Door" }, { l: "Frost Free", v: "No (Direct Cool)" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "3 Star" }, { l: "Width", v: "50.5 cm" }],
    highlights: ["Smart Inverter Compressor even on a single-door model", "Stabilizer-free operation — handles Jaipur's voltage fluctuations", "Toughened glass shelves", "Great value for small kitchens"],
    desc: "LG brings inverter technology even to its entry single-door range — useful in Jaipur where voltage fluctuations can stress regular compressors.",
  },
  {
    id: 30, name: "Haier 195L Direct Cool Fridge", brand: "Haier", cat: "Refrigerator",
    price: 14990, orig: 18990, rating: 3.9, reviews: 312, emi: 1249, tag: "Budget Pick",
    img: "/images/products/haier-195l-direct-cool-fridge.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 165,
    specs: [{ l: "Capacity", v: "195 Litres" }, { l: "Type", v: "Single Door" }, { l: "Frost Free", v: "No (Direct Cool)" }, { l: "Warranty", v: "1 Yr + 10 Yr Comp." }, { l: "Star Rating", v: "2 Star" }, { l: "Width", v: "50 cm" }],
    highlights: ["Lowest-priced fridge in our entire range", "Simple, dependable direct-cool cooling", "Stylish exterior finish despite the budget price", "Good starter fridge for new households"],
    desc: "The most budget-friendly fridge we stock — for first-time buyers and small households who want reliable basic cooling without extra features.",
  },
  {
    id: 31, name: "LG 7kg Front Load Washing Machine", brand: "LG", cat: "Washing Machine",
    price: 34990, orig: 44990, rating: 4.6, reviews: 2108, emi: 2916, tag: "Top Rated",
    img: "/images/products/lg-7kg-front-load-washing-machine.jpg",
    installIn: "Next day", localStock: true, energySaving: null,
    jaipurInstalled: 521,
    specs: [{ l: "Capacity", v: "7 kg" }, { l: "Type", v: "Front Load" }, { l: "Motor", v: "Direct Drive" }, { l: "Warranty", v: "2 Yr + 10 Yr Motor" }, { l: "Spin Speed", v: "1400 RPM" }, { l: "Programs", v: "14 wash programs" }],
    highlights: ["Direct Drive motor: no belt, no vibration, whisper quiet", "10-year motor warranty — LG's confidence in its motor", "14 programs including Steam Wash for deep clean", "Note: Jaipur's hard water may cause limescale — use descaler monthly"],
    desc: "LG's flagship front-loader. Direct Drive motor has fewer parts — lasts longer and stays quiet. Jaipur's hard water users: add a water softener or use descaling tablets monthly.",
  },
  {
    id: 32, name: "Whirlpool 7.5kg Top Load Washer", brand: "Whirlpool", cat: "Washing Machine",
    price: 22990, orig: 28500, rating: 4.3, reviews: 1567, emi: 1916, tag: "Jaipur Favourite",
    img: "/images/products/whirlpool-7-5kg-top-load-washer.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 892,
    specs: [{ l: "Capacity", v: "7.5 kg" }, { l: "Type", v: "Top Load" }, { l: "Motor", v: "Inverter Motor" }, { l: "Warranty", v: "2 Yr + 10 Yr Motor" }, { l: "Spin Speed", v: "720 RPM" }, { l: "Programs", v: "6 wash programs" }],
    highlights: ["Recommended for Jaipur's hard water — top-load handles it better", "7.5kg: fits family of 4–5 easily", "No bending required — ergonomic top-load design", "892 sold in Jaipur — most popular washing machine", "Lowest maintenance in hard water conditions"],
    desc: "Our #1 recommended washing machine for Jaipur homes. Hard water causes limescale in front-loaders — top-load design is more forgiving and easier to maintain.",
  },
  {
    id: 33, name: "Samsung 8kg Front Load Washing Machine", brand: "Samsung", cat: "Washing Machine",
    price: 31990, orig: 40990, rating: 4.4, reviews: 943, emi: 2666, tag: "",
    img: "/images/products/samsung-8kg-front-load-washing-machine.jpg",
    installIn: "Next day", localStock: true, energySaving: null,
    jaipurInstalled: 387,
    specs: [{ l: "Capacity", v: "8 kg" }, { l: "Type", v: "Front Load" }, { l: "Motor", v: "Digital Inverter" }, { l: "Warranty", v: "2 Yr + 20 Yr Motor" }, { l: "Spin Speed", v: "1400 RPM" }, { l: "Programs", v: "12 wash programs" }],
    highlights: ["EcoBubble technology — dissolves detergent faster for better cleaning", "20-year digital inverter motor warranty", "8kg drum for larger families", "SmartThings app remote monitoring"],
    desc: "Samsung's EcoBubble pre-mixes detergent with air and water for faster penetration into fabric — cleaner clothes even in shorter, energy-saving cycles.",
  },
  {
    id: 34, name: "IFB 6.5kg Front Load Washing Machine", brand: "IFB", cat: "Washing Machine",
    price: 27990, orig: 35990, rating: 4.5, reviews: 1234, emi: 2333, tag: "Top Rated",
    img: "/images/products/ifb-6-5kg-front-load-washing-machine.jpg",
    installIn: "Next day", localStock: true, energySaving: null,
    jaipurInstalled: 456,
    specs: [{ l: "Capacity", v: "6.5 kg" }, { l: "Type", v: "Front Load" }, { l: "Motor", v: "Crescent Moon Drum" }, { l: "Warranty", v: "4 Yr + 10 Yr Motor" }, { l: "Spin Speed", v: "1000 RPM" }, { l: "Programs", v: "15 wash programs" }],
    highlights: ["Crescent Moon Drum design — gentler on fabrics", "4-year comprehensive warranty, longest in our range", "Aqua Energie pre-treats hard water before wash", "India's most-loved front-load specialist brand"],
    desc: "IFB pioneered front-load washing machines in India and built their reputation on it — the Aqua Energie feature specifically helps with hard water regions like Jaipur.",
  },
  {
    id: 35, name: "Bosch 7kg Front Load Washing Machine", brand: "Bosch", cat: "Washing Machine",
    price: 33990, orig: 42990, rating: 4.6, reviews: 678, emi: 2833, tag: "Premium",
    img: "/images/products/bosch-7kg-front-load-washing-machine.jpg",
    installIn: "Next day", localStock: true, energySaving: null,
    jaipurInstalled: 234,
    specs: [{ l: "Capacity", v: "7 kg" }, { l: "Type", v: "Front Load" }, { l: "Motor", v: "EcoSilence Drive" }, { l: "Warranty", v: "2 Yr + 10 Yr Motor" }, { l: "Spin Speed", v: "1200 RPM" }, { l: "Programs", v: "15 wash programs" }],
    highlights: ["German engineering — EcoSilence Drive for ultra-quiet operation", "VarioPerfect: faster wash or more efficient wash, your choice", "AntiVibration Side Panels — stable even on uneven floors", "Premium build trusted across Europe"],
    desc: "Bosch brings German engineering precision to the laundry room — EcoSilence Drive technology keeps noise to a minimum even at high spin speeds.",
  },
  {
    id: 36, name: "Haier 6.5kg Top Load Washer", brand: "Haier", cat: "Washing Machine",
    price: 16990, orig: 21990, rating: 4.0, reviews: 543, emi: 1416, tag: "Budget Pick",
    img: "/images/products/haier-6-5kg-top-load-washer.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 312,
    specs: [{ l: "Capacity", v: "6.5 kg" }, { l: "Type", v: "Top Load" }, { l: "Motor", v: "Standard Motor" }, { l: "Warranty", v: "2 Yr + 5 Yr Motor" }, { l: "Spin Speed", v: "680 RPM" }, { l: "Programs", v: "6 wash programs" }],
    highlights: ["Most affordable top-load in our range", "Simple dial controls — easy for all family members", "Good handling of Jaipur's hard water", "Reliable entry-level choice"],
    desc: "A budget-friendly top-loader for households wanting reliable basic washing without paying for extra features they won't use.",
  },
  {
    id: 37, name: "Whirlpool 6.5kg Semi-Automatic Washer", brand: "Whirlpool", cat: "Washing Machine",
    price: 12990, orig: 16990, rating: 3.9, reviews: 1876, emi: 1083, tag: "",
    img: "/images/products/whirlpool-6-5kg-semi-automatic-washer.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 765,
    specs: [{ l: "Capacity", v: "6.5 kg" }, { l: "Type", v: "Semi-Automatic" }, { l: "Motor", v: "Standard Motor" }, { l: "Warranty", v: "2 Years" }, { l: "Spin Speed", v: "1300 RPM Spinner" }, { l: "Programs", v: "Manual wash + spin" }],
    highlights: ["Lowest running cost — uses less water and power per load", "Manual control means you decide exact wash time", "Popular for larger households doing frequent small loads", "Easy to repair — simple mechanical design"],
    desc: "Semi-automatic washers remain hugely popular in India for their low running costs and full manual control — a practical choice for budget-conscious, larger families.",
  },
  {
    id: 38, name: "LG 9kg Front Load Washing Machine", brand: "LG", cat: "Washing Machine",
    price: 42990, orig: 54990, rating: 4.7, reviews: 398, emi: 3583, tag: "Premium",
    img: "/images/products/lg-9kg-front-load-washing-machine.jpg",
    installIn: "Next day", localStock: true, energySaving: null,
    jaipurInstalled: 156,
    specs: [{ l: "Capacity", v: "9 kg" }, { l: "Type", v: "Front Load" }, { l: "Motor", v: "AI Direct Drive" }, { l: "Warranty", v: "2 Yr + 10 Yr Motor" }, { l: "Spin Speed", v: "1400 RPM" }, { l: "Programs", v: "14 wash programs + AI" }],
    highlights: ["9kg — largest front-load capacity in our range", "AI Direct Drive auto-detects fabric and adjusts wash motion", "Steam+ sanitizes clothes without hot water bills", "Built for large families doing fewer, bigger loads"],
    desc: "LG's largest front-loader is built for big families — the AI Direct Drive motor reads the load and fabric type, adjusting wash motion automatically for best results.",
  },
  {
    id: 39, name: "Samsung 6.5kg Top Load Washer", brand: "Samsung", cat: "Washing Machine",
    price: 17990, orig: 22990, rating: 4.1, reviews: 1098, emi: 1499, tag: "",
    img: "/images/products/samsung-6-5kg-top-load-washer.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 543,
    specs: [{ l: "Capacity", v: "6.5 kg" }, { l: "Type", v: "Top Load" }, { l: "Motor", v: "Digital Inverter" }, { l: "Warranty", v: "2 Yr + 20 Yr Motor" }, { l: "Spin Speed", v: "720 RPM" }, { l: "Programs", v: "8 wash programs" }],
    highlights: ["Digital Inverter motor with 20-year warranty", "Magic Filter traps lint automatically", "Compact footprint for smaller utility areas", "Good balance of price and Samsung reliability"],
    desc: "A compact, reliable top-loader with Samsung's long-warranty digital inverter motor — ideal for small to mid-size families with limited utility space.",
  },
  {
    id: 40, name: "Godrej 6kg Top Load Washer", brand: "Godrej", cat: "Washing Machine",
    price: 13990, orig: 17990, rating: 3.8, reviews: 432, emi: 1166, tag: "Budget Pick",
    img: "/images/products/godrej-6kg-top-load-washer.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 198,
    specs: [{ l: "Capacity", v: "6 kg" }, { l: "Type", v: "Top Load" }, { l: "Motor", v: "Standard Motor" }, { l: "Warranty", v: "2 Years" }, { l: "Spin Speed", v: "680 RPM" }, { l: "Programs", v: "4 wash programs" }],
    highlights: ["Most compact and affordable top-loader in our lineup", "Simple, durable design — easy local servicing", "Good fit for small families or starter homes", "Made in India manufacturing"],
    desc: "Godrej's entry-level top-loader covers the basics reliably — a sensible first washing machine for small households or those upgrading from hand-washing.",
  },
  {
    id: 41, name: "Havells Octet 1200mm BLDC Fan", brand: "Havells", cat: "Fan",
    price: 3490, orig: 4200, rating: 4.4, reviews: 3241, emi: 291, tag: "",
    img: "/images/products/havells-octet-1200mm-bldc-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 2341,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "BLDC (Brushless)" }, { l: "Speed", v: "380 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Wattage", v: "28W (vs 75W old)" }],
    highlights: ["BLDC motor: 65% less electricity than old fans", "28W vs 75W — saves ~₹1,500/yr if fan runs 12 hrs/day", "Remote control included — no wall-switch fumbling", "Most silent fan in this price range", "Same-day installation in Jaipur"],
    desc: "BLDC technology is the biggest fan upgrade in 20 years. Runs at 28W instead of 75W — if you have 4 fans, you save a full unit of electricity every day.",
  },
  {
    id: 42, name: "Crompton Energion 1200mm BLDC Fan", brand: "Crompton", cat: "Fan",
    price: 3290, orig: 3990, rating: 4.3, reviews: 2187, emi: 274, tag: "Energy Saver",
    img: "/images/products/crompton-energion-1200mm-bldc-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 1654,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "BLDC (Brushless)" }, { l: "Speed", v: "350 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Wattage", v: "32W" }],
    highlights: ["5-star BEE rated — among the most efficient fans available", "Anti-dust coating keeps blades cleaner longer", "Slightly cheaper than Havells with similar savings", "Strong choice for energy-conscious households"],
    desc: "Crompton's Energion series matches Havells on BLDC efficiency at a slightly lower price — a great everyday choice for cutting your electricity bill.",
  },
  {
    id: 43, name: "Orient Aeroquiet 1200mm Fan", brand: "Orient", cat: "Fan",
    price: 2190, orig: 2690, rating: 4.1, reviews: 1876, emi: 183, tag: "",
    img: "/images/products/orient-aeroquiet-1200mm-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 987,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "Standard Induction" }, { l: "Speed", v: "380 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "2 Star" }, { l: "Wattage", v: "68W" }],
    highlights: ["Reliable standard fan at a budget price", "Aerodynamic blade design for stronger air delivery", "Trusted Orient build quality", "Good value if BLDC efficiency isn't a priority"],
    desc: "A dependable standard ceiling fan for buyers who want strong airflow at the lowest upfront cost, without needing BLDC's electricity savings.",
  },
  {
    id: 44, name: "Bajaj Maxima 1200mm Fan", brand: "Bajaj", cat: "Fan",
    price: 1990, orig: 2490, rating: 4.0, reviews: 2654, emi: 166, tag: "Budget Pick",
    img: "/images/products/bajaj-maxima-1200mm-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 1432,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "Standard Induction" }, { l: "Speed", v: "400 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "2 Star" }, { l: "Wattage", v: "75W" }],
    highlights: ["Lowest price ceiling fan in our range", "Bajaj's decades-long fan manufacturing trust", "Strong, dependable airflow", "Easy local servicing anywhere in Jaipur"],
    desc: "Bajaj's most affordable ceiling fan — a no-nonsense, reliable choice that's been a household name in India for generations.",
  },
  {
    id: 45, name: "Havells Stealth Air 1200mm BLDC Fan", brand: "Havells", cat: "Fan",
    price: 4290, orig: 5190, rating: 4.6, reviews: 1432, emi: 358, tag: "Premium",
    img: "/images/products/havells-stealth-air-1200mm-bldc-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 654,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "BLDC (Brushless)" }, { l: "Speed", v: "350 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Wattage", v: "26W" }],
    highlights: ["Premium aerodynamic blade for maximum air delivery at low power", "Underlight compatible design — pairs with hanging lights", "Remote with timer and sleep mode", "26W — even more efficient than the Octet"],
    desc: "Havells' top-tier BLDC fan adds a sleeker design and even better efficiency — for buyers who want the best fan available, not just a good one.",
  },
  {
    id: 46, name: "Atomberg Renesa 1200mm BLDC Fan", brand: "Atomberg", cat: "Fan",
    price: 3690, orig: 4490, rating: 4.5, reviews: 1987, emi: 308, tag: "Energy Saver",
    img: "/images/products/atomberg-renesa-1200mm-bldc-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 1098,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "BLDC (Brushless)" }, { l: "Speed", v: "360 RPM max" }, { l: "Warranty", v: "3 Years" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Wattage", v: "28W" }],
    highlights: ["3-year warranty — longest in our fan range", "IoT-ready: control via app and voice assistants", "65% energy savings vs ordinary fans", "Atomberg pioneered BLDC fans in India retail"],
    desc: "Atomberg helped popularize BLDC fans in India and backs this model with a 3-year warranty — the longest coverage in our entire fan lineup.",
  },
  {
    id: 47, name: "Usha Striker 1200mm Fan", brand: "Usha", cat: "Fan",
    price: 1790, orig: 2190, rating: 3.9, reviews: 1654, emi: 149, tag: "",
    img: "/images/products/usha-striker-1200mm-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 876,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "Standard Induction" }, { l: "Speed", v: "390 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "2 Star" }, { l: "Wattage", v: "72W" }],
    highlights: ["One of the most affordable fans available", "Usha's long-standing manufacturing reputation", "Decorative finish options available", "Solid choice for rental properties"],
    desc: "A practical, budget ceiling fan from one of India's oldest fan manufacturers — popular for rental properties and secondary rooms.",
  },
  {
    id: 48, name: "Crompton SilentPro Enso 1200mm BLDC Fan", brand: "Crompton", cat: "Fan",
    price: 3990, orig: 4890, rating: 4.4, reviews: 1234, emi: 333, tag: "",
    img: "/images/products/crompton-silentpro-enso-1200mm-bldc-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 543,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "BLDC (Brushless)" }, { l: "Speed", v: "340 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Wattage", v: "30W" }],
    highlights: ["Designed for minimal noise during sleep", "5-star BEE efficiency rating", "Sleek matte finish suits modern interiors", "Remote control with multiple speed presets"],
    desc: "Crompton's SilentPro line focuses on near-silent operation — ideal for bedrooms where every decibel during sleep matters.",
  },
  {
    id: 49, name: "Polycab Zoomer 1200mm Fan", brand: "Polycab", cat: "Fan",
    price: 1690, orig: 2090, rating: 3.8, reviews: 987, emi: 141, tag: "Budget Pick",
    img: "/images/products/polycab-zoomer-1200mm-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 432,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "Standard Induction" }, { l: "Speed", v: "400 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "2 Star" }, { l: "Wattage", v: "74W" }],
    highlights: ["Among the lowest-priced fans we stock", "Strong high-speed airflow rating", "Polycab's reputation for electrical reliability", "Good fit for budget renovations"],
    desc: "Polycab leverages its electrical-components expertise into a no-frills, high-airflow fan at one of the lowest price points in our catalogue.",
  },
  {
    id: 50, name: "Havells Efficiencia Neo 1200mm BLDC Fan", brand: "Havells", cat: "Fan",
    price: 3890, orig: 4690, rating: 4.5, reviews: 1765, emi: 324, tag: "Energy Saver",
    img: "/images/products/havells-efficiencia-neo-1200mm-bldc-fan.jpg",
    installIn: "Same day", localStock: true, energySaving: null,
    jaipurInstalled: 765,
    specs: [{ l: "Sweep Size", v: "1200 mm" }, { l: "Motor", v: "BLDC (Brushless)" }, { l: "Speed", v: "360 RPM max" }, { l: "Warranty", v: "2 Years" }, { l: "Star Rating", v: "5 Star BEE" }, { l: "Wattage", v: "29W" }],
    highlights: ["Another strong 5-star BLDC option from Havells", "Sleek, slightly different blade profile than the Octet", "Remote control with timer function", "Reliable backup pick if Octet stock runs low"],
    desc: "A close sibling to the Octet, the Efficiencia Neo gives Havells fans another energy-efficient option with a slightly different aesthetic.",
  },
];

export const CATEGORIES = [
  { name: "AC", icon: "Snowflake", bg: "#DBEAFE", border: "#93C5FD", count: 10, topBrand: "Voltas", startPrice: 28990 },
  { name: "TV", icon: "Tv", bg: "#FCE7F3", border: "#F9A8D4", count: 10, topBrand: "Samsung", startPrice: 11990 },
  { name: "Refrigerator", icon: "Refrigerator", bg: "#D1FAE5", border: "#6EE7B7", count: 10, topBrand: "Whirlpool", startPrice: 14990 },
  { name: "Washing Machine", icon: "WashingMachine", bg: "#FEF3C7", border: "#FCD34D", count: 10, topBrand: "LG", startPrice: 12990 },
  { name: "Fan", icon: "Fan", bg: "#E0E7FF", border: "#A5B4FC", count: 10, topBrand: "Havells", startPrice: 1690 },
];

export const TICKETS: Ticket[] = [
  { id: "TKT-2847", prod: "Samsung 55\" TV", type: "Installation", status: "Scheduled", date: "24 Jun 2025", color: COLORS.blue, techName: "Manoj Kumar", issue: "New installation after purchase" },
  { id: "TKT-2831", prod: "Voltas 1.5T AC", type: "Servicing", status: "Resolved", date: "18 Jun 2025", color: COLORS.green, techName: "Ramesh Kumar", issue: "Annual cleaning & gas top-up" },
  { id: "TKT-2819", prod: "Whirlpool Fridge", type: "Repair", status: "In Progress", date: "14 Jun 2025", color: COLORS.orange, techName: "Suresh Sharma", issue: "Not cooling properly" },
];

export const MY_PRODUCTS: MyProduct[] = [
  { id: 1, name: "Samsung 55\" Crystal 4K TV", brand: "Samsung", serial: "SN-MX47392", bought: "12 Mar 2024", warranty: "12 Mar 2026", daysLeft: 627, img: "/images/products/samsung-tv-55.jpg", model: "UA55CUE60AKLXL" },
  { id: 2, name: "Voltas 1.5T Inverter AC", brand: "Voltas", serial: "VL-AC93821", bought: "5 May 2023", warranty: "5 May 2025", daysLeft: -51, img: "/images/products/voltas-ac.jpg", model: "185V VERTIS EMERALD" },
  { id: 3, name: "LG 7kg Front Load Washer", brand: "LG", serial: "LG-WM28391", bought: "20 Jan 2025", warranty: "20 Jan 2027", daysLeft: 942, img: "/images/products/lg-washer.jpg", model: "FHM1207SDW" },
];

export const ORDERS: Order[] = [
  { id: "VE-ORD-84721", name: "Samsung 55\" Crystal 4K TV", brand: "Samsung", date: "23 Jun 2025", status: "Out for Delivery", statusColor: COLORS.blue, img: "/images/products/samsung-tv-55.jpg", price: 52990, emi: 2208 },
  { id: "VE-ORD-79834", name: "Voltas 1.5T Inverter AC", brand: "Voltas", date: "5 May 2023", status: "Installed ✓", statusColor: COLORS.green, img: "/images/products/voltas-ac.jpg", price: 47990 },
  { id: "VE-ORD-73291", name: "LG 7kg Front Load Washer", brand: "LG", date: "20 Jan 2025", status: "Delivered", statusColor: COLORS.green, img: "/images/products/lg-washer.jpg", price: 34990 },
];

export const OFFERS = [
  { id: 1, title: "Summer Sale — Up to 40% Off ACs", sub: "Voltas · Daikin · Blue Star · Carrier", color: "#1A47CC", img: "/images/banners/banner-ac-sale.png", cat: "AC" },
  { id: 2, title: "No Cost EMI on TVs — 0% Interest", sub: "Samsung · LG · Sony · 12 to 24 months", color: "#7C3AED", img: "/images/banners/banner-tv-emi.png", cat: "TV" },
  { id: 3, title: "Free Installation on All Orders", sub: "Jaipur delivery + same-week setup · No hidden charges", color: "#0E7490", img: "/images/banners/banner-free-install.png", cat: "" },
];

export const BRANDS = ["All", "Samsung", "LG", "Voltas", "Daikin", "Whirlpool", "Havells", "Blue Star"];

export const NOTIFICATIONS = [
  { icon: "Truck", t: "Order out for delivery!", b: "Your Samsung 55\" TV is arriving today by 7 PM. Our team will call 30 mins before.", tm: "10 min ago", unread: true, color: COLORS.blue },
  { icon: "Wrench", t: "Technician visit confirmed", b: "Manoj Kumar will arrive tomorrow at 11 AM for AC installation. Contact: 98765 43210.", tm: "2 hrs ago", unread: true, color: COLORS.orange },
  { icon: "Tag", t: "Summer Sale — Up to 40% Off!", b: "Voltas, Daikin and Blue Star ACs at lowest Jaipur prices. Ends Sunday.", tm: "Yesterday", unread: false, color: COLORS.purple },
  { icon: "CheckCircle", t: "Order delivered successfully", b: "Your Voltas 1.5T AC has been delivered and installed. Rate your experience?", tm: "5 Jun 2025", unread: false, color: COLORS.green },
  { icon: "Shield", t: "Warranty expiry reminder", b: "Your Voltas AC warranty expires in 30 days. Protect it with an AMC plan — from ₹1,499/yr.", tm: "3 Jun 2025", unread: false, color: COLORS.orange },
];
