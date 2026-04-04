import Certification from "@/components/Certification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GenAlphaCertification = () => {
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
            title="Gen Alpha Creative VR Designer"
            description="Create immersive 3D worlds, digital art, and interactive educational content"
            duration="15 hours"
            level="Beginner"
            provider="VR Zone by Dr. Devender Rapolu"
            accreditation="Child-Safe VR Certified"
            skills={[
              "3D Design Basics",
              "Creative VR Tools",
              "Educational Content Creation",
              "Safe VR Practices",
              "Digital Art",
              "World Building",
              "Interactive Storytelling",
              "Collaborative Design"
            ]}
            color="blue"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GenAlphaCertification;
