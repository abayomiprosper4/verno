import { useState, useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
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

const ROUTE_ORDER = ["/", "/products", "/about", "/locations", "/cart"];

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(0);
  const isThrottled = useRef(false);
  const touchStartX = useRef(0);

  // Prefers-reduced-motion support
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty("--animation-duration", "0.05s");
    }
  }, []);

  const handleNavigate = (newPath: string) => {
    if (newPath === location.pathname) return;
    const currentIndex = ROUTE_ORDER.indexOf(location.pathname);
    const newIndex = ROUTE_ORDER.indexOf(newPath);
    setDirection(newIndex > currentIndex ? 1 : -1);
    navigate(newPath);
  };

  // trackpad navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;

      const target = e.target as HTMLElement;

      // Check if the scroll is happening within a scrollable element
      const isScrollableElement = (el: HTMLElement | null): boolean => {
        if (!el) return false;
        const style = window.getComputedStyle(el);
        const overflowX = style.overflowX;
        const hasHorizontalScroll = el.scrollWidth > el.clientWidth;

        if ((overflowX === 'auto' || overflowX === 'scroll') && hasHorizontalScroll) {
          return true;
        }

        if (el.parentElement) {
          return isScrollableElement(el.parentElement);
        }
        return false;
      };

      // Don't navigate if scrolling within a scrollable element
      if (isScrollableElement(target)) {
        return;
      }

      const currentIndex = ROUTE_ORDER.indexOf(location.pathname);

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
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
  }, [location.pathname]);

  // Touch swipe navigation (mobile/tablet)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isThrottled.current) return;

      const target = e.target as HTMLElement;

      // Check if the swipe is happening within a scrollable element
      const isScrollableElement = (el: HTMLElement | null): boolean => {
        if (!el) return false;
        const style = window.getComputedStyle(el);
        const overflowX = style.overflowX;
        const hasHorizontalScroll = el.scrollWidth > el.clientWidth;

        if ((overflowX === 'auto' || overflowX === 'scroll') && hasHorizontalScroll) {
          return true;
        }

        if (el.parentElement) {
          return isScrollableElement(el.parentElement);
        }
        return false;
      };

      // Don't navigate if swiping within a scrollable element
      if (isScrollableElement(target)) {
        return;
      }

      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;
      const currentIndex = ROUTE_ORDER.indexOf(location.pathname);

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < ROUTE_ORDER.length - 1) {
          handleNavigate(ROUTE_ORDER[currentIndex + 1]);
        } else if (deltaX < 0 && currentIndex > 0) {
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
  }, [location.pathname]);

  // Check if current route is in the animated routes
  const isAnimatedRoute = ROUTE_ORDER.includes(location.pathname);

  const renderPage = () => {
    switch (location.pathname) {
      case "/":
        return <Home />;
      case "/products":
        return <Products />;
      case "/about":
        return <About />;
      case "/locations":
        return <Locations />;
      case "/cart":
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative w-full h-screen overflow-hidden bg-background">
        <Navbar activePath={location.pathname} onNavigate={handleNavigate} />
        
        {isAnimatedRoute ? (
          <AnimatePresence mode="wait" custom={direction}>
            <PageWrapper key={location.pathname} direction={direction}>
              {renderPage()}
            </PageWrapper>
          </AnimatePresence>
        ) : (
          <Routes location={location}>
            <Route path="/collections" element={
              <div className="h-screen overflow-y-auto">
                <Collections />
              </div>
            } />
          </Routes>
        )}
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
