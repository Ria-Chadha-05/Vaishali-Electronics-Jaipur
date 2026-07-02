import { Bell, ShoppingCart, Search, Mic, Zap, MapPin, Calculator, Home, ChevronRight } from "lucide-react";
import { COLORS, fmt, OFFERS, CATEGORIES, PRODUCTS } from "../data/store";
import { ProductCard, SectionHeader, BottomNav, CategoryIcon } from "../components/shared";

const B = "#1A47CC", O = "#F97316", G = "#16A34A", N = "#0F172A", S = "#64748B", W = "#FFFFFF";
const SAFE_TOP = 58;

export function HomeScreen({ activeBannerIdx, setActiveBannerIdx, nav, switchTab, cartCount, notifCount, wishlist, toggleWishlist, addToCart, setSelProd, setSelCat, scrollRef }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>

      {/* ── Sticky Header ── */}
      <div style={{ background: `linear-gradient(160deg,#0B1F6B 0%,${B} 100%)`, flexShrink: 0, paddingBottom: 14 }}>
        {/* Logo + actions */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${SAFE_TOP}px 16px 0` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <img src="/images/ui/logo.png" alt="Vaishali" style={{ width: 32, height: 32, objectFit: "contain", filter: "brightness(0) invert(1)" }} onError={() => {}} />
            <div>
              <p style={{ color: "white", fontWeight: 800, fontSize: 14, fontFamily: "Plus Jakarta Sans,sans-serif", lineHeight: 1.2 }}>Vaishali Electronics</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, fontFamily: "DM Sans,sans-serif", display: "flex", alignItems: "center", gap: 3 }}><MapPin size={8} color="rgba(255,255,255,0.55)" />Vaishali Nagar, Jaipur</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => nav("notifications")} style={{ width: 36, height: 36, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.14)", position: "relative" }}>
              <Bell size={16} color="white" />
              {notifCount > 0 && <span style={{ position: "absolute", top: -3, right: -3, width: 15, height: 15, borderRadius: 8, background: O, color: "white", fontSize: 8, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{notifCount}</span>}
            </button>
            <button onClick={() => nav("cart")} style={{ width: 36, height: 36, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.14)", position: "relative" }}>
              <ShoppingCart size={16} color="white" />
              {cartCount > 0 && <span style={{ position: "absolute", top: -3, right: -3, width: 15, height: 15, borderRadius: 8, background: O, color: "white", fontSize: 8, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Greeting — compact */}
        <p style={{ color: "white", fontWeight: 800, fontSize: 18, fontFamily: "Plus Jakarta Sans,sans-serif", padding: "8px 16px 8px" }}>Namaste, Rahul!</p>

        {/* Search */}
        <div style={{ padding: "0 16px" }}>
          <button onClick={() => nav("search-results")} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 14, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <Search size={13} color="rgba(255,255,255,0.6)" />
            <span style={{ flex: 1, textAlign: "left", color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "DM Sans,sans-serif" }}>Search ACs, TVs, Refrigerators...</span>
            <Mic size={13} color="rgba(255,255,255,0.45)" />
          </button>
        </div>
      </div>

      {/* ── Scrollable Body ── */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", background: "#F5F7FA" }}>

        {/* Hero Banner */}
        <div style={{ padding: "14px 16px 0" }}>
          <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", height: 152 }}>
            {OFFERS.map((o, idx) => (
              <button key={o.id} onClick={() => { setSelCat(o.cat || "AC"); switchTab("shop"); }} style={{ position: "absolute", inset: 0, width: "100%", opacity: activeBannerIdx === idx ? 1 : 0, transition: "opacity 0.5s ease", pointerEvents: activeBannerIdx === idx ? "auto" : "none" }}>
                <img src={o.img} alt={o.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&h=320&fit=crop&auto=format"; }} />
              </button>
            ))}
          </div>
          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 5, marginTop: 8 }}>
            {OFFERS.map((_, i) => (
              <button key={i} onClick={() => setActiveBannerIdx(i)} style={{ width: activeBannerIdx === i ? 18 : 5, height: 5, borderRadius: 3, background: activeBannerIdx === i ? B : "#CBD5E1", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div style={{ padding: "16px 16px 0" }}>
          <SectionHeader title="Shop by Category" onSeeAll={() => switchTab("shop")} />
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
            {CATEGORIES.map(c => (
              <button key={c.name} onClick={() => { setSelCat(c.name); switchTab("shop"); }} style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: c.bg, border: `1.5px solid ${c.border}` }}>
                  <CategoryIcon icon={c.icon} size={24} color={N} />
                </div>
                <p style={{ fontSize: 10, fontWeight: 700, color: N, fontFamily: "DM Sans,sans-serif" }}>{c.name}</p>
                <p style={{ fontSize: 9, color: S, fontFamily: "DM Sans,sans-serif", marginTop: -3 }}>From {fmt(c.startPrice)}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions — horizontal pill row */}
        <div style={{ padding: "12px 16px 0", display: "flex", gap: 8 }}>
          <button onClick={() => nav("emi-calculator")} style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, padding: "11px 12px", borderRadius: 14, background: `linear-gradient(135deg,#1e3a8a,${B})`, boxShadow: "0 4px 14px rgba(26,71,204,0.2)" }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.15)", flexShrink: 0 }}>
              <Calculator size={15} color="white" />
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: 11, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Calculate EMI</p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 9, fontFamily: "DM Sans,sans-serif" }}>0% interest plans</p>
            </div>
          </button>
          <button onClick={() => nav("store-visit-1")} style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, padding: "11px 12px", borderRadius: 14, background: W, border: "1.5px solid #E2E8F0", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: "#EFF3FF", flexShrink: 0 }}>
              <MapPin size={15} color={B} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ color: N, fontWeight: 700, fontSize: 11, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Book Store Visit</p>
              <p style={{ color: S, fontSize: 9, fontFamily: "DM Sans,sans-serif" }}>Free · Live demo</p>
            </div>
          </button>
        </div>

        {/* WhatsApp — slim strip */}
        <div style={{ padding: "10px 16px 0" }}>
          <button onClick={() => window.open("https://wa.me/919876543210", "_blank")} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 14, background: "#DCFCE7", border: "1px solid #86EFAC", textAlign: "left" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#16A34A"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.535 5.858L.057 23.571a.75.75 0 00.918.919l5.82-1.51A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.662-.524-5.174-1.436l-.37-.22-3.834.995.997-3.738-.242-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: 12, color: "#15803D", fontFamily: "DM Sans,sans-serif" }}>Chat on WhatsApp</p>
              <p style={{ fontSize: 10, color: G, fontFamily: "DM Sans,sans-serif" }}>Instant expert advice · No wait</p>
            </div>
            <ChevronRight size={14} color={G} />
          </button>
        </div>

        {/* Social proof + Flash deal — side by side */}
        <div style={{ padding: "12px 16px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 10px", borderRadius: 14, background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
            <Home size={16} color={G} style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 700, fontSize: 10, color: "#15803D", lineHeight: 1.3 }}>847 Jaipur families this summer</p>
              <p style={{ fontSize: 9, color: G, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>Free install · On-time</p>
            </div>
          </div>
          <button onClick={() => nav("offers")} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 10px", borderRadius: 14, background: "#FFF7ED", border: "1.5px solid #FED7AA", textAlign: "left" }}>
            <Zap size={16} color={O} style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 800, fontSize: 12, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Up to 40% Off</p>
              <p style={{ fontSize: 9, color: O, fontFamily: "DM Sans,sans-serif", fontWeight: 700, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>Today only</p>
            </div>
          </button>
        </div>

        {/* Popular Products */}
        <div style={{ padding: "16px 16px 0" }}>
          <SectionHeader title="Popular in Jaipur" onSeeAll={() => switchTab("shop")} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {PRODUCTS.slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p}
                onTap={() => { setSelProd(p); nav("product-detail"); }}
                onWishlist={toggleWishlist} isWishlisted={wishlist.includes(p.id)} />
            ))}
          </div>
        </div>

        {/* More Products */}
        <div style={{ padding: "16px 16px 20px" }}>
          <SectionHeader title="More Products" onSeeAll={() => switchTab("shop")} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {PRODUCTS.slice(4, 8).map(p => (
              <ProductCard key={p.id} product={p}
                onTap={() => { setSelProd(p); nav("product-detail"); }}
                onWishlist={toggleWishlist} isWishlisted={wishlist.includes(p.id)} />
            ))}
          </div>
        </div>

      </div>

      <BottomNav activeTab="home" switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}
