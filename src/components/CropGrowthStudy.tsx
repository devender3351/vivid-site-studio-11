import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Sprout, 
  LineChart, 
  Calendar,
  Leaf,
  Sun,
  Droplets,
  Thermometer,
  Wind,
  Bug,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Target,
  Scan,
  Database,
  AlertTriangle,
  Clock,
  Camera,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

const growthStages = [
  {
    stage: "Germination",
    dayRange: "Day 1-7",
    description: "Seed absorbs water, root emerges, first leaves appear",
    indicators: ["Soil moisture 60-70%", "Temperature 20-30°C", "No fertilizer needed"],
    color: "bg-amber-500",
    height: "0-5cm"
  },
  {
    stage: "Vegetative",
    dayRange: "Day 8-30",
    description: "Rapid leaf and stem growth, root system development",
    indicators: ["Nitrogen fertilizer", "Regular irrigation", "Pest monitoring"],
    color: "bg-green-500",
    height: "5-25cm"
  },
  {
    stage: "Flowering",
    dayRange: "Day 31-60",
    description: "Reproductive phase begins, flowers appear, pollination occurs",
    indicators: ["Phosphorus boost", "Reduced water", "Disease watch"],
    color: "bg-pink-500",
    height: "25-50cm"
  },
  {
    stage: "Grain Filling",
    dayRange: "Day 61-90",
    description: "Seeds develop and mature, nutrient accumulation in grains",
    indicators: ["Potassium support", "Maintain moisture", "Bird protection"],
    color: "bg-yellow-500",
    height: "50-80cm"
  },
  {
    stage: "Maturity",
    dayRange: "Day 91-120",
    description: "Grains harden, leaves turn yellow, ready for harvest",
    indicators: ["Stop irrigation", "Monitor moisture", "Prepare harvest"],
    color: "bg-orange-500",
    height: "80-100cm"
  }
];

const studyModules = [
  {
    id: 1,
    title: "Growth Stage Identification",
    duration: "3 hours",
    level: "Beginner",
    description: "Learn to identify and document each growth stage with visual markers and measurements.",
    topics: ["Visual indicators", "Height measurement", "Leaf counting", "Stage documentation"],
    icon: Sprout,
  },
  {
    id: 2,
    title: "Environmental Factors",
    duration: "4 hours",
    level: "Intermediate",
    description: "Study how temperature, humidity, light, and soil conditions affect crop growth rates.",
    topics: ["Weather correlation", "Soil analysis", "Microclimate effects", "Seasonal variations"],
    icon: Sun,
  },
  {
    id: 3,
    title: "Growth Data Analysis",
    duration: "4 hours",
    level: "Advanced",
    description: "Use statistical methods and AI tools to analyze growth patterns and predict yields.",
    topics: ["Data collection", "Trend analysis", "Predictive modeling", "Growth curves"],
    icon: LineChart,
  },
  {
    id: 4,
    title: "Nutrient & Water Tracking",
    duration: "3 hours",
    level: "Intermediate",
    description: "Monitor nutrient uptake, fertilizer efficiency, and irrigation impact on growth.",
    topics: ["NPK monitoring", "Water usage", "Deficiency signs", "Optimization"],
    icon: Droplets,
  }
];

const sampleData = [
  { day: 7, height: 3, leaves: 2, health: 95 },
  { day: 14, height: 8, leaves: 4, health: 98 },
  { day: 21, height: 15, leaves: 7, health: 92 },
  { day: 30, height: 25, leaves: 12, health: 88 },
  { day: 45, height: 42, leaves: 18, health: 94 },
  { day: 60, height: 58, leaves: 22, health: 96 },
  { day: 75, height: 72, leaves: 24, health: 91 },
  { day: 90, height: 85, leaves: 26, health: 89 },
];

