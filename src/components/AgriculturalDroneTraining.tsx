import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plane, 
  Sprout, 
  Camera, 
  Map, 
  Thermometer, 
  Droplets, 
  Wind, 
  CheckCircle2, 
  PlayCircle,
  Award,
  Clock,
  Users,
  ArrowRight,
  Target,
  Radio,
  Battery,
  Navigation,
  Shield,
  AlertTriangle,
  Database,
  Wifi,
  Satellite,
  Scan,
  Zap,
  Cloud,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { LucideIcon } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

interface Module {
  id: number;
  title: string;
  duration: string;
  level: string;
  description: string;
  topics: string[];
  icon: LucideIcon;
  completed: boolean;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Drone Basics & Safety",
    duration: "2 hours",
    level: "Beginner",
    description: "Learn fundamental drone operations, safety protocols, and regulations for agricultural use.",
    topics: ["Drone components", "Pre-flight checks", "Safety guidelines", "Weather considerations"],
    icon: Plane,
    completed: true,
  },
  {
    id: 2,
    title: "Pesticide Spraying Mastery",
    duration: "5 hours",
    level: "Advanced",
    description: "Master precision pesticide application with drones. Learn calibration, drift control, and chemical safety protocols.",
    topics: ["Chemical calibration", "Spray patterns", "Drift management", "Safety protocols", "PPE requirements"],
    icon: Droplets,
    completed: false,
  },
  {
    id: 3,
    title: "Real-Time Data Collection",
    duration: "4 hours",
    level: "Intermediate",
    description: "Advanced techniques for gathering and analyzing real-time crop data using multispectral and thermal sensors.",
    topics: ["Live telemetry", "Multispectral imaging", "Crop health analytics", "Data transmission"],
    icon: Database,
    completed: false,
  },
  {
    id: 4,
    title: "Crop Monitoring & Imaging",
    duration: "3 hours",
    level: "Intermediate",
    description: "Master aerial photography, multispectral imaging, and crop health assessment techniques.",
    topics: ["Camera settings", "NDVI analysis", "Crop stress detection", "Growth monitoring"],
    icon: Camera,
    completed: false,
  },
  {
    id: 5,
    title: "Mapping & Surveying",
    duration: "3 hours",
    level: "Intermediate",
    description: "Create accurate field maps, 3D models, and conduct land surveys using drone technology.",
    topics: ["Flight planning", "Photogrammetry", "GIS integration", "Boundary mapping"],
    icon: Map,
    completed: false,
  },
];

const features = [
  { icon: Target, title: "Precision Application", desc: "Accurate to within 2cm for optimal coverage" },
  { icon: Battery, title: "Extended Flight Time", desc: "Up to 40 minutes per battery cycle" },
  { icon: Radio, title: "Real-time Monitoring", desc: "Live telemetry and camera feed" },
  { icon: Navigation, title: "Autonomous Flight", desc: "GPS-guided waypoint navigation" },
];

const stats = [
  { label: "Training Hours", value: "12+" },
  { label: "Practical Sessions", value: "8" },
  { label: "Certification", value: "DGCA Approved" },
  { label: "Success Rate", value: "98%" },
];

