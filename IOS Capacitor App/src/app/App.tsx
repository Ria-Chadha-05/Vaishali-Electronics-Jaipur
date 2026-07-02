import { Sparkles, Construction } from "lucide-react";
import { useAppState } from "./hooks/useAppState";

import { SplashScreen, WelcomeScreen, LoginScreen, OtpScreen } from "./screens/AuthScreens";
import { HomeScreen } from "./screens/HomeScreen";
import {
  CategoryScreen, ProductDetailScreen, CompareScreen,
  FiltersScreen, OffersScreen, SearchScreen,
} from "./screens/ShopScreens";
import {
  CartScreen, CheckoutAddressScreen, CheckoutPaymentScreen,
  OrderSuccessScreen, OrdersListScreen,
} from "./screens/CartScreens";
import {
  AiChatScreen, EmiCalculatorScreen,
  StoreVisit1Screen, StoreVisit2Screen, StoreVisitConfirmScreen,
} from "./screens/AiVisitScreens";
import {
  SupportScreen, MyProductsScreen, WarrantyScreen, ServiceRequestsScreen,
  RaiseComplaintScreen, ComplaintDetailScreen, TicketTrackingScreen,
  InstallationScreen, AmcPlansScreen,
} from "./screens/SupportScreens";
import {
  ProfileScreen, NotificationsScreen, WishlistScreen,
  AddressesScreen, LanguageScreen, HelpCenterScreen,
} from "./screens/ProfileScreens";

