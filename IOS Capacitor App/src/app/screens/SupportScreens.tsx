import { useState } from "react";
import { ArrowLeft, Phone, Wrench, Shield, Check, ChevronRight, Clock, CheckCircle, Camera, Package, Cog, MessageCircle, ClipboardList, Wind, Thermometer, Droplets, Zap, Volume2, Snowflake, ClipboardCheck, Star } from "lucide-react";
import { COLORS, fmt, TICKETS, MY_PRODUCTS } from "../data/store";
import type { Ticket, MyProduct } from "../data/store";
import { Header, BottomNav, StatusBar, WhatsAppCTA, PrimaryButton } from "../components/shared";

const SUPPORT_ICONS: Record<string, any> = { Package, Shield, Wrench, Cog, MessageCircle, ClipboardList, Wind, Thermometer, Droplets, Zap, Volume2, Snowflake, ClipboardCheck };
function SupportIcon({ name, size = 20, color = "#1A47CC" }: { name: string; size?: number; color?: string }) {
  const Icon = SUPPORT_ICONS[name] || Package;
  return <Icon size={size} color={color} strokeWidth={1.8} />;
}

const B = "#1A47CC", O = "#F97316", G = "#16A34A", R = "#DC2626", N = "#0F172A", S = "#64748B", W = "#FFFFFF", L = "#F1F5F9";
const SAFE_TOP = 58;

