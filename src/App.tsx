import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CursorGlow from "@/components/CursorGlow";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import GenzVR from "./pages/GenzVR.tsx";
import GenAlphaVR from "./pages/GenAlphaVR.tsx";
import MillenniumVR from "./pages/MillenniumVR.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorGlow />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/genz-vr" element={<GenzVR />} />
          <Route path="/gen-alpha-vr" element={<GenAlphaVR />} />
          <Route path="/millennium-vr" element={<MillenniumVR />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
