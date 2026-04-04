import { Monitor, Brain, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import aboutImage from "@/assets/about-vr.jpg";
import vrLounge from "@/assets/vr-lounge.jpg";
import vrHappy from "@/assets/vr-happy-group.jpg";
import TiltCard from "@/components/TiltCard";
import ImageLightbox from "@/components/ImageLightbox";

const stats = [
  { icon: Monitor, label: "VR Experiences", value: "50+" },
  { icon: Brain, label: "Training Programs", value: "200+" },
  { icon: Users, label: "Happy Users", value: "10K+" },
];

const aboutImages = [
  { src: aboutImage, alt: "VR Zone Center" },
  { src: vrLounge, alt: "VR Lounge Area" },
  { src: vrHappy, alt: "Happy VR Users" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Main parallax image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-3xl overflow-hidden mb-12 relative cursor-pointer"
          onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
        >
          <motion.img
            style={{ scale: imageScale }}
            src={aboutImage}
            alt="VR Zone entertainment center interior"
            width={1920}
            height={768}
            loading="lazy"
            className="w-full h-[50vh] md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">About Us</p>
            <h2 className="apple-text-large max-w-2xl">
              VR <span className="text-gradient-cyan">Zone</span>
            </h2>
          </div>
          {/* Click hint */}
          <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground opacity-0 hover:opacity-100 transition-opacity">
            Click to expand
          </div>
        </motion.div>

        {/* Interactive image grid */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          {aboutImages.slice(1).map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group rounded-2xl overflow-hidden cursor-pointer relative"
              onClick={() => { setLightboxIndex(i + 1); setLightboxOpen(true); }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-20"
        >
          VR Zone is a cutting-edge virtual reality hub founded by Dr. Devender Rapolu. We specialize in creating immersive VR experiences for entertainment, corporate training, and education.
        </motion.p>

        {/* Stats with tilt cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard className="rounded-3xl">
                <div className="group flex flex-col items-center text-center space-y-4 p-10 rounded-3xl glass cursor-default">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                    <s.icon className="h-7 w-7 text-accent" />
                  </div>
                  <span className="text-4xl font-bold">{s.value}</span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={aboutImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default AboutSection;
