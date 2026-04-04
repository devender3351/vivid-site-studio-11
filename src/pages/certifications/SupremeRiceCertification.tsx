import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Plane, 
  Sprout, 
  Brain,
  Download,
  Share2,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  User,
  Shield,
  Printer
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SupremeRiceCertification = () => {
  const navigate = useNavigate();
  
  // Mock certificate data - in real app, this would come from user state/backend
  const certificateData = {
    recipient: "Student Name",
    course: "Supreme Rice Cultivation",
    issueDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    certificateId: `SRC-${Date.now()}`,
    skills: [
      { icon: Plane, title: "Agricultural Drone Operations", desc: "Precision spraying & monitoring" },
      { icon: Sprout, title: "Rice Crop Management", desc: "Growth cycles & harvesting" },
      { icon: Brain, title: "AI Data Analytics", desc: "Predictive analysis & insights" }
    ]
  };

  const handleDownload = () => {
    toast.success("Certificate downloaded!", {
      description: "PDF saved to your downloads folder"
    });
  };

  const handleShare = () => {
    toast.success("Share link copied!", {
      description: "Certificate link copied to clipboard"
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/20 dark:via-green-950/20 dark:to-teal-950/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Button variant="ghost" onClick={() => navigate("/supreme-rice-cultivation")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Training
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </motion.div>

        {/* Certificate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-4 border-emerald-600/30 shadow-2xl overflow-hidden">
            {/* Certificate Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8" />
                <span className="text-lg font-semibold tracking-wider">VR ZONE ACADEMY</span>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <Award className="w-10 h-10" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Certificate of Completion</h1>
                <p className="text-emerald-100">Professional Certification Program</p>
              </div>
            </div>

            <CardContent className="p-8 md:p-12">
              {/* Recipient Info */}
              <div className="text-center mb-10">
                <p className="text-muted-foreground mb-2">This certifies that</p>
                <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                  {certificateData.recipient}
                </h2>
                <p className="text-muted-foreground">has successfully completed</p>
              </div>

              {/* Course Title */}
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  {certificateData.course}
                </h3>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {certificateData.issueDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    ID: {certificateData.certificateId}
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {certificateData.skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                  >
                    <skill.icon className="w-8 h-8 text-emerald-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{skill.title}</h4>
                    <p className="text-xs text-muted-foreground">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Competencies */}
              <div className="bg-muted/50 rounded-xl p-6 mb-10">
                <h4 className="font-semibold mb-4 text-center">Verified Competencies</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Agricultural Drone Piloting & Operations",
                    "Precision Pesticide Spraying Techniques",
                    "Real-time Crop Monitoring Systems",
                    "Rice Cultivation Lifecycle Management",
                    "AI-Powered Data Collection & Analysis",
                    "Predictive Yield Analytics"
                  ].map((competency, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {competency}
                    </div>
                  ))}
                </div>
              </div>

              {/* Signatures */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t">
                <div className="text-center">
                  <div className="w-32 h-0.5 bg-emerald-600 mb-2" />
                  <p className="font-semibold text-sm">Dr. Rajesh Kumar</p>
                  <p className="text-xs text-muted-foreground">Program Director</p>
                </div>
                
                <div className="text-center">
                  <Badge className="bg-emerald-600 text-white px-6 py-2 text-lg">
                    VERIFIED
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-2">Official Certification</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-0.5 bg-emerald-600 mb-2" />
                  <p className="font-semibold text-sm">Prof. Sarah Chen</p>
                  <p className="text-xs text-muted-foreground">Head of Training</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          <p>This certificate verifies the holder has completed all required training modules</p>
          <p className="mt-1">VR Zone Academy • Southern University Ag Center Partnership</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SupremeRiceCertification;
