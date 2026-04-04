import { motion } from "framer-motion";
import vrGaming from "@/assets/vr-gaming-action.jpg";
import vrImmersive from "@/assets/vr-immersive.jpg";
import vrHeadset from "@/assets/vr-headset-floating.jpg";
import vrLounge from "@/assets/vr-lounge.jpg";
import vrHappy from "@/assets/vr-happy-group.jpg";

const brands = ["TechCorp", "EduVerse", "NeuroPlay", "VisionLab", "ArcadeX"];

const galleryImages = [
  { src: vrGaming, alt: "VR Gaming Action" },
  { src: vrImmersive, alt: "Immersive VR" },
  { src: vrHeadset, alt: "VR Headset" },
  { src: vrLounge, alt: "VR Lounge" },
  { src: vrHappy, alt: "Happy VR Users" },
];

const TrustedBySection = () => (
  <section className="py-16 border-y border-border/20">
    <div className="container mx-auto px-4">
      {/* Scrolling image strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <div className="flex gap-4 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 flex-shrink-0"
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="group relative w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-medium text-foreground">{img.alt}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Brands */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {brands.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-xl font-bold text-muted-foreground/30 tracking-wide hover:text-muted-foreground/60 transition-colors duration-500 cursor-default"
            >
              {b}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustedBySection;
