import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  Bed, 
  Activity, 
  Users,
  Star,
  Navigation
} from "lucide-react";

export default function Hospitals() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  const hospitals = [
    {
      id: 1,
      name: "National Hospital of Sri Lanka",
      district: "Colombo",
      address: "Regent Street, Colombo 07",
      phone: "+94 11 269 1111",
      beds: { total: 3400, available: 120 },
      icu: { total: 45, available: 8 },
      rating: 4.8,
      emergency: true,
      specialties: ["Cardiology", "Neurology", "Emergency", "ICU"],
      distance: "2.3 km"
    },
    {
      id: 2,
      name: "Teaching Hospital Karapitiya",
      district: "Galle",
      address: "Karapitiya, Galle",
      phone: "+94 91 223 2261",
      beds: { total: 1200, available: 45 },
      icu: { total: 20, available: 3 },
      rating: 4.5,
      emergency: true,
      specialties: ["General Surgery", "Pediatrics", "Emergency"],
      distance: "125 km"
    },
    {
      id: 3,
      name: "Teaching Hospital Peradeniya",
      district: "Kandy",
      address: "Peradeniya, Kandy",
      phone: "+94 81 238 8000",
      beds: { total: 1100, available: 67 },
      icu: { total: 18, available: 5 },
      rating: 4.6,
      emergency: true,
      specialties: ["Orthopedics", "Cardiology", "General Medicine"],
      distance: "95 km"
    },
    {
      id: 4,
      name: "Teaching Hospital Jaffna",
      district: "Jaffna",
      address: "Jaffna",
      phone: "+94 21 222 2261",
      beds: { total: 800, available: 23 },
      icu: { total: 12, available: 2 },
      rating: 4.3,
      emergency: true,
      specialties: ["Emergency", "General Surgery", "Pediatrics"],
      distance: "420 km"
    }
  ];

  const districts = [
    "All Districts", "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", 
    "Nuwara Eliya", "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi",
    "Mannar", "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
    "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
    "Monaragala", "Ratnapura", "Kegalle"
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === "all" || 
                           hospital.district.toLowerCase() === selectedDistrict.toLowerCase();
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Find Hospitals in Sri Lanka
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Locate hospitals, check bed availability, and find emergency services across all districts
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-lg p-6 card-shadow mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search hospitals by name or location..."
                    className="pl-10 h-12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <select
                  className="w-full h-12 px-3 border border-input bg-background rounded-md"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                  {districts.map((district) => (
                    <option key={district} value={district.toLowerCase()}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">
                Found {filteredHospitals.length} Hospitals
              </h2>
              <Button variant="outline">
                <MapPin className="h-4 w-4" />
                View on Map
              </Button>
            </div>

            <div className="grid gap-6">
              {filteredHospitals.map((hospital) => (
                <Card key={hospital.id} className="hover-lift card-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">
                          {hospital.name}
                        </CardTitle>
                        <CardDescription className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{hospital.address}</span>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{hospital.rating}</span>
                        </div>
                        <Badge variant="secondary">{hospital.distance}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Contact Info */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{hospital.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>24/7 Emergency</span>
                          </div>
                        </div>
                      </div>

                      {/* Availability */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Availability</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <Bed className="h-4 w-4 text-secondary" />
                              <span>General Beds</span>
                            </div>
                            <span className="font-semibold text-secondary">
                              {hospital.beds.available}/{hospital.beds.total}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <Activity className="h-4 w-4 text-destructive" />
                              <span>ICU Beds</span>
                            </div>
                            <span className="font-semibold text-destructive">
                              {hospital.icu.available}/{hospital.icu.total}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {hospital.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
                      <Button variant="hero" className="flex-1">
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="h-4 w-4" />
                        Call Hospital
                      </Button>
                      <Button variant="medical" className="flex-1">
                        <Users className="h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}