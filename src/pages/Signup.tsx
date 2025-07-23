import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Heart, 
  Mail, 
  Lock, 
  Hospital, 
  User, 
  ArrowLeft,
  Eye,
  EyeOff,
  Phone,
  MapPin,
  Building
} from "lucide-react";
import { toast } from "sonner";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("patient");
  const navigate = useNavigate();

  const [patientForm, setPatientForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const [adminForm, setAdminForm] = useState({
    hospitalName: "",
    hospitalId: "",
    adminName: "",
    email: "",
    phone: "",
    district: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const handlePatientSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (patientForm.password !== patientForm.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    if (!patientForm.agreeTerms) {
      toast.error("Please accept the terms and conditions!");
      return;
    }
    toast.success("Patient account created successfully!");
    navigate("/login");
  };

  const handleAdminSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminForm.password !== adminForm.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    if (!adminForm.agreeTerms) {
      toast.error("Please accept the terms and conditions!");
      return;
    }
    toast.success("Hospital admin account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/10" />
      
      <div className="relative z-10 w-full max-w-lg">
        <Button
          variant="ghost"
          className="mb-6 text-primary-foreground hover:bg-card/20 backdrop-blur-sm"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <Card className="bg-card/95 backdrop-blur-md border-border/50 card-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 mb-4">
              <Heart className="h-10 w-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Join CareClick</CardTitle>
            <CardDescription className="text-muted-foreground">
              Create your account to access healthcare services
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="patient" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Patient</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center space-x-2">
                  <Hospital className="h-4 w-4" />
                  <span>Hospital Admin</span>
                </TabsTrigger>
              </TabsList>

              {/* Patient Signup */}
              <TabsContent value="patient">
                <form onSubmit={handlePatientSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="patient-firstName">First Name</Label>
                      <Input
                        id="patient-firstName"
                        placeholder="First name"
                        value={patientForm.firstName}
                        onChange={(e) => setPatientForm({...patientForm, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-lastName">Last Name</Label>
                      <Input
                        id="patient-lastName"
                        placeholder="Last name"
                        value={patientForm.lastName}
                        onChange={(e) => setPatientForm({...patientForm, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="patient-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={patientForm.email}
                        onChange={(e) => setPatientForm({...patientForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="patient-phone"
                        type="tel"
                        placeholder="+94 71 234 5678"
                        className="pl-10"
                        value={patientForm.phone}
                        onChange={(e) => setPatientForm({...patientForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="patient-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        value={patientForm.password}
                        onChange={(e) => setPatientForm({...patientForm, password: e.target.value})}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="patient-confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={patientForm.confirmPassword}
                        onChange={(e) => setPatientForm({...patientForm, confirmPassword: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="patient-terms"
                      checked={patientForm.agreeTerms}
                      onCheckedChange={(checked) => setPatientForm({...patientForm, agreeTerms: checked as boolean})}
                    />
                    <Label htmlFor="patient-terms" className="text-sm">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    Create Patient Account
                  </Button>
                </form>
              </TabsContent>

              {/* Hospital Admin Signup */}
              <TabsContent value="admin">
                <form onSubmit={handleAdminSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-hospitalName">Hospital Name</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-hospitalName"
                        placeholder="Hospital name"
                        className="pl-10"
                        value={adminForm.hospitalName}
                        onChange={(e) => setAdminForm({...adminForm, hospitalName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="admin-hospitalId">Hospital ID</Label>
                      <Input
                        id="admin-hospitalId"
                        placeholder="Hospital ID"
                        value={adminForm.hospitalId}
                        onChange={(e) => setAdminForm({...adminForm, hospitalId: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-district">District</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="admin-district"
                          placeholder="District"
                          className="pl-10"
                          value={adminForm.district}
                          onChange={(e) => setAdminForm({...adminForm, district: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-name">Admin Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-name"
                        placeholder="Full name"
                        className="pl-10"
                        value={adminForm.adminName}
                        onChange={(e) => setAdminForm({...adminForm, adminName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="Admin email"
                        className="pl-10"
                        value={adminForm.email}
                        onChange={(e) => setAdminForm({...adminForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-phone"
                        type="tel"
                        placeholder="+94 11 234 5678"
                        className="pl-10"
                        value={adminForm.phone}
                        onChange={(e) => setAdminForm({...adminForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        value={adminForm.password}
                        onChange={(e) => setAdminForm({...adminForm, password: e.target.value})}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={adminForm.confirmPassword}
                        onChange={(e) => setAdminForm({...adminForm, confirmPassword: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="admin-terms"
                      checked={adminForm.agreeTerms}
                      onCheckedChange={(checked) => setAdminForm({...adminForm, agreeTerms: checked as boolean})}
                    />
                    <Label htmlFor="admin-terms" className="text-sm">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" variant="medical" className="w-full">
                    Create Hospital Admin Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}