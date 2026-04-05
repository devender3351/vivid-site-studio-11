import { useState, useEffect, useRef } from "react";
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
  const [skipLinkVisible, setSkipLinkVisible] = useState(false);
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const links = ["About", "Services", "Testimonials", "Contact"];
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

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

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        mobileButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (open && firstLinkRef.current) {
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    }
  }, [open]);

  // Handle skip link
  const handleSkipLink = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          handleSkipLink();
        }}
        className={`fixed top-0 left-0 z-[60] bg-accent text-accent-foreground px-4 py-2 text-sm font-medium transition-transform duration-200 ${
          skipLinkVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        onFocus={() => setSkipLinkVisible(true)}
        onBlur={() => setSkipLinkVisible(false)}
      >
        Skip to main content
      </a>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-2xl shadow-background/50" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
      {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "0%" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
          aria-hidden="true"
        />

        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo - Left Side */}
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-lg px-2 py-1"
            aria-label="VR Zone Home"
          >
            VR <span className="text-gradient">Zone</span>
          </Link>

          {/* Desktop Navigation - Right Side with ml-auto */}
          <div 
            className="hidden md:flex items-center gap-6 ml-auto"
            role="menubar"
            aria-label="Desktop menu"
          >
          {links.map((l, index) => (
            <button
              key={l}
              ref={index === 0 ? firstLinkRef : undefined}
              onClick={() => navigate(`/${l.toLowerCase()}`)}
              role="menuitem"
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1 ${
                activeSection === l.toLowerCase()
                  ? "text-accent after:w-full"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
          <button 
            onClick={() => navigate("/certifications")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
            role="menuitem"
          >
            Certifications
          </button>
          <button 
            onClick={() => navigate("/system-overview")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
            role="menuitem"
          >
            System Overview
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            aria-label={`Shopping cart with ${totalItems} items`}
            aria-haspopup="dialog"
          >
            <ShoppingCart className="w-5 h-5" aria-hidden="true" />
            {totalItems > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground"
                aria-label={`${totalItems} items in cart`}
              >
                {totalItems}
              </Badge>
            )}
          </button>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => navigate("/signin")}
              aria-label="Sign in to your account"
            >
              <LogIn className="w-4 h-4 mr-1" aria-hidden="true" />
              Sign In
            </Button>
            <MagneticButton strength={0.25}>
              <Button 
                variant="hero" 
                size="sm" 
                className="rounded-full px-6 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                onClick={() => navigate("/signup")}
                aria-label="Create a new account"
              >
                <User className="w-4 h-4 mr-1" aria-hidden="true" />
                Sign Up
              </Button>
            </MagneticButton>
          </div>
        </div>
        <button 
          ref={mobileButtonRef}
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden glass-strong px-4 pb-6 space-y-4 overflow-hidden"
            role="menu"
            aria-label="Mobile menu"
          >
            {links.map((l, index) => (
              <button
                key={l}
                ref={index === 0 ? firstLinkRef : undefined}
                onClick={() => {
                  setOpen(false);
                  navigate(`/${l.toLowerCase()}`);
                }}
                role="menuitem"
                className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background text-left w-full ${
                  activeSection === l.toLowerCase() 
                    ? "text-accent bg-accent/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                }`}
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                navigate("/certifications");
              }}
              role="menuitem"
              className="block text-sm font-medium py-2 px-3 rounded-lg text-left w-full text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              Certifications
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/system-overview");
              }}
              role="menuitem"
              className="block text-sm font-medium py-2 px-3 rounded-lg text-left w-full text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              System Overview
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setIsCartOpen(true);
              }}
              role="menuitem"
              className="flex items-center justify-between text-sm font-medium py-2 px-3 rounded-lg text-left w-full text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Open shopping cart"
            >
              <span>Cart</span>
              {totalItems > 0 && (
                <Badge 
                  className="h-5 px-2 text-xs bg-accent text-accent-foreground"
                  aria-label={`${totalItems} items`}
                >
                  {totalItems}
                </Badge>
              )}
            </button>
            
            {/* Mobile Auth Buttons */}
            <div className="border-t border-border pt-4 mt-2 space-y-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full rounded-full focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                onClick={() => {
                  setOpen(false);
                  navigate("/signin");
                }}
                aria-label="Sign in to your account"
              >
                <LogIn className="w-4 h-4 mr-1" aria-hidden="true" />
                Sign In
              </Button>
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full rounded-full focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                onClick={() => {
                  setOpen(false);
                  navigate("/signup");
                }}
                aria-label="Create a new account"
              >
                <User className="w-4 h-4 mr-1" aria-hidden="true" />
                Sign Up Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
