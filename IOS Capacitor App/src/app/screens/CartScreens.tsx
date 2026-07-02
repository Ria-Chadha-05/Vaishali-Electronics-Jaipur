import { useState } from "react";
import { ArrowLeft, Minus, Plus, X, Tag, Truck, Check, Shield, CheckCircle, ChevronRight, ShoppingCart, Smartphone, CreditCard, Building2, Globe, Banknote, Lock, Package, Wrench, Home, Briefcase } from "lucide-react";
import { COLORS, fmt, ORDERS } from "../data/store";
import type { CartItem, Order } from "../data/store";
import { Header, BottomNav, StatusBar, StepBar, PrimaryButton } from "../components/shared";

const B = "#1A47CC", O = "#F97316", G = "#16A34A", R = "#DC2626", N = "#0F172A", S = "#64748B", W = "#FFFFFF", L = "#F1F5F9";
const SAFE_TOP = 58;

export function CartScreen({ cartItems, updateQty, removeFromCart, cartTotal, back, nav, scrollRef, switchTab, activeTab, cartCount }: any) {
  const discount = Math.round(cartTotal * 0.05);
  const total = cartTotal - discount;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 12px", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
          <button onClick={back} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><ArrowLeft size={16} color={N} /></button>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 15, color: N, fontFamily: "Plus Jakarta Sans,sans-serif" }}>My Cart {cartItems.length > 0 && `(${cartItems.length})`}</span>
          {cartItems.length > 0 && <button style={{ fontSize: 12, fontWeight: 700, color: R, fontFamily: "DM Sans,sans-serif" }}>Clear</button>}
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
          <ShoppingCart size={56} color="#CBD5E1" />
          <p style={{ fontWeight: 800, fontSize: 18, color: N, marginTop: 14, marginBottom: 8, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Your cart is empty</p>
          <p style={{ textAlign: "center", fontSize: 14, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 24 }}>Add products from our wide range of electronics</p>
          <button onClick={() => switchTab("shop")} style={{ padding: "14px 32px", borderRadius: 16, color: "white", fontWeight: 700, fontSize: 14, background: `linear-gradient(135deg,${B},#2563EB)` }}>Start Shopping</button>
        </div>
      ) : (
        <>
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
            {cartItems.map((item: CartItem) => (
              <div key={item.id} style={{ background: W, borderRadius: 20, padding: "14px", display: "flex", gap: 12, marginBottom: 12, boxShadow: "0 2px 10px rgba(15,23,42,0.07)" }}>
                <div style={{ width: 76, height: 76, borderRadius: 14, overflow: "hidden", flexShrink: 0, background: L }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop"; }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 9, fontWeight: 800, color: B, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "DM Sans,sans-serif" }}>{item.brand}</p>
                  <p style={{ fontSize: 12, fontWeight: 600, color: N, lineHeight: 1.4, marginTop: 2, fontFamily: "Plus Jakarta Sans,sans-serif" }}>{item.name}</p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: N, marginTop: 4 }}>{fmt(item.price)}</p>
                  <p style={{ fontSize: 11, fontWeight: 700, color: B, fontFamily: "DM Sans,sans-serif" }}>EMI ₹{item.emi.toLocaleString("en-IN")}/mo · 0%</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ width: 28, height: 28, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><Minus size={11} color={N} /></button>
                    <span style={{ fontWeight: 700, fontSize: 14, color: N, width: 20, textAlign: "center" }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} style={{ width: 28, height: 28, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: L }}><Plus size={11} color={N} /></button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ alignSelf: "flex-start", padding: 4 }}><X size={15} color="#94A3B8" /></button>
              </div>
            ))}

            {/* Installation guarantee */}
            <div style={{ background: W, borderRadius: 16, padding: "12px 14px", marginBottom: 12, display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #BBF7D0" }}>
              <CheckCircle size={18} color={G} />
              <p style={{ fontSize: 12, color: "#15803D", fontFamily: "DM Sans,sans-serif" }}><strong>Free installation included</strong> · Our team calls within 24 hrs</p>
            </div>

            {/* Coupon */}
            <CouponRow />

            {/* Price breakdown */}
            <div style={{ background: W, borderRadius: 20, padding: "16px", marginTop: 12, boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 12 }}>Price Breakdown</p>
              {[{ l: "Subtotal", v: fmt(cartTotal) }, { l: "Delivery", v: "FREE", c: G }, { l: "Installation", v: "FREE ✓", c: G }, { l: "App Discount (5%)", v: `−${fmt(discount)}`, c: G }].map(r => (
                <div key={r.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0" }}>
                  <span style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif" }}>{r.l}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: (r as any).c || N, fontFamily: "DM Sans,sans-serif" }}>{r.v}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0 0", marginTop: 4, borderTop: "1px solid #E2E8F0" }}>
                <span style={{ fontWeight: 800, fontSize: 15, color: N }}>Total Payable</span>
                <span style={{ fontWeight: 800, fontSize: 18, color: N }}>{fmt(total)}</span>
              </div>
              <p style={{ textAlign: "right", fontSize: 12, color: G, fontFamily: "DM Sans,sans-serif", marginTop: 4, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 4 }}><Tag size={11} color={G} />You save {fmt(discount)}</p>
            </div>
          </div>
          <div style={{ background: W, borderTop: "1px solid rgba(15,23,42,0.07)", padding: "12px 16px" }}>
            <PrimaryButton label={`Proceed to Checkout — ${fmt(total)}`} onClick={() => nav("checkout-address")} />
          </div>
        </>
      )}
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}

function CouponRow() {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);
  const [err, setErr] = useState("");
  return (
    <div style={{ background: W, borderRadius: 16, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, border: applied ? `1.5px solid ${G}` : "1.5px dashed #CBD5E1" }}>
      <Tag size={15} color={applied ? G : S} />
      {applied ? (
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: G }}>VAISHALI10 applied!</span>
          <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: "#D1FAE5", color: "#15803D", fontWeight: 700 }}>−₹500</span>
        </div>
      ) : (
        <>
          <input value={code} onChange={e => setCode(e.target.value.toUpperCase())} placeholder="Enter coupon code" style={{ flex: 1, fontSize: 13, color: N, outline: "none" }} />
          <button onClick={() => { if (code === "VAISHALI10") { setApplied(true); setErr(""); } else setErr("Invalid. Try VAISHALI10"); }} style={{ fontSize: 13, fontWeight: 700, color: B, fontFamily: "DM Sans,sans-serif" }}>Apply</button>
        </>
      )}
      {err && <p style={{ fontSize: 10, color: R }}>{err}</p>}
    </div>
  );
}

