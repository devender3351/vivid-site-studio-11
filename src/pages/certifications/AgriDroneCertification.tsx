import Certification from "@/components/Certification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgriDroneCertification = () => {
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
            title="DGCA Agricultural Drone Pilot"
            description="Professional drone operation for crop monitoring, spraying, and field mapping"
            duration="12 hours"
            level="Professional"
            provider="VR Zone & DGCA Approved Center"
            accreditation="DGCA India Certified"
            skills={[
              "Drone Piloting",
              "Precision Agriculture",
              "Crop Monitoring",
              "Aerial Spraying",
              "Field Mapping",
              "Flight Planning",
              "Safety Protocols",
              "Equipment Maintenance"
            ]}
            color="green"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgriDroneCertification;
