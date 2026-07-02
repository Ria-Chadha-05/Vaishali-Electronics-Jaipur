import { ArrowLeft, Star, Heart, CreditCard, Check, ChevronRight, Home, Grid, Sparkles, Headphones, User, ShoppingCart, Snowflake, Tv, Refrigerator, WashingMachine, Fan, Wrench, Truck, Shield, RotateCcw } from "lucide-react";
import { COLORS, fmt, disc } from "../../data/store";
import type { Product } from "../../data/store";

const CATEGORY_ICONS: Record<string, any> = { Snowflake, Tv, Refrigerator, WashingMachine, Fan };

export function CategoryIcon({ icon, size = 24, color }: { icon: string; size?: number; color: string }) {
  const name = String(icon ?? "");
  if (name === "Tv") return <Tv size={size} color={color} strokeWidth={1.8} />;
  if (name === "Refrigerator") return <Refrigerator size={size} color={color} strokeWidth={1.8} />;
  if (name === "WashingMachine") return <WashingMachine size={size} color={color} strokeWidth={1.8} />;
  if (name === "Fan") return <Fan size={size} color={color} strokeWidth={1.8} />;
  return <Snowflake size={size} color={color} strokeWidth={1.8} />;
}

const B = "#1A47CC", O = "#F97316", G = "#16A34A", N = "#0F172A", S = "#64748B", W = "#FFFFFF", L = "#F1F5F9";

// ── Design tokens ────────────────────────────────────────────────────────────
export const T = {
  // Shadows
  cardShadow: "0 1px 3px rgba(15,23,42,0.08), 0 4px 16px rgba(15,23,42,0.06)",
  elevatedShadow: "0 4px 24px rgba(15,23,42,0.1), 0 1px 4px rgba(15,23,42,0.06)",
  primaryShadow: "0 8px 24px rgba(26,71,204,0.28)",
  greenShadow: "0 8px 24px rgba(22,163,74,0.28)",
  // Radii
  card: 20,
  pill: 100,
  btn: 16,
};

// ── Safe area top (accounts for Dynamic Island) ──────────────────────────────
const SAFE_TOP = 58; // px — clears the 34px island + padding

// ── Status Bar ───────────────────────────────────────────────────────────────
export function StatusBar({ light = false }: { light?: boolean }) {
  const c = light ? "rgba(255,255,255,0.85)" : N;
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      paddingTop: SAFE_TOP, paddingLeft: 24, paddingRight: 24, paddingBottom: 6,
      fontSize: 11, fontWeight: 700, color: c, fontFamily: "DM Sans,sans-serif",
      flexShrink: 0,
    }}>
      <span>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <rect x="0" y="4" width="3" height="7" rx="1" fill={c} opacity="0.4"/>
          <rect x="4" y="2.5" width="3" height="8.5" rx="1" fill={c} opacity="0.6"/>
          <rect x="8" y="1" width="3" height="10" rx="1" fill={c} opacity="0.8"/>
          <rect x="12" y="0" width="3" height="11" rx="1" fill={c}/>
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M8 2.2C10.6 2.2 12.9 3.3 14.5 5.1L16 3.4C14 1.3 11.1 0 8 0C4.9 0 2 1.3 0 3.4L1.5 5.1C3.1 3.3 5.4 2.2 8 2.2Z" fill={c} opacity="0.4"/>
          <path d="M8 5C9.9 5 11.6 5.8 12.8 7.1L14.3 5.4C12.7 3.8 10.5 2.8 8 2.8C5.5 2.8 3.3 3.8 1.7 5.4L3.2 7.1C4.4 5.8 6.1 5 8 5Z" fill={c} opacity="0.7"/>
          <circle cx="8" cy="9.5" r="1.5" fill={c}/>
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div style={{ width: 22, height: 11, borderRadius: 3, border: `1.5px solid ${c}`, padding: 1.5, display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, height: "100%", borderRadius: 1.5, background: c }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Back Header ──────────────────────────────────────────────────────────────
export function Header({ title, onBack, right }: { title: string; onBack: () => void; right?: React.ReactNode }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "12px 16px", background: W,
        cursor: "pointer",
      borderBottom: "1px solid rgba(15,23,42,0.07)",
      flexShrink: 0,
    }}>
      <button
        onClick={onBack}
        style={{
          width: 36, height: 36, borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "#F1F5F9", flexShrink: 0,
          transition: "opacity 0.15s",
        }}
        onPointerDown={e => (e.currentTarget.style.opacity = "0.6")}
        onPointerUp={e => (e.currentTarget.style.opacity = "1")}
      >
        <ArrowLeft size={16} color={N} />
      </button>
      <span style={{ flex: 1, fontWeight: 700, fontSize: 15, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
      {right}
    </div>
  );
}

