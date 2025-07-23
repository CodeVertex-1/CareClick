import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Ambulance, 
  Heart, 
  AlertTriangle,
  Navigation,
  Users
} from "lucide-react";

export default function Emergency() {
  const emergencyNumbers = [
    { service: "Ambulance Service", number: "1990", description: "National Emergency Ambulance Service" },
    { service: "Police Emergency", number: "119", description: "Police Emergency Response" },
    { service: "Fire & Rescue", number: "110", description: "Fire Department Emergency" },
    { service: "Tourist Helpline", number: "1912", description: "Tourist Emergency Assistance" }
  ];

  const nearbyHospitals = [
    {
      name: "National Hospital Colombo",
      distance: "2.1 km",
      eta: "8 mins",
      status: "Available",
      emergency: true
    },
    {
      name: "Durdans Hospital",
      distance: "3.4 km", 
      eta: "12 mins",
      status: "Available",
      emergency: true
    },
    {
      name: "Lanka Hospital",
      distance: "4.2 km",
      eta: "15 mins", 
      status: "Busy",
      emergency: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Emergency Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-emergency p-4 rounded-full w-20 h-20 mx-auto mb-6 pulse-emergency">
              <AlertTriangle className="h-12 w-12 text-destructive-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Emergency Services</h1>
            <p className="text-xl text-muted-foreground">
              Quick access to emergency healthcare and rescue services across Sri Lanka
            </p>
          </div>

          {/* Emergency Numbers */}
          <Card className="mb-8 border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-2xl text-destructive flex items-center space-x-2">
                <Phone className="h-6 w-6" />
                <span>Emergency Hotlines</span>
              </CardTitle>
              <CardDescription>
                Call these numbers immediately in case of emergency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {emergencyNumbers.map((emergency, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border border-border hover-lift">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{emergency.service}</h3>
                      <Badge variant="destructive" className="text-lg px-3 py-1">
                        {emergency.number}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{emergency.description}</p>
                    <Button 
                      variant="emergency" 
                      size="sm" 
                      className="w-full mt-3"
                      onClick={() => window.open(`tel:${emergency.number}`)}
                    >
                      <Phone className="h-4 w-4" />
                      Call {emergency.number}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Ambulance className="h-6 w-6 text-primary" />
                  <span>Request Ambulance</span>
                </CardTitle>
                <CardDescription>
                  Get immediate ambulance service to your location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Current Location</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Colombo 07, Regent Street (Auto-detected)
                    </p>
                  </div>
                  <Button variant="emergency" className="w-full">
                    <Ambulance className="h-5 w-5" />
                    Request Emergency Ambulance
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4" />
                    Update Location
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-secondary" />
                  <span>Find Nearest Hospital</span>
                </CardTitle>
                <CardDescription>
                  Locate the closest hospital with available emergency services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {nearbyHospitals.map((hospital, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{hospital.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {hospital.distance} • ETA: {hospital.eta}
                          </p>
                        </div>
                        <Badge variant={hospital.status === "Available" ? "secondary" : "destructive"}>
                          {hospital.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="medical" className="w-full">
                    <Navigation className="h-4 w-4" />
                    Get Directions to Nearest
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <span>Emergency Guidelines</span>
              </CardTitle>
              <CardDescription>
                Important information for emergency situations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Before Emergency Services Arrive:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Stay calm and ensure your safety first</li>
                    <li>• Provide clear location information</li>
                    <li>• Follow dispatcher instructions</li>
                    <li>• Do not move seriously injured patients</li>
                    <li>• Keep airways clear for unconscious patients</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Information to Provide:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Exact location or landmark</li>
                    <li>• Nature of emergency</li>
                    <li>• Number of people involved</li>
                    <li>• Current condition of patients</li>
                    <li>• Your contact number</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}