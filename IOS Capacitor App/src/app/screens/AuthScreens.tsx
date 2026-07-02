import { ArrowLeft, Phone, Check, Zap, Building2, ShieldCheck, MessageCircle, Lightbulb } from "lucide-react";
import { COLORS } from "../data/store";
import { PrimaryButton } from "../components/shared";

const B = "#1A47CC", O = "#F97316", G = "#16A34A", N = "#0F172A", S = "#64748B", W = "#FFFFFF";
const SAFE_TOP = 58;

export function SplashScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "center", background: "linear-gradient(160deg,#0B1F6B 0%,#1A47CC 55%,#2563EB 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 115%,rgba(249,115,22,0.3) 0%,transparent 60%)", pointerEvents: "none" }} />
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{ position: "absolute", borderRadius: "50%", width: 120 + i * 90, height: 120 + i * 90, border: "1px solid rgba(255,255,255,0.06)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      ))}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <div style={{ width: 88, height: 88, borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.22)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
          <img src="/images/ui/logo.png" alt="Logo" style={{ width: 64, height: 64, objectFit: "contain", filter: "brightness(0) invert(1)" }} onError={() => {}} />
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontWeight: 800, fontSize: 36, color: "white", fontFamily: "Plus Jakarta Sans,sans-serif", lineHeight: 1.15 }}>Vaishali</p>
          <p style={{ fontWeight: 800, fontSize: 36, color: "white", fontFamily: "Plus Jakarta Sans,sans-serif", lineHeight: 1.15 }}>Electronics</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 12 }}>
            <div style={{ height: 1, width: 30, background: "rgba(255,255,255,0.3)" }} />
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 3, fontFamily: "DM Sans,sans-serif", fontWeight: 700 }}>JAIPUR · EST. 1987</p>
            <div style={{ height: 1, width: 30, background: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "DM Sans,sans-serif" }}>Trusted by 1 lakh+ Jaipur families</p>
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 20, height: 5, borderRadius: 3, background: O }} />
          <div style={{ width: 5, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.25)" }} />
          <div style={{ width: 5, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
    </div>
  );
}

export function WelcomeScreen({ onGetStarted, onGuest }: { onGetStarted: () => void; onGuest: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F8FAFC" }}>
      {/* Hero image — taller, positioned to show storefront well */}
      <div style={{ height: 320, flexShrink: 0, position: "relative", overflow: "hidden" }}>
        <img src="/images/ui/store-front.png" alt="Store" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format"; }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.35) 60%, #F8FAFC 100%)" }} />
        <div style={{ position: "absolute", bottom: 14, left: 16, display: "flex", alignItems: "center", gap: 8, padding: "5px 11px", borderRadius: 10, background: "rgba(15,23,42,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
          <img src="/images/ui/logo.png" alt="Logo" style={{ width: 20, height: 20, objectFit: "contain", filter: "brightness(0) invert(1)" }} onError={() => {}} />
          <span style={{ fontSize: 10, color: "white", fontWeight: 700, letterSpacing: 1.5, fontFamily: "DM Sans,sans-serif" }}>VAISHALI ELECTRONICS · JAIPUR</span>
        </div>
      </div>

      {/* Content — no gap, flows directly under image */}
      <div style={{ flex: 1, padding: "20px 24px 24px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <h1 style={{ fontWeight: 800, fontSize: 26, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", lineHeight: 1.25, marginBottom: 6 }}>Shop Smart,<br />Live Smarter. 🇮🇳</h1>
        <p style={{ fontSize: 13, color: S, fontFamily: "DM Sans,sans-serif", lineHeight: 1.6, marginBottom: 18 }}>Best brands, 0% EMI, free installation in Jaipur, and expert after-sales support. Since 1987.</p>

        {/* Trust pills */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {[
            { icon: <Zap size={15} color={B} />, l: "Same-week install" },
            { icon: <Building2 size={15} color={B} />, l: "0% EMI" },
            { icon: <ShieldCheck size={15} color={B} />, l: "Local warranty" },
          ].map(x => (
            <div key={x.l} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "10px 6px", borderRadius: 14, background: W, border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
              {x.icon}
              <span style={{ fontSize: 9, color: N, fontFamily: "DM Sans,sans-serif", fontWeight: 600, textAlign: "center", lineHeight: 1.3 }}>{x.l}</span>
            </div>
          ))}
        </div>

        <PrimaryButton label="Get Started — It's Free" onClick={onGetStarted} />
        <button onClick={onGuest} style={{ width: "100%", padding: "14px 20px", borderRadius: 16, fontWeight: 600, fontSize: 14, marginTop: 10, border: `1.5px solid ${B}`, color: B, fontFamily: "Plus Jakarta Sans,sans-serif", background: "transparent" }}>
          Browse as Guest
        </button>
      </div>
    </div>
  );
}

export function LoginScreen({ phone, setPhone, onBack, onSend }: { phone: string; setPhone: (v: string) => void; onBack: () => void; onSend: () => void }) {
  const valid = phone.length === 10;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: W }}>
      <div style={{ paddingTop: SAFE_TOP, paddingLeft: 20, paddingBottom: 4 }}>
        <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "#F1F5F9" }}>
          <ArrowLeft size={16} color={N} />
        </button>
      </div>
      <div style={{ flex: 1, padding: "16px 24px", overflowY: "auto" }}>
        <div style={{ width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "#EFF3FF", marginBottom: 20 }}>
          <Phone size={24} color={B} />
        </div>
        <h2 style={{ fontWeight: 800, fontSize: 24, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", lineHeight: 1.3, marginBottom: 6 }}>Enter your<br />mobile number</h2>
        <p style={{ fontSize: 14, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 28 }}>We'll send a 6-digit OTP to verify</p>

        <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 16, border: `2px solid ${valid ? B : "#E2E8F0"}`, background: "#F8FAFC", display: "flex", alignItems: "center", padding: "0 16px" }}>
          <span style={{ fontWeight: 700, fontSize: 16, color: N, marginRight: 12 }}>🇮🇳 +91</span>
          <div style={{ width: 1, height: 24, background: "#E2E8F0", marginRight: 12 }} />
          <input value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="98765 43210" type="tel" style={{ flex: 1, padding: "14px 0", fontSize: 16, color: N, background: "transparent", outline: "none" }} />
          {valid && <Check size={16} color={G} />}
        </div>

        <button onClick={valid ? onSend : undefined} style={{
          width: "100%", padding: "15px 20px", borderRadius: 16, color: "white", fontWeight: 700, fontSize: 15,
          background: valid ? `linear-gradient(135deg,${B},#2563EB)` : "#CBD5E1",
          boxShadow: valid ? "0 8px 24px rgba(26,71,204,0.28)" : "none",
          fontFamily: "Plus Jakarta Sans,sans-serif", marginBottom: 24,
        }}>Send OTP</button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
          <span style={{ color: "#94A3B8", fontSize: 12, fontFamily: "DM Sans,sans-serif" }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={{ flex: 1, padding: "13px 16px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 600, fontSize: 14, border: "1.5px solid #E2E8F0", color: N, fontFamily: "DM Sans,sans-serif" }}>
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.4 26.7 36 24 36c-5.3 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.6 39.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.5l6.3 5.3C39.9 36.6 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"/>
            </svg>
            Google
          </button>
          <button style={{ flex: 1, padding: "13px 16px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 600, fontSize: 14, border: "1.5px solid #E2E8F0", color: N, fontFamily: "DM Sans,sans-serif" }}>
            <svg width="16" height="18" viewBox="0 0 814 1000" fill={N}>
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 791.4 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export function OtpScreen({ phone, otp, setOtp, onBack, onVerify, otpRefs }: any) {

  const handleChange = (i: number, raw: string) => {
    // grab only digits, take the last one if somehow multiple arrive
    const digits = raw.replace(/\D/g, "");
    const digit = digits.slice(-1);
    const next = [...otp];
    next[i] = digit;
    setOtp(next);
    if (digit && i < 5) {
      setTimeout(() => otpRefs.current[i + 1]?.focus(), 0);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (otp[i]) {
        // clear current box
        const next = [...otp]; next[i] = ""; setOtp(next);
      } else if (i > 0) {
        // move to previous and clear it
        const next = [...otp]; next[i - 1] = ""; setOtp(next);
        setTimeout(() => otpRefs.current[i - 1]?.focus(), 0);
      }
      e.preventDefault();
    } else if (e.key === "ArrowLeft" && i > 0) {
      otpRefs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < 5) {
      otpRefs.current[i + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const next = ["", "", "", "", "", ""];
    pasted.split("").forEach((d, idx) => { next[idx] = d; });
    setOtp(next);
    const focusIdx = Math.min(pasted.length, 5);
    setTimeout(() => otpRefs.current[focusIdx]?.focus(), 0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: W }}>
      <div style={{ paddingTop: SAFE_TOP, paddingLeft: 20, paddingBottom: 4 }}>
        <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "#F1F5F9" }}>
          <ArrowLeft size={16} color={N} />
        </button>
      </div>
      <div style={{ flex: 1, padding: "16px 24px", overflowY: "auto" }}>
        <div style={{ width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "#FFF7ED", marginBottom: 20 }}>
          <MessageCircle size={26} color={O} />
        </div>
        <h2 style={{ fontWeight: 800, fontSize: 24, color: N, fontFamily: "Plus Jakarta Sans,sans-serif", marginBottom: 6 }}>Verify OTP</h2>
        <p style={{ fontSize: 14, color: S, fontFamily: "DM Sans,sans-serif", marginBottom: 28 }}>6-digit code sent to <strong style={{ color: N }}>+91 {phone || "98765 43210"}</strong></p>

        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <input
              key={i}
              ref={el => { otpRefs.current[i] = el; }}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={otp[i]}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              onPaste={handlePaste}
              onFocus={e => e.target.select()}
              style={{
                flex: 1, minWidth: 0, width: 0,
                borderRadius: 14, textAlign: "center", fontSize: 20,
                fontWeight: 700, padding: "14px 0", outline: "none",
                border: `2px solid ${otp[i] ? B : "#E2E8F0"}`,
                background: otp[i] ? "#EFF3FF" : "#F8FAFC",
                color: N, caretColor: B,
                WebkitAppearance: "none",
                boxSizing: "border-box",
              }}
            />
          ))}
        </div>

        <PrimaryButton label="Verify & Continue" onClick={onVerify} />
        <p style={{ textAlign: "center", fontSize: 14, color: S, fontFamily: "DM Sans,sans-serif", marginTop: 20 }}>
          Didn't get it? <button style={{ color: B, fontWeight: 700 }}>Resend OTP</button>
        </p>
        <div style={{ marginTop: 20, padding: "12px 16px", borderRadius: 14, background: "#F0FDF4", border: "1px solid #BBF7D0", textAlign: "center" }}>
          <p style={{ color: G, fontSize: 12, fontFamily: "DM Sans,sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}><Lightbulb size={12} color={G} /> Demo: Enter any 6 digits to continue</p>
        </div>
      </div>
    </div>
  );
}
