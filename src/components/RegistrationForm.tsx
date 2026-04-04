import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Eye, EyeOff, User, Mail, Lock, Phone, Calendar, Sparkles, Award, Plane, Sprout, Brain, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  age: string;
  experienceLevel: string;
  interests: string[];
  agreeTerms: boolean;
  newsletter: boolean;
}

const vrInterests = [
  { id: "gaming", label: "VR Gaming" },
  { id: "education", label: "Educational VR" },
  { id: "training", label: "Training Simulations" },
  { id: "entertainment", label: "Entertainment" },
  { id: "social", label: "Social VR" },
  { id: "fitness", label: "VR Fitness" },
];

const experienceLevels = [
  { value: "beginner", label: "Beginner - Never tried VR" },
  { value: "casual", label: "Casual - Tried VR a few times" },
  { value: "intermediate", label: "Intermediate - Regular VR user" },
  { value: "advanced", label: "Advanced - VR enthusiast" },
];

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    age: "",
    experienceLevel: "",
    interests: [],
    agreeTerms: false,
    newsletter: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCertificationOptions, setShowCertificationOptions] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email) {
          toast.error("Please fill in all required fields");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          toast.error("Please enter a valid email address");
          return false;
        }
        return true;
      case 2:
        if (!formData.password || !formData.confirmPassword) {
          toast.error("Please enter and confirm your password");
          return false;
        }
        if (formData.password.length < 8) {
          toast.error("Password must be at least 8 characters");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          return false;
        }
        return true;
      case 3:
        if (!formData.age || !formData.experienceLevel) {
          toast.error("Please complete your profile information");
          return false;
        }
        if (parseInt(formData.age) < 13) {
          toast.error("You must be at least 13 years old to register");
          return false;
        }
        return true;
      case 4:
        if (!formData.agreeTerms) {
          toast.error("You must agree to the terms and conditions");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success("Registration successful! Welcome to VR Zone!", {
      description: "Check your email to verify your account.",
    });
    
    setIsLoading(false);
    setShowCertificationOptions(true);
    toast.success("Registration successful! Choose your certification path.", {
      description: "Select a program to begin your training.",
    });
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showCertificationOptions ? (
        <Card className="w-full max-w-2xl mx-auto border-2 border-emerald-500/30">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4"
            >
              <Award className="w-8 h-8 text-emerald-600" />
            </motion.div>
            <CardTitle className="text-2xl">Choose Your Certification</CardTitle>
            <CardDescription>
              Select a training program to begin your professional certification journey
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Featured Certification */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-2 border-emerald-500/50 cursor-pointer"
              onClick={() => navigate("/supreme-rice-cultivation")}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">Supreme Rice Cultivation</h3>
                    <Badge className="bg-emerald-500 text-white text-xs">Featured</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Complete 3-module certification covering drone operations, crop management, and AI analytics
                  </p>
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Plane className="w-3 h-3" /> Drone Training</span>
                    <span className="flex items-center gap-1"><Sprout className="w-3 h-3" /> Crop Growth</span>
                    <span className="flex items-center gap-1"><Brain className="w-3 h-3" /> AI Analytics</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-600" />
              </div>
            </motion.div>

            {/* Other Certifications */}
            <div className="grid gap-3">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-3 rounded-lg border hover:border-accent cursor-pointer transition-colors"
                onClick={() => navigate("/agricultural-drone")}
              >
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Agricultural Drone Training</h4>
                    <p className="text-xs text-muted-foreground">Precision spraying and monitoring</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-3 rounded-lg border hover:border-accent cursor-pointer transition-colors"
                onClick={() => navigate("/ai-rice-cultivation")}
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-amber-600" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">AI Rice Cultivation</h4>
                    <p className="text-xs text-muted-foreground">Smart farming with AI analytics</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-3 rounded-lg border hover:border-accent cursor-pointer transition-colors"
                onClick={() => navigate("/crop-growth-study")}
              >
                <div className="flex items-center gap-3">
                  <Sprout className="w-5 h-5 text-emerald-600" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Crop Growth Study</h4>
                    <p className="text-xs text-muted-foreground">Scientific crop development tracking</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="pt-4 border-t">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowCertificationOptions(false)}
              >
                Back to Form
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-lg mx-auto">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
          >
            <Sparkles className="w-6 h-6 text-accent" />
          </motion.div>
          <CardTitle className="text-2xl">Join VR Zone</CardTitle>
          <CardDescription>Create your account to start your VR journey</CardDescription>
          
          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4].map((step) => (
              <motion.div
                key={step}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step === currentStep
                    ? "w-8 bg-accent"
                    : step < currentStep
                    ? "w-2 bg-accent/50"
                    : "w-2 bg-muted"
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              key={currentStep}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        <User className="w-4 h-4 inline mr-1" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">
                      <Lock className="w-4 h-4 inline mr-1" />
                      Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Must be at least 8 characters
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Age *
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="25"
                      min="13"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Experience Level *</Label>
                    <Select
                      value={formData.experienceLevel}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, experienceLevel: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Interests (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {vrInterests.map((interest) => (
                        <motion.button
                          key={interest.id}
                          type="button"
                          onClick={() => handleInterestToggle(interest.id)}
                          className={`p-2 rounded-lg text-sm text-left transition-all duration-200 ${
                            formData.interests.includes(interest.id)
                              ? "bg-accent text-accent-foreground"
                              : "bg-muted hover:bg-muted-foreground/20"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {interest.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold">Review Your Information</h4>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Email:</span> {formData.email}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Age:</span> {formData.age}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Experience:</span>{" "}
                      {experienceLevels.find((l) => l.value === formData.experienceLevel)?.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Interests:</span>{" "}
                      {formData.interests
                        .map((i) => vrInterests.find((interest) => interest.id === i)?.label)
                        .join(", ") || "None selected"}
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                      }
                    />
                    <Label htmlFor="agreeTerms" className="text-sm leading-none cursor-pointer">
                      I agree to the{" "}
                      <a href="#" className="text-accent hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-accent hover:underline">
                        Privacy Policy
                      </a>{" "}
                      *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, newsletter: checked as boolean }))
                      }
                    />
                    <Label htmlFor="newsletter" className="text-sm leading-none cursor-pointer">
                      Subscribe to our newsletter for VR updates and exclusive offers
                    </Label>
                  </div>
                </div>
              )}
            </motion.div>

            <div className="flex justify-between pt-4">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="ml-auto"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    "Create Account"
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
      )}
    </motion.div>
  );
};

export default RegistrationForm;
