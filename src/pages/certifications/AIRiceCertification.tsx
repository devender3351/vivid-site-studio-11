import Certification from "@/components/Certification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIRiceCertification = () => {
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
            title="AI Rice Cultivation Specialist"
            description="AI-powered smart farming for rice production optimization and automation"
            duration="14 hours"
            level="Advanced"
            provider="VR Zone & AI Farming Institute"
            accreditation="AI Agriculture Certified"
            skills={[
              "AI Farming Systems",
              "Smart Irrigation",
              "Pest Detection AI",
              "Yield Prediction",
              "Machine Learning Basics",
              "Data Analytics",
              "Automated Farming",
              "Climate Adaptation"
            ]}
            color="amber"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIRiceCertification;
