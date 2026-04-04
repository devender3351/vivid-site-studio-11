import { Gamepad2, Palette, Clock, ArrowRight, Plane, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import genzImg from "@/assets/genz-vr.jpg";
import genalphaImg from "@/assets/genalpha-vr.jpg";
import millenniumImg from "@/assets/millennium-vr.jpg";
import vrGaming from "@/assets/vr-gaming-action.jpg";
import TiltCard from "@/components/TiltCard";
import ImageLightbox from "@/components/ImageLightbox";

const services = [
  {
    icon: Gamepad2,
    title: "Genz VR",
    desc: "Gaming oriented",
    detail: "High-energy, competitive VR gaming experiences designed for the Gen-Z audience — fast-paced action, multiplayer arenas, and esports-ready setups.",
    image: genzImg,
    extraImages: [vrGaming],
    route: "/genz-vr",
  },
  {
    icon: Palette,
    title: "Gen Alpha VR",
    desc: "Creative VR",
    detail: "Imagination-powered VR for the youngest generation — build worlds, paint in 3D, and learn through play in safe, age-appropriate environments.",
    image: genalphaImg,
    extraImages: [],
    route: "/gen-alpha-vr",
  },
  {
    icon: Clock,
    title: "Millennium VR",
    desc: "Agricultural VR & AI",
    detail: "VR-powered drone training, AI crop analytics, and precision agriculture — developed in partnership with the Southern University Ag Center.",
    image: millenniumImg,
    extraImages: [],
    route: "/millennium-vr",
  },
  {
    icon: Plane,
    title: "Agri Drone Training",
    desc: "Precision Agriculture",
    detail: "Master agricultural drone operations including crop monitoring, precision spraying, and field mapping. DGCA certified training program.",
    image: millenniumImg,
    extraImages: [],
    route: "/agricultural-drone",
  },
  {
    icon: Brain,
    title: "AI Rice Cultivation",
    desc: "Smart Farming AI",
    detail: "Learn AI-powered rice farming techniques including smart irrigation, pest detection, yield prediction, and automated crop management.",
    image: millenniumImg,
    extraImages: [],
    route: "/ai-rice-cultivation",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (service: typeof services[0], imgIndex: number) => {
    const imgs = [{ src: service.image, alt: service.title }, ...service.extraImages.map((s) => ({ src: s, alt: service.title }))];
    setLightboxImages(imgs);
    setLightboxIndex(imgIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-5 mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Experiences</p>
          <h2 className="apple-text-large">Choose Your Reality</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Three distinct VR worlds crafted for different generations and interests.
          </p>
        </motion.div>

        <div className="space-y-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard className="rounded-3xl" tiltAmount={8}>
                <div className={`group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden glass-strong cursor-pointer`}>
                  {/* Image side with interactive zoom */}
                  <div
                    className={`relative overflow-hidden h-72 md:h-[400px] ${i % 2 === 1 ? "md:order-2" : ""}`}
                    onClick={() => openLightbox(s, 0)}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="px-4 py-2 rounded-full glass-strong text-sm font-medium">
                        Click to view
                      </div>
                    </div>
                    {/* Animated border glow */}
                    <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-3xl transition-colors duration-700" />
                  </div>

                  {/* Content side */}
                  <div className={`flex flex-col justify-center p-10 md:p-16 space-y-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                      <s.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3
                        onClick={(e) => { e.stopPropagation(); navigate(s.route); }}
                        className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors duration-500 cursor-pointer hover:underline decoration-accent underline-offset-4 decoration-2"
                      >
                        {s.title}
                        <ArrowRight className="inline-block ml-2 h-6 w-6 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-500" />
                      </h3>
                      <p className="text-accent font-medium">{s.desc}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{s.detail}</p>

                    {/* Extra image thumbnails */}
                    {s.extraImages.length > 0 && (
                      <div className="flex gap-3">
                        {s.extraImages.map((ex, j) => (
                          <button
                            key={j}
                            onClick={() => openLightbox(s, j + 1)}
                            className="w-16 h-16 rounded-xl overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300"
                          >
                            <img src={ex} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(s.route); }}
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-500 w-fit"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default ServicesSection;
