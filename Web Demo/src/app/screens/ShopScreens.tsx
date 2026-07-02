import { useState } from "react";
import { Search, Mic, SlidersHorizontal, ChevronDown, Star, Heart, Share2, CreditCard, Truck, Check, X, ArrowLeft, ArrowRight, Info, Shield, ChevronRight, Camera, Sparkles as SparklesIcon, Grid, Gift, Building2, Home, Zap } from "lucide-react";
import { COLORS, fmt, disc, PRODUCTS, CATEGORIES, BRANDS, OFFERS } from "../data/store";
import type { Product } from "../data/store";
import { ProductCard, Header, BottomNav, TrustBadges, SectionHeader, StatusBar, PrimaryButton, CategoryIcon } from "../components/shared";

const B = "#1A47CC", O = "#F97316", G = "#16A34A", R = "#DC2626", N = "#0F172A", S = "#64748B", W = "#FFFFFF", L = "#F1F5F9";
const SAFE_TOP = 58;

// ─── Category / Shop ──────────────────────────────────────────────────────────
export function CategoryScreen({ selCat, setSelCat, selBrand, setSelBrand, nav, switchTab, activeTab, cartCount, wishlist, toggleWishlist, setSelProd, compareList, toggleCompare, scrollRef, getFilteredProducts, addToCart }: any) {
  const filtered = getFilteredProducts();
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ padding: "0 16px 8px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <p style={{ fontWeight: 800, fontSize: 20, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Shop</p>
            <button onClick={() => nav("cart")} style={{ width: 36, height: 36, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", background: "#F1F5F9", position: "relative" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={N} strokeWidth="2"><path d="M6 6h15l-1.5 9h-12L4 3H2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1.5" fill={N}/><circle cx="18" cy="20" r="1.5" fill={N}/></svg>
              {cartCount > 0 && <span style={{ position: "absolute", top: -3, right: -3, width: 15, height: 15, borderRadius: 8, background: O, color: "white", fontSize: 8, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>}
            </button>
          </div>
          <button onClick={() => nav("search-results")} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 14, background: "#F1F5F9", border: "1px solid #E2E8F0", marginBottom: 10 }}>
            <Search size={14} color="#94A3B8" />
            <span style={{ flex: 1, textAlign: "left", color: "#94A3B8", fontSize: 13, fontFamily: "DM Sans,sans-serif" }}>Search products, brands...</span>
            <Mic size={13} color="#94A3B8" />
          </button>
          {/* Category pills */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 2 }}>
            {["All", ...CATEGORIES.map(c => c.name)].map(cat => {
              const catData = CATEGORIES.find(c => c.name === cat);
              return (
                <button key={cat} onClick={() => setSelCat(cat)} style={{
                  flexShrink: 0, display: "flex", alignItems: "center", gap: 5, padding: "7px 12px", borderRadius: 20,
                  background: selCat === cat ? B : "#F1F5F9", fontSize: 11, fontWeight: 600,
                  color: selCat === cat ? W : S, fontFamily: "DM Sans,sans-serif",
                }}>
                  {catData ? <CategoryIcon icon={catData.icon} size={13} color={selCat === cat ? W : S} /> : <Grid size={13} color={selCat === cat ? W : S} />}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
        {/* Jaipur insight */}
        {selCat !== "All" && (
          <div style={{ margin: "0 16px 8px", padding: "8px 12px", borderRadius: 12, background: "#EFF3FF", border: "1px solid #C7D7F8", display: "flex", alignItems: "center", gap: 8 }}>
            <Info size={12} color={B} />
            <p style={{ fontSize: 11, color: B, fontFamily: "DM Sans,sans-serif" }}>
              {selCat === "AC" && "Jaipur's 45°C summers — 5-star inverter pays back in 2 years"}
              {selCat === "TV" && "See all screen sizes live on our demo wall before deciding"}
              {selCat === "Refrigerator" && "Whirlpool is Jaipur's most trusted fridge brand since 2001"}
              {selCat === "Washing Machine" && "Jaipur hard water? Top-load is easier to maintain"}
              {selCat === "Fan" && "BLDC fans use 65% less power — great ROI at 12+ hrs/day"}
            </p>
          </div>
        )}
        {/* Brand filter */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px 10px", overflowX: "auto", borderTop: "1px solid rgba(15,23,42,0.06)" }}>
          <button onClick={() => nav("filters")} style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 5, padding: "7px 12px", borderRadius: 20, border: `1.5px solid ${B}`, color: B, fontSize: 11, fontWeight: 700, fontFamily: "DM Sans,sans-serif" }}>
            <SlidersHorizontal size={11} />Filters
          </button>
          {BRANDS.map(b => (
            <button key={b} onClick={() => setSelBrand(b)} style={{ flexShrink: 0, padding: "7px 12px", borderRadius: 20, background: selBrand === b ? B : "#F1F5F9", color: selBrand === b ? W : S, fontSize: 11, fontWeight: 600, fontFamily: "DM Sans,sans-serif" }}>{b}</button>
          ))}
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>
        {compareList.length > 0 && (
          <div style={{ marginBottom: 10, padding: "10px 12px", borderRadius: 14, background: B + "12", border: `1.5px solid ${B}`, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, color: B, fontFamily: "DM Sans,sans-serif", fontWeight: 600 }}>{compareList.length}/2 to compare</span>
            <div style={{ display: "flex", gap: 6, flex: 1 }}>
              {compareList.map((p: Product) => <span key={p.id} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: B, color: "white", fontWeight: 600 }}>{p.brand}</span>)}
            </div>
            {compareList.length === 2 && <button onClick={() => nav("compare")} style={{ fontSize: 11, fontWeight: 700, padding: "5px 10px", borderRadius: 8, background: B, color: "white" }}>Compare →</button>}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <p style={{ color: S, fontSize: 12, fontFamily: "DM Sans,sans-serif", fontWeight: 600 }}>{filtered.length} products{selCat !== "All" ? ` · ${selCat}` : ""}</p>
          <button style={{ display: "flex", alignItems: "center", gap: 4, color: B, fontSize: 12, fontWeight: 700, fontFamily: "DM Sans,sans-serif" }}>Sort <ChevronDown size={12} /></button>
        </div>
        {filtered.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 60 }}>
            <Search size={48} color="#CBD5E1" />
            <p style={{ fontWeight: 700, fontSize: 16, color: N, marginTop: 12 }}>No products found</p>
            <p style={{ color: S, fontSize: 13, fontFamily: "DM Sans,sans-serif" }}>Try a different category or brand</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {filtered.map((p: Product) => (
              <ProductCard key={p.id} product={p} onTap={() => { setSelProd(p); nav("product-detail"); }} onWishlist={toggleWishlist} isWishlisted={wishlist.includes(p.id)} isCompared={!!compareList.find((c: Product) => c.id === p.id)} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

// ─── Product Detail ───────────────────────────────────────────────────────────
export function ProductDetailScreen({ selProd, nav, back, addToCart, wishlist, toggleWishlist, compareList, toggleCompare, setEmiProdPrice, switchTab, cartCount }: any) {
  const p = selProd;
  const [showAr, setShowAr] = useState(false);
  const isWishlisted = wishlist.includes(p.id);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA", position: "relative" }}>
      {/* Hero image */}
      <div style={{ position: "relative", height: 260, background: "#F1F5F9", flexShrink: 0 }}>
        <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => { const m: Record<string,string> = { AC: "1585771724684-38269d6639fd", TV: "1593784991095-a205069470b6", Refrigerator: "1571175443880-49e1d25b2bc5", "Washing Machine": "1558618666-fcd25c85cd64", Fan: "1555041469-a586c61ea9bc" }; (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${m[p.cat] || "1585771724684-38269d6639fd"}?w=700&h=600&fit=crop&auto=format`; }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(15,23,42,0.4) 0%,transparent 35%,rgba(15,23,42,0.1) 100%)" }} />
        <div style={{ position: "absolute", top: SAFE_TOP, left: 16, display: "flex", gap: 8 }}>
          <button onClick={back} style={{ width: 38, height: 38, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)" }}><ArrowLeft size={16} color={N} /></button>
        </div>
        <div style={{ position: "absolute", top: SAFE_TOP, right: 16, display: "flex", gap: 8 }}>
          <button onClick={() => toggleWishlist(p.id)} style={{ width: 38, height: 38, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)" }}><Heart size={14} color={isWishlisted ? R : "#64748B"} fill={isWishlisted ? R : "none"} /></button>
          <button style={{ width: 38, height: 38, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)" }}><Share2 size={14} color={N} /></button>
          <button onClick={() => nav("cart")} style={{ width: 38, height: 38, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", position: "relative" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={N} strokeWidth="2"><path d="M6 6h15l-1.5 9h-12L4 3H2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1.5" fill={N}/><circle cx="18" cy="20" r="1.5" fill={N}/></svg>
            {cartCount > 0 && <span style={{ position: "absolute", top: -3, right: -3, width: 15, height: 15, borderRadius: 8, background: O, color: "white", fontSize: 8, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>}
          </button>
        </div>
        {p.tag && <div style={{ position: "absolute", bottom: 14, left: 14, background: O, color: "white", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 8, fontFamily: "DM Sans,sans-serif" }}>{p.tag}</div>}
        {p.jaipurInstalled > 0 && <div style={{ position: "absolute", bottom: 14, right: 14, background: "rgba(22,163,74,0.92)", padding: "4px 10px", borderRadius: 8, display: "flex", alignItems: "center", gap: 4 }}><Home size={9} color="white" /><span style={{ fontSize: 10, color: "white", fontWeight: 700 }}>{p.jaipurInstalled.toLocaleString()} bought in Jaipur in last 6 months</span></div>}
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Price block */}
        <div style={{ background: W, padding: "16px 16px 14px", borderBottom: "1px solid rgba(15,23,42,0.06)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 10, fontWeight: 800, color: B, fontFamily: "DM Sans,sans-serif", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 }}>{p.brand}</p>
              <h2 style={{ fontWeight: 800, fontSize: 16, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", lineHeight: 1.35 }}>{p.name}</h2>
            </div>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" style={{
              flexShrink: 0, width: 40, height: 40, borderRadius: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg,#25D366,#128C7E)",
              boxShadow: "0 4px 12px rgba(37,211,102,0.35)",
            }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.535 5.858L.057 23.571a.75.75 0 00.918.919l5.82-1.51A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.662-.524-5.174-1.436l-.37-.22-3.834.995.997-3.738-.242-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 8, background: "#FFF7ED" }}>
              <Star size={11} fill="#F59E0B" color="#F59E0B" /><span style={{ fontWeight: 700, fontSize: 12, color: "#92400E" }}>{p.rating}</span>
            </div>
            <span style={{ color: S, fontSize: 12, fontFamily: "DM Sans,sans-serif" }}>{p.reviews.toLocaleString("en-IN")} reviews</span>
            <span style={{ fontWeight: 600, fontSize: 11, color: G }}>● In Stock</span>
          </div>
          {/* EMI — primary price focus */}
          <div style={{ padding: "14px 16px", borderRadius: 16, background: `linear-gradient(135deg,#EFF3FF,#DBEAFE)`, border: `1.5px solid ${B}`, marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <CreditCard size={14} color={B} />
              <span style={{ fontSize: 10, fontWeight: 800, color: B, textTransform: "uppercase", letterSpacing: 0.6, fontFamily: "DM Sans,sans-serif" }}>0% No Cost EMI</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
              <span style={{ fontWeight: 800, fontSize: 30, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>₹{p.emi.toLocaleString("en-IN")}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: S, fontFamily: "DM Sans,sans-serif" }}>/month</span>
            </div>
            <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 10 }}>3 to 24 month plans · No extra cost</p>
            <button onClick={() => { setEmiProdPrice(p.price); nav("emi-calculator"); }} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 12, background: "rgba(255,255,255,0.6)", border: `1px solid ${B}55`, marginBottom: 10 }}>
              <span style={{ fontWeight: 700, fontSize: 12, color: B, fontFamily: "DM Sans,sans-serif" }}>Customize EMI Plan</span>
              <ChevronRight size={14} color={B} />
            </button>
            {/* Full payment / MRP / discount — secondary, where EMI banner used to be */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: `1px solid ${B}33` }}>
              <span style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>Or pay in full</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>{fmt(p.price)}</span>
                <span style={{ fontSize: 11, textDecoration: "line-through", color: "#94A3B8" }}>{fmt(p.orig)}</span>
                <span style={{ fontWeight: 700, fontSize: 11, color: G }}>{disc(p.price, p.orig)}% off</span>
              </div>
            </div>
          </div>
          {/* Installation */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 12, background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
            <Truck size={14} color={G} style={{ flexShrink: 0 }} />
            <Zap size={12} color="#15803D" style={{ flexShrink: 0 }} />
            <p style={{ fontWeight: 600, fontSize: 12, color: "#15803D", margin: 0 }}>Installation: <strong>{p.installIn}</strong> · Free in Jaipur</p>
          </div>
        </div>

        {/* View in Your Room — AR + Compare + Visit Store */}
        <div style={{ background: W, padding: "12px 16px 14px", borderBottom: "1px solid rgba(15,23,42,0.06)", marginTop: 8 }}>
          <button onClick={() => setShowAr(true)} style={{
            width: "100%", display: "flex", alignItems: "center", gap: 12, textAlign: "left",
            padding: "12px 14px", borderRadius: 16, marginBottom: 8,
            background: "linear-gradient(135deg,#0f172a,#1e293b)",
          }}>
            <div style={{ width: 42, height: 42, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.12)", flexShrink: 0 }}>
              <Camera size={19} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: 13, fontFamily: "Plus Jakarta Sans,sans-serif" }}>View in Your Room</p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>Use your camera to see it placed at home</p>
            </div>
            <ChevronRight size={16} color="rgba(255,255,255,0.6)" />
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => { toggleCompare(p); nav("compare"); }} style={{ flex: 1, padding: "11px 4px", borderRadius: 12, fontSize: 12, fontWeight: 700, border: "1.5px solid #E2E8F0", color: N, fontFamily: "DM Sans,sans-serif" }}>Compare</button>
            <button onClick={() => nav("store-visit-1")} style={{ flex: 1, padding: "11px 4px", borderRadius: 12, fontSize: 12, fontWeight: 700, border: "1.5px solid #E2E8F0", color: N, fontFamily: "DM Sans,sans-serif" }}>Visit Store</button>
          </div>
        </div>

        {/* Energy saving */}
        {p.energySaving && (
          <div style={{ background: W, padding: "12px 16px", borderBottom: "1px solid rgba(15,23,42,0.06)", marginTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 14, background: "#ECFDF5", border: "1px solid #A7F3D0" }}>
              <Zap size={26} color="#F97316" />
              <div><p style={{ fontWeight: 700, fontSize: 13, color: "#15803D" }}>{p.energySaving}</p><p style={{ fontSize: 11, color: G, fontFamily: "DM Sans,sans-serif" }}>8 hrs/day in Jaipur summer vs 3-star AC</p></div>
            </div>
          </div>
        )}

        {/* Offers */}
        <div style={{ background: W, padding: "12px 16px 14px", borderBottom: "1px solid rgba(15,23,42,0.06)", marginTop: 8 }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>Available Offers</p>
          {[{ icon: <CreditCard size={14} color={B} />, t: "10% off with HDFC Credit Card · up to ₹2,000" }, { icon: <Gift size={14} color={G} />, t: "Free extended warranty worth ₹2,999" }, { icon: <Truck size={14} color="#7C3AED" />, t: "Free delivery + installation in Jaipur" }].map((o, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
              <div style={{ flexShrink: 0 }}>{o.icon}</div>
              <p style={{ fontSize: 12, color: "#374151", fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>{o.t}</p>
            </div>
          ))}
        </div>

        {/* Specs — always visible, not a tab */}
        <div style={{ background: W, marginTop: 8, borderBottom: "1px solid rgba(15,23,42,0.06)" }}>
          <div style={{ padding: "14px 16px 6px" }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: N }}>Specs</p>
          </div>
          <div style={{ padding: "6px 16px 14px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {(p.specs || []).map((s: {l:string;v:string}, i: number) => (
                <div key={i} style={{ padding: "10px 12px", borderRadius: 12, background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                  <p style={{ color: S, fontSize: 10, fontFamily: "DM Sans,sans-serif" }}>{s.l}</p>
                  <p style={{ fontWeight: 600, fontSize: 12, color: N, marginTop: 2 }}>{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges — free installation, delivery, warranty, returns */}
        <div style={{ marginTop: 8 }}><TrustBadges /></div>

        {/* Why Buy — always visible, not a tab */}
        <div style={{ background: W, marginTop: 8, borderBottom: "1px solid rgba(15,23,42,0.06)", padding: "14px 16px 16px" }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>Why Buy</p>
          <div>{(p.highlights || []).map((h: string, i: number) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: "#D1FAE5", flexShrink: 0, marginTop: 1 }}><Check size={9} color={G} /></div>
              <p style={{ fontSize: 13, color: "#374151", fontFamily: "DM Sans,sans-serif", lineHeight: 1.55 }}>{h}</p>
            </div>
          ))}</div>
        </div>

        {/* Reviews */}
        <div style={{ background: W, padding: "12px 16px 14px", marginTop: 8 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: N }}>Ratings & Reviews</p>
            <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 8, background: "#FFF7ED" }}>
              <Star size={11} fill="#F59E0B" color="#F59E0B" /><span style={{ fontWeight: 700, fontSize: 12, color: "#92400E" }}>{p.rating}</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, padding: "10px 12px", borderRadius: 12, background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <span style={{ fontWeight: 800, fontSize: 26, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>{p.rating}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill={i < Math.round(p.rating) ? "#F59E0B" : "none"} color="#F59E0B" />
                ))}
              </div>
              <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>{p.reviews.toLocaleString("en-IN")} verified ratings</p>
            </div>
          </div>
          {[
            { name: "Anita S.", rating: 5, text: "Great purchase, installation was quick and the team explained everything clearly." },
            { name: "Rohit K.", rating: 4, text: "Works well, exactly as described. Delivery to Jaipur was on time." },
            { name: "Priya M.", rating: 5, text: "Value for money, would recommend to anyone looking in this category." },
          ].map((r, i) => (
            <div key={i} style={{ paddingTop: 12, marginTop: 12, borderTop: i > 0 ? "1px solid #F1F5F9" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontWeight: 700, fontSize: 12, color: N, fontFamily: "DM Sans,sans-serif" }}>{r.name}</span>
                <div style={{ display: "flex", gap: 1 }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={10} fill={j < r.rating ? "#F59E0B" : "none"} color="#F59E0B" />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 12, color: "#374151", fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>{r.text}</p>
            </div>
          ))}
          <button style={{ width: "100%", marginTop: 14, padding: "10px 0", borderRadius: 12, fontSize: 12, fontWeight: 700, border: "1.5px solid #E2E8F0", color: B, fontFamily: "DM Sans,sans-serif" }}>See All Reviews</button>
        </div>
        <div style={{ height: 96 }} />
      </div>

      {/* Sticky bottom action bar — always visible, doesn't scroll away */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        background: W, padding: "10px 16px calc(env(safe-area-inset-bottom,0px) + 12px)",
        borderTop: "1px solid rgba(15,23,42,0.08)",
        boxShadow: "0 -8px 24px rgba(15,23,42,0.08)",
        display: "flex", gap: 10, zIndex: 30,
      }}>
        <button onClick={() => addToCart(p)} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, border: `2px solid ${B}`, color: B, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Add to Cart</button>
        <button onClick={() => { addToCart(p); nav("checkout-address"); }} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, color: "white", background: `linear-gradient(135deg,${B},#2563EB)`, boxShadow: "0 6px 20px rgba(26,71,204,0.3)", fontFamily: "Plus Jakarta Sans,sans-serif" }}>Buy Now</button>
      </div>

      {/* AR "View in Your Room" overlay */}
      {showAr && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 200,
          background: "#0B0F1A", display: "flex", flexDirection: "column",
        }}>
          <div style={{ position: "relative", flex: 1, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Simulated camera viewfinder */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(160deg,#1e293b 0%,#0f172a 60%,#1e293b 100%)",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }} />
            {/* Product placed preview */}
            <div style={{ position: "relative", width: 170, height: 170, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", border: "2px solid rgba(255,255,255,0.15)" }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&auto=format"; }} />
            </div>
            {/* Top bar */}
            <div style={{ position: "absolute", top: SAFE_TOP, left: 16, right: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button onClick={() => setShowAr(false)} style={{ width: 38, height: 38, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.15)" }}>
                <X size={16} color="white" />
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 20, background: "rgba(255,255,255,0.15)" }}>
                <SparklesIcon size={12} color="white" />
                <span style={{ color: "white", fontSize: 11, fontWeight: 700, fontFamily: "DM Sans,sans-serif" }}>AR Preview</span>
              </div>
            </div>
            {/* Hint */}
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, padding: "10px 14px", borderRadius: 14, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
              <p style={{ color: "white", fontSize: 11, fontFamily: "DM Sans,sans-serif", textAlign: "center" }}>Move your phone to scan the room · Tap to place the {p.name.split(" ")[0]}</p>
            </div>
          </div>

          {/* Fit & placement panel */}
          <div style={{ background: W, padding: "16px 16px calc(env(safe-area-inset-bottom,0px) + 16px)", borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
            <p style={{ fontWeight: 800, fontSize: 14, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", marginBottom: 8 }}>Fits well in this spot ✓</p>
            <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5, marginBottom: 12 }}>
              Based on the scanned space, this {p.cat.toLowerCase()} should fit comfortably here with clearance on all sides.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
              {[
                "Recommended spot: against the wall, away from direct sunlight",
                "Leave 15cm gap on the back for ventilation",
                "If it doesn't fit here, try a corner placement for better airflow",
              ].map((tip, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <div style={{ width: 16, height: 16, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#D1FAE5", flexShrink: 0, marginTop: 1 }}><Check size={9} color={G} /></div>
                  <p style={{ fontSize: 12, color: "#374151", fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>{tip}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowAr(false)} style={{ flex: 1, padding: "13px 0", borderRadius: 14, fontWeight: 700, fontSize: 13, border: "1.5px solid #E2E8F0", color: N, fontFamily: "DM Sans,sans-serif" }}>Close</button>
              <button onClick={() => { setShowAr(false); addToCart(p); nav("cart"); }} style={{ flex: 1, padding: "13px 0", borderRadius: 14, fontWeight: 700, fontSize: 13, color: "white", background: `linear-gradient(135deg,${B},#2563EB)`, fontFamily: "DM Sans,sans-serif" }}>Looks Good, Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Compare ──────────────────────────────────────────────────────────────────
export function CompareScreen({ compareList, toggleCompare, back, nav, addToCart, scrollRef, switchTab, activeTab, cartCount }: any) {
  const hasBoth = compareList.length >= 2;
  const pA = compareList[0] || PRODUCTS[0];
  const pB = compareList[1] || null;

  // Suggest products from same category as pA to pick as second
  const suggestions = PRODUCTS.filter(p => p.cat === pA.cat && p.id !== pA.id).slice(0, 6);

  if (!hasBoth) {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
        <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Compare Products" onBack={back} /></div>
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
          {/* Selected product */}
          <p style={{ fontWeight: 700, fontSize: 13, color: N, marginBottom: 10 }}>Selected</p>
          <div style={{ background: W, borderRadius: 16, padding: "12px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12, border: `1.5px solid ${B}` }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
              <img src={pA.img} alt={pA.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=100&h=100&fit=crop"; }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 10, fontWeight: 800, color: B, textTransform: "uppercase" }}>{pA.brand}</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: N, lineHeight: 1.3 }}>{pA.name}</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: N, marginTop: 2 }}>{fmt(pA.price)}</p>
            </div>
          </div>

          {/* Pick second */}
          <p style={{ fontWeight: 700, fontSize: 13, color: N, marginBottom: 4 }}>Pick a product to compare with</p>
          <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 12 }}>Showing similar {pA.cat}s</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {suggestions.map(p => (
              <button key={p.id} onClick={() => toggleCompare(p)} style={{ background: W, borderRadius: 14, padding: "12px", display: "flex", alignItems: "center", gap: 12, textAlign: "left", border: "1.5px solid #E2E8F0", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
                  <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=100&h=100&fit=crop"; }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: B, textTransform: "uppercase" }}>{p.brand}</p>
                  <p style={{ fontSize: 12, fontWeight: 600, color: N, lineHeight: 1.3 }}>{p.name}</p>
                  <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{fmt(p.price)} · EMI ₹{p.emi.toLocaleString()}/mo</p>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#EFF3FF", flexShrink: 0 }}>
                  <ChevronRight size={14} color={B} />
                </div>
              </button>
            ))}
          </div>
        </div>
        <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
      </div>
    );
  }

  const rows = [
    { l: "Price", vals: [fmt(pA.price), fmt(pB.price)], winner: pA.price < pB.price ? 0 : 1 },
    { l: "EMI/month", vals: [`₹${pA.emi.toLocaleString()}`, `₹${pB.emi.toLocaleString()}`], winner: pA.emi < pB.emi ? 0 : 1 },
    { l: "Discount", vals: [`${disc(pA.price,pA.orig)}%`, `${disc(pB.price,pB.orig)}%`], winner: disc(pA.price,pA.orig) > disc(pB.price,pB.orig) ? 0 : 1 },
    { l: "Rating", vals: [`${pA.rating} ★`, `${pB.rating} ★`], winner: pA.rating > pB.rating ? 0 : 1 },
    { l: "Reviews", vals: [pA.reviews.toLocaleString(), pB.reviews.toLocaleString()], winner: pA.reviews > pB.reviews ? 0 : 1 },
    { l: "Installation", vals: [pA.installIn, pB.installIn], winner: -1 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Compare Products" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[pA, pB].map((p: Product) => (
            <div key={p.id} style={{ background: W, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 10px rgba(15,23,42,0.07)" }}>
              <div style={{ height: 90, background: "#F8FAFC" }}><img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=200&fit=crop`; }} /></div>
              <div style={{ padding: "8px 10px" }}>
                <p style={{ fontSize: 9, fontWeight: 800, color: B, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.brand}</p>
                <p style={{ fontSize: 11, fontWeight: 600, color: N, lineHeight: 1.3, marginTop: 2 }}>{p.name}</p>
                <p style={{ fontSize: 13, fontWeight: 800, color: N, marginTop: 4 }}>{fmt(p.price)}</p>
              </div>
            </div>
          ))}
        </div>
        {rows.map((row, i) => (
          <div key={i} style={{ background: W, borderRadius: 14, padding: "10px 12px", marginBottom: 8, display: "flex", alignItems: "center", boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: S, width: 80, flexShrink: 0, fontFamily: "DM Sans,sans-serif" }}>{row.l}</p>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {row.vals.map((v, vi) => (
                <div key={vi} style={{ textAlign: "center", padding: "6px 4px", borderRadius: 10, background: row.winner === vi ? "#EFF3FF" : "#F8FAFC", border: row.winner === vi ? `1px solid ${B}` : "none" }}>
                  <p style={{ fontWeight: 700, fontSize: 12, color: row.winner === vi ? B : N, fontFamily: "DM Sans,sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>{row.winner === vi && <Check size={10} color={B} />}{v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
          {[pA, pB].map((p: Product) => (
            <button key={p.id} onClick={() => { addToCart(p); nav("cart"); }} style={{ padding: "13px 8px", borderRadius: 14, color: "white", fontWeight: 700, fontSize: 12, background: `linear-gradient(135deg,${B},#2563EB)` }}>Add {p.brand}</button>
          ))}
        </div>
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

// ─── Filters ──────────────────────────────────────────────────────────────────
export function FiltersScreen({ back, selCat, setSelCat, selBrand, setSelBrand, scrollRef }: any) {
  const [sort, setSort] = useState("relevance");
  const [price, setPrice] = useState("all");
  const [rating, setRating] = useState("all");
  const Pill = ({ val, set, cur, label }: any) => (
    <button onClick={() => set(val)} style={{ padding: "7px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: cur === val ? B : W, color: cur === val ? W : N, border: `1.5px solid ${cur === val ? B : "#E2E8F0"}`, fontFamily: "DM Sans,sans-serif" }}>{label}</button>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
          <button onClick={back} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><ArrowLeft size={16} color={N} /></button>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 15, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Filters & Sort</span>
          <button onClick={() => { setSort("relevance"); setPrice("all"); setRating("all"); setSelBrand("All"); }} style={{ fontSize: 12, fontWeight: 700, color: R, fontFamily: "DM Sans,sans-serif" }}>Reset All</button>
        </div>
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px" }}>
        {[
          { label: "Sort By", opts: [["relevance","Relevance"],["price-asc","Price: Low to High"],["price-desc","Price: High to Low"],["rating","Highest Rated"]], val: sort, set: setSort },
          { label: "Price Range", opts: [["all","All"],["under-20k","Under ₹20K"],["20k-50k","₹20K–₹50K"],["above-50k","Above ₹50K"]], val: price, set: setPrice },
          { label: "Rating", opts: [["all","All Ratings"],["4+","4★ & above"],["3+","3★ & above"]], val: rating, set: setRating },
        ].map(sec => (
          <div key={sec.label} style={{ marginBottom: 20 }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>{sec.label}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {sec.opts.map(([v,l]) => <Pill key={v} val={v} set={sec.set} cur={sec.val} label={l} />)}
            </div>
          </div>
        ))}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>Brand</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {BRANDS.map(b => <Pill key={b} val={b} set={setSelBrand} cur={selBrand} label={b} />)}
          </div>
        </div>
      </div>
      <div style={{ background: W, borderTop: "1px solid rgba(15,23,42,0.07)", padding: "12px 16px" }}>
        <PrimaryButton label="Apply Filters" onClick={back} />
      </div>
    </div>
  );
}

// ─── Offers ───────────────────────────────────────────────────────────────────
export function OffersScreen({ nav, back, scrollRef, switchTab, activeTab, cartCount }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Offers & Deals" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        {OFFERS.map(o => (
          <button key={o.id} onClick={() => nav("category")} style={{ display: "block", width: "100%", borderRadius: 20, overflow: "hidden", marginBottom: 14, boxShadow: "0 4px 20px rgba(15,23,42,0.1)" }}>
            <div style={{ position: "relative", height: 130 }}>
              <img src={o.img} alt={o.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&h=300&fit=crop"; }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(100deg,${o.color}F5 30%,${o.color}77 65%,transparent)` }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 18px" }}>
                <p style={{ fontWeight: 800, fontSize: 15, color: "white", lineHeight: 1.3, marginBottom: 4, fontFamily: "Plus Jakarta Sans,sans-serif" }}>{o.title}</p>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 11, fontFamily: "DM Sans,sans-serif" }}>{o.sub}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 10, padding: "5px 12px", borderRadius: 8, background: "rgba(255,255,255,0.22)", alignSelf: "flex-start" }}>
                  <span style={{ color: "white", fontWeight: 700, fontSize: 11 }}>Shop Now</span><ArrowRight size={10} color="white" />
                </div>
              </div>
            </div>
          </button>
        ))}
        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>Bank Offers</p>
        {[{ b: "HDFC Bank", o: "10% instant discount up to ₹2,000 on Credit Cards", code: "HDFC10" }, { b: "SBI Card", o: "₹1,000 cashback on purchases above ₹30,000", code: "SBI1K" }, { b: "ICICI Bank", o: "No Cost EMI on all Credit Cards · 3–24 months", code: "ICIEMI" }].map(bk => (
          <div key={bk.b} style={{ background: W, borderRadius: 16, padding: "14px 14px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 1px 6px rgba(15,23,42,0.06)" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: L, flexShrink: 0 }}><Building2 size={20} color={B} /></div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: N }}>{bk.b}</p>
              <p style={{ color: S, fontSize: 11, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{bk.o}</p>
              <p style={{ fontWeight: 700, fontSize: 11, color: B, marginTop: 3 }}>Code: {bk.code}</p>
            </div>
          </div>
        ))}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

// ─── Search ───────────────────────────────────────────────────────────────────
export function SearchScreen({ searchQ, setSearchQ, nav, back, wishlist, toggleWishlist, setSelProd, scrollRef, switchTab, activeTab, cartCount }: any) {
  const filtered = PRODUCTS.filter(p => !searchQ || p.name.toLowerCase().includes(searchQ.toLowerCase()) || p.brand.toLowerCase().includes(searchQ.toLowerCase()) || p.cat.toLowerCase().includes(searchQ.toLowerCase()));
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px 12px" }}>
          <button onClick={back} style={{ flexShrink: 0 }}><ArrowLeft size={20} color={N} /></button>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 14, background: "#F1F5F9", border: "1.5px solid #E2E8F0" }}>
            <Search size={14} color="#94A3B8" />
            <input autoFocus value={searchQ} onChange={e => setSearchQ(e.target.value)} placeholder="Search ACs, TVs, Fridges..." style={{ flex: 1, fontSize: 13, color: N, background: "transparent", outline: "none" }} />
            {searchQ && <button onClick={() => setSearchQ("")}><X size={14} color="#94A3B8" /></button>}
          </div>
          <Mic size={18} color={B} />
        </div>
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        {!searchQ ? (
          <>
            <p style={{ fontWeight: 700, fontSize: 11, color: S, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.8, fontFamily: "DM Sans,sans-serif" }}>Popular Searches</p>
            {["Best AC for Jaipur summer", "Samsung 55 inch TV", "0% EMI washing machine", "Frost free fridge under ₹30,000", "BLDC ceiling fan"].map(s => (
              <button key={s} onClick={() => setSearchQ(s)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid rgba(15,23,42,0.06)", textAlign: "left" }}>
                <Search size={13} color="#CBD5E1" /><span style={{ fontSize: 13, color: N, fontFamily: "DM Sans,sans-serif" }}>{s}</span>
              </button>
            ))}
            <p style={{ fontWeight: 700, fontSize: 14, color: N, margin: "16px 0 10px" }}>Recently Viewed</p>
            {PRODUCTS.slice(0, 3).map(p => (
              <button key={p.id} onClick={() => { setSelProd(p); nav("product-detail"); }} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 14, background: W, marginBottom: 8, textAlign: "left", boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: L }}><img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div style={{ flex: 1 }}><p style={{ fontWeight: 600, fontSize: 12, color: N }}>{p.name}</p><p style={{ fontWeight: 700, fontSize: 13, color: B, marginTop: 2 }}>{fmt(p.price)}</p></div>
                <ChevronRight size={14} color="#CBD5E1" />
              </button>
            ))}
          </>
        ) : filtered.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 60 }}>
            <Search size={48} color="#CBD5E1" />
            <p style={{ fontWeight: 700, fontSize: 16, color: N, marginTop: 12 }}>No results for "{searchQ}"</p>
            <p style={{ color: S, fontSize: 13, fontFamily: "DM Sans,sans-serif" }}>Try "AC", "TV", "Samsung"</p>
          </div>
        ) : (
          <>
            <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 10 }}>{filtered.length} results for "<strong style={{ color: N }}>{searchQ}</strong>"</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {filtered.map(p => <ProductCard key={p.id} product={p} onTap={() => { setSelProd(p); nav("product-detail"); }} onWishlist={toggleWishlist} isWishlisted={wishlist.includes(p.id)} />)}
            </div>
          </>
        )}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}
