import { Send, Mic, ArrowLeft, Check, Sparkles, MapPin, CheckCircle, Calculator, ChevronRight, Tv as TvIcon, Snowflake as SnowflakeIcon, WashingMachine as WashingMachineIcon, ShoppingCart, Wrench, Lightbulb, Package, Calendar, CalendarDays, Clock, Ticket, User } from "lucide-react";
import { CATEGORIES, fmt } from "../data/store";
import { BottomNav, StatusBar, VisitStepBar, PrimaryButton, CategoryIcon } from "../components/shared";

const VISIT_ICONS: Record<string, any> = { ShoppingCart, Wrench, Package, Calendar, CalendarDays, Clock, Ticket, User, MapPin, Calculator, Lightbulb };
function VisitIcon({ name, size = 18, color = "#1A47CC" }: { name: string; size?: number; color?: string }) {
  const Icon = VISIT_ICONS[name] || Package;
  return <Icon size={size} color={color} strokeWidth={1.8} />;
}

const B = "#1A47CC", O = "#F97316", G = "#16A34A", N = "#0F172A", S = "#64748B", W = "#FFFFFF", L = "#F1F5F9", P = "#7C3AED";
const SAFE_TOP = 58;

export function AiChatScreen({ msgs, chatInput, setChatInput, sendAiMsg, aiLoading, nav, back, switchTab, activeTab, cartCount, chatScrollRef }: any) {
  const chips = ["Best AC under ₹50,000", "Samsung vs LG TV", "Top-load ya front-load?", "₹3,000/mo EMI pe kya milega?"];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Plus Jakarta Sans,sans-serif" }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(160deg,#3b0764,${P})`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: `${SAFE_TOP}px 16px 14px` }}>
          <div style={{ width: 42, height: 42, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.15)", flexShrink: 0 }}>
            <Sparkles size={20} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 800, color: "white", fontSize: 15 }}>Vaishali AI</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: "#4ade80" }} />
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontFamily: "DM Sans,sans-serif" }}>Live · Jaipur electronics expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={chatScrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 14px 8px", background: "#F5F7FA" }}>
        {/* Quick chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
          {chips.map(s => (
            <button key={s} onClick={() => setChatInput(s)} style={{ padding: "7px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: W, border: "1.5px solid #E2E8F0", color: "#374151", fontFamily: "DM Sans,sans-serif" }}>{s}</button>
          ))}
        </div>

        {msgs.map((m: { role: string; text: string }, i: number) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", marginBottom: 12 }}>
            {m.role === "ai" && (
              <div style={{ width: 30, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 8, flexShrink: 0, alignSelf: "flex-end", marginBottom: 2, background: `linear-gradient(135deg,#3b0764,${P})` }}>
                <Sparkles size={13} color="white" />
              </div>
            )}
            <div style={{
              maxWidth: "78%", padding: "11px 14px",
              background: m.role === "ai" ? W : B,
              color: m.role === "ai" ? N : "white",
              borderRadius: m.role === "ai" ? "4px 16px 16px 16px" : "16px 16px 4px 16px",
              boxShadow: "0 2px 10px rgba(15,23,42,0.08)",
            }}>
              <p style={{ fontSize: 13, lineHeight: 1.65, fontFamily: "DM Sans,sans-serif", whiteSpace: "pre-wrap" }}>{m.text}</p>
            </div>
          </div>
        ))}

        {aiLoading && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 8, flexShrink: 0, background: `linear-gradient(135deg,#3b0764,${P})` }}>
              <Sparkles size={13} color="white" />
            </div>
            <div style={{ padding: "13px 16px", background: W, borderRadius: "4px 16px 16px 16px", boxShadow: "0 2px 10px rgba(15,23,42,0.08)" }}>
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                {[0, 1, 2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: "#CBD5E1", animation: `bounceDot 1.2s infinite ${i * 0.2}s` }} />)}
              </div>
            </div>
          </div>
        )}

        {/* Quick action grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[{ icon: "ShoppingCart", l: "Browse Products", a: () => switchTab("shop") }, { icon: "Wrench", l: "Book Service", a: () => nav("service-requests") }, { icon: "CalendarDays", l: "Store Visit", a: () => nav("store-visit-1") }, { icon: "Calculator", l: "EMI Calculator", a: () => nav("emi-calculator") }].map(a => (
            <button key={a.l} onClick={a.a} style={{ background: W, borderRadius: 14, padding: "11px 12px", display: "flex", alignItems: "center", gap: 8, textAlign: "left", boxShadow: "0 2px 8px rgba(15,23,42,0.07)", border: "1px solid rgba(15,23,42,0.05)" }}>
              <VisitIcon name={a.icon} size={17} color={W} />
              <span style={{ fontSize: 12, fontWeight: 600, color: N }}>{a.l}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div style={{ background: W, borderTop: "1px solid rgba(15,23,42,0.07)", padding: "10px 14px 12px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 8px 8px 14px", borderRadius: 20, background: "#F1F5F9", border: "1.5px solid #E2E8F0" }}>
          <button style={{ width: 30, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "#EFF3FF", flexShrink: 0 }}>
            <Mic size={13} color={B} />
          </button>
          <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendAiMsg()} placeholder="Ask about any product..." style={{ flex: 1, fontSize: 13, color: N, background: "transparent", outline: "none", fontFamily: "DM Sans,sans-serif" }} />
          <button onClick={sendAiMsg} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: chatInput.trim() ? B : "#CBD5E1", transition: "background 0.2s" }}>
            <Send size={14} color="white" />
          </button>
        </div>
      </div>

      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function EmiCalculatorScreen({ emiProdPrice, setEmiProdPrice, emiMonths, setEmiMonths, back, nav, scrollRef, switchTab, activeTab, cartCount }: any) {
  const tenures = [3, 6, 12, 18, 24];
  const emi = Math.round(emiProdPrice / emiMonths);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 12px", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
          <button onClick={back} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><ArrowLeft size={16} color={N} /></button>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 15, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>EMI Calculator</span>
        </div>
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <div style={{ background: W, borderRadius: 24, padding: "20px", marginBottom: 14, boxShadow: "0 4px 20px rgba(15,23,42,0.09)" }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>Product Price</p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", borderRadius: 14, background: "#F8FAFC", border: "1.5px solid #E2E8F0", marginBottom: 14 }}>
            <span style={{ fontWeight: 800, fontSize: 20, color: N }}>₹</span>
            <input type="number" value={emiProdPrice} onChange={e => setEmiProdPrice(Number(e.target.value))} style={{ flex: 1, fontSize: 22, fontWeight: 800, color: N, background: "transparent", outline: "none", fontFamily: "Plus Jakarta Sans,sans-serif" }} />
          </div>
          {/* Quick price presets */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
            {[22990, 34990, 47990, 52990, 89990].map(pr => (
              <button key={pr} onClick={() => setEmiProdPrice(pr)} style={{ padding: "6px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: emiProdPrice === pr ? B : L, color: emiProdPrice === pr ? W : N, fontFamily: "DM Sans,sans-serif" }}>{fmt(pr)}</button>
            ))}
          </div>

          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 10 }}>Tenure</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {tenures.map(m => (
              <button key={m} onClick={() => setEmiMonths(m)} style={{ padding: "9px 16px", borderRadius: 12, fontWeight: 700, fontSize: 13, background: emiMonths === m ? B : "#F1F5F9", color: emiMonths === m ? W : N, fontFamily: "DM Sans,sans-serif" }}>{m} mo</button>
            ))}
          </div>

          {/* Result */}
          <div style={{ padding: "20px", borderRadius: 18, textAlign: "center", background: "linear-gradient(135deg,#EFF3FF,#DBEAFE)", border: `1.5px solid ${B}` }}>
            <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif" }}>Your monthly payment</p>
            <p style={{ fontWeight: 800, fontSize: 44, color: B, fontFamily: "Plus Jakarta Sans,sans-serif", margin: "6px 0" }}>₹{emi.toLocaleString("en-IN")}</p>
            <p style={{ fontSize: 12, color: B, fontFamily: "DM Sans,sans-serif" }}>× {emiMonths} months = {fmt(emi * emiMonths)} · 0% interest</p>
          </div>
        </div>

        {/* All options */}
        <div style={{ background: W, borderRadius: 20, padding: "16px", marginBottom: 14, boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 12 }}>All EMI Options</p>
          {tenures.map((m, i) => (
            <button key={m} onClick={() => setEmiMonths(m)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: i < tenures.length - 1 ? "1px solid rgba(15,23,42,0.06)" : "none" }}>
              <span style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif" }}>{m} months</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: N }}>₹{Math.round(emiProdPrice / m).toLocaleString("en-IN")}/mo</span>
                {m === 12 && <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 6, background: "#D1FAE5", color: "#15803D", fontWeight: 700 }}>Popular</span>}
                {emiMonths === m && <div style={{ width: 18, height: 18, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: B }}><Check size={9} color="white" /></div>}
              </div>
            </button>
          ))}
        </div>

        <div style={{ padding: "12px 14px", borderRadius: 14, background: "#FFF7ED", border: "1px solid #FED7AA", marginBottom: 14 }}>
          <p style={{ fontSize: 12, color: "#92400E", fontFamily: "DM Sans,sans-serif" }}><Lightbulb size={12} color="#92400E" style={{marginRight:4}} />Available with HDFC, ICICI, SBI, Bajaj Finserv & more. 0% interest — no hidden charges.</p>
        </div>
        <PrimaryButton label="Browse Products with EMI" onClick={() => switchTab("shop")} />
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

