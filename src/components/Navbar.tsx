import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User, LogIn } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();
  const links = ["About", "Services", "Testimonials", "Contact"];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      let current = "";
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-2xl shadow-background/50" : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
      />

      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          VR <span className="text-gradient">Zone</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-500 ${
                activeSection === l.toLowerCase()
                  ? "text-accent after:w-full"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </a>
          ))}
          <button 
            onClick={() => navigate("/certifications")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Certifications
          </button>
          <button 
            onClick={() => navigate("/system-overview")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            System Overview
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full hover:bg-accent/10 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground">
                {totalItems}
              </Badge>
            )}
          </button>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full"
              onClick={() => navigate("/signin")}
            >
              <LogIn className="w-4 h-4 mr-1" />
              Sign In
            </Button>
            <MagneticButton strength={0.25}>
              <Button 
                variant="hero" 
                size="sm" 
                className="rounded-full px-6"
                onClick={() => navigate("/signup")}
              >
                <User className="w-4 h-4 mr-1" />
                Sign Up
              </Button>
            </MagneticButton>
          </div>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden glass-strong px-4 pb-6 space-y-4 overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium py-1 ${
                  activeSection === l.toLowerCase() ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                navigate("/certifications");
              }}
              className="block text-sm font-medium py-1 text-left w-full text-muted-foreground hover:text-foreground"
            >
              Certifications
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/system-overview");
              }}
              className="block text-sm font-medium py-1 text-left w-full text-muted-foreground hover:text-foreground"
            >
              System Overview
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center justify-between text-sm font-medium py-1 text-left w-full text-muted-foreground hover:text-foreground"
            >
              <span>Cart</span>
              {totalItems > 0 && (
                <Badge className="h-5 px-2 text-xs bg-accent text-accent-foreground">
                  {totalItems} items
                </Badge>
              )}
            </button>
            
            {/* Mobile Auth Buttons */}
            <div className="border-t pt-4 mt-2 space-y-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full rounded-full"
                onClick={() => {
                  setOpen(false);
                  navigate("/signin");
                }}
              >
                <LogIn className="w-4 h-4 mr-1" />
                Sign In
              </Button>
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full rounded-full"
                onClick={() => {
                  setOpen(false);
                  navigate("/signup");
                }}
              >
                <User className="w-4 h-4 mr-1" />
                Sign Up Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
