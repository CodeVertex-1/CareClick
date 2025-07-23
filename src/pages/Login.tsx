import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Mail, 
  Lock, 
  Hospital, 
  User, 
  ArrowLeft,
  Eye,
  EyeOff
} from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("patient");
  const navigate = useNavigate();

  const [patientForm, setPatientForm] = useState({
    email: "",
    password: ""
  });

  const [adminForm, setAdminForm] = useState({
    email: "",
    password: "",
    hospitalId: ""
  });

  const handlePatientLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    toast.success("Patient login successful!");
    navigate("/patient-dashboard");
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    toast.success("Hospital admin login successful!");
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-primary/10" />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
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
            <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to access CareClick Sri Lanka
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

              {/* Patient Login */}
              <TabsContent value="patient">
                <form onSubmit={handlePatientLogin} className="space-y-4">
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
                    <Label htmlFor="patient-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="patient-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
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

                  <div className="flex items-center justify-between">
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    Sign In as Patient
                  </Button>
                </form>
              </TabsContent>

              {/* Hospital Admin Login */}
              <TabsContent value="admin">
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-hospital">Hospital ID</Label>
                    <div className="relative">
                      <Hospital className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-hospital"
                        type="text"
                        placeholder="Enter hospital ID"
                        className="pl-10"
                        value={adminForm.hospitalId}
                        onChange={(e) => setAdminForm({...adminForm, hospitalId: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="Enter admin email"
                        className="pl-10"
                        value={adminForm.email}
                        onChange={(e) => setAdminForm({...adminForm, email: e.target.value})}
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
                        placeholder="Enter admin password"
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

                  <Button type="submit" variant="medical" className="w-full">
                    Sign In as Hospital Admin
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Emergency Access */}
            <div className="mt-6 pt-6 border-t border-border">
              <Button
                variant="emergency"
                className="w-full"
                onClick={() => navigate("/emergency")}
              >
                Emergency Access - No Login Required
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}