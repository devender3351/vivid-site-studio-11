import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import InteractiveAgriTechShowcase from "@/components/InteractiveAgriTechShowcase";
import TrustedBySection from "@/components/TrustedBySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <MainPage />
    <InteractiveAgriTechShowcase 
      image1="/assets/agri-tech-showcase-1.jpg"
      image2="/assets/agri-tech-showcase-2.jpg"
    />
    <TrustedBySection />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