// ── Bottom Nav ───────────────────────────────────────────────────────────────
export function BottomNav({ activeTab, switchTab, cartCount }: { activeTab: string; switchTab: (tab: any) => void; cartCount: number }) {
  const tabs = [
    { key: "home", Icon: Home, label: "Home" },
    { key: "shop", Icon: Grid, label: "Shop" },
    { key: "ai", Icon: Sparkles, label: "AI" },
    { key: "support", Icon: Headphones, label: "Support" },
    { key: "profile", Icon: User, label: "Profile" },
  ];
  return (
    <div style={{
      display: "flex", alignItems: "stretch",
      borderTop: "1px solid rgba(15,23,42,0.08)",
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(20px)",
      paddingBottom: 8,
      flexShrink: 0,
    }}>
      {tabs.map(({ key, Icon, label }) => {
        const on = activeTab === key;
        return (
          <button
            key={key}
            onClick={() => switchTab(key as any)}
            style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: 3, paddingTop: 10, paddingBottom: 2,
              position: "relative", transition: "opacity 0.15s",
            }}
            onPointerDown={e => (e.currentTarget.style.opacity = "0.6")}
            onPointerUp={e => (e.currentTarget.style.opacity = "1")}
          >
            <div style={{ position: "relative" }}>
              <div style={{
                width: on ? 40 : 32, height: 28, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: on ? "#EFF3FF" : "transparent",
                transition: "all 0.2s",
              }}>
                <Icon size={19} color={on ? B : "#9CA3AF"} strokeWidth={on ? 2.5 : 1.8} />
              </div>
              {key === "shop" && cartCount > 0 && (
                <span style={{
                  position: "absolute", top: -4, right: -4,
                  width: 16, height: 16, borderRadius: 8,
                  background: O, color: "white", fontSize: 8, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "2px solid white",
                }}>{cartCount}</span>
              )}
            </div>
            <span style={{
              fontSize: 10, fontWeight: on ? 700 : 400,
              color: on ? B : "#9CA3AF",
              fontFamily: "DM Sans,sans-serif", letterSpacing: 0.1,
              transition: "all 0.2s",
            }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Product Card ─────────────────────────────────────────────────────────────
export function ProductCard({ product: p, onTap, onWishlist, isWishlisted, isCompared, onAddToCart }: {
  product: Product; onTap: () => void; onWishlist: (id: number) => void;
  isWishlisted: boolean; isCompared?: boolean; onAddToCart?: (p: Product) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onTap}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onTap();
        }
      }}
      style={{
        width: "100%", textAlign: "left", borderRadius: T.card,
        overflow: "hidden", background: W,
        boxShadow: isCompared ? `0 0 0 2px ${B}, ${T.cardShadow}` : T.cardShadow,
        border: `1px solid ${isCompared ? B : "rgba(15,23,42,0.06)"}`,
        transition: "transform 0.12s, box-shadow 0.12s",
      }}
      onPointerDown={e => {
        e.currentTarget.style.transform = "scale(0.975)";
        e.currentTarget.style.boxShadow = "0 1px 4px rgba(15,23,42,0.08)";
      }}
      onPointerUp={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = T.cardShadow;
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 140, background: "#F8FAFC" }}>
        <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => {
            const imgs: Record<string, string> = {
              "AC": "photo-1585771724684-38269d6639fd", "TV": "photo-1593784991095-a205069470b6",
              "Refrigerator": "photo-1571175443880-49e1d25b2bc5", "Washing Machine": "photo-1558618666-fcd25c85cd64",
              "Fan": "photo-1555041469-a586c61ea9bc",
            };
            const key = imgs[p.cat] || "photo-1585771724684-38269d6639fd";
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/${key}?w=400&h=400&fit=crop&auto=format`;
          }}
        />
        {p.tag && (
          <div style={{
            position: "absolute", top: 8, left: 8,
            background: O, color: "white",
            fontSize: 9, fontWeight: 800, padding: "3px 8px", borderRadius: 6,
            fontFamily: "DM Sans,sans-serif", letterSpacing: 0.3,
          }}>{p.tag}</div>
        )}
        <button
          onClick={e => { e.stopPropagation(); onWishlist(p.id); }}
          style={{
            position: "absolute", top: 8, right: 8,
            width: 28, height: 28, borderRadius: 8,
            background: "rgba(255,255,255,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
          }}
        >
          <Heart size={13} color={isWishlisted ? "#EF4444" : "#94A3B8"} fill={isWishlisted ? "#EF4444" : "none"} />
        </button>
        {p.localStock && (
          <div style={{
            position: "absolute", bottom: 8, left: 8,
            display: "flex", alignItems: "center", gap: 4,
            padding: "3px 8px", borderRadius: 6,
            background: "rgba(22,163,74,0.92)",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "white" }} />
            <span style={{ color: "white", fontSize: 9, fontWeight: 700, fontFamily: "DM Sans,sans-serif" }}>In Stock</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "10px 12px 12px" }}>
        <p style={{ fontSize: 9, fontWeight: 800, color: B, fontFamily: "DM Sans,sans-serif", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 3 }}>{p.brand}</p>
        <p style={{ fontSize: 11, fontWeight: 600, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", lineHeight: 1.4, marginBottom: 6, minHeight: 30 }}>{p.name}</p>

        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
          <Star size={9} fill="#F59E0B" color="#F59E0B" />
          <span style={{ fontSize: 11, fontWeight: 700, color: N, fontFamily: "DM Sans,sans-serif" }}>{p.rating}</span>
          <span style={{ fontSize: 10, color: "#CBD5E1" }}>·</span>
          <span style={{ fontSize: 10, color: S, fontFamily: "DM Sans,sans-serif" }}>{p.reviews.toLocaleString("en-IN")}</span>
        </div>

        {/* Price — EMI highlighted */}
        <div style={{
          display: "flex", alignItems: "baseline", gap: 4, marginBottom: 2,
        }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: B, fontFamily: "Plus Jakarta Sans,sans-serif" }}>₹{p.emi.toLocaleString("en-IN")}</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: B, fontFamily: "DM Sans,sans-serif" }}>/mo</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8 }}>
          <CreditCard size={9} color={B} />
          <span style={{ fontSize: 9, fontWeight: 700, color: B, fontFamily: "DM Sans,sans-serif" }}>0% No Cost EMI</span>
        </div>

        {/* Full price — secondary */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: N, fontFamily: "DM Sans,sans-serif" }}>{fmt(p.price)}</span>
            <span style={{ fontSize: 10, textDecoration: "line-through", color: "#64748B", fontFamily: "DM Sans,sans-serif" }}>{fmt(p.orig)}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: "DM Sans,sans-serif" }}>{disc(p.price, p.orig)}% off</span>
          </div>
          {onAddToCart && (
            <button
              onClick={e => { e.stopPropagation(); onAddToCart(p); }}
              aria-label="Add to cart"
              style={{
                flexShrink: 0, width: 24, height: 24, borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: B, color: "white", fontSize: 16, fontWeight: 700,
                lineHeight: 1, boxShadow: "0 2px 6px rgba(26,71,204,0.35)",
              }}
            >+</button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Trust Badges ─────────────────────────────────────────────────────────────
export function TrustBadges() {
  const items = [
    { icon: <Wrench size={16} color={B} />, t: "Free Installation", s: "Confirmed before delivery" },
    { icon: <Truck size={16} color={B} />, t: "Free Delivery", s: "Same/next day in Jaipur" },
    { icon: <Shield size={16} color={B} />, t: "Local Warranty", s: "We handle claims for you" },
    { icon: <RotateCcw size={16} color={B} />, t: "10-Day Returns", s: "No questions asked" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, padding: "12px 16px", background: W }}>
      {items.map((x, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 10px", borderRadius: 12, background: "#F8FAFC" }}>
          <div style={{ flexShrink: 0, marginTop: 1 }}>{x.icon}</div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 10, color: N, fontFamily: "DM Sans,sans-serif" }}>{x.t}</p>
            <p style={{ fontSize: 9, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 1 }}>{x.s}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── WhatsApp CTA ─────────────────────────────────────────────────────────────
export function WhatsAppCTA() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 16px", borderRadius: 16,
      background: "linear-gradient(135deg,#25D366,#128C7E)",
      boxShadow: "0 4px 16px rgba(37,211,102,0.22)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.535 5.858L.057 23.571a.75.75 0 00.918.919l5.82-1.51A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.662-.524-5.174-1.436l-.37-.22-3.834.995.997-3.738-.242-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        <div>
          <p style={{ fontWeight: 700, color: "white", fontSize: 12, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Chat on WhatsApp</p>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 10, fontFamily: "DM Sans,sans-serif", marginTop: 1 }}>Instant expert advice · No wait</p>
        </div>
      </div>
      <div style={{
        padding: "7px 14px", borderRadius: 10,
        background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)",
      }}>
        <span style={{ color: "white", fontSize: 11, fontWeight: 700, fontFamily: "DM Sans,sans-serif" }}>Chat Now</span>
      </div>
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────
export function SectionHeader({ title, onSeeAll }: { title: string; onSeeAll?: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <p style={{ fontWeight: 700, fontSize: 14, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>{title}</p>
      {onSeeAll && (
        <button onClick={onSeeAll} style={{ fontSize: 12, fontWeight: 700, color: B, fontFamily: "DM Sans,sans-serif" }}>See All</button>
      )}
    </div>
  );
}

// ── Primary Button ────────────────────────────────────────────────────────────
export function PrimaryButton({ label, onClick, icon, color }: { label: string; onClick: () => void; icon?: React.ReactNode; color?: string }) {
  const bg = color || `linear-gradient(135deg,${B},#2563EB)`;
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", padding: "15px 20px",
        borderRadius: T.btn, color: "white", fontWeight: 700, fontSize: 14,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        background: bg, boxShadow: T.primaryShadow,
        fontFamily: "Plus Jakarta Sans,sans-serif",
        transition: "transform 0.12s, opacity 0.12s",
      }}
      onPointerDown={e => { e.currentTarget.style.transform = "scale(0.98)"; e.currentTarget.style.opacity = "0.9"; }}
      onPointerUp={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = "1"; }}
    >
      {icon}{label}
    </button>
  );
}

