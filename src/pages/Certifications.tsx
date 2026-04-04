import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  CheckCircle2, 
  Gamepad2, 
  Palette, 
  Clock, 
  Plane, 
  Brain,
  ArrowRight,
  Lock,
  Download
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const certifications = [
  {
    id: "genz-vr",
    title: "Gen-Z VR Gaming Specialist",
    description: "Master competitive VR gaming, esports strategies, and advanced gameplay mechanics",
    icon: Gamepad2,
    duration: "20 hours",
    level: "Intermediate",
    color: "purple",
    skills: ["VR Gaming", "Esports", "Multiplayer Strategy", "Tournament Play"],
    available: true,
    route: "/certification/genz-vr"
  },
  {
    id: "gen-alpha",
    title: "Gen Alpha Creative VR Designer",
    description: "Create immersive 3D worlds, digital art, and interactive educational content",
    icon: Palette,
    duration: "15 hours",
    level: "Beginner",
    color: "blue",
    skills: ["3D Design", "Creative VR", "Educational Content", "Safe VR Practices"],
    available: true,
    route: "/certification/gen-alpha"
  },
  {
    id: "millennium",
    title: "Millennium VR Agricultural Expert",
    description: "VR-powered precision agriculture, drone simulation, and AI crop management",
    icon: Clock,
    duration: "25 hours",
    level: "Advanced",
    color: "green",
    skills: ["Agri VR", "Drone Sim", "AI Analytics", "Smart Farming"],
    available: true,
    route: "/certification/millennium"
  },
  {
    id: "agri-drone",
    title: "DGCA Agricultural Drone Pilot",
    description: "Professional drone operation for crop monitoring, spraying, and field mapping",
    icon: Plane,
    duration: "12 hours",
    level: "Professional",
    color: "green",
    skills: ["Drone Piloting", "Precision Ag", "Crop Monitoring", "DGCA Certified"],
    available: true,
    route: "/certification/agricultural-drone"
  },
  {
    id: "ai-rice",
    title: "AI Rice Cultivation Specialist",
    description: "AI-powered smart farming for rice production optimization and automation",
    icon: Brain,
    duration: "14 hours",
    level: "Advanced",
    color: "amber",
    skills: ["AI Farming", "Smart Irrigation", "Pest AI", "Yield Prediction"],
    available: true,
    route: "/certification/ai-rice-cultivation"
  }
];

const colorVariants: Record<string, { bg: string; text: string; border: string }> = {
  green: {
    bg: "from-green-500/10 to-emerald-600/10",
    text: "text-green-600",
    border: "border-green-500/30"
  },
  blue: {
    bg: "from-blue-500/10 to-cyan-600/10",
    text: "text-blue-600",
    border: "border-blue-500/30"
  },
  purple: {
    bg: "from-purple-500/10 to-violet-600/10",
    text: "text-purple-600",
    border: "border-purple-500/30"
  },
  amber: {
    bg: "from-amber-500/10 to-orange-600/10",
    text: "text-amber-600",
    border: "border-amber-500/30"
  },
  red: {
    bg: "from-red-500/10 to-rose-600/10",
    text: "text-red-600",
    border: "border-red-500/30"
  }
};

const Certifications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"
            >
              <Award className="w-10 h-10 text-accent" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-gradient">Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Earn industry-recognized certificates in VR entertainment, agricultural technology, and AI-powered farming
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Industry Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>LinkedIn Shareable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Verified Credentials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const colors = colorVariants[cert.color] || colorVariants.green;
            const Icon = cert.icon;
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full hover-lift overflow-hidden border-2 ${colors.border}`}>
                  <div className={`h-2 bg-gradient-to-r ${colors.bg}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      <Badge variant={cert.level === "Professional" ? "default" : "secondary"}>
                        {cert.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-4">{cert.title}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {cert.duration}
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Certificate
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button 
                      className="w-full rounded-full"
                      onClick={() => navigate(cert.route)}
                    >
                      {cert.available ? (
                        <>
                          View Certificate
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <Lock className="mr-2 w-4 h-4" />
                          Complete Training
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Get Certified */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Get Certified?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certifications are recognized by industry leaders and educational institutions worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Career Advancement",
                description: "Stand out in job applications with verified skills in emerging technologies",
                icon: Award
              },
              {
                title: "Industry Recognition",
                description: "Certificates backed by Dr. Devender Rapolu and partnered institutions",
                icon: CheckCircle2
              },
              {
                title: "Global Verification",
                description: "QR-code enabled certificates for instant verification anywhere",
                icon: Download
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