export function SupportScreen({ nav, switchTab, activeTab, cartCount, selTicket, setSelTicket, scrollRef }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Plus Jakarta Sans,sans-serif" }}>
      <div style={{ background: `linear-gradient(160deg,#0B1F6B,${B})`, flexShrink: 0 }}>
        <div style={{ padding: `${SAFE_TOP}px 16px 20px` }}>
          <p style={{ fontWeight: 800, fontSize: 22, color: "white", marginBottom: 4 }}>Support</p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: "DM Sans,sans-serif" }}>How can we help you today?</p>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px", background: "#F5F7FA" }}>
        {/* Quick Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
          {[
            { icon: "Package", l: "My Products", s: "my-products" },
            { icon: "Shield", l: "Warranty", s: "warranty" },
            { icon: "Wrench", l: "Service", s: "service-requests" },
            { icon: "Cog", l: "Installation", s: "installation" },
            { icon: "MessageCircle", l: "Complaint", s: "raise-complaint" },
            { icon: "ClipboardList", l: "AMC Plans", s: "amc-plans" },
          ].map(a => (
            <button key={a.l} onClick={() => nav(a.s)} style={{ background: W, borderRadius: 18, paddingTop: 16, paddingBottom: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, boxShadow: "0 2px 10px rgba(15,23,42,0.07)" }}>
              <SupportIcon name={a.icon} size={22} color={B} />
              <span style={{ fontSize: 10, fontWeight: 600, color: N, textAlign: "center", fontFamily: "DM Sans,sans-serif" }}>{a.l}</span>
            </button>
          ))}
        </div>

        {/* Recent Tickets */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: N }}>Recent Tickets</p>
            <button onClick={() => nav("ticket-tracking")} style={{ fontSize: 12, fontWeight: 700, color: B, fontFamily: "DM Sans,sans-serif" }}>View All</button>
          </div>
          {TICKETS.map((t: Ticket) => (
            <button key={t.id} onClick={() => { setSelTicket(t); nav("ticket-tracking"); }} style={{ width: "100%", background: W, borderRadius: 18, padding: "13px 14px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, textAlign: "left", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: t.color + "1A" }}>
                <Wrench size={17} color={t.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: 13, color: N, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.prod}</p>
                <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{t.type} · {t.date}</p>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 9px", borderRadius: 20, flexShrink: 0, background: t.color + "1A", color: t.color }}>{t.status}</span>
            </button>
          ))}
        </div>

        {/* Call CTA */}
        <div style={{ background: W, borderRadius: 20, padding: "14px 14px", marginBottom: 12, display: "flex", alignItems: "center", gap: 14, border: "1.5px solid #E2E8F0" }}>
          <div style={{ width: 46, height: 46, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: "#FFF7ED", flexShrink: 0 }}>
            <Phone size={21} color={O} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: N }}>Talk to an Expert</p>
            <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>Mon–Sat · 9 AM – 7 PM</p>
            <p style={{ fontWeight: 800, fontSize: 14, color: O, marginTop: 2 }}>+91 141-4001234</p>
          </div>
          <button style={{ padding: "9px 14px", borderRadius: 12, fontSize: 12, fontWeight: 700, color: "white", background: O, flexShrink: 0 }}>Call</button>
        </div>
        <WhatsAppCTA />
        <div style={{ height: 16 }} />
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function MyProductsScreen({ nav, back, setSelMyProd, scrollRef, switchTab, activeTab, cartCount }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <Header title="My Products" onBack={back} right={<button style={{ fontSize: 12, fontWeight: 700, padding: "7px 12px", borderRadius: 10, background: B, color: "white" }}>+ Register</button>} />
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        {MY_PRODUCTS.map((p: MyProduct) => (
          <button key={p.id} onClick={() => { setSelMyProd(p); nav("warranty"); }} style={{ width: "100%", background: W, borderRadius: 20, padding: "14px", marginBottom: 12, display: "flex", alignItems: "center", gap: 12, textAlign: "left", boxShadow: "0 2px 10px rgba(15,23,42,0.07)" }}>
            <div style={{ width: 60, height: 60, borderRadius: 14, overflow: "hidden", flexShrink: 0, background: L }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop"; }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 9, fontWeight: 800, color: B, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "DM Sans,sans-serif" }}>{p.brand}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: N, lineHeight: 1.35, marginTop: 2 }}>{p.name}</p>
              <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 3 }}>S/N: {p.serial}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: 3, background: p.daysLeft > 0 ? G : R }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: p.daysLeft > 0 ? G : R }}>
                  {p.daysLeft > 0 ? `${p.daysLeft} days warranty left` : "Warranty expired"}
                </span>
              </div>
            </div>
            <ChevronRight size={15} color="#CBD5E1" />
          </button>
        ))}
        <button style={{ width: "100%", padding: "14px 0", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 600, fontSize: 13, border: "2px dashed #CBD5E1", color: S, fontFamily: "DM Sans,sans-serif" }}>
          <span style={{ fontSize: 16 }}>+</span> Register New Product
        </button>
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function WarrantyScreen({ selMyProd, nav, back, scrollRef, switchTab, activeTab, cartCount }: any) {
  const p = selMyProd;
  const ok = p.daysLeft > 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Warranty Status" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <div style={{ background: W, borderRadius: 24, padding: "20px", marginBottom: 14, boxShadow: "0 4px 20px rgba(15,23,42,0.09)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <div style={{ width: 60, height: 60, borderRadius: 14, overflow: "hidden", flexShrink: 0, background: L }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop"; }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 9, fontWeight: 800, color: B, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "DM Sans,sans-serif" }}>{p.brand}</p>
              <p style={{ fontWeight: 700, fontSize: 14, color: N, lineHeight: 1.35 }}>{p.name}</p>
              <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>S/N: {p.serial}</p>
            </div>
          </div>
          <div style={{ padding: "18px", borderRadius: 18, textAlign: "center", background: ok ? "#F0FDF4" : "#FEF2F2", border: `1.5px solid ${ok ? "#BBF7D0" : "#FECACA"}` }}>
            <div style={{ width: 52, height: 52, borderRadius: 26, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", background: ok ? "#D1FAE5" : "#FEE2E2" }}>
              <Shield size={26} color={ok ? G : R} />
            </div>
            <p style={{ fontWeight: 800, fontSize: 18, color: ok ? "#15803D" : R }}>{ok ? "Under Warranty" : "Warranty Expired"}</p>
            <p style={{ fontSize: 12, color: ok ? G : R, fontFamily: "DM Sans,sans-serif", marginTop: 3 }}>
              {ok ? `${p.daysLeft} days remaining · Expires ${p.warranty}` : `Expired on ${p.warranty}`}
            </p>
          </div>
        </div>
        {[{ l: "Purchase Date", v: p.bought }, { l: "Warranty Valid Till", v: p.warranty }, { l: "Type", v: "Manufacturer Warranty" }, { l: "Service Centre", v: "Vaishali Electronics, Jaipur" }, { l: "Model Number", v: p.model }].map((r, i, arr) => (
          <div key={r.l} style={{ background: W, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", borderRadius: i === 0 ? "14px 14px 0 0" : i === arr.length - 1 ? "0 0 14px 14px" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(15,23,42,0.06)" : "none", marginBottom: i === arr.length - 1 ? 16 : 0 }}>
            <span style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif" }}>{r.l}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: N }}>{r.v}</span>
          </div>
        ))}
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => nav("raise-complaint")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, border: `1.5px solid ${B}`, color: B, fontFamily: "DM Sans,sans-serif" }}>Raise Complaint</button>
          <button onClick={() => nav("amc-plans")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, color: "white", background: O, fontFamily: "DM Sans,sans-serif" }}>{ok ? "Extend" : "Renew"} Warranty</button>
        </div>
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function ServiceRequestsScreen({ nav, back, scrollRef, switchTab, activeTab, cartCount }: any) {
  const services = [
    { icon: "Wrench", l: "Regular Service / Cleaning", s: "Schedule preventive maintenance" },
    { icon: "Wind", l: "AC Gas Refill", s: "Refrigerant recharge (R-32 or R-22)" },
    { icon: "Thermometer", l: "Cooling / Heating Issue", s: "Diagnosis + repair + parts" },
    { icon: "Droplets", l: "Water Leakage", s: "Drain pipe blockage & seal repair" },
    { icon: "Zap", l: "Not Powering On", s: "Electrical fault diagnosis" },
    { icon: "ClipboardCheck", l: "Annual Check-up", s: "Full health check of all appliances" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Book Service" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 12, background: "#EFF3FF", border: "1px solid #C7D7F8", marginBottom: 14 }}>
          <Clock size={13} color={B} />
          <p style={{ fontSize: 12, color: B, fontFamily: "DM Sans,sans-serif" }}>Technician will contact you within <strong>24 hours</strong> of booking</p>
        </div>
        {services.map(x => (
          <button key={x.l} onClick={() => nav("raise-complaint")} style={{ width: "100%", background: W, borderRadius: 18, padding: "13px 14px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, textAlign: "left", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "#EFF3FF" }}>
              <SupportIcon name={x.icon} size={18} color={B} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 13, color: N }}>{x.l}</p>
              <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{x.s}</p>
            </div>
            <ChevronRight size={14} color="#CBD5E1" />
          </button>
        ))}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function RaiseComplaintScreen({ nav, back, selIssue, setSelIssue, issueDesc, setIssueDesc, scrollRef }: any) {
  const [selProd, setSelProd] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Raise a Complaint" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>Select Product</p>
        {MY_PRODUCTS.map((p: MyProduct, idx: number) => (
          <button key={p.id} onClick={() => setSelProd(idx)} style={{ width: "100%", background: W, borderRadius: 16, padding: "12px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, textAlign: "left", border: `1.5px solid ${selProd === idx ? B : "#E2E8F0"}` }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: L }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=100&h=100&fit=crop"; }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 13, color: N }}>{p.name}</p>
              <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>{p.serial}</p>
            </div>
            {selProd === idx && <div style={{ width: 20, height: 20, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: B }}><Check size={10} color="white" /></div>}
          </button>
        ))}

        <p style={{ fontWeight: 700, fontSize: 14, color: N, margin: "16px 0 10px" }}>Issue Type</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[{ icon: "Snowflake", l: "Not Cooling/Heating" }, { icon: "Volume2", l: "Unusual Noise" }, { icon: "Droplets", l: "Water Leakage" }, { icon: "Zap", l: "Not Turning On" }, { icon: "Thermometer", l: "Temperature Issue" }, { icon: "Cog", l: "Physical Damage" }].map(x => (
            <button key={x.l} onClick={() => setSelIssue(x.l)} style={{ padding: "11px 10px", borderRadius: 14, display: "flex", alignItems: "center", gap: 8, textAlign: "left", background: selIssue === x.l ? "#EFF3FF" : W, border: `1.5px solid ${selIssue === x.l ? B : "#E2E8F0"}` }}>
              <SupportIcon name={x.icon} size={15} color={selIssue === x.l ? B : S} />
              <span style={{ fontSize: 11, fontWeight: 600, color: selIssue === x.l ? B : N, fontFamily: "DM Sans,sans-serif" }}>{x.l}</span>
            </button>
          ))}
        </div>

        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 8 }}>Describe the Problem</p>
        <textarea rows={3} value={issueDesc} onChange={e => setIssueDesc(e.target.value)} placeholder="Describe the issue to help our technician prepare..." style={{ width: "100%", borderRadius: 14, padding: "12px 14px", fontSize: 13, color: N, outline: "none", resize: "none", background: W, border: "1.5px solid #E2E8F0", fontFamily: "DM Sans,sans-serif", marginBottom: 12 }} />

        <button style={{ width: "100%", padding: "13px 0", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13, fontWeight: 600, border: "1.5px dashed #CBD5E1", color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 12 }}>
          <Camera size={15} /> Upload Photos / Video (optional)
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 12, background: "#EFF3FF", border: "1px solid #C7D7F8", marginBottom: 16 }}>
          <Clock size={13} color={B} />
          <p style={{ fontSize: 12, color: B, fontFamily: "DM Sans,sans-serif" }}>Technician will contact you within <strong>24 hours</strong></p>
        </div>
        <PrimaryButton label="Submit Complaint" onClick={() => nav("complaint-detail")} />
      </div>
    </div>
  );
}

