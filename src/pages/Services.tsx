import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Ambulance, 
  Phone, 
  MapPin, 
  Clock, 
  Users,
  Activity,
  Shield,
  Stethoscope,
  Building,
  Search
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Ambulance,
      title: "Emergency Ambulance",
      description: "24/7 emergency ambulance service with trained paramedics and life support equipment",
      features: ["GPS tracking", "Advanced life support", "Trained paramedics", "24/7 availability"],
      availability: "Available Now",
      contact: "1990"
    },
    {
      icon: Heart,
      title: "Emergency Care",
      description: "Immediate medical attention for critical conditions and trauma cases",
      features: ["Emergency surgery", "Trauma care", "Critical care", "ICU services"],
      availability: "24/7",
      contact: "Emergency Ward"
    },
    {
      icon: Search,
      title: "Hospital Finder",
      description: "Locate nearby hospitals with real-time bed availability and specialist services",
      features: ["Real-time data", "Specialty filtering", "Distance tracking", "Bed availability"],
      availability: "Always Available",
      contact: "Online Service"
    },
    {
      icon: Users,
      title: "Doctor Directory",
      description: "Find qualified doctors by specialty, location, and availability",
      features: ["Specialist search", "Appointment booking", "Doctor profiles", "Reviews & ratings"],
      availability: "Online 24/7",
      contact: "Web Platform"
    },
    {
      icon: Phone,
      title: "Telemedicine",
      description: "Remote consultation with qualified medical professionals",
      features: ["Video consultations", "Digital prescriptions", "Follow-up care", "Medical advice"],
      availability: "8 AM - 10 PM",
      contact: "Schedule Online"
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Track vital signs and health parameters with digital tools",
      features: ["Vital signs tracking", "Health records", "Medication reminders", "Progress monitoring"],
      availability: "Always Available",
      contact: "Mobile App"
    }
  ];

  const emergencyServices = [
    {
      service: "Police Emergency",
      number: "119",
      description: "Police emergency response and law enforcement assistance"
    },
    {
      service: "Fire Department",
      number: "110", 
      description: "Fire rescue, hazardous material response, and emergency rescue"
    },
    {
      service: "Disaster Management",
      number: "117",
      description: "Natural disaster response and emergency coordination"
    },
    {
      service: "Tourist Helpline",
      number: "1912",
      description: "Emergency assistance for tourists and visitors"
    }
  ];

  const hospitalStats = [
    { icon: Building, label: "Government Hospitals", value: "620+" },
    { icon: Heart, label: "Private Hospitals", value: "180+" },
    { icon: Users, label: "Registered Doctors", value: "25,000+" },
    { icon: Stethoscope, label: "Specialists", value: "8,500+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Healthcare Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive healthcare services available across Sri Lanka through our integrated platform
            </p>
          </div>

          {/* Healthcare Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {hospitalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Healthcare Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover-lift card-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-foreground">{service.title}</CardTitle>
                          <Badge variant="secondary">{service.availability}</Badge>
                        </div>
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-3 border-t border-border">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="font-medium">Contact: {service.contact}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Emergency Services */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center space-x-2">
                  <Phone className="h-6 w-6" />
                  <span>Emergency Hotlines</span>
                </CardTitle>
                <CardDescription>
                  Important emergency numbers for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergencyServices.map((emergency, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                      <div>
                        <h4 className="font-semibold text-foreground">{emergency.service}</h4>
                        <p className="text-sm text-muted-foreground">{emergency.description}</p>
                      </div>
                      <Badge variant="destructive" className="text-lg px-3 py-1">
                        {emergency.number}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary flex items-center space-x-2">
                  <Shield className="h-6 w-6" />
                  <span>Service Coverage</span>
                </CardTitle>
                <CardDescription>
                  Our healthcare network across Sri Lanka
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Province Coverage</span>
                      <span className="text-sm text-primary font-semibold">9/9 Provinces</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">District Coverage</span>
                      <span className="text-sm text-primary font-semibold">25/25 Districts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Connected Hospitals</span>
                      <span className="text-sm text-primary font-semibold">800+ Facilities</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">24/7 Services</span>
                      <span className="text-sm text-primary font-semibold">Emergency Care</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground">Response Times</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Urban areas: 8-12 minutes average</p>
                      <p>• Suburban areas: 15-20 minutes average</p>
                      <p>• Rural areas: 25-35 minutes average</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}