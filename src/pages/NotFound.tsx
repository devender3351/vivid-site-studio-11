import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-accent" />
          </div>
          <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
          <p className="mb-2 text-2xl font-semibold">Page not found</p>
          <p className="mb-8 text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="rounded-full">
            <a href="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
