import { Button } from "@/components/ui/button";
import { ArrowLeft, Gamepad2, Swords, Trophy, Users, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import genzImg from "@/assets/genz-vr.jpg";
import vrGaming from "@/assets/vr-gaming-action.jpg";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Swords,
    title: "Multiplayer Arenas",
    desc: "Battle royale, team deathmatch, and co-op survival modes with up to 16 players in the same arena.",
  },
  {
    icon: Trophy,
    title: "Esports Tournaments",
    desc: "Weekly competitive tournaments with leaderboards, prizes, and live spectator streaming.",
  },
  {
    icon: Target,
    title: "Precision Shooters",
    desc: "Military-grade haptic feedback controllers for the most realistic FPS experience ever created.",
  },
  {
    icon: Zap,
    title: "Motion Tracking",
    desc: "Full-body motion capture suits that translate every move into pixel-perfect in-game actions.",
  },
  {
    icon: Users,
    title: "Social Lobbies",
    desc: "Hang out with friends in customizable virtual spaces between matches.",
  },
  {
    icon: Gamepad2,
    title: "Retro Arcade Mode",
    desc: "Classic arcade cabinets reimagined in VR — play Pac-Man, Space Invaders, and more in 3D.",
  },
];

const GenzVR = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={genzImg}
            alt="Genz VR Gaming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="container mx-auto px-4 relative z-10"
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-accent mb-6"
          >
            <Gamepad2 className="h-4 w-4" />
            Gaming Oriented
          </motion.div>

          <h1 className="apple-text-hero mb-6">
            Genz <span className="text-gradient">VR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            High-energy, competitive VR gaming experiences designed for the Gen-Z audience — fast-paced action, multiplayer arenas, and esports-ready setups.
          </p>
        </motion.div>
      </section>

      {/* Showcase image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={vrGaming}
              alt="VR Gaming Tournament"
              className="w-full h-[50vh] md:h-[60vh] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-5 mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Features</p>
            <h2 className="apple-text-large">Built for Gamers</h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Every detail engineered for the ultimate competitive VR gaming experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              >
                <TiltCard className="rounded-3xl h-full" tiltAmount={10}>
                  <div className="group flex flex-col space-y-4 p-8 rounded-3xl glass cursor-default h-full">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                      <f.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-500">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="apple-text-large">
              Ready to <span className="text-gradient">Compete</span>?
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-xl mx-auto">
              Step into the arena and prove your skills against players from around the world.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="gap-2 rounded-full px-10 h-14 text-base"
                  onClick={() => navigate("/register")}
                >
                  Book a Session <Gamepad2 className="h-5 w-5" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="heroOutline" size="lg" className="rounded-full px-10 h-14 text-base" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GenzVR;