export function CheckoutAddressScreen({ selAddr, setSelAddr, nav, back, scrollRef }: any) {
  const addresses = [
    { id: 0, name: "Rahul Sharma", addr: "B-47, Pratap Nagar, Near Vaishali Circle, Jaipur – 302021", phone: "+91 98765 43210", tag: "Home", icon: "home" },
    { id: 1, name: "Rahul Sharma", addr: "3rd Floor, Sindhuri Complex, Tonk Road, Jaipur – 302015", phone: "+91 98765 43210", tag: "Office", icon: "office" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Delivery Address" onBack={back} /><StepBar step={0} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 12, background: "#F0FDF4", border: "1px solid #BBF7D0", marginBottom: 14 }}>
          <Truck size={14} color={G} />
          <p style={{ fontSize: 12, color: "#15803D", fontFamily: "DM Sans,sans-serif" }}><strong>Jaipur delivery:</strong> Tomorrow · Free installation included</p>
        </div>
        {addresses.map(a => (
          <button key={a.id} onClick={() => setSelAddr(a.id)} style={{ width: "100%", background: W, borderRadius: 18, padding: "14px", marginBottom: 10, textAlign: "left", border: `2px solid ${selAddr === a.id ? B : "#E2E8F0"}`, boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              {a.tag === "Home" ? <Home size={14} color={B} /> : <Briefcase size={14} color={B} />}
              <span style={{ fontWeight: 700, fontSize: 11, padding: "3px 8px", borderRadius: 6, background: selAddr === a.id ? "#EFF3FF" : L, color: selAddr === a.id ? B : S }}>{a.tag}</span>
              {selAddr === a.id && <div style={{ marginLeft: "auto", width: 20, height: 20, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: B }}><Check size={10} color="white" /></div>}
            </div>
            <p style={{ fontWeight: 600, fontSize: 14, color: N }}>{a.name}</p>
            <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 3, lineHeight: 1.5 }}>{a.addr}</p>
            <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{a.phone}</p>
          </button>
        ))}
        <button style={{ width: "100%", padding: "14px 0", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 600, fontSize: 13, border: "2px dashed #CBD5E1", color: B, fontFamily: "DM Sans,sans-serif" }}>
          <Plus size={15} />Add New Address
        </button>
      </div>
      <div style={{ background: W, borderTop: "1px solid rgba(15,23,42,0.07)", padding: "12px 16px" }}>
        <PrimaryButton label="Continue to Payment →" onClick={() => nav("checkout-payment")} />
      </div>
    </div>
  );
}

export function CheckoutPaymentScreen({ selPayment, setSelPayment, cartTotal, back, nav, placeOrder, scrollRef }: any) {
  const total = Math.round(cartTotal * 0.95);
  const savings = Math.round(cartTotal * 0.05);
  const methods = [
    { id: "upi", icon: "upi", l: "UPI / GPay / PhonePe", s: "Instant · No charges · Most popular" },
    { id: "emi", icon: "emi", l: "No Cost EMI", s: `From ₹${Math.round(total / 12).toLocaleString("en-IN")}/mo · 0% interest` },
    { id: "card", icon: "card", l: "Credit / Debit Card", s: "Visa · Mastercard · RuPay · Amex" },
    { id: "netbanking", icon: "netbanking", l: "Net Banking", s: "All major banks supported" },
    { id: "cod", icon: "cod", l: "Cash on Delivery", s: "Pay when your product arrives" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}><StatusBar /><Header title="Payment" onBack={back} /><StepBar step={1} /></div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        <div style={{ background: W, borderRadius: 18, padding: "16px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", border: `1.5px solid ${B}` }}>
          <div><p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>Order Total</p><p style={{ fontWeight: 800, fontSize: 24, color: N }}>{fmt(total)}</p></div>
          <div style={{ textAlign: "right" }}><p style={{ fontSize: 11, color: G, fontFamily: "DM Sans,sans-serif" }}>You Save</p><p style={{ fontWeight: 800, fontSize: 18, color: G }}>{fmt(savings)}</p></div>
        </div>
        <p style={{ fontWeight: 700, fontSize: 14, color: N, marginBottom: 12 }}>Payment Method</p>
        {methods.map(m => (
          <button key={m.id} onClick={() => setSelPayment(m.id)} style={{ width: "100%", background: W, borderRadius: 18, padding: "14px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12, textAlign: "left", border: `2px solid ${selPayment === m.id ? B : "#E2E8F0"}` }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFC", flexShrink: 0 }}>
              {m.id === "upi" && <Smartphone size={18} color={B} />}
              {m.id === "emi" && <Building2 size={18} color={B} />}
              {m.id === "card" && <CreditCard size={18} color={B} />}
              {m.id === "netbanking" && <Globe size={18} color={B} />}
              {m.id === "cod" && <Banknote size={18} color={G} />}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 14, color: N }}>{m.l}</p>
              <p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 2 }}>{m.s}</p>
            </div>
            <div style={{ width: 20, height: 20, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: selPayment === m.id ? B : "transparent", border: `2px solid ${selPayment === m.id ? B : "#CBD5E1"}` }}>
              {selPayment === m.id && <Check size={10} color="white" />}
            </div>
          </button>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
          <Shield size={13} color={G} />
          <p style={{ fontSize: 11, color: G, fontFamily: "DM Sans,sans-serif", fontWeight: 600 }}>Secured by 256-bit SSL encryption</p>
        </div>
      </div>
      <div style={{ background: W, borderTop: "1px solid rgba(15,23,42,0.07)", padding: "12px 16px" }}>
        <button onClick={placeOrder} style={{ width: "100%", padding: "15px 0", borderRadius: 16, color: "white", fontWeight: 700, fontSize: 14, background: `linear-gradient(135deg,#15803D,${G})`, boxShadow: "0 8px 24px rgba(22,163,74,0.28)", fontFamily: "Plus Jakarta Sans,sans-serif" }}>
          <Lock size={14} color="white" /> Pay {fmt(total)} Securely
        </button>
      </div>
    </div>
  );
}

export function OrderSuccessScreen({ lastOrderId, nav, phone, switchTab, scrollRef }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <StatusBar />
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 20, paddingBottom: 16 }}>
          <div style={{ width: 88, height: 88, borderRadius: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#D1FAE5,#A7F3D0)", boxShadow: "0 12px 40px rgba(22,163,74,0.2)", marginBottom: 16 }}>
            <CheckCircle size={44} color={G} />
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 20, background: "#D1FAE5", color: "#15803D", marginBottom: 10 }}>🎉 Order Placed Successfully!</span>
          <h2 style={{ fontWeight: 800, fontSize: 24, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", marginBottom: 6 }}>Thank you, Rahul!</h2>
          <p style={{ fontSize: 14, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>Our team will call you within 24 hours to confirm your installation slot.</p>
        </div>
        <div style={{ background: W, borderRadius: 24, padding: "20px", marginBottom: 14, boxShadow: "0 4px 20px rgba(15,23,42,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: N }}>Order Details</p>
            <span style={{ fontWeight: 700, fontSize: 12, color: O }}>#{lastOrderId}</span>
          </div>
          {[{ i: "delivery", l: "Est. Delivery", v: "Tomorrow – 2 days" }, { i: "install", l: "Installation", v: "Free · We'll confirm timing" }, { i: "phone", l: "We'll call", v: `+91 ${phone || "98765 43210"}` }, { i: "location", l: "Deliver to", v: "Pratap Nagar, Jaipur" }].map((r, i) => (
            <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderTop: i > 0 ? "1px solid rgba(15,23,42,0.06)" : "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFC", flexShrink: 0 }}>
                {r.i === "delivery" && <Package size={14} color={B} />}
                {r.i === "install" && <Wrench size={14} color={B} />}
                {r.i === "phone" && <Smartphone size={14} color={B} />}
                {r.i === "location" && <Home size={14} color={B} />}
              </div>
              <div><p style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>{r.l}</p><p style={{ fontWeight: 600, fontSize: 13, color: N }}>{r.v}</p></div>
            </div>
          ))}
        </div>
        <div style={{ background: W, borderRadius: 18, padding: "16px", marginBottom: 16, border: `1.5px solid ${O}`, boxShadow: "0 2px 8px rgba(249,115,22,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Shield size={16} color={O} />
            <p style={{ fontWeight: 700, fontSize: 14, color: N }}>Protect your purchase</p>
          </div>
          <p style={{ fontSize: 12, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.5 }}>Add an AMC plan from ₹1,499/year for extended service beyond warranty.</p>
          <button onClick={() => nav("amc-plans")} style={{ width: "100%", padding: "10px 0", borderRadius: 12, fontSize: 12, fontWeight: 700, border: `1.5px solid ${O}`, color: O, marginTop: 10 }}>View AMC Plans →</button>
        </div>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <button onClick={() => nav("orders-list")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, border: `1.5px solid ${B}`, color: B, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Track Order</button>
          <button onClick={() => switchTab("home")} style={{ flex: 1, padding: "14px 0", borderRadius: 16, fontWeight: 700, fontSize: 14, color: "white", background: `linear-gradient(135deg,${B},#2563EB)`, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export function OrdersListScreen({ nav, back, scrollRef, switchTab, activeTab, cartCount }: any) {
  const [tab, setTab] = useState("All");
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F5F7FA" }}>
      <div style={{ background: W, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ padding: "0 16px" }}>
          <p style={{ fontWeight: 800, fontSize: 20, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", marginBottom: 10 }}>My Orders</p>
          <div style={{ display: "flex", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
            {["All","Active","Delivered","Cancelled"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "10px 0", fontSize: 12, fontWeight: 600, borderBottom: `2px solid ${tab === t ? B : "transparent"}`, color: tab === t ? B : "#94A3B8", fontFamily: "DM Sans,sans-serif" }}>{t}</button>
            ))}
          </div>
        </div>
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
        {ORDERS.map((o: Order) => (
          <div key={o.id} style={{ background: W, borderRadius: 20, padding: "14px", marginBottom: 12, boxShadow: "0 2px 10px rgba(15,23,42,0.07)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, overflow: "hidden", flexShrink: 0, background: "#F1F5F9" }}>
                <img src={o.img} alt={o.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop"; }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: S, fontFamily: "DM Sans,sans-serif" }}>#{o.id}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: o.statusColor + "1A", color: o.statusColor }}>{o.status}</span>
                </div>
                <p style={{ fontSize: 12, fontWeight: 600, color: N, lineHeight: 1.35 }}>{o.name}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
                  <span style={{ fontSize: 11, color: S, fontFamily: "DM Sans,sans-serif" }}>{o.date}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: N }}>{fmt(o.price)}</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              {[{ l: "Track", a: () => nav("ticket-tracking") }, { l: "Invoice", a: () => {} }, { l: "Help", a: () => nav("raise-complaint") }].map(b => (
                <button key={b.l} onClick={b.a} style={{ flex: 1, padding: "8px 0", borderRadius: 10, fontSize: 11, fontWeight: 700, border: "1px solid #E2E8F0", color: N, fontFamily: "DM Sans,sans-serif" }}>{b.l}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BottomNav activeTab={activeTab} switchTab={switchTab} cartCount={cartCount} />
    </div>
  );
}
