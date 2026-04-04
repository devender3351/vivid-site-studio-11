import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Sprout, 
  Droplets, 
  Bug, 
  Sun, 
  Wind, 
  CheckCircle2, 
  PlayCircle,
  Award,
  Clock,
  TrendingUp,
  ArrowRight,
  Microscope,
  Database,
  ScanLine,
  Leaf,
  BarChart3,
  CloudSun
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

const aiModules = [
  {
    id: 1,
    title: "AI in Agriculture Fundamentals",
    duration: "3 hours",
    level: "Beginner",
    description: "Introduction to machine learning, computer vision, and predictive analytics in modern farming.",
    topics: ["ML basics for agriculture", "Computer vision", "Data collection", "Predictive modeling"],
    icon: Brain,
    completed: true,
  },
  {
    id: 2,
    title: "Smart Irrigation Systems",
    duration: "4 hours",
    level: "Intermediate",
    description: "AI-powered water management, soil moisture prediction, and automated irrigation scheduling.",
    topics: ["Soil sensors", "Weather prediction", "Water optimization", "Drought management"],
    icon: Droplets,
    completed: false,
  },
  {
    id: 3,
    title: "Pest & Disease Detection",
    duration: "3 hours",
    level: "Intermediate",
    description: "Image-based disease identification, pest prediction, and automated treatment recommendations.",
    topics: ["Image recognition", "Disease classification", "Pest prediction", "Treatment AI"],
    icon: Bug,
    completed: false,
  },
  {
    id: 4,
    title: "Yield Prediction & Optimization",
    duration: "4 hours",
    level: "Advanced",
    description: "Advanced analytics for crop yield forecasting, harvest optimization, and market timing.",
    topics: ["Yield modeling", "Harvest planning", "Market analysis", "Profit optimization"],
    icon: TrendingUp,
    completed: false,
  },
];

const ricePhases = [
  {
    phase: "Pre-Planting",
    duration: "2-3 weeks",
    aiFeatures: ["Soil analysis", "Variety selection", "Seed quality AI"],
    icon: Microscope,
  },
  {
    phase: "Nursery Stage",
    duration: "3-4 weeks",
    aiFeatures: ["Growth monitoring", "Disease detection", "Water management"],
    icon: Sprout,
  },
  {
    phase: "Transplanting",
    duration: "1 week",
    aiFeatures: ["Optimal timing", "Spacing optimization", "Weather sync"],
    icon: ScanLine,
  },
  {
    phase: "Vegetative Growth",
    duration: "6-8 weeks",
    aiFeatures: ["Nutrient tracking", "Weed detection", "Growth prediction"],
    icon: Leaf,
  },
  {
    phase: "Flowering & Grain",
    duration: "4-5 weeks",
    aiFeatures: ["Pollination monitoring", "Moisture control", "Disease alert"],
    icon: CloudSun,
  },
  {
    phase: "Harvesting",
    duration: "1-2 weeks",
    aiFeatures: ["Maturity detection", "Yield prediction", "Market timing"],
    icon: BarChart3,
  },
];

const aiBenefits = [
  { value: "35%", label: "Water Savings", icon: Droplets },
  { value: "28%", label: "Yield Increase", icon: TrendingUp },
  { value: "42%", label: "Pest Reduction", icon: Bug },
  { value: "50%", label: "Labor Savings", icon: Clock },
];

