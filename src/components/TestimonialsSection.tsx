import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import vrHappy from "@/assets/vr-happy-group.jpg";
import vrLounge from "@/assets/vr-lounge.jpg";
import vrGaming from "@/assets/vr-gaming-action.jpg";
import TiltCard from "@/components/TiltCard";
import ImageLightbox from "@/components/ImageLightbox";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Corporate Trainer",
    quote: "VR Zone transformed our onboarding process. New hires complete safety training 3x faster with better retention. Dr. Rapolu's team understood our needs perfectly.",
    avatar: "PS",
    image: vrLounge,
  },
  {
    name: "Jason Mitchell",
    role: "Gaming Enthusiast",
    quote: "The Genz VR arena is unreal! I've been to VR arcades worldwide and this is hands-down the most immersive multiplayer experience I've ever had.",
    avatar: "JM",
    image: vrGaming,
  },
  {
    name: "Ananya Reddy",
    role: "Parent & Educator",
    quote: "My kids absolutely love the Gen Alpha creative sessions. They come home buzzing with ideas. It's screen time I actually feel good about.",
    avatar: "AR",
    image: vrHappy,
  },
];

const TestimonialsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = testimonials.map((t) => ({ src: t.image, alt: `${t.name}'s VR experience` }));

  return (
    <section id="testimonials" className="py-32 section-alt relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-5 mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Testimonials</p>
          <h2 className="apple-text-large">What People Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard className="rounded-3xl h-full" tiltAmount={10}>
                <div className="group glass rounded-3xl overflow-hidden h-full flex flex-col">
                  {/* Interactive image */}
                  <div
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                  >
                    <img
                      src={t.image}
                      alt={`${t.name}'s VR experience`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <Quote className="h-8 w-8 text-accent/15 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default TestimonialsSection;
