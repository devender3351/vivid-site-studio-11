import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Scan,
  Camera,
  Brain,
  Sprout,
  Droplets,
  Target,
  Zap,
  Eye,
  BarChart3,
  ArrowRight,
  PlayCircle,
  Wifi,
  Satellite,
  ScanLine
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const aiCapabilities = [
  {
    icon: Scan,
    title: "AI-Powered Imaging",
    description: "Advanced multispectral cameras capture rice crop health, stress levels, and growth patterns with 99% accuracy"
  },
  {
    icon: Brain,
    title: "Smart Analysis",
    description: "Machine learning algorithms process imagery to detect diseases, nutrient deficiencies, and pest infestations"
  },
  {
    icon: Target,
    title: "Precision Spraying",
    description: "Targeted pesticide and fertilizer application only where needed, reducing chemical usage by 40%"
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description: "Instant notifications for irrigation needs, pest detection, and harvest readiness"
  }
];

const imagingTypes = [
  {
    type: "RGB Imaging",
    purpose: "Visual crop assessment",
    resolution: "4K Ultra HD",
    useCase: "Growth monitoring, weed detection"
  },
  {
    type: "Multispectral",
    purpose: "Plant health analysis",
    resolution: "2cm/pixel",
    useCase: "NDVI, stress detection"
  },
  {
    type: "Thermal Infrared",
    purpose: "Irrigation management",
    resolution: "5cm/pixel",
    useCase: "Water stress, soil moisture"
  },
  {
    type: "LiDAR Scanning",
    purpose: "3D crop mapping",
    resolution: "1cm accuracy",
    useCase: "Height mapping, biomass"
  }
];

const stats = [
  { value: "40%", label: "Chemical Reduction" },
  { value: "30%", label: "Water Savings" },
  { value: "25%", label: "Yield Increase" },
  { value: "99%", label: "Detection Accuracy" }
];

const AiDronesRiceCropping = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleLearnMore = () => {
    toast.success("Opening AI Rice Drone Training", {
      description: "Redirecting to detailed training module..."
    });
    navigate("/ai-rice-cultivation");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <Wifi className="w-3 h-3 mr-1" />
            Next-Gen Agricultural Technology
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
            AI Drones for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">
              Rice Cropping
            </span>
          </h1>
          
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary drone technology powered by artificial intelligence. 
            Capture high-resolution crop imagery, detect issues before they spread, 
            and optimize your rice harvest with precision agriculture.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-white text-emerald-900 hover:bg-green-50 font-semibold"
              onClick={handleLearnMore}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Explore Technology
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate("/agricultural-drone")}
            >
              View Training
            </Button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <p className="text-3xl md:text-4xl font-bold text-emerald-300">{stat.value}</p>
              <p className="text-sm text-green-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Intelligent Crop Monitoring
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/30 flex items-center justify-center mb-4">
                      <capability.icon className="w-7 h-7 text-emerald-300" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                    <p className="text-sm text-green-100/80">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imaging Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                <Camera className="w-3 h-3 mr-1" />
                Advanced Imaging
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                Multi-Sensor Drone Technology
              </h2>
              <p className="text-green-100 mb-6">
                Our AI drones are equipped with cutting-edge imaging systems that capture 
                data beyond the visible spectrum. From RGB cameras for basic monitoring 
                to LiDAR for precision 3D mapping, get complete visibility of your rice crop health.
              </p>
              
              <div className="space-y-4">
                {imagingTypes.map((type, index) => (
                  <motion.div
                    key={type.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <ScanLine className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{type.type}</p>
                      <p className="text-xs text-green-100/70">{type.purpose} • {type.resolution}</p>
                    </div>
                    <Badge variant="outline" className="border-white/30 text-white text-xs">
                      {type.useCase}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/30 to-green-600/30 p-8 flex items-center justify-center border border-white/20 backdrop-blur-sm"
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Plane className="w-32 h-32 mx-auto mb-6 text-emerald-300" />
                  </motion.div>
                  <p className="text-2xl font-bold text-white">AI Drone Active</p>
                  <p className="text-green-200">Scanning Rice Field...</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <Badge className="bg-green-500/30 text-green-200 border-green-500/30">
                      <Satellite className="w-3 h-3 mr-1" />
                      Live Feed
                    </Badge>
                    <Badge className="bg-emerald-500/30 text-emerald-200 border-emerald-500/30">
                      <Eye className="w-3 h-3 mr-1" />
                      AI Vision
                    </Badge>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Info Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-sm text-gray-800">Yield: +25%</span>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-sm text-gray-800">Water Saved: 30%</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <Sprout className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Rice Farming
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Join thousands of farmers using AI drone technology to increase yields, 
            reduce costs, and farm more sustainably.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-white text-emerald-900 hover:bg-green-50 font-semibold"
              onClick={() => navigate("/ai-rice-cultivation")}
            >
              Start Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate("/crop-growth-study")}
            >
              View Crop Study
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiDronesRiceCropping;
