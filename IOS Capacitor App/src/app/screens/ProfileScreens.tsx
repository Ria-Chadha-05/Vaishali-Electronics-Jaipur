import { useState } from "react";
import { ArrowLeft, ChevronRight, Heart, Truck, Wrench, Tag, CheckCircle, Shield, Package, Monitor, MapPin, Bell, Globe, HelpCircle, Star, Award } from "lucide-react";
import { COLORS, fmt, NOTIFICATIONS, PRODUCTS } from "../data/store";
import { Header, BottomNav, StatusBar, ProductCard } from "../components/shared";

const B = "#1A47CC", O = "#F97316", G = "#16A34A", R = "#DC2626", N = "#0F172A", S = "#64748B", W = "#FFFFFF", L = "#F1F5F9";
const SAFE_TOP = 58;

const PROFILE_ICONS: Record<string, any> = { Package, Monitor, MapPin, Heart, Bell, Globe, HelpCircle, Star, Award };
function ProfileMenuIcon({ name }: { name: string }) {
  const Icon = PROFILE_ICONS[name] || Package;
  return <Icon size={18} color="#1A47CC" />;
}

export function ProfileScreen({ nav, back, phone, switchTab, activeTab, cartCount, scrollRef }: any) {
  const menuItems = [
    { icon: "Package", l: "My Orders", a: () => nav("orders-list") },
    { icon: "Monitor", l: "My Products & Warranty", a: () => nav("my-products") },
    { icon: "MapPin", l: "Saved Addresses", a: () => nav("addresses") },
    { icon: "Heart", l: "Wishlist", a: () => nav("wishlist") },
    { icon: "Bell", l: "Notifications", a: () => nav("notifications") },
    { icon: "Globe", l: "Language / भाषा", a: () => nav("language") },
    { icon: "HelpCircle", l: "Help Center", a: () => nav("help-center") },
    { icon: "Star", l: "Rate the App", a: () => {} },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Plus Jakarta Sans,sans-serif" }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(160deg,#0B1F6B,${B})`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: `${SAFE_TOP}px 20px 20px` }}>
          <div style={{ width: 60, height: 60, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 24, background: "rgba(255,255,255,0.2)", color: "white", flexShrink: 0 }}>R</div>
          <div>
            <p style={{ fontWeight: 800, fontSize: 18, color: "white" }}>Rahul Sharma</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans,sans-serif" }}>+91 {phone || "98765 43210"}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}>
              <Award size={14} color="#D97706" />
              <span style={{ fontSize: 11, fontWeight: 700, color: O, fontFamily: "DM Sans,sans-serif" }}>Gold Member · 1,240 pts</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px", background: "#F5F7FA" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[{ v: "3", l: "Orders" }, { v: "3", l: "Products" }, { v: "1,240", l: "Points" }].map(s => (
            <div key={s.l} style={{ background: W, borderRadius: 16, padding: "12px 8px", textAlign: "center", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
              <p style={{ fontWeight: 800, fontSize: 20, color: B }}>{s.v}</p>
              <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{s.l}</p>
            </div>
          ))}
        </div>

        {menuItems.map((item, i) => (
          <button key={i} onClick={item.a} style={{ width: "100%", background: W, borderRadius: 16, padding: "14px 14px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, textAlign: "left", boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
            <ProfileMenuIcon name={item.icon} />
            <span style={{ flex: 1, fontWeight: 600, fontSize: 14, color: N, fontFamily: "DM Sans,sans-serif" }}>{item.l}</span>
            <ChevronRight size={15} color="#CBD5E1" />
          </button>
        ))}

        <button style={{ width: "100%", padding: "14px 0", borderRadius: 16, marginTop: 4, fontWeight: 700, fontSize: 14, border: `1.5px solid ${R}`, color: R, fontFamily: "DM Sans,sans-serif" }}>
          Sign Out
        </button>
        <div style={{ height: 16 }} />
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function NotificationsScreen({ nav, back, scrollRef, switchTab, activeTab, cartCount, setNotifCount }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 12px", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
          <button onClick={back} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><ArrowLeft size={16} color={N} /></button>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 15, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Notifications</span>
          <button onClick={() => setNotifCount(0)} style={{ fontSize: 12, fontWeight: 700, color: B, fontFamily: "DM Sans,sans-serif" }}>Mark all read</button>
        </div>
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        {NOTIFICATIONS.map((n, i) => (
          <button key={i} style={{ width: "100%", background: W, borderRadius: 18, padding: "14px", marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 12, textAlign: "left", boxShadow: "0 2px 8px rgba(15,23,42,0.06)", border: n.unread ? `1.5px solid ${n.color}22` : "1px solid transparent" }}>
            <div style={{ width: 40, height: 40, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: n.color + "15" }}>
              {n.icon === "Truck" && <Truck size={20} color={n.color} />}
              {n.icon === "Wrench" && <Wrench size={20} color={n.color} />}
              {n.icon === "Tag" && <Tag size={20} color={n.color} />}
              {n.icon === "CheckCircle" && <CheckCircle size={20} color={n.color} />}
              {n.icon === "Shield" && <Shield size={20} color={n.color} />}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: N }}>{n.t}</p>
                {n.unread && <div style={{ width: 8, height: 8, borderRadius: 4, background: n.color, flexShrink: 0, marginTop: 3 }} />}
              </div>
              <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5, marginTop: 3 }}>{n.b}</p>
              <p style={{ fontSize: 11, color: "#94A3B8", fontFamily: "DM Sans,sans-serif", marginTop: 5 }}>{n.tm}</p>
            </div>
          </button>
        ))}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function WishlistScreen({ wishlist, toggleWishlist, setSelProd, nav, back, switchTab, activeTab, cartCount, scrollRef }: any) {
  const wishlisted = PRODUCTS.filter(p => wishlist.includes(p.id));
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title={`Wishlist (${wishlisted.length})`} onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        {wishlisted.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 60 }}>
            <Heart size={52} color="#E2E8F0" />
            <p style={{ fontWeight: 800, fontSize: 18, color: N, marginTop: 14, marginBottom: 8, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Your wishlist is empty</p>
            <p style={{ textAlign: "center", fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 24 }}>Tap the heart on any product to save it here</p>
            <button onClick={() => switchTab("shop")} style={{ padding: "14px 32px", borderRadius: 16, color: "white", fontWeight: 700, fontSize: 14, background: `linear-gradient(135deg,${B},#2563EB)` }}>Browse Products</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {wishlisted.map(p => <ProductCard key={p.id} product={p} onTap={() => { setSelProd(p); nav("product-detail"); }} onWishlist={toggleWishlist} isWishlisted={true} />)}
          </div>
        )}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function AddressesScreen({ back, scrollRef }: any) {
  const addresses = [
    { id: 0, tag: "Home", name: "Rahul Sharma", addr: "B-47, Pratap Nagar, Near Vaishali Circle, Jaipur – 302021", phone: "+91 98765 43210", default: true },
    { id: 1, tag: "Office", name: "Rahul Sharma", addr: "3rd Floor, Sindhuri Complex, Tonk Road, Jaipur – 302015", phone: "+91 98765 43210", default: false },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Saved Addresses" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        {addresses.map(a => (
          <div key={a.id} style={{ background: W, borderRadius: 18, padding: "14px", marginBottom: 12, border: `1px solid ${a.default ? B : "#E2E8F0"}`, boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontWeight: 700, fontSize: 12, color: a.default ? B : S }}>{a.tag}{a.default ? " · Default" : ""}</span>
              <button style={{ fontSize: 12, fontWeight: 700, color: B, fontFamily: "DM Sans,sans-serif" }}>Edit</button>
            </div>
            <p style={{ fontWeight: 600, fontSize: 14, color: N }}>{a.name}</p>
            <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 3, lineHeight: 1.5 }}>{a.addr}</p>
            <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{a.phone}</p>
          </div>
        ))}
        <button style={{ width: "100%", padding: "14px 0", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 600, fontSize: 13, border: "2px dashed #CBD5E1", color: B, fontFamily: "DM Sans,sans-serif" }}>
          + Add New Address
        </button>
      </div>
    </div>
  );
}

