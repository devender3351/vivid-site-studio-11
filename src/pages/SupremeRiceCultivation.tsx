import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plane, 
  Sprout, 
  Brain,
  PlayCircle,
  CheckCircle2,
  Award,
  Clock,
  ArrowRight,
  Video,
  FileQuestion,
  Lock,
  Unlock,
  Trophy,
  GraduationCap,
  Scan,
  Database,
  Leaf,
  Droplets,
  Sun,
  Target
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trainingModules = [
  {
    id: "drone",
    title: "Agricultural Drone Training",
    icon: Plane,
    description: "Master precision agriculture with cutting-edge drone technology",
    videoDuration: "10:30",
    completed: false,
    locked: false,
    content: [
      "Introduction to Agricultural Drones",
      "Drone Components and Controls",
      "Pre-flight Safety Checks",
      "Flight Planning and Navigation",
      "Pesticide Spraying Techniques",
      "Real-time Data Collection",
      "Emergency Procedures"
    ]
  },
  {
    id: "crop",
    title: "Crop Growth & Management",
    icon: Sprout,
    description: "Learn comprehensive rice cultivation from seed to harvest",
    videoDuration: "12:45",
    completed: false,
    locked: true,
    content: [
      "Rice Variety Selection",
      "Seed Preparation and Germination",
      "Planting Techniques",
      "Water Management",
      "Nutrient Management",
      "Pest and Disease Control",
      "Harvesting Methods"
    ]
  },
  {
    id: "ai",
    title: "AI for Data Collection & Analysis",
    icon: Brain,
    description: "Harness AI power for smart farming decisions",
    videoDuration: "8:20",
    completed: false,
    locked: true,
    content: [
      "Introduction to AI in Agriculture",
      "Data Collection Sensors",
      "Image Recognition for Crop Health",
      "Predictive Analytics",
      "Automated Decision Making",
      "Integration with Drone Systems",
      "Yield Prediction Models"
    ]
  }
];

const quizQuestions = {
  drone: [
    {
      question: "What is the primary purpose of agricultural drones in rice farming?",
      options: ["Entertainment", "Precision spraying and monitoring", "Transportation", "Communication"],
      correct: 1
    },
    {
      question: "Which sensor is used for detecting crop stress?",
      options: ["Camera only", "Multispectral sensor", "GPS", "Microphone"],
      correct: 1
    },
    {
      question: "What is the optimal flight height for pesticide spraying?",
      options: ["1-2 meters", "2-3 meters", "5-10 meters", "20+ meters"],
      correct: 1
    }
  ],
  crop: [
    {
      question: "How long is the typical rice growth cycle?",
      options: ["30 days", "60 days", "90-120 days", "200 days"],
      correct: 2
    },
    {
      question: "What is the critical growth stage for water management?",
      options: ["Germination", "Flowering", "Grain filling", "All stages"],
      correct: 3
    },
    {
      question: "Which nutrient is most important during the vegetative stage?",
      options: ["Phosphorus", "Nitrogen", "Potassium", "Calcium"],
      correct: 1
    }
  ],
  ai: [
    {
      question: "What does NDVI stand for in crop monitoring?",
      options: ["National Data Verification Index", "Normalized Difference Vegetation Index", "New Drone Vision Interface", "None of the above"],
      correct: 1
    },
    {
      question: "Which AI application predicts rice yield?",
      options: ["Image recognition", "Machine learning models", "GPS tracking", "Weather apps"],
      correct: 1
    },
    {
      question: "How does AI detect plant diseases?",
      options: ["Random guessing", "Pattern recognition in leaf images", "Soil sampling only", "Manual inspection"],
      correct: 1
    }
  ]
};

