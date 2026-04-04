import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Tractor, Cpu, Radar, Leaf, BarChart3, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import millenniumImg from "@/assets/millennium-vr.jpg";
import vrDigital from "@/assets/vr-digital-world.jpg";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Plane,
    title: "VR Drone Piloting",
    desc: "Train drone operators using immersive VR flight simulators — practice crop surveying, spraying routes, and emergency maneuvers risk-free.",
  },
  {
    icon: Tractor,
    title: "Smart Farming Simulations",
    desc: "Walk through virtual fields powered by real satellite data from the Southern University Ag Center to plan planting, irrigation, and harvest cycles.",
  },
  {
    icon: Cpu,
    title: "AI Crop Analysis",
    desc: "AI-powered VR dashboards that visualize crop health, soil composition, and yield predictions in stunning 3D environments.",
  },
  {
    icon: Radar,
    title: "Drone Fleet Management",
    desc: "Monitor and control agricultural drone fleets in a VR command center — real-time telemetry, route optimization, and coverage mapping.",
  },
  {
    icon: Leaf,
    title: "Precision Agriculture",
    desc: "Combine VR visualization with AI analytics for targeted pesticide application, reducing costs by up to 40% and minimizing environmental impact.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    desc: "Transform complex agricultural data into immersive 3D landscapes — see your farm's performance from every angle.",
  },
];

const partnerships = [
  {
    name: "Southern University Ag Center",
    role: "Research Partner",
    desc: "Collaborating on VR-based agricultural training programs and AI-driven crop management solutions for Louisiana's farming communities.",
  },
  {
    name: "AgTech Innovation Lab",
    role: "Technology Partner",
    desc: "Developing next-generation drone control interfaces and AI analytics platforms integrated with immersive VR environments.",
  },
  {
    name: "USDA Extension Services",
    role: "Outreach Partner",
    desc: "Bringing VR agricultural training to rural communities, helping farmers adopt precision agriculture and drone technology.",
  },
];

const MillenniumVR = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={millenniumImg}
            alt="Millennium VR Agricultural Technology"
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
            <Clock className="h-4 w-4" />
            Agricultural VR & AI
          </motion.div>

          <h1 className="apple-text-hero mb-6">
            Millennium <span className="text-gradient">VR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Where cutting-edge VR meets agriculture — drone training, AI-powered crop analytics, and immersive farm management in partnership with the Southern University Ag Center.
          </p>
        </motion.div>
      </section>

      {/* Southern University Ag Center Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <img
              src={vrDigital}
              alt="VR Agricultural Technology"
              className="w-full h-[50vh] md:h-[60vh] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">In Partnership With</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Southern University Ag Center</h2>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Pioneering the future of agriculture through VR training, AI analytics, and drone technology. Our collaboration brings precision farming tools to communities across Louisiana and beyond.
              </p>
            </div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Capabilities</p>
            <h2 className="apple-text-large">VR, Drones & AI in Agriculture</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Transforming farming with immersive virtual reality training, autonomous drone systems, and artificial intelligence analytics.
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

      {/* Partnerships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-5 mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Collaborations</p>
            <h2 className="apple-text-large">Our Partners</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerships.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <TiltCard className="rounded-3xl h-full" tiltAmount={10}>
                  <div className="group flex flex-col space-y-4 p-8 rounded-3xl glass cursor-default h-full">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{p.role}</p>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-500">{p.name}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="apple-text-large">
              The Future of <span className="text-gradient">Farming</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-xl mx-auto">
              Experience how VR, drones, and AI are revolutionizing agriculture. Schedule a demo with our team today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton>
                <Button variant="hero" size="lg" className="gap-2 rounded-full px-10 h-14 text-base">
                  Schedule a Demo <Tractor className="h-5 w-5" />
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

export default MillenniumVR;
