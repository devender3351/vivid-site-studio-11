import AgriculturalDroneTraining from "@/components/AgriculturalDroneTraining";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AgriculturalDronePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <AgriculturalDroneTraining />
    </main>
    <Footer />
  </div>
);

export default AgriculturalDronePage;