const CropGrowthStudy = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [selectedStage, setSelectedStage] = useState(0);
  const [enrolled, setEnrolled] = useState(false);
  const { addToCart } = useCart();

  const handleEnroll = () => {
    setEnrolled(true);
    toast.success("Enrolled in Crop Growth Study program!", {
      description: "Your crop monitoring toolkit will be sent to your email.",
    });
  };

  const handleAddToCart = () => {
    addToCart({
      id: "crop-growth-study",
      title: "Crop Growth Study",
      description: "Master the science of crop development. Track, analyze, and optimize plant growth from seed to harvest using modern data-driven techniques.",
      price: 200,
      duration: "14 hours",
      level: "Intermediate",
      category: "agri-training",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20">
              <Sprout className="w-3 h-3 mr-1" />
              Scientific Study Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crop Growth <span className="text-gradient bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Study</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master the science of crop development. Learn to monitor, analyze, and optimize 
              plant growth from seed to harvest using modern techniques and AI-powered tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600"
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
                    Start Learning
                  </>
                )}
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Download Guide
              </Button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
          >
            {[
              { value: "120", label: "Days Growth Cycle" },
              { value: "5", label: "Key Stages" },
              { value: "50+", label: "Data Points" },
              { value: "98%", label: "Accuracy Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-4 rounded-2xl glass"
              >
                <p className="text-2xl md:text-3xl font-bold text-emerald-600">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Growth Stages Timeline */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Complete Growth Cycle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understand each stage of crop development from germination to harvest
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-green-500 to-orange-500 rounded-full hidden md:block" />
          
          <div className="space-y-8">
            {growthStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <Card className={`hover-lift cursor-pointer transition-all ${
                    selectedStage === index ? "ring-2 ring-emerald-500" : ""
                  }`} onClick={() => setSelectedStage(index)}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-4 h-4 rounded-full ${stage.color}`} />
                        <Badge variant="outline">{stage.dayRange}</Badge>
                      </div>
                      <CardTitle className="text-xl">{stage.stage}</CardTitle>
                      <CardDescription>{stage.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium mb-2">Height: {stage.height}</p>
                      <ul className="space-y-1">
                        {stage.indicators.map((indicator, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {indicator}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Dot */}
                <div className={`w-8 h-8 rounded-full ${stage.color} border-4 border-white shadow-lg z-10 flex-shrink-0 hidden md:flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Growth Tracker */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-600">
              <BarChart3 className="w-3 h-3 mr-1" />
              Interactive Tool
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Growth Data Visualization</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track and visualize crop growth metrics over time
            </p>
          </motion.div>

          <Tabs defaultValue="height" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="height">Plant Height</TabsTrigger>
              <TabsTrigger value="leaves">Leaf Count</TabsTrigger>
              <TabsTrigger value="health">Health Score</TabsTrigger>
            </TabsList>
            
            <TabsContent value="height" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {sampleData.map((data, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground w-16">Day {data.day}</span>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>{data.height} cm</span>
                            <span className="text-muted-foreground">{Math.round((data.height / 100) * 100)}%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(data.height / 100) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1, duration: 0.5 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="leaves" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-4 gap-4">
                    {sampleData.map((data, i) => (
                      <div key={i} className="text-center p-4 bg-muted/50 rounded-xl">
                        <p className="text-2xl font-bold text-emerald-600">{data.leaves}</p>
                        <p className="text-xs text-muted-foreground">Day {data.day}</p>
                        <Leaf className="w-5 h-5 mx-auto mt-2 text-green-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="health" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {sampleData.map((data, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Day {data.day}</span>
                          <span className={data.health > 90 ? "text-green-600" : data.health > 80 ? "text-yellow-600" : "text-red-600"}>
                            {data.health}%
                          </span>
                        </div>
                        <Progress value={data.health} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Study Modules */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Study Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive curriculum to master crop growth analysis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {studyModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`h-full cursor-pointer transition-all duration-300 ${
                  activeModule === module.id ? "ring-2 ring-emerald-500" : "hover:shadow-lg"
                }`}
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-emerald-600" />
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
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4 rounded-full" variant="outline">
                        Start Module
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

      {/* Tools & Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Study Tools & Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to conduct professional crop growth studies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                title: "Photo Documentation",
                description: "Capture and compare crop images across growth stages with automatic timestamping"
              },
              {
                icon: Scan,
                title: "AI Measurement",
                description: "Use computer vision to automatically measure plant height and leaf area"
              },
              {
                icon: Database,
                title: "Data Logging",
                description: "Record environmental conditions, treatments, and observations in structured format"
              },
              {
                icon: TrendingUp,
                title: "Growth Analytics",
                description: "Analyze growth rates, identify trends, and compare with expected benchmarks"
              },
              {
                icon: Smartphone,
                title: "Mobile App",
                description: "Field-friendly mobile interface for real-time data entry and monitoring"
              },
              {
                icon: AlertTriangle,
                title: "Anomaly Detection",
                description: "AI-powered alerts for unusual growth patterns or potential issues"
              }
            ].map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <tool.icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10"
        >
          <Sprout className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
          <h2 className="text-3xl font-bold mb-4">Start Your Growth Study Today</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join agricultural researchers and farmers worldwide who use scientific 
            methods to optimize crop production and improve yields.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600"
              onClick={handleEnroll}
              disabled={enrolled}
            >
              {enrolled ? "Access Course" : "Enroll Now - $200"}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-emerald-500/30 text-emerald-700 hover:bg-emerald-50"
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

export default CropGrowthStudy;