const SupremeRiceCultivation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("drone");
  const [modules, setModules] = useState(trainingModules);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number[]>>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<string | null>(null);
  const [certificationUnlocked, setCertificationUnlocked] = useState(false);

  const handleModuleComplete = (moduleId: string) => {
    setModules(prev => prev.map(m => 
      m.id === moduleId ? { ...m, completed: true } : m
    ));
    
    // Unlock next module
    const currentIndex = modules.findIndex(m => m.id === moduleId);
    if (currentIndex < modules.length - 1) {
      setModules(prev => prev.map((m, i) => 
        i === currentIndex + 1 ? { ...m, locked: false } : m
      ));
    }
    
    toast.success(`Completed: ${modules.find(m => m.id === moduleId)?.title}`);
    
    // Check if all modules completed
    const updatedModules = modules.map(m => m.id === moduleId ? { ...m, completed: true } : m);
    if (updatedModules.every(m => m.completed)) {
      setCertificationUnlocked(true);
      toast.success("🎉 All modules completed! Certification unlocked!");
    }
  };

  const handleQuizSubmit = (moduleId: string) => {
    const answers = quizAnswers[moduleId] || [];
    const questions = quizQuestions[moduleId as keyof typeof quizQuestions];
    const correct = answers.filter((a, i) => a === questions[i].correct).length;
    const passed = correct >= 2; // Pass if 2/3 correct
    
    if (passed) {
      toast.success(`Quiz passed! ${correct}/3 correct`);
      handleModuleComplete(moduleId);
      setShowQuiz(false);
    } else {
      toast.error(`Quiz failed. ${correct}/3 correct. Try again!`);
    }
  };

  const startQuiz = (moduleId: string) => {
    setCurrentQuiz(moduleId);
    setShowQuiz(true);
    setQuizAnswers(prev => ({ ...prev, [moduleId]: [] }));
  };

  const allCompleted = modules.every(m => m.completed);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Award className="w-4 h-4 mr-2" />
              Professional Certification Program
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Supreme Rice Cultivation
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Master the complete agricultural workflow: Drone Operations, Crop Management, 
              and AI-Powered Data Analytics for modern rice farming.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-green-200">
                <Plane className="w-5 h-5" />
                <span>Drone Training</span>
              </div>
              <div className="flex items-center gap-2 text-green-200">
                <Sprout className="w-5 h-5" />
                <span>Crop Management</span>
              </div>
              <div className="flex items-center gap-2 text-green-200">
                <Brain className="w-5 h-5" />
                <span>AI Analytics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Training Progress</h2>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">
                {modules.filter(m => m.completed).length}/{modules.length} Completed
              </span>
            </div>
          </div>
          
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
              initial={{ width: 0 }}
              animate={{ width: `${(modules.filter(m => m.completed).length / modules.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {modules.map((module) => (
                <TabsTrigger 
                  key={module.id} 
                  value={module.id}
                  disabled={module.locked}
                  className="relative"
                >
                  <div className="flex items-center gap-2">
                    {module.locked ? (
                      <Lock className="w-4 h-4" />
                    ) : module.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <module.icon className="w-4 h-4" />
                    )}
                    <span className="hidden md:inline">{module.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                          module.completed ? "bg-green-500/20" : "bg-accent/10"
                        }`}>
                          <module.icon className={`w-8 h-8 ${
                            module.completed ? "text-green-600" : "text-accent"
                          }`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{module.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Video className="w-4 h-4" />
                            {module.videoDuration} video content
                            <span className="mx-1">•</span>
                            <FileQuestion className="w-4 h-4" />
                            3 Quiz Questions
                          </CardDescription>
                        </div>
                      </div>
                      {module.completed && (
                        <Badge className="bg-green-500/20 text-green-700">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{module.description}</p>
                    
                    {/* Video Player Placeholder */}
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 flex items-center justify-center relative overflow-hidden border">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="relative z-10 text-center"
                      >
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                          <PlayCircle className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white/80 font-medium">Training Video</p>
                        <p className="text-white/60 text-sm">{module.videoDuration}</p>
                      </motion.div>
                    </div>
                    
                    {/* Module Content */}
                    <div>
                      <h3 className="font-semibold mb-3">What You&apos;ll Learn:</h3>
                      <ul className="space-y-2">
                        {module.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    {!module.completed && !showQuiz && (
                      <div className="flex gap-4">
                        <Button 
                          className="flex-1 rounded-full"
                          onClick={() => toast.info("Video playback would start here")}
                        >
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Watch Video
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 rounded-full"
                          onClick={() => startQuiz(module.id)}
                        >
                          <FileQuestion className="w-4 h-4 mr-2" />
                          Take Quiz
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Quiz Modal */}
                {showQuiz && currentQuiz === module.id && (
                  <Card className="mt-4 border-accent">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileQuestion className="w-5 h-5" />
                        Module Quiz: {module.title}
                      </CardTitle>
                      <CardDescription>
                        Answer at least 2 out of 3 questions correctly to complete this module.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {quizQuestions[module.id as keyof typeof quizQuestions].map((q, i) => (
                        <div key={i} className="space-y-3">
                          <p className="font-medium">{i + 1}. {q.question}</p>
                          <div className="space-y-2">
                            {q.options.map((option, j) => (
                              <Button
                                key={j}
                                variant={quizAnswers[module.id]?.[i] === j ? "default" : "outline"}
                                className="w-full justify-start text-left h-auto py-3"
                                onClick={() => setQuizAnswers(prev => ({
                                  ...prev,
                                  [module.id]: [...(prev[module.id] || []), j]
                                }))}
                              >
                                {option}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="flex gap-4 pt-4">
                        <Button 
                          variant="outline" 
                          className="flex-1 rounded-full"
                          onClick={() => setShowQuiz(false)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          className="flex-1 rounded-full"
                          onClick={() => handleQuizSubmit(module.id)}
                          disabled={quizAnswers[module.id]?.length !== 3}
                        >
                          Submit Quiz
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Certification Section */}
      {certificationUnlocked && (
        <section className="py-20 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
              <CardContent className="p-8 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-yellow-500/30"
                >
                  <GraduationCap className="w-12 h-12 text-white" />
                </motion.div>
                
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  Congratulations!
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  You have completed the Supreme Rice Cultivation Certification
                </p>
                
                <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 mb-6 text-left">
                  <h3 className="font-semibold mb-3">Certified Skills:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Plane className="w-4 h-4 text-green-600" />
                      Agricultural Drone Operations & Precision Spraying
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Sprout className="w-4 h-4 text-green-600" />
                      Rice Crop Growth Management & Harvesting
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Brain className="w-4 h-4 text-green-600" />
                      AI-Powered Data Collection & Predictive Analytics
                    </li>
                  </ul>
                </div>
                
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600"
                  onClick={() => navigate("/certification/supreme-rice")}
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Your Certificate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      )}
      </main>
      <Footer />
    </div>
  );
};

export default SupremeRiceCultivation;