const AgriculturalDroneTraining = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [enrolled, setEnrolled] = useState(false);
  const { addToCart } = useCart();

  const handleEnroll = () => {
    setEnrolled(true);
    toast.success("Successfully enrolled in Agricultural Drone Training!", {
      description: "Check your email for course access details.",
    });
  };

  const handleAddToCart = () => {
    addToCart({
      id: "agri-drone-training",
      title: "Agricultural Drone Training",
      description: "Master precision agriculture with cutting-edge drone technology including pesticide spraying and real-time data gathering.",
      price: 4999,
      duration: "12+ hours",
      level: "Professional",
      category: "agri-training",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-green-500/10 text-green-600 hover:bg-green-500/20">
              <Plane className="w-3 h-3 mr-1" />
              Professional Certification
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Agricultural <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Drone Training</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master precision agriculture with cutting-edge drone technology. 
              Learn crop monitoring, spraying, and mapping from industry experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                onClick={handleEnroll}
                disabled={enrolled}
              >
                {enrolled ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Enrolled
                  </>
                ) : (
                  <>
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start Training
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-green-500/30 text-green-700 hover:bg-green-50"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-4 rounded-2xl glass"
              >
                <p className="text-2xl md:text-3xl font-bold text-green-600">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Advanced Drone Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn to operate drones equipped with cutting-edge agricultural technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Training Modules</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed by agricultural drone experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 ${
                    activeModule === module.id ? "ring-2 ring-green-500" : "hover:shadow-lg"
                  } ${module.completed ? "border-green-500/30" : ""}`}
                  onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          module.completed ? "bg-green-500/20" : "bg-muted"
                        }`}>
                          <module.icon className={`w-6 h-6 ${module.completed ? "text-green-600" : "text-muted-foreground"}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Clock className="w-3 h-3" />
                            {module.duration}
                            <span className="mx-1">•</span>
                            <span className={module.level === "Beginner" ? "text-green-600" : module.level === "Advanced" ? "text-orange-600" : "text-blue-600"}>
                              {module.level}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                      {module.completed && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                    
                    {activeModule === module.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-3"
                      >
                        <p className="text-sm font-medium">Topics covered:</p>
                        <ul className="space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-4 rounded-full" variant="outline">
                          {module.completed ? "Review Module" : "Start Module"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-600">
              <Sprout className="w-3 h-3 mr-1" />
              Hands-on Training
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Professional Drone Equipment</h2>
            <p className="text-muted-foreground mb-6">
              Train on industry-standard agricultural drones including DJI Agras series, 
              equipped with advanced spraying systems, multispectral cameras, and 
              precision navigation technology.
            </p>
            <ul className="space-y-3">
              {[
                "DJI Agras T40 & T50 training",
                "10L to 50L payload capacity drones",
                "RTK-GPS precision positioning",
                "Multispectral & thermal cameras",
                "Automated flight planning software",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <Plane className="w-32 h-32 mx-auto mb-6 text-green-600" />
                <p className="text-2xl font-bold">Agricultural Drone</p>
                <p className="text-muted-foreground">Precision Farming Technology</p>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">Thermal Imaging</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Wind Resistance</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pesticide Spraying Section */}
      <section className="py-16 bg-red-50/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Droplets className="w-32 h-32 mx-auto mb-6 text-red-600" />
                  <p className="text-2xl font-bold">Precision Spraying</p>
                  <p className="text-muted-foreground">Safe & Efficient Application</p>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">Safety First</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">99% Accuracy</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <Badge className="mb-4 bg-red-500/10 text-red-600">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Advanced Module
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Pesticide Spraying Mastery</h2>
              <p className="text-muted-foreground mb-6">
                Master the art of precision pesticide application with agricultural drones. 
                Learn to minimize chemical usage while maximizing coverage and effectiveness.
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { title: "Chemical Calibration", desc: "Precise mixing ratios for different crops and pests" },
                  { title: "Spray Pattern Optimization", desc: "Adjust droplet size and flow rate for weather conditions" },
                  { title: "Drift Management", desc: "Techniques to prevent off-target chemical dispersion" },
                  { title: "Safety Protocols", desc: "PPE requirements and handling of hazardous chemicals" },
                  { title: "Regulatory Compliance", desc: "FIFRA guidelines and local agricultural regulations" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 border border-red-200">
                <p className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Safety Certification Required
                </p>
                <p className="text-sm text-muted-foreground">
                  This module requires completion of safety training and passing a chemical handling assessment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-Time Data Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-600">
              <Database className="w-3 h-3 mr-1" />
              Live Analytics
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Real-Time Data Gathering</h2>
            <p className="text-muted-foreground mb-6">
              Harness the power of live telemetry and multispectral imaging to make 
              instant decisions for your crops. Transform raw data into actionable insights.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Satellite, title: "Satellite Sync", desc: "Real-time weather & soil data" },
                { icon: Scan, title: "Multispectral", desc: "NDVI, NDRE imaging" },
                { icon: Wifi, title: "Live Stream", desc: "HD video transmission" },
                { icon: Cloud, title: "Cloud Storage", desc: "Instant data backup" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <item.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {[
                "Live crop health monitoring with instant alerts",
                "Soil moisture mapping for precision irrigation",
                "Pest detection using AI-powered image analysis",
                "Growth stage tracking with automated reports",
                "Weather integration for flight planning",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <Database className="w-32 h-32 mx-auto mb-6 text-blue-600" />
                <p className="text-2xl font-bold">Live Data Hub</p>
                <p className="text-muted-foreground">Real-Time Analytics</p>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-sm">Mobile Dashboard</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <Radio className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-sm">5km Range</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-green-600" />
          <h2 className="text-3xl font-bold mb-4">Get Certified Today</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join over 2,000 farmers and agricultural professionals who have transformed 
            their farming operations with drone technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
              onClick={handleEnroll}
              disabled={enrolled}
            >
              {enrolled ? "Continue Learning" : "Enroll Now - ₹4,999"}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full gap-2 border-green-500/30 text-green-700 hover:bg-green-50"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AgriculturalDroneTraining;
