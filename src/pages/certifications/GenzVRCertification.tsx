import Certification from "@/components/Certification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GenzVRCertification = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => navigate("/certifications")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Certifications
          </Button>

          <Certification
            title="Gen-Z VR Gaming Specialist"
            description="Master competitive VR gaming, esports strategies, and advanced gameplay mechanics"
            duration="20 hours"
            level="Intermediate"
            provider="VR Zone by Dr. Devender Rapolu"
            accreditation="Industry Recognized Certification"
            skills={[
              "VR Gaming Fundamentals",
              "Esports Strategy",
              "Multiplayer Coordination",
              "Tournament Play",
              "Motion Controls",
              "Spatial Awareness",
              "Team Communication",
              "Performance Optimization"
            ]}
            color="purple"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GenzVRCertification;
