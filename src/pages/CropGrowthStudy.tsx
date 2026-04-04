import CropGrowthStudy from "@/components/CropGrowthStudy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CropGrowthStudyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <CropGrowthStudy />
    </main>
    <Footer />
  </div>
);

export default CropGrowthStudyPage;