export function ComplaintDetailScreen({ nav, switchTab, selIssue, scrollRef }: any) {
  const ticketId = `TKT-${Math.floor(2800 + Math.random() * 99)}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <StatusBar />
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 20, paddingBottom: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "#D1FAE5", marginBottom: 14 }}>
            <CheckCircle size={38} color={G} />
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 20, background: "#D1FAE5", color: "#15803D", marginBottom: 10 }}>Complaint Registered!</span>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", marginBottom: 6 }}>Ticket Raised!</h2>
          <p style={{ fontSize: 14, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>Our technician will call within 24 hours to confirm the visit.</p>
        </div>
        <div style={{ background: W, borderRadius: 24, padding: "20px", marginBottom: 16, boxShadow: "0 4px 20px rgba(15,23,42,0.08)" }}>
          {[{ l: "Ticket ID", v: ticketId, hi: true }, { l: "Product", v: MY_PRODUCTS[0].name }, { l: "Issue", v: selIssue || "General Complaint" }, { l: "Priority", v: "High" }, { l: "Status", v: "Open", orange: true }, { l: "Est. Resolution", v: "Within 2 working days" }].map((r, i) => (
            <div key={r.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderTop: i > 0 ? "1px solid rgba(15,23,42,0.06)" : "none" }}>
              <span style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif" }}>{r.l}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: (r as any).orange ? O : (r as any).hi ? B : N }}>{r.v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <button onClick={() => nav("ticket-tracking")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, border: `1.5px solid ${B}`, color: B }}>Track Ticket</button>
          <button onClick={() => switchTab("support")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, color: "white", background: B }}>Go to Support</button>
        </div>
      </div>
    </div>
  );
}

export function TicketTrackingScreen({ selTicket, nav, back, scrollRef, switchTab, activeTab, cartCount }: any) {
  const t = selTicket;
  const steps = [
    { s: "Ticket Raised", t: t.date + ", 2:30 PM", done: true },
    { s: "Technician Assigned", t: t.date + ", 5:00 PM", done: true },
    { s: "Visit Scheduled", t: "Confirmed slot", done: ["Scheduled","In Progress","Resolved"].includes(t.status) },
    { s: "Work in Progress", t: "During visit", done: ["In Progress","Resolved"].includes(t.status) },
    { s: "Issue Resolved", t: "Pending", done: t.status === "Resolved" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Ticket Status" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <div style={{ background: W, borderRadius: 20, padding: "14px", marginBottom: 14, boxShadow: "0 2px 10px rgba(15,23,42,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: N }}>{t.id}</p>
            <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, background: t.color + "1A", color: t.color }}>{t.status}</span>
          </div>
          <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif" }}>{t.prod} · {t.type}</p>
          <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{t.date}</p>
          {t.techName && (
            <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 12, background: "#EFF3FF", display: "flex", alignItems: "center", gap: 8 }}>
              <Wrench size={13} color={B} />
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: N }}>Assigned: {t.techName}</p>
                <p style={{ fontSize: 10, color: S, fontFamily: "DM Sans,sans-serif" }}>Will contact you before visit</p>
              </div>
            </div>
          )}
        </div>
        <div style={{ background: W, borderRadius: 20, padding: "16px", marginBottom: 14, boxShadow: "0 2px 10px rgba(15,23,42,0.07)" }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 16 }}>Status Timeline</p>
          {steps.map((step, i) => (
            <div key={step.s} style={{ display: "flex", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 30, height: 30, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: step.done ? "#D1FAE5" : "#F1F5F9" }}>
                  {step.done ? <Check size={13} color={G} /> : <Clock size={13} color="#94A3B8" />}
                </div>
                {i < steps.length - 1 && <div style={{ width: 2, minHeight: 24, background: step.done ? "#D1FAE5" : "#E2E8F0", marginTop: 2 }} />}
              </div>
              <div style={{ paddingBottom: 16, flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: step.done ? N : "#94A3B8" }}>{step.s}</p>
                <p style={{ fontSize: 11, color: "#94A3B8", fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{step.t}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => nav("raise-complaint")} style={{ width: "100%", padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, border: `1.5px solid ${B}`, color: B, fontFamily: "DM Sans,sans-serif" }}>Raise Another Request</button>
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function InstallationScreen({ nav, back, scrollRef, switchTab, activeTab, cartCount }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Installation Request" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 14, background: "#EFF3FF", border: "1px solid #C7D7F8", marginBottom: 14 }}>
          <Zap size={17} color="#F97316" />
          <p style={{ fontSize: 13, fontWeight: 600, color: B }}>Free installation included with every purchase!</p>
        </div>
        {MY_PRODUCTS.map((p: MyProduct) => (
          <button key={p.id} onClick={() => nav("raise-complaint")} style={{ width: "100%", background: W, borderRadius: 16, padding: "12px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, textAlign: "left", border: "1px solid #E2E8F0" }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: L }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=100&h=100&fit=crop"; }} />
            </div>
            <div style={{ flex: 1 }}><p style={{ fontWeight: 600, fontSize: 13, color: N }}>{p.name}</p><p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>Request installation slot</p></div>
            <ChevronRight size={14} color="#CBD5E1" />
          </button>
        ))}
        <div style={{ marginTop: 12 }}><PrimaryButton label="Schedule Installation" onClick={() => nav("store-visit-1")} /></div>
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function AmcPlansScreen({ nav, back, scrollRef, switchTab, activeTab, cartCount }: any) {
  const plans = [
    { name: "Silver", price: 1499, features: ["2 preventive service visits/year", "Priority call response", "Labour charges free"], color: "#64748B", popular: false },
    { name: "Gold", price: 2499, features: ["4 preventive service visits/year", "Priority call response", "Labour + parts free", "Same-day technician dispatch", "24/7 support helpline"], color: B, popular: true },
    { name: "Platinum", price: 3999, features: ["6 preventive service visits/year", "24/7 priority emergency line", "Labour + ALL parts free", "Same-day technician guaranteed", "Free gas refill for ACs"], color: "#7C3AED", popular: false },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="AMC & Extended Warranty" onBack={back} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 4 }}>Protect your appliances</p>
        <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 16 }}>Annual Maintenance Contracts from ₹1,499/year. Priority service, free parts, same-day technician.</p>
        {plans.map(plan => (
          <div key={plan.name} style={{ background: W, borderRadius: 24, padding: "20px", marginBottom: 14, position: "relative", boxShadow: "0 4px 16px rgba(15,23,42,0.09)", border: `2px solid ${plan.popular ? plan.color : "#E2E8F0"}` }}>
            {plan.popular && <span style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", padding: "4px 14px", borderRadius: 20, background: plan.color, color: "white", fontSize: 11, fontWeight: 700 }}><Star size={10} color="white" style={{marginRight:3}} />Most Popular</span>}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <p style={{ fontWeight: 800, fontSize: 20, color: plan.color, fontFamily: "Plus Jakarta Sans,sans-serif" }}>{plan.name}</p>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontWeight: 800, fontSize: 20, color: N }}>₹{plan.price.toLocaleString("en-IN")}</p>
                <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>per year</p>
              </div>
            </div>
            {plan.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 16, height: 16, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: plan.color + "20", flexShrink: 0 }}><Check size={9} color={plan.color} /></div>
                <p style={{ fontSize: 12, color: N, fontFamily: "DM Sans,sans-serif" }}>{f}</p>
              </div>
            ))}
            <button style={{ width: "100%", padding: "13px 0", borderRadius: 14, marginTop: 12, fontWeight: 700, fontSize: 14, background: plan.popular ? plan.color : "transparent", color: plan.popular ? "white" : plan.color, border: plan.popular ? "none" : `1.5px solid ${plan.color}`, fontFamily: "DM Sans,sans-serif" }}>
              Choose {plan.name} Plan
            </button>
          </div>
        ))}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}
