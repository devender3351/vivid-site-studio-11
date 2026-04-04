import Certification from "@/components/Certification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MillenniumCertification = () => {
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
            title="Millennium VR Agricultural Expert"
            description="VR-powered precision agriculture, drone simulation, and AI crop management"
            duration="25 hours"
            level="Advanced"
            provider="VR Zone & Southern University Ag Center"
            accreditation="USDA Recognized Program"
            skills={[
              "VR Agricultural Simulations",
              "Drone Operation Basics",
              "AI Crop Analytics",
              "Smart Farming Techniques",
              "Precision Agriculture",
              "Data-Driven Farming",
              "Sustainable Practices",
              "Agri-Tech Integration"
            ]}
            color="green"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MillenniumCertification;
