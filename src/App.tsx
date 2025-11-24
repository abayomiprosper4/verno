import { useState, useEffect } from "react";
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
  const CurrentPage = ROUTES[currentPath as keyof typeof ROUTES] || Home;
  return <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="relative w-full h-screen overflow-hidden bg-background">
          <Navbar activePath={currentPath} onNavigate={handleNavigate} />
          
          <PageWrapper pageKey={currentPath} direction={direction}>
            <CurrentPage className="-my-40" />
          </PageWrapper>
        </div>
      </TooltipProvider>
    </QueryClientProvider>;
};
export default App;