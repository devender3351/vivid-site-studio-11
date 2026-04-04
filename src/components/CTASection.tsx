import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import vrDigital from "@/assets/vr-digital-world.jpg";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={vrDigital}
          alt="Digital VR world"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="apple-text-large leading-tight">
            Ready to Step Into the{" "}
            <span className="text-gradient">Future</span>?
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-xl mx-auto">
            Book your VR session today and experience entertainment, training, and learning like never before.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton>
              <Button 
                variant="hero" 
                size="lg" 
                className="gap-2 rounded-full px-10 h-14 text-base"
                onClick={() => navigate("/register")}
              >
                Book a Session <ArrowRight className="h-5 w-5" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="rounded-full px-10 h-14 text-base"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
