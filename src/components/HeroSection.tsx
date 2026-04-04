import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vr.jpg";
import vrImmersive from "@/assets/vr-immersive.jpg";
import vrGaming from "@/assets/vr-gaming-action.jpg";
import vrHeadset from "@/assets/vr-headset-floating.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { useRef, useState } from "react";
import ImageCarousel from "@/components/ImageCarousel";
import ImageLightbox from "@/components/ImageLightbox";
import AnimatedHeading from "@/components/AnimatedHeading";
import { useNavigate } from "react-router-dom";

const heroImages = [
  { src: heroImage, alt: "Dr. Devender Rapolu VR Lab" },
  { src: vrImmersive, alt: "Immersive VR hand tracking" },
  { src: vrGaming, alt: "VR gaming tournament" },
  { src: vrHeadset, alt: "VR headset product shot" },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center pt-16 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-accent cursor-pointer hover:bg-accent/10 transition-colors"
              onClick={() => navigate("/register")}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Now Open — Book Your Session
            </motion.div>

            <AnimatedHeading />

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Training and learning using VR — immersive experiences that transform how we educate, train, and entertain.
            </p>

            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="gap-2 rounded-full px-8 h-14 text-base"
                  onClick={() => navigate("/register")}
                >
                  Explore Experiences <ArrowRight className="h-5 w-5" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="heroOutline" size="lg" className="gap-2 rounded-full px-8 h-14 text-base">
                  <Play className="h-5 w-5" /> Watch Demo
                </Button>
              </MagneticButton>
            </div>

            {/* Interactive thumbnail strip */}
            <div className="flex gap-3 pt-4">
              {heroImages.map((img, i) => (
                <motion.button
                  key={img.alt}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  onClick={() => openLightbox(i)}
                  className="group relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300 flex-shrink-0"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-300" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Hero carousel */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <ImageCarousel autoPlay interval={5000}>
              {heroImages.map((img, i) => (
                <div
                  key={img.alt}
                  className="relative cursor-pointer rounded-3xl overflow-hidden"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={768}
                    className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm text-muted-foreground font-medium">{img.alt}</p>
                  </div>
                </div>
              ))}
            </ImageCarousel>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          {[
            { value: "10K+", label: "Happy Users" },
            { value: "50+", label: "VR Experiences" },
            { value: "4.9★", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-2xl glass hover-lift cursor-default">
              <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <ImageLightbox
        images={heroImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
