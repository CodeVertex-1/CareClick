import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Activity,
  ArrowRight,
  Shield
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/healthcare-hero-3d.jpg";

export function HeroSection() {
  const navigate = useNavigate();

  const stats = [
    { icon: Hospital, label: "Hospitals", value: "250+" },
    { icon: Users, label: "Doctors", value: "5,000+" },
    { icon: Activity, label: "Emergency Calls", value: "24/7" },
    { icon: Shield, label: "Lives Saved", value: "10,000+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 card-shadow">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Sri Lanka's #1 Healthcare Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Emergency Healthcare{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                When Every Second Counts
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Connect with hospitals, find available beds, locate doctors, and access emergency services 
              across Sri Lanka through our intelligent healthcare response platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate("/emergency")}
                className="text-lg px-8 py-4 h-auto"
              >
                <Phone className="h-5 w-5" />
                Emergency Call
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/hospitals")}
                className="text-lg px-8 py-4 h-auto bg-card/20 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/40"
              >
                <MapPin className="h-5 w-5" />
                Find Hospitals
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-card/20 backdrop-blur-sm border-primary-foreground/10 p-4 text-center hover-lift">
                    <Icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Emergency Quick Access */}
          <div className="lg:pl-8">
            <Card className="bg-card/90 backdrop-blur-md p-8 card-shadow">
              <div className="text-center mb-6">
                <div className="bg-gradient-emergency p-4 rounded-full w-20 h-20 mx-auto mb-4 pulse-emergency">
                  <Phone className="h-12 w-12 text-destructive-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Emergency Services</h3>
                <p className="text-muted-foreground">Quick access to emergency healthcare</p>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="emergency" 
                  className="w-full h-14 text-lg"
                  onClick={() => navigate("/emergency")}
                >
                  <Phone className="h-6 w-6" />
                  Call Emergency: 1990
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="medical" 
                    className="h-12"
                    onClick={() => navigate("/hospitals")}
                  >
                    <MapPin className="h-5 w-5" />
                    Find Hospital
                  </Button>
                  <Button 
                    variant="medical" 
                    className="h-12"
                    onClick={() => navigate("/doctors")}
                  >
                    <Users className="h-5 w-5" />
                    Find Doctor
                  </Button>
                </div>

                <div className="bg-accent/50 rounded-lg p-4 mt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">24/7 Available</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Emergency services and hospital information available round the clock
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Missing import
const Hospital = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);