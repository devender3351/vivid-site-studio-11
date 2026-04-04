import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  Plane, 
  Brain,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  PlayCircle,
  Leaf,
  Scan,
  Wifi
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import TiltCard from "@/components/TiltCard";

const stats = [
  { icon: Sprout, label: "Training Programs", value: "50+" },
  { icon: Users, label: "Farmers Trained", value: "10K+" },
  { icon: Award, label: "Certifications", value: "5K+" },
  { icon: TrendingUp, label: "Yield Increase", value: "25%" },
];

const features = [
  {
    icon: Plane,
    title: "Drone Training",
    description: "Master precision agriculture with cutting-edge drone technology",
  },
  {
    icon: Sprout,
    title: "Crop Management",
    description: "Learn comprehensive rice cultivation from seed to harvest",
  },
  {
    icon: Brain,
    title: "AI Analytics",
    description: "Harness AI power for smart farming decisions",
  },
];

const MainPage = () => {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Hero Section - Agriculture Themed */}
      <div className="relative min-h-screen">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
          {/* Animated Blobs */}
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.3, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/20 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center pt-20">
          {/* Central Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-green-600/30 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center">
              <Leaf className="w-12 h-12 text-emerald-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Sprout className="w-3 h-3 mr-1" />
              AI + GIS + VR Agriculture
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="apple-text-hero max-w-4xl mb-6 text-white"
          >
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">Farming</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-green-100/80 max-w-2xl mb-10"
          >
            Master modern agriculture with immersive VR training in drone operations, 
            crop management, and AI-powered analytics
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-white text-emerald-900 hover:bg-green-50"
              onClick={() => navigate("/signup")}
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Start Training
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate("/certifications")}
            >
              View Certifications
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard className="rounded-3xl">
                <div className="group flex flex-col items-center text-center space-y-4 p-10 rounded-3xl glass cursor-default">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900/50 to-green-900/50 p-8 border border-emerald-500/20"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center">
                <Plane className="w-16 h-16 text-emerald-400" />
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-600/20 flex items-center justify-center">
                <Scan className="w-16 h-16 text-green-400" />
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-600/20 flex items-center justify-center">
                <Brain className="w-16 h-16 text-teal-400" />
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                <Wifi className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              About Us
            </p>
            <h2 className="apple-text-large mb-6">
              VR Zone <span className="text-gradient-cyan">Academy</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded by Dr. Devender Rapolu in partnership with Southern University Ag Center, 
              we specialize in immersive VR training for modern agriculture. Our programs combine 
              cutting-edge drone technology, AI analytics, and hands-on crop management techniques.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From drone piloting certification to AI-powered rice cultivation, we prepare 
              farmers for the future of agriculture with practical, engaging virtual reality 
              experiences.
            </p>
            <Button 
              className="rounded-full"
              onClick={() => navigate("/registration")}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Transforming Agriculture Through <span className="text-gradient">VR Training</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard className="rounded-3xl">
                <div className="group flex flex-col items-center text-center space-y-4 p-8 rounded-3xl glass cursor-default">
                  <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-4xl font-bold">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