// ── Step Bar (checkout) ───────────────────────────────────────────────────────
export function StepBar({ step }: { step: number }) {
  const steps = ["Address", "Payment", "Done"];
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px 16px 12px", gap: 4 }}>
      {steps.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 11,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            background: i < step ? G : i === step ? B : "#E2E8F0",
          }}>
            {i < step
              ? <Check size={11} color="white" />
              : <span style={{ fontSize: 10, color: i === step ? "white" : "#94A3B8", fontWeight: 800 }}>{i + 1}</span>
            }
          </div>
          <span style={{ fontSize: 10, color: i === step ? N : "#94A3B8", fontWeight: i === step ? 700 : 400, fontFamily: "DM Sans,sans-serif" }}>{s}</span>
          {i < 2 && <div style={{ flex: 1, height: 1, background: i < step ? G : "#E2E8F0", marginLeft: 4 }} />}
        </div>
      ))}
    </div>
  );
}

// ── Visit Step Bar ────────────────────────────────────────────────────────────
export function VisitStepBar({ step }: { step: number }) {
  const steps = ["Category", "Date & Time", "Confirm"];
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px 16px 12px", gap: 4 }}>
      {steps.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 11,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            background: i < step ? G : i === step ? B : "#E2E8F0",
          }}>
            {i < step
              ? <Check size={11} color="white" />
              : <span style={{ fontSize: 9, color: i === step ? "white" : "#94A3B8", fontWeight: 800 }}>{i + 1}</span>
            }
          </div>
          <span style={{ fontSize: 9, color: i === step ? N : "#94A3B8", fontWeight: i === step ? 700 : 400, fontFamily: "DM Sans,sans-serif" }}>{s}</span>
          {i < 2 && <div style={{ flex: 1, height: 1, background: i < step ? G : "#E2E8F0", marginLeft: 4 }} />}
        </div>
      ))}
    </div>
  );
}