export function StoreVisit1Screen({ visitCat, setVisitCat, nav, back, scrollRef }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 12px", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
          <button onClick={back} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><ArrowLeft size={16} color={N} /></button>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 15, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Book Free Store Visit</span>
        </div>
        <VisitStepBar step={0} />
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 4 }}>What would you like to see?</p>
        <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 16 }}>Our specialists will give you a personalised live demo — no pressure to buy</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {CATEGORIES.map(c => (
            <button key={c.name} onClick={() => setVisitCat(c.name)} style={{ padding: "16px 12px", borderRadius: 18, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center", background: visitCat === c.name ? "#EFF3FF" : W, border: `2px solid ${visitCat === c.name ? B : "#E2E8F0"}`, transition: "all 0.15s" }}>
              <CategoryIcon icon={c.icon} size={28} color={visitCat === c.name ? B : N} />
              <span style={{ fontSize: 12, fontWeight: 600, color: visitCat === c.name ? B : N }}>{c.name}</span>
              {visitCat === c.name && <div style={{ width: 20, height: 20, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: B }}><Check size={10} color="white" /></div>}
            </button>
          ))}
        </div>

        {/* Context tip */}
        {visitCat === "TV" && <div style={{ padding: "12px 14px", borderRadius: 14, background: "#FFF7ED", border: "1px solid #FED7AA", marginBottom: 14, display: "flex", gap: 10 }}><TvIcon size={18} color="#C2410C" style={{ flexShrink: 0 }} /><p style={{ fontSize: 12, color: "#92400E", fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>Our TV demo wall shows 5 sizes side by side. Most customers decide in 2 minutes once they see it live.</p></div>}
        {visitCat === "Washing Machine" && <div style={{ padding: "12px 14px", borderRadius: 14, background: "#ECFDF5", border: "1px solid #A7F3D0", marginBottom: 14, display: "flex", gap: 10 }}><WashingMachineIcon size={18} color={G} style={{ flexShrink: 0 }} /><p style={{ fontSize: 12, color: "#15803D", fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>Jaipur's hard water means top-load works better. Our specialist will explain and demonstrate both.</p></div>}
        {visitCat === "AC" && <div style={{ padding: "12px 14px", borderRadius: 14, background: "#EFF3FF", border: "1px solid #C7D7F8", marginBottom: 14, display: "flex", gap: 10 }}><SnowflakeIcon size={18} color={B} style={{ flexShrink: 0 }} /><p style={{ fontSize: 12, color: B, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>Our AC specialist will calculate exact electricity savings for your room size and usage patterns.</p></div>}

        {/* Showroom info */}
        <div style={{ padding: "14px 14px", borderRadius: 16, background: "#EFF3FF", border: "1px solid #C7D7F8", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <MapPin size={14} color={B} />
            <p style={{ fontWeight: 700, fontSize: 13, color: N }}>Vaishali Electronics Showroom</p>
          </div>
          <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>B-14, Vaishali Nagar, Near Nirman Nagar Circle, Jaipur – 302021</p>
          <p style={{ fontSize: 11, color: B, fontFamily: "DM Sans,sans-serif", fontWeight: 600, marginTop: 4 }}>Mon–Sat: 10 AM – 8 PM · Sun: 11 AM – 6 PM</p>
        </div>
        <PrimaryButton label="Next: Choose Date & Time →" onClick={() => nav("store-visit-2")} />
      </div>
    </div>
  );
}

export function StoreVisit2Screen({ visitDate, setVisitDate, visitTime, setVisitTime, visitCat, nav, back, scrollRef }: any) {
  const dates = ["Mon, 23 Jun", "Tue, 24 Jun", "Wed, 25 Jun", "Thu, 26 Jun", "Fri, 27 Jun", "Sat, 28 Jun", "Sun, 29 Jun"];
  const times = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 12px", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
          <button onClick={back} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><ArrowLeft size={16} color={N} /></button>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 15, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Choose Date & Time</span>
        </div>
        <VisitStepBar step={1} />
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 12 }}>Select Date</p>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 20 }}>
          {dates.map(d => {
            const [day, rest] = d.split(", ");
            const [num, mon] = rest.split(" ");
            const sel = visitDate === d;
            return (
              <button key={d} onClick={() => setVisitDate(d)} style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 12px", borderRadius: 16, minWidth: 58, background: sel ? B : W, border: `1.5px solid ${sel ? B : "#E2E8F0"}` }}>
                <span style={{ fontSize: 10, color: sel ? "rgba(255,255,255,0.7)" : S, fontFamily: "DM Sans,sans-serif" }}>{day}</span>
                <span style={{ fontWeight: 800, fontSize: 20, color: sel ? W : N, lineHeight: 1.2 }}>{num}</span>
                <span style={{ fontSize: 10, color: sel ? "rgba(255,255,255,0.7)" : S, fontFamily: "DM Sans,sans-serif" }}>{mon}</span>
              </button>
            );
          })}
        </div>

        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 12 }}>Select Time Slot</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
          {times.map(t => (
            <button key={t} onClick={() => setVisitTime(t)} style={{ padding: "11px 0", borderRadius: 14, fontSize: 12, fontWeight: 600, textAlign: "center", background: visitTime === t ? B : W, color: visitTime === t ? W : N, border: `1.5px solid ${visitTime === t ? B : "#E2E8F0"}`, fontFamily: "DM Sans,sans-serif" }}>{t}</button>
          ))}
        </div>

        {/* Summary */}
        <div style={{ padding: "14px", borderRadius: 16, background: "#EFF3FF", border: "1px solid #C7D7F8", marginBottom: 16 }}>
          <p style={{ fontWeight: 700, fontSize: 12, color: N, marginBottom: 10 }}>Appointment Summary</p>
          {[{ icon: "Package", l: "Category", v: visitCat }, { icon: "Calendar", l: "Date", v: visitDate }, { icon: "Clock", l: "Time", v: visitTime }, { icon: "MapPin", l: "Location", v: "Vaishali Nagar Showroom" }].map(r => (
            <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <VisitIcon name={r.icon} size={11} color={B} />
              <span style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>{r.l}:</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: N }}>{r.v}</span>
            </div>
          ))}
        </div>
        <PrimaryButton label="Confirm Appointment" onClick={() => nav("store-visit-confirm")} />
      </div>
    </div>
  );
}

