import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MapPin, 
  Users, 
  Phone,
  Mail,
  Globe,
  Target,
  Award,
  Clock,
  Shield
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Anura Jayasinghe",
      role: "Medical Director",
      experience: "20+ years in emergency medicine",
      education: "MBBS, MD Emergency Medicine"
    },
    {
      name: "Kumari Silva",
      role: "Technology Director", 
      experience: "15+ years in healthcare IT",
      education: "BSc Computer Science, MSc Health Informatics"
    },
    {
      name: "Roshan Perera",
      role: "Operations Manager",
      experience: "12+ years in healthcare operations",
      education: "MBA Healthcare Management"
    }
  ];

  const achievements = [
    { icon: Users, label: "Lives Impacted", value: "100,000+" },
    { icon: Clock, label: "Response Time", value: "8 mins avg" },
    { icon: Heart, label: "Success Rate", value: "98.5%" },
    { icon: Shield, label: "Uptime", value: "99.9%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-primary p-4 rounded-full w-20 h-20 mx-auto mb-6">
              <Heart className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About AidLink Sri Lanka
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing emergency healthcare response across Sri Lanka through innovative technology 
              and seamless coordination between patients, hospitals, and emergency services.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Target className="h-6 w-6" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide immediate access to life-saving healthcare services by connecting patients 
                  with the right medical resources at the right time. We bridge the gap between emergency 
                  situations and appropriate medical care through real-time data and intelligent routing.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-secondary">
                  <Globe className="h-6 w-6" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become Sri Lanka's most trusted healthcare emergency response platform, ensuring 
                  that every citizen has access to timely, quality healthcare regardless of their location 
                  or circumstances.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* The Problem We Solve */}
          <Card className="mb-16 border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">The Challenge We Address</CardTitle>
              <CardDescription>
                Critical issues in Sri Lanka's healthcare emergency response system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Current Problems:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Delayed emergency response due to lack of real-time information</li>
                    <li>• Patients running between hospitals to find available beds</li>
                    <li>• Inefficient ambulance routing and dispatch</li>
                    <li>• Limited visibility of doctor availability and specialties</li>
                    <li>• Disconnected communication between healthcare facilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Our Solution:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time bed and ICU availability tracking</li>
                    <li>• Intelligent hospital matching based on location and needs</li>
                    <li>• Automated ambulance routing to nearest appropriate facility</li>
                    <li>• Comprehensive doctor directory with live schedules</li>
                    <li>• Unified platform connecting all healthcare stakeholders</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="text-center hover-lift">
                    <CardContent className="pt-6">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover-lift card-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-foreground">{member.name}</CardTitle>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                    <p className="text-sm text-muted-foreground">{member.education}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Impact (Future Plan) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Impact (Future Plan)</h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <ul className="space-y-4 text-muted-foreground text-center">
                <li>🚑 24/7 access to ICU tracking</li>
                <li>📍 Coverage across 25+ districts</li>
                <li>🤝 Partnerships with 50+ hospitals</li>
                <li>💬 Available in 3 languages</li>
              </ul>
            </div>
          </div>

          {/* Values / Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Values / Principles</h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <ul className="space-y-4 text-muted-foreground text-center">
                <li>✅ Speed saves lives</li>
                <li>✅ Respect patient privacy</li>
                <li>✅ Build trust with hospitals</li>
                <li>✅ Be user-friendly, always</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Get In Touch</CardTitle>
              <CardDescription className="text-center">
                Contact us for partnerships, support, or more information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Emergency Hotline</span>
                  <span className="text-muted-foreground">1990</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Email Support</span>
                  <span className="text-muted-foreground">support@aidlink.lk</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Head Office</span>
                  <span className="text-muted-foreground">Colombo 07, Sri Lanka</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="hero" size="lg">
                  <Heart className="h-5 w-5" />
                  Join Our Mission
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}