export default function App() {
  const state = useAppState();

  return (
    <div style={{
      minHeight: "100dvh",
      background: "linear-gradient(135deg,#0a0a1a 0%,#111827 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Phone shell */}
      <div style={{
        width: 393,
        height: 852,
        borderRadius: 54,
        position: "relative",
        background: "#1c1c1e",
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.12),
          0 0 0 6px #1c1c1e,
          0 0 0 8px rgba(255,255,255,0.08),
          0 60px 120px rgba(0,0,0,0.8),
          inset 0 0 0 1px rgba(255,255,255,0.05)
        `,
        flexShrink: 0,
      }}>
        {/* Screen glass */}
        <div style={{
          position: "absolute",
          inset: 2,
          borderRadius: 52,
          overflow: "hidden",
          background: "#f5f7fa",
          display: "flex",
          flexDirection: "column",
        }}>
          {/* Dynamic Island */}
          <div style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 34,
            background: "#000",
            borderRadius: 20,
            zIndex: 100,
            pointerEvents: "none",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
          }} />

          {/* App content */}
          <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {renderScreen(state)}
          </div>

          {/* Persistent floating AI chat bubble — stays clickable on home, PLP, PDP, search */}
          {["home", "category", "product-detail", "search-results"].includes(state.screen) && (
            <button
              onClick={() => state.switchTab("ai")}
              aria-label="Ask Vaishali AI"
              style={{
                position: "absolute",
                right: 16,
                bottom: 92,
                width: 56,
                height: 56,
                borderRadius: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg,#4f1d96,#7C3AED)",
                boxShadow: "0 10px 28px rgba(124,58,237,0.45), 0 0 0 4px rgba(124,58,237,0.12)",
                zIndex: 80,
                animation: "aiBubblePulse 2.4s ease-in-out infinite",
              }}
            >
              <Sparkles size={24} color="white" />
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes bounceDot {
          0%, 100% { transform: translateY(0); opacity: 0.35; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes aiBubblePulse {
          0%, 100% { box-shadow: 0 10px 28px rgba(124,58,237,0.45), 0 0 0 4px rgba(124,58,237,0.12); }
          50% { box-shadow: 0 10px 28px rgba(124,58,237,0.6), 0 0 0 8px rgba(124,58,237,0.08); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        button { cursor: pointer; background: none; border: none; font-family: inherit; }
        input, textarea { border: none; font-family: inherit; }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
        .screen-in { animation: fadeSlideUp 0.2s ease-out; }
      `}</style>
    </div>
  );
}

function renderScreen(s: ReturnType<typeof useAppState>) {
  const common = {
    nav: s.nav, back: s.back, switchTab: s.switchTab,
    activeTab: s.activeTab, cartCount: s.cartCount, scrollRef: s.scrollRef,
  };

  switch (s.screen) {
    case "splash": return <SplashScreen />;
    case "welcome": return <WelcomeScreen onGetStarted={() => s.nav("login")} onGuest={() => s.switchTab("home")} />;
    case "login": return <LoginScreen phone={s.phone} setPhone={s.setPhone} onBack={s.back} onSend={() => { s.setOtp(["","","","","",""]); s.nav("otp"); }} />;
    case "otp": return <OtpScreen phone={s.phone} otp={s.otp} setOtp={s.setOtp} onBack={s.back} otpRefs={s.otpRefs} onVerify={() => s.switchTab("home")} />;

    case "home": return <HomeScreen {...common} activeBannerIdx={s.activeBannerIdx} setActiveBannerIdx={s.setActiveBannerIdx} notifCount={s.notifCount} wishlist={s.wishlist} toggleWishlist={s.toggleWishlist} addToCart={s.addToCart} setSelProd={s.setSelProd} setSelCat={s.setSelCat} />;

    case "category": return <CategoryScreen {...common} selCat={s.selCat} setSelCat={s.setSelCat} selBrand={s.selBrand} setSelBrand={s.setSelBrand} wishlist={s.wishlist} toggleWishlist={s.toggleWishlist} setSelProd={s.setSelProd} compareList={s.compareList} toggleCompare={s.toggleCompare} getFilteredProducts={s.getFilteredProducts} addToCart={s.addToCart} />;

    case "product-detail": return <ProductDetailScreen selProd={s.selProd} nav={s.nav} back={s.back} addToCart={s.addToCart} wishlist={s.wishlist} toggleWishlist={s.toggleWishlist} compareList={s.compareList} toggleCompare={s.toggleCompare} setEmiProdPrice={s.setEmiProdPrice} switchTab={s.switchTab} cartCount={s.cartCount} />;

    case "compare": return <CompareScreen {...common} compareList={s.compareList} toggleCompare={s.toggleCompare} addToCart={s.addToCart} />;
    case "filters": return <FiltersScreen back={s.back} selCat={s.selCat} setSelCat={s.setSelCat} selBrand={s.selBrand} setSelBrand={s.setSelBrand} scrollRef={s.scrollRef} />;
    case "offers": return <OffersScreen {...common} />;
    case "search-results": return <SearchScreen {...common} searchQ={s.searchQ} setSearchQ={s.setSearchQ} wishlist={s.wishlist} toggleWishlist={s.toggleWishlist} setSelProd={s.setSelProd} />;

    case "cart": return <CartScreen {...common} cartItems={s.cartItems} updateQty={s.updateQty} removeFromCart={s.removeFromCart} cartTotal={s.cartTotal} />;
    case "checkout-address": return <CheckoutAddressScreen selAddr={s.selAddr} setSelAddr={s.setSelAddr} nav={s.nav} back={s.back} scrollRef={s.scrollRef} />;
    case "checkout-payment": return <CheckoutPaymentScreen selPayment={s.selPayment} setSelPayment={s.setSelPayment} cartTotal={s.cartTotal} back={s.back} nav={s.nav} placeOrder={s.placeOrder} scrollRef={s.scrollRef} />;
    case "order-success": return <OrderSuccessScreen lastOrderId={s.lastOrderId} nav={s.nav} phone={s.phone} switchTab={s.switchTab} scrollRef={s.scrollRef} />;
    case "orders-list": return <OrdersListScreen {...common} />;

    case "emi-calculator": return <EmiCalculatorScreen {...common} emiProdPrice={s.emiProdPrice} setEmiProdPrice={s.setEmiProdPrice} emiMonths={s.emiMonths} setEmiMonths={s.setEmiMonths} />;
    case "ai-chat": return <AiChatScreen {...common} chatScrollRef={s.chatScrollRef} msgs={s.msgs} chatInput={s.chatInput} setChatInput={s.setChatInput} sendAiMsg={s.sendAiMsg} aiLoading={s.aiLoading} />;
    case "store-visit-1": return <StoreVisit1Screen visitCat={s.visitCat} setVisitCat={s.setVisitCat} nav={s.nav} back={s.back} scrollRef={s.scrollRef} />;
    case "store-visit-2": return <StoreVisit2Screen visitDate={s.visitDate} setVisitDate={s.setVisitDate} visitTime={s.visitTime} setVisitTime={s.setVisitTime} visitCat={s.visitCat} nav={s.nav} back={s.back} scrollRef={s.scrollRef} />;
    case "store-visit-confirm": return <StoreVisitConfirmScreen visitCat={s.visitCat} visitDate={s.visitDate} visitTime={s.visitTime} nav={s.nav} switchTab={s.switchTab} scrollRef={s.scrollRef} />;

    case "support": return <SupportScreen {...common} selTicket={s.selTicket} setSelTicket={s.setSelTicket} />;
    case "my-products": return <MyProductsScreen {...common} setSelMyProd={s.setSelMyProd} />;
    case "warranty": return <WarrantyScreen {...common} selMyProd={s.selMyProd} />;
    case "service-requests": return <ServiceRequestsScreen {...common} />;
    case "raise-complaint": return <RaiseComplaintScreen nav={s.nav} back={s.back} scrollRef={s.scrollRef} selIssue={s.selIssue} setSelIssue={s.setSelIssue} issueDesc={s.issueDesc} setIssueDesc={s.setIssueDesc} />;
    case "complaint-detail": return <ComplaintDetailScreen nav={s.nav} switchTab={s.switchTab} selIssue={s.selIssue} scrollRef={s.scrollRef} />;
    case "ticket-tracking": return <TicketTrackingScreen {...common} selTicket={s.selTicket} />;
    case "installation": return <InstallationScreen {...common} />;
    case "amc-plans": return <AmcPlansScreen {...common} />;

    case "profile": return <ProfileScreen {...common} phone={s.phone} />;
    case "notifications": return <NotificationsScreen {...common} setNotifCount={s.setNotifCount} />;
    case "wishlist": return <WishlistScreen {...common} wishlist={s.wishlist} toggleWishlist={s.toggleWishlist} setSelProd={s.setSelProd} />;
    case "addresses": return <AddressesScreen back={s.back} scrollRef={s.scrollRef} />;
    case "language": return <LanguageScreen back={s.back} scrollRef={s.scrollRef} />;
    case "help-center": return <HelpCenterScreen back={s.back} scrollRef={s.scrollRef} />;

    default: return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F5F7FA" }}>
        <Construction size={48} color="#CBD5E1" />
        <p style={{ color: "#0F172A", fontWeight: 700, fontSize: 16, marginTop: 12, fontFamily: "Plus Jakarta Sans,sans-serif" }}>Coming Soon</p>
        <button onClick={s.back} style={{ marginTop: 16, color: "#1A47CC", fontWeight: 700, fontFamily: "DM Sans,sans-serif", fontSize: 14 }}>← Go Back</button>
      </div>
    );
  }
}
