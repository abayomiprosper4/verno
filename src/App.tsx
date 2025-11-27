import { useState, useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { PageWrapper } from "@/components/PageWrapper";
import { Home } from "@/pages/Home";
import { Products } from "@/pages/Products";
import { About } from "@/pages/About";
import { Locations } from "@/pages/Locations";
import { Cart } from "@/pages/Cart";
import { Collections } from "@/pages/Collections";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const ROUTES = {
  "/": Home,
  "/products": Products,
  "/about": About,
  "/locations": Locations,
  "/cart": Cart,
  "/collections": Collections
} as const;

const ROUTE_ORDER = ["/", "/products", "/about", "/locations", "/cart"];

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [direction, setDirection] = useState(0);
  const isThrottled = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const handleNavigate = (newPath: string) => {
    if (newPath === currentPath) return;
    const currentIndex = ROUTE_ORDER.indexOf(currentPath);
    const newIndex = ROUTE_ORDER.indexOf(newPath);
    setDirection(newIndex > currentIndex ? 1 : -1);
    navigate(newPath);
  };

  // Prefers-reduced-motion support
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty("--animation-duration", "0.05s");
    }
  }, []);

  // trackpad navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;

      const currentIndex = ROUTE_ORDER.indexOf(currentPath);

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // detect horizontal scroll
        if (e.deltaX > 0 && currentIndex < ROUTE_ORDER.length - 1) {
          handleNavigate(ROUTE_ORDER[currentIndex + 1]);
        } else if (e.deltaX < 0 && currentIndex > 0) {
          handleNavigate(ROUTE_ORDER[currentIndex - 1]);
        }

        isThrottled.current = true;
        setTimeout(() => (isThrottled.current = false), 500);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentPath]);

  // Touch swipe navigation (mobile/tablet)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isThrottled.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;
      const currentIndex = ROUTE_ORDER.indexOf(currentPath);

      if (Math.abs(deltaX) > 50) { // minimum swipe distance
        if (deltaX > 0 && currentIndex < ROUTE_ORDER.length - 1) {
          // swipe left → next page
          handleNavigate(ROUTE_ORDER[currentIndex + 1]);
        } else if (deltaX < 0 && currentIndex > 0) {
          // swipe right → previous page
          handleNavigate(ROUTE_ORDER[currentIndex - 1]);
        }

        isThrottled.current = true;
        setTimeout(() => (isThrottled.current = false), 300);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentPath]);

  const CurrentPage = ROUTES[currentPath as keyof typeof ROUTES] || Home;

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative w-full h-screen overflow-hidden bg-background">
        <Navbar activePath={currentPath} onNavigate={handleNavigate} />
        
        <Routes>
          <Route path="/" element={
            <PageWrapper pageKey={currentPath} direction={direction}>
              <div className="-my-0">
                <Home />
              </div>
            </PageWrapper>
          } />
          <Route path="/products" element={
            <PageWrapper pageKey={currentPath} direction={direction}>
              <div className="-my-0">
                <Products />
              </div>
            </PageWrapper>
          } />
          <Route path="/about" element={
            <PageWrapper pageKey={currentPath} direction={direction}>
              <div className="-my-0">
                <About />
              </div>
            </PageWrapper>
          } />
          <Route path="/locations" element={
            <PageWrapper pageKey={currentPath} direction={direction}>
              <div className="-my-0">
                <Locations />
              </div>
            </PageWrapper>
          } />
          <Route path="/cart" element={
            <PageWrapper pageKey={currentPath} direction={direction}>
              <div className="-my-0">
                <Cart />
              </div>
            </PageWrapper>
          } />
          <Route path="/collections" element={
            <div className="h-screen overflow-y-auto">
              <Collections />
            </div>
          } />
        </Routes>
      </div>
    </TooltipProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