export function StoreVisitConfirmScreen({ visitCat, visitDate, visitTime, nav, switchTab, scrollRef }: any) {
  const bookingId = `VE-APT-${Math.floor(7000 + Math.random() * 999)}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <StatusBar />
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 20, paddingBottom: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#D1FAE5,#A7F3D0)", boxShadow: "0 12px 40px rgba(22,163,74,0.2)", marginBottom: 14 }}>
            <CheckCircle size={38} color={G} />
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 20, background: "#D1FAE5", color: "#15803D", marginBottom: 10 }}>🎉 Appointment Confirmed!</span>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", marginBottom: 6 }}>See you soon!</h2>
          <p style={{ fontSize: 14, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>Our specialist will be ready. No pressure to buy — just come and explore.</p>
        </div>

        <div style={{ background: W, borderRadius: 24, padding: "20px", marginBottom: 16, boxShadow: "0 4px 20px rgba(15,23,42,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: N }}>Appointment Details</p>
            <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, background: "#D1FAE5", color: "#15803D" }}>Confirmed ✓</span>
          </div>
          {[{ icon: "Ticket", l: "Booking ID", v: bookingId }, { icon: "Package", l: "Category", v: visitCat }, { icon: "Calendar", l: "Date", v: visitDate }, { icon: "Clock", l: "Time", v: visitTime }, { icon: "User", l: "Expert", v: "Ramesh Sharma (Sr. Specialist)" }, { icon: "MapPin", l: "Showroom", v: "B-14, Vaishali Nagar, Jaipur" }].map((r, i) => (
            <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderTop: i > 0 ? "1px solid rgba(15,23,42,0.06)" : "none" }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "#EFF3FF", flexShrink: 0 }}>
                <VisitIcon name={r.icon} size={15} color={B} />
              </div>
              <div><p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>{r.l}</p><p style={{ fontWeight: 600, fontSize: 13, color: N }}>{r.v}</p></div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <button onClick={() => switchTab("home")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, border: `1.5px solid ${B}`, color: B, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Home</button>
          <button onClick={() => nav("support")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, color: "white", background: `linear-gradient(135deg,${B},#2563EB)`, fontFamily: "Plus Jakarta Sans,sans-serif" }}>View Visits</button>
        </div>
      </div>
    </div>
  );
}
