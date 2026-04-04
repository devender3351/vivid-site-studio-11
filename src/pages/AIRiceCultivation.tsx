import AIRiceCultivation from "@/components/AIRiceCultivation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIRiceCultivationPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <AIRiceCultivation />
    </main>
    <Footer />
  </div>
);

export default AIRiceCultivationPage;
