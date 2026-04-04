import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain,
  MapPin,
  Glasses,
  Sprout,
  TrendingUp,
  Shield,
  Award,
  ArrowRight,
  Database,
  CloudSun,
  Droplets,
  Bug,
  Calendar,
  Factory,
  GraduationCap,
  PlayCircle,
  Leaf,
  Cpu,
  Wifi,
  Target,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    icon: Brain,
    title: "AI + Predictive Module",
    description: "Crop monitoring using image processing, harvest prediction using agronomic formulas, yield estimation using AI models",
    features: ["Disease Detection", "Yield Prediction", "Harvest Forecast", "GDD Model"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: MapPin,
    title: "GIS + Validation Module",
    description: "Field boundary verification, soil mapping using SSURGO, photo and sensor validation, data reconciliation",
    features: ["Boundary Check", "Soil Mapping", "Data QA", "Validation"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Glasses,
    title: "VR Simulation Module",
    description: "Interactive 3D rice farming environment, real-time simulation of farming scenarios, game-based learning",
    features: ["3D Environment", "Real-time Sim", "Game Learning", "Training"],
    color: "from-orange-500 to-red-600"
  }
];

const aiTechniques = [
  {
    title: "Harvest Prediction Model (P+E+M)",
    formula: "Plant Date + Emergence Days + Maturity Days",
    accuracy: "~3-day accuracy",
    icon: Calendar
  },
  {
    title: "Growing Degree Days (GDD)",
    formula: "Temperature-based crop growth prediction",
    accuracy: "More accurate than fixed-day models",
    icon: CloudSun
  },
  {
    title: "Machine Learning Models",
    formula: "Classification, Regression, Time-series",
    accuracy: "Disease detection, yield prediction",
    icon: Cpu
  }
];

const certifications = [
  {
    level: "Beginner",
    icon: Sprout,
    description: "Basic understanding of rice farming practices",
    requirements: ["Complete intro VR modules", "Pass basic assessment", "Understand fundamentals"],
    color: "bg-green-500/20 text-green-400"
  },
  {
    level: "Intermediate",
    icon: Target,
    description: "Ability to apply AI-based recommendations",
    requirements: ["Apply AI recommendations", "Resource management", "Crop monitoring"],
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    level: "Advanced",
    icon: Award,
    description: "Expertise in precision farming techniques",
    requirements: ["Interpret analytics", "Precision farming", "AI decision-making"],
    color: "bg-purple-500/20 text-purple-400"
  }
];

const flowchartSteps = [
  { title: "Data Collection", description: "Sensors, Weather, Images, GIS", icon: Database },
  { title: "Data Cleaning", description: "Boundary Check, Soil Mapping, QA", icon: Shield },
  { title: "AI Processing", description: "Disease Detection, Yield Prediction", icon: Brain },
  { title: "Decision Support", description: "Alerts, Recommendations, Planning", icon: Target },
  { title: "VR Integration", description: "Training, Scenarios, Feedback", icon: Glasses },
  { title: "Farmer Action", description: "Improved Yield & Efficiency", icon: TrendingUp }
];

const SystemOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-background to-purple-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
              <Leaf className="w-3 h-3 mr-1" />
              Intelligent Rice Farming System
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI + GIS + VR
              <span className="block text-gradient mt-2">Smart Agriculture</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive digital transformation platform combining Artificial Intelligence, 
              Geographic Information Systems, and Virtual Reality for modern rice farming
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full" onClick={() => navigate("/supreme-rice-cultivation")}>
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Training
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" onClick={() => navigate("/certifications")}>
                <GraduationCap className="w-5 h-5 mr-2" />
                View Certifications
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-accent/20">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">Introduction</p>
              <h2 className="text-3xl font-bold mb-6">Transforming Agriculture Through Technology</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Agriculture is undergoing a major digital transformation driven by Artificial Intelligence (AI), 
                Geographic Information Systems (GIS), and immersive technologies like Virtual Reality (VR). 
                Rice farming, being a critical component of global food security, requires modernization to 
                address inefficiencies, climate variability, and operational challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10">
                  <Brain className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-semibold">AI Intelligence</p>
                    <p className="text-xs text-muted-foreground">Predictive Analytics</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10">
                  <MapPin className="w-8 h-8 text-emerald-500" />
                  <div>
                    <p className="font-semibold">GIS Mapping</p>
                    <p className="text-xs text-muted-foreground">Field Validation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-500/10">
                  <Glasses className="w-8 h-8 text-orange-500" />
                  <div>
                    <p className="font-semibold">VR Training</p>
                    <p className="text-xs text-muted-foreground">Simulation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">Problem Statement</p>
            <h2 className="text-3xl md:text-4xl font-bold">Challenges in Rice Farming</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Bug className="w-6 h-6 text-red-500" />
                </div>
                <CardTitle>Agronomic Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Late detection of pests and diseases</li>
                  <li>• Inefficient irrigation and water misuse</li>
                  <li>• Improper fertilizer application</li>
                  <li>• Lack of soil-based decision-making</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Operational Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No accurate harvest prediction</li>
                  <li>• Poor mill logistics planning</li>
                  <li>• Lack of real-time field monitoring</li>
                  <li>• Data inconsistency across systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle>Training Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Limited access to hands-on training</li>
                  <li>• High risk in adopting new techniques</li>
                  <li>• Lack of skill certification</li>
                  <li>• Traditional knowledge gaps</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">System Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold">Three Integrated Modules</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, i) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4`}>
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Techniques */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">AI-Based Intelligence</p>
            <h2 className="text-3xl md:text-4xl font-bold">Predictive Models</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiTechniques.map((technique, i) => (
              <motion.div
                key={technique.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <technique.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{technique.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-mono bg-muted p-3 rounded-lg mb-4">{technique.formula}</p>
                    <p className="text-sm text-muted-foreground">{technique.accuracy}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GIS Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-emerald-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">GIS Module</p>
                  <h2 className="text-2xl font-bold">Smart Field Validation</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Field Validation</h3>
                  <p className="text-sm text-muted-foreground">Verifies correct field boundaries and ensures accurate data mapping</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Soil Intelligence</h3>
                  <p className="text-sm text-muted-foreground">Assigns dominant soil type using SSURGO for fertilizer optimization</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Data Reconciliation</h3>
                  <p className="text-sm text-muted-foreground">Resolves mismatches across systems and improves data reliability</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <p className="text-sm text-emerald-400 font-medium">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Key Insight: "AI is only as good as the quality of validated field data."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Flowchart */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">System Flow</p>
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-6 gap-4">
              {flowchartSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card border rounded-xl p-4 text-center h-full">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  {i < flowchartSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">Training Program</p>
          <h2 className="text-3xl md:text-4xl font-bold">Farmer Certification</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Structured training program ensuring farmers learn new techniques and receive formal recognition of their skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${cert.color} flex items-center justify-center mb-4`}>
                    <cert.icon className="w-7 h-7" />
                  </div>
                  <CardTitle>{cert.level} Level</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cert.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-accent/10 to-purple-500/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Training Modules Include</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Land preparation and soil management",
                  "Seed selection and transplantation",
                  "Smart irrigation and water management",
                  "Fertilizer and pesticide optimization",
                  "Disease identification using AI tools",
                  "Harvest planning and post-harvest handling"
                ].map((module) => (
                  <div key={module} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm">{module}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">Advantages</p>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose This System?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, title: "Increased Productivity", desc: "Higher crop yields through precision farming" },
              { icon: Calendar, title: "Accurate Forecasting", desc: "Predict harvest timing with ~3-day accuracy" },
              { icon: Droplets, title: "Resource Efficiency", desc: "Optimize water and fertilizer usage" },
              { icon: Shield, title: "Risk Reduction", desc: "Virtual experimentation before field application" },
              { icon: GraduationCap, title: "Farmer Training", desc: "VR-based skill development and certification" },
              { icon: Leaf, title: "Sustainability", desc: "Environmentally conscious farming practices" }
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-accent/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The integration of AI, GIS, and Virtual Reality represents a major leap forward in agricultural innovation. 
                This project not only enhances crop management but also transforms the entire farming ecosystem—from data 
                validation to prediction to training.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-accent/10">
                  <Brain className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-semibold">AI for Intelligence</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/10">
                  <MapPin className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <p className="font-semibold">GIS for Accuracy</p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10">
                  <Glasses className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold">VR for Education</p>
                </div>
              </div>
              <Button size="lg" className="rounded-full" onClick={() => navigate("/supreme-rice-cultivation")}>
                Start Your Training Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SystemOverview;