const AIRiceCultivation = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [enrolled, setEnrolled] = useState(false);
  const { addToCart } = useCart();

  const handleEnroll = () => {
    setEnrolled(true);
    toast.success("Enrolled in AI Rice Cultivation Training!", {
      description: "Course materials will be sent to your email.",
    });
  };

  const handleAddToCart = () => {
    addToCart({
      id: "ai-rice-cultivation",
      title: "AI Rice Cultivation Training",
      description: "AI-powered smart farming for rice production optimization including pest detection, yield prediction, and automated management.",
      price: 5999,
      duration: "14 hours",
      level: "Advanced",
      category: "agri-training",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/5 to-orange-500/5" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20">
              <Brain className="w-3 h-3 mr-1" />
              AI-Powered Agriculture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI in <span className="text-gradient bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Rice Cultivation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionize your rice farming with artificial intelligence. 
              Learn smart irrigation, pest detection, and yield optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
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
                    Start AI Training
                  </>
                )}
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Benefits Stats */}
      <section className="py-12 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {aiBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl glass hover-lift"
            >
              <benefit.icon className="w-8 h-8 mx-auto mb-3 text-amber-600" />
              <p className="text-3xl font-bold text-amber-600">{benefit.value}</p>
              <p className="text-sm text-muted-foreground">{benefit.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Rice Cultivation Phases */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">6-Phase AI Rice Cultivation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training covering the entire rice cultivation cycle with AI integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ricePhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <Badge variant="secondary">{phase.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">AI-Powered Features:</p>
                    <ul className="space-y-2">
                      {phase.aiFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Brain className="w-4 h-4 text-amber-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Training Modules */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">AI Technology Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master cutting-edge AI technologies specifically designed for rice cultivation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aiModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`h-full cursor-pointer transition-all duration-300 ${
                  activeModule === module.id ? "ring-2 ring-amber-500" : "hover:shadow-lg"
                } ${module.completed ? "border-amber-500/30" : ""}`}
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        module.completed ? "bg-amber-500/20" : "bg-muted"
                      }`}>
                        <module.icon className={`w-6 h-6 ${module.completed ? "text-amber-600" : "text-muted-foreground"}`} />
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
                    {module.completed && <CheckCircle2 className="w-5 h-5 text-amber-600" />}
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
                      <p className="text-sm font-medium">AI Technologies covered:</p>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
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
      </section>

      {/* AI Demo Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-orange-500/10 text-orange-600">
                <Database className="w-3 h-3 mr-1" />
                Machine Learning
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Real-time AI Analysis</h2>
              <p className="text-muted-foreground mb-6">
                Our AI system processes data from satellite imagery, IoT sensors, and weather stations 
                to provide actionable insights for your rice farm.
              </p>
              <Tabs defaultValue="detection" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="detection">Detection</TabsTrigger>
                  <TabsTrigger value="prediction">Prediction</TabsTrigger>
                  <TabsTrigger value="optimization">Optimize</TabsTrigger>
                </TabsList>
                <TabsContent value="detection" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                          <Bug className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <p className="font-semibold">Disease Detected</p>
                          <p className="text-sm text-muted-foreground">Rice Blast - 87% confidence</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        AI identified symptoms in early stage. Recommended treatment: Fungicide application within 48 hours.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="prediction" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-semibold">Yield Forecast</p>
                          <p className="text-sm text-muted-foreground">Predicted: 5.2 tons/hectare</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Based on current growth patterns and weather data, harvest expected in 21 days.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="optimization" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Droplets className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                          <p className="font-semibold">Water Optimization</p>
                          <p className="text-sm text-muted-foreground">30% savings possible</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        AI recommends adjusting irrigation schedule to early morning based on weather forecast.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-32 h-32 mx-auto mb-6 text-amber-600" />
                  <p className="text-2xl font-bold">AI Neural Network</p>
                  <p className="text-muted-foreground">Processing 1M+ Data Points</p>
                  <div className="mt-6 flex justify-center gap-2">
                    {["Soil", "Weather", "Crop", "Market"].map((item) => (
                      <Badge key={item} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-500" />
                  <span className="font-semibold text-sm">Solar Forecast</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Wind className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-sm">Wind Analysis</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h2 className="text-3xl font-bold mb-4">Become an AI-Enabled Rice Farmer</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join 5,000+ farmers across India who have increased their rice yields by up to 28% 
            using our AI-powered cultivation techniques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600"
              onClick={handleEnroll}
              disabled={enrolled}
            >
              {enrolled ? "Continue Learning" : "Enroll Now - ₹5,999"}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-amber-500/30 text-amber-700 hover:bg-amber-50"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AIRiceCultivation;
