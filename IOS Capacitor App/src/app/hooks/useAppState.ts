import { useState, useRef, useEffect } from "react";
import type { Screen, Product, CartItem, Ticket, MyProduct } from "../data/store";
import { PRODUCTS, TICKETS, MY_PRODUCTS } from "../data/store";

export function useAppState() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [history, setHistory] = useState<Screen[]>([]);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Shop
  const [selProd, setSelProd] = useState<Product>(PRODUCTS[0]);
  const [selCat, setSelCat] = useState("AC");
  const [selBrand, setSelBrand] = useState("All");
  const [searchQ, setSearchQ] = useState("");
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

  // Cart & Checkout
  const [cartItems, setCartItems] = useState<CartItem[]>([{ ...(PRODUCTS.find(p => p.id === 11) || PRODUCTS[0]), qty: 1 }]);
  const [selAddr, setSelAddr] = useState(0);
  const [selPayment, setSelPayment] = useState("upi");
  const [emiMonths, setEmiMonths] = useState(12);
  const [emiProdPrice, setEmiProdPrice] = useState(52990);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [lastOrderId, setLastOrderId] = useState("VE-ORD-84721");

  // Store Visit
  const [visitCat, setVisitCat] = useState("AC");
  const [visitDate, setVisitDate] = useState("Wed, 25 Jun");
  const [visitTime, setVisitTime] = useState("11:00 AM");

  // Support
  const [selTicket, setSelTicket] = useState<Ticket>(TICKETS[0]);
  const [selMyProd, setSelMyProd] = useState<MyProduct>(MY_PRODUCTS[0]);
  const [selIssue, setSelIssue] = useState("");
  const [issueDesc, setIssueDesc] = useState("");

  // UI
  const [activeBannerIdx, setActiveBannerIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"home" | "shop" | "ai" | "support" | "profile">("home");
  const [chatInput, setChatInput] = useState("");
  const [msgs, setMsgs] = useState<{ role: "ai" | "user"; text: string }[]>([
    { role: "ai", text: "Namaste! 🙏 Main hoon Vaishali AI — aapka personal electronics expert.\n\nJaipur ki garmi ke liye perfect AC chahiye? Ya TV, fridge, washing machine? Bataiye — main aapke budget aur ghar ke hisaab se best option suggest karunga." },
  ]);
  const [aiLoading, setAiLoading] = useState(false);
  const [notifCount, setNotifCount] = useState(2);

  const scrollRef = useRef<HTMLDivElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [msgs]);

  // Auto-scroll page to top on navigate
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [screen]);

  // Banner auto-scroll
  useEffect(() => {
    if (screen !== "home") return;
    const t = setInterval(() => setActiveBannerIdx(i => (i + 1) % 3), 3800);
    return () => clearInterval(t);
  }, [screen]);

  // Splash timer
  useEffect(() => {
    const t = setTimeout(() => nav("welcome"), 2800);
    return () => clearTimeout(t);
  }, []);

  const nav = (to: Screen) => {
    setHistory(h => [...h, screen]);
    setScreen(to);
  };

  const back = () => {
    const prev = history[history.length - 1];
    if (prev) {
      setHistory(h => h.slice(0, -1));
      setScreen(prev);
    }
  };

  const switchTab = (tab: "home" | "shop" | "ai" | "support" | "profile") => {
    const map: Record<string, Screen> = {
      home: "home", shop: "category", ai: "ai-chat", support: "support", profile: "profile",
    };
    setActiveTab(tab);
    setHistory([]);
    setScreen(map[tab] as Screen);
  };

  const addToCart = (p: Product) => {
    setCartItems(items => {
      const ex = items.find(i => i.id === p.id);
      if (ex) return items.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...items, { ...p, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => setCartItems(items => items.filter(i => i.id !== id));

  const updateQty = (id: number, delta: number) => {
    setCartItems(items => items.map(i => {
      if (i.id !== id) return i;
      const newQty = i.qty + delta;
      return newQty < 1 ? i : { ...i, qty: newQty };
    }));
  };

  const toggleWishlist = (id: number) => {
    setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]);
  };

  const toggleCompare = (p: Product) => {
    setCompareList(c => {
      if (c.find(x => x.id === p.id)) return c.filter(x => x.id !== p.id);
      if (c.length >= 2) return [c[1], p];
      return [...c, p];
    });
  };

  const sendAiMsg = async () => {
    if (!chatInput.trim() || aiLoading) return;
    const userText = chatInput.trim();
    setChatInput("");
    setMsgs(m => [...m, { role: "user", text: userText }]);
    setAiLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 300,
          system: `You are Vaishali AI, the friendly product expert for Vaishali Electronics — Jaipur's trusted local store since 1987, in Vaishali Nagar.

Store facts:
- Products: ACs (Voltas ₹47,990, Daikin ₹44,990), TVs (Samsung 55" ₹52,990, LG OLED ₹89,990), Fridges (Whirlpool 265L ₹28,990), Washers (LG front-load ₹34,990, Whirlpool top-load ₹22,990 — recommend top-load for Jaipur hard water), Fans (Havells BLDC ₹3,490)
- Key USPs: Free same-week installation in Jaipur (Amazon = 7-15 days), 0% EMI 3-24 months, local warranty claims handled by us, free delivery in Jaipur
- Jaipur-specific: 45°C summers make AC critical, hard water means recommend top-load washers, Whirlpool is most trusted fridge brand locally
- Use Hinglish naturally. Be warm, concise (under 80 words). Address anxieties: electricity bills, installation timing, what if it breaks.
- Never say "I can't help" — always give your best recommendation.`,
          messages: msgs.map(m => ({ role: m.role === "ai" ? "assistant" : "user", content: m.text })).concat([{ role: "user", content: userText }]),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Thoda network issue hua. Please dobara try karein! 🙏";
      setMsgs(m => [...m, { role: "ai", text: reply }]);
    } catch {
      setMsgs(m => [...m, { role: "ai", text: "Network issue! Please check connection and try again. 🙏" }]);
    }
    setAiLoading(false);
  };

  const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const placeOrder = () => {
    const newId = `VE-ORD-${Math.floor(80000 + Math.random() * 9999)}`;
    setLastOrderId(newId);
    setCartItems([]);
    nav("order-success");
  };

  const getFilteredProducts = () => {
    return PRODUCTS.filter(p => {
      const catMatch = selCat === "All" || p.cat === selCat;
      const brandMatch = selBrand === "All" || p.brand === selBrand;
      const searchMatch = !searchQ ||
        p.name.toLowerCase().includes(searchQ.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQ.toLowerCase()) ||
        p.cat.toLowerCase().includes(searchQ.toLowerCase());
      return catMatch && brandMatch && searchMatch;
    });
  };

  return {
    // nav
    screen, nav, back, history,
    // auth
    phone, setPhone, otp, setOtp, otpRefs,
    // shop
    selProd, setSelProd, selCat, setSelCat, selBrand, setSelBrand,
    searchQ, setSearchQ, compareList, toggleCompare,
    wishlist, toggleWishlist, sortBy, setSortBy,
    priceRange, setPriceRange, ratingFilter, setRatingFilter,
    getFilteredProducts,
    // cart
    cartItems, addToCart, removeFromCart, updateQty, cartTotal, cartCount,
    selAddr, setSelAddr, selPayment, setSelPayment,
    emiMonths, setEmiMonths, emiProdPrice, setEmiProdPrice,
    coupon, setCoupon, couponApplied, setCouponApplied,
    lastOrderId, placeOrder,
    // visit
    visitCat, setVisitCat, visitDate, setVisitDate, visitTime, setVisitTime,
    // support
    selTicket, setSelTicket, selMyProd, setSelMyProd,
    selIssue, setSelIssue, issueDesc, setIssueDesc,
    // ui
    activeBannerIdx, setActiveBannerIdx, activeTab, switchTab,
    chatInput, setChatInput, msgs, setMsgs, aiLoading, sendAiMsg,
    notifCount, setNotifCount,
    scrollRef, chatScrollRef,
  };
}
