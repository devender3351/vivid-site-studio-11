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
import Registration from "./pages/Registration.tsx";
import AgriculturalDrone from "./pages/AgriculturalDrone.tsx";
import AIRiceCultivation from "./pages/AIRiceCultivation.tsx";
import Certifications from "./pages/Certifications.tsx";
import GenzVRCertification from "./pages/certifications/GenzVRCertification.tsx";
import GenAlphaCertification from "./pages/certifications/GenAlphaCertification.tsx";
import MillenniumCertification from "./pages/certifications/MillenniumCertification.tsx";
import AgriDroneCertification from "./pages/certifications/AgriDroneCertification.tsx";
import AIRiceCertification from "./pages/certifications/AIRiceCertification.tsx";

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
          <Route path="/register" element={<Registration />} />
          <Route path="/agricultural-drone" element={<AgriculturalDrone />} />
          <Route path="/ai-rice-cultivation" element={<AIRiceCultivation />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/certification/genz-vr" element={<GenzVRCertification />} />
          <Route path="/certification/gen-alpha" element={<GenAlphaCertification />} />
          <Route path="/certification/millennium" element={<MillenniumCertification />} />
          <Route path="/certification/agricultural-drone" element={<AgriDroneCertification />} />
          <Route path="/certification/ai-rice-cultivation" element={<AIRiceCertification />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