export function LanguageScreen({ back, scrollRef }: any) {
  const [sel, setSel] = useState("en");
  const langs = [{ code: "en", name: "English", native: "English" }, { code: "hi", name: "Hindi", native: "हिन्दी" }, { code: "mr", name: "Marathi", native: "मराठी" }, { code: "gu", name: "Gujarati", native: "ગુજરાતી" }];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Language / भाषा" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <p style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 16 }}>Select your preferred language for the app</p>
        {langs.map(l => (
          <button key={l.code} onClick={() => setSel(l.code)} style={{ width: "100%", background: W, borderRadius: 16, padding: "14px", marginBottom: 8, display: "flex", alignItems: "center", gap: 14, textAlign: "left", border: `1.5px solid ${sel === l.code ? B : "#E2E8F0"}` }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 14, color: N }}>{l.name}</p>
              <p style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{l.native}</p>
            </div>
            {sel === l.code && <div style={{ width: 20, height: 20, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: B, flexShrink: 0 }}><span style={{ color: "white", fontSize: 11 }}>✓</span></div>}
          </button>
        ))}
      </div>
    </div>
  );
}

export function HelpCenterScreen({ back, scrollRef }: any) {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How do I track my order?", a: "Go to My Orders in the Support or Profile tab. You'll see real-time status and your technician's contact number for installation." },
    { q: "Is installation really free?", a: "Yes! Installation is always free for all products purchased in Jaipur. Our certified team will call you within 24 hours of delivery to schedule a slot." },
    { q: "How do I raise a warranty claim?", a: "Go to Support → Warranty, select your product, then tap 'Raise Complaint'. We handle the manufacturer claim on your behalf — you don't need to call anyone." },
    { q: "What is an AMC plan?", a: "Annual Maintenance Contract. We visit your home periodically to service all your appliances — free parts and labour depending on the plan tier." },
    { q: "Can I return a product?", a: "Yes — 10-day return policy for all products in original packaging. Our team will pick it up free of charge from your home." },
    { q: "How does 0% EMI work?", a: "The full price is split across 3–24 months with zero interest. You pay the same total amount, just spread out monthly. Available via HDFC, SBI, ICICI and Bajaj." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Help Center" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 12 }}>Frequently Asked Questions</p>
        {faqs.map((f, i) => (
          <button key={i} onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", background: W, borderRadius: 16, marginBottom: 8, textAlign: "left", overflow: "hidden", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 14px" }}>
              <p style={{ fontWeight: 600, fontSize: 13, color: N, flex: 1 }}>{f.q}</p>
              <span style={{ fontSize: 14, marginLeft: 8, display: "inline-block", transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>⌄</span>
            </div>
            {open === i && (
              <div style={{ padding: "0 14px 14px" }}>
                <p style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.6 }}>{f.a}</p>
              </div>
            )}
          </button>
        ))}
        <div style={{ background: W, borderRadius: 18, padding: "16px", marginTop: 8, border: `1.5px solid ${B}` }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 8 }}>Still need help?</p>
          <p style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif" }}>Call us: <strong style={{ color: B }}>+91 141-4001234</strong></p>
          <p style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 4 }}>Email: <strong style={{ color: B }}>support@vaishalielectronics.in</strong></p>
          <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 6 }}>Mon–Sat · 9 AM – 7 PM</p>
        </div>
        <div style={{ height: 16 }} />
      </div>
    </div>
  );
}
