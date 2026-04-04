import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  CheckCircle2, 
  Download, 
  Share2, 
  Linkedin, 
  FileBadge,
  Clock,
  Users,
  Star,
  Calendar,
  QrCode,
  Shield,
  Globe,
  FileCheck
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CertificationProps {
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Professional";
  provider: string;
  accreditation?: string;
  skills: string[];
  color?: "green" | "blue" | "purple" | "amber" | "red";
  image?: string;
}

const colorVariants = {
  green: {
    bg: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    text: "text-green-600",
    border: "border-green-500/30",
    badge: "bg-green-500/10 text-green-600",
    icon: "text-green-600"
  },
  blue: {
    bg: "from-blue-500/10 via-cyan-500/10 to-sky-500/10",
    text: "text-blue-600",
    border: "border-blue-500/30",
    badge: "bg-blue-500/10 text-blue-600",
    icon: "text-blue-600"
  },
  purple: {
    bg: "from-purple-500/10 via-violet-500/10 to-fuchsia-500/10",
    text: "text-purple-600",
    border: "border-purple-500/30",
    badge: "bg-purple-500/10 text-purple-600",
    icon: "text-purple-600"
  },
  amber: {
    bg: "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
    text: "text-amber-600",
    border: "border-amber-500/30",
    badge: "bg-amber-500/10 text-amber-600",
    icon: "text-amber-600"
  },
  red: {
    bg: "from-red-500/10 via-rose-500/10 to-pink-500/10",
    text: "text-red-600",
    border: "border-red-500/30",
    badge: "bg-red-500/10 text-red-600",
    icon: "text-red-600"
  }
};

const Certification = ({
  title,
  description,
  duration,
  level,
  provider,
  accreditation,
  skills,
  color = "green",
}: CertificationProps) => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const colors = colorVariants[color];

  const handleDownload = () => {
    setIsDownloaded(true);
    toast.success("Certificate downloaded!", {
      description: "Your certificate has been saved to your downloads folder.",
    });
  };

  const handleShare = () => {
    setIsShared(true);
    toast.success("Certificate shared!", {
      description: "Your achievement has been shared to your profile.",
    });
  };

  const handleLinkedIn = () => {
    toast.success("Added to LinkedIn!", {
      description: "Certificate added to your LinkedIn profile.",
    });
  };

  return (
    <div className="w-full">
      {/* Certificate Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <Card className={`overflow-hidden border-2 ${colors.border}`}>
          <div className={`bg-gradient-to-br ${colors.bg} p-8`}>
            <div className="max-w-3xl mx-auto">
              {/* Certificate Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center`}
                >
                  <Award className={`w-10 h-10 ${colors.icon}`} />
                </motion.div>
                <p className={`text-sm font-semibold uppercase tracking-wider ${colors.text} mb-2`}>
                  Certificate of Completion
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {title}
                </h2>
                <p className="text-gray-600">{description}</p>
              </div>

              {/* Certificate Details */}
              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-xl">
                    <Clock className={`w-6 h-6 mx-auto mb-2 ${colors.icon}`} />
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{duration}</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <Shield className={`w-6 h-6 mx-auto mb-2 ${colors.icon}`} />
                    <p className="text-sm text-gray-600">Level</p>
                    <p className="font-semibold">{level}</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <Globe className={`w-6 h-6 mx-auto mb-2 ${colors.icon}`} />
                    <p className="text-sm text-gray-600">Provider</p>
                    <p className="font-semibold">{provider}</p>
                  </div>
                </div>

                {accreditation && (
                  <div className={`flex items-center justify-center gap-2 p-3 ${colors.badge} rounded-lg mb-6`}>
                    <FileCheck className="w-5 h-5" />
                    <span className="font-medium">{accreditation}</span>
                  </div>
                )}

                {/* Skills Section */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Verification QR */}
                <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <QrCode className="w-10 h-10 text-gray-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Verify Certificate</p>
                    <p className="text-xs text-gray-500">Scan to verify authenticity</p>
                    <p className="text-xs text-gray-400">ID: VRZ-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Button
          size="lg"
          className={`rounded-full ${colors.text.replace('text-', 'bg-').replace('600', '500')} hover:${colors.text.replace('text-', 'bg-').replace('600', '600')} text-white`}
          onClick={handleDownload}
        >
          {isDownloaded ? (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Downloaded
            </>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download Certificate
            </>
          )}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full"
          onClick={handleShare}
        >
          {isShared ? (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Shared
            </>
          ) : (
            <>
              <Share2 className="mr-2 h-5 w-5" />
              Share Achievement
            </>
          )}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full"
          onClick={handleLinkedIn}
        >
          <Linkedin className="mr-2 h-5 w-5" />
          Add to LinkedIn
        </Button>
      </motion.div>
    </div>
  );
};

export default Certification;
