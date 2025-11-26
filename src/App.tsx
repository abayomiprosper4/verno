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

const queryClient = new QueryClient();

const ROUTES = {
  "/": Home,
  "/products": Products,
  "/about": About,
  "/locations": Locations,
  "/cart": Cart
} as const;

const ROUTE_ORDER = ["/", "/products", "/about", "/locations", "/cart"];

const App = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const [direction, setDirection] = useState(0);
  const isThrottled = useRef(false);
  const touchStartX = useRef(0);

  const handleNavigate = (newPath: string) => {
    if (newPath === currentPath) return;
    const currentIndex = ROUTE_ORDER.indexOf(currentPath);
    const newIndex = ROUTE_ORDER.indexOf(newPath);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentPath(newPath);
  };

  // Prefers-reduced-motion support
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty("--animation-duration", "0.01s");
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
        setTimeout(() => (isThrottled.current = false), 300);
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="relative w-full h-screen overflow-hidden bg-background">
          <Navbar activePath={currentPath} onNavigate={handleNavigate} />
          
          <PageWrapper pageKey={currentPath} direction={direction}>
            <div className="-my-0">
              <CurrentPage />
            </div>
          </PageWrapper>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
