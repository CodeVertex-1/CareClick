import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  Star,
  Users,
  GraduationCap,
  Calendar,
  Stethoscope
} from "lucide-react";

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const doctors = [
    {
      id: 1,
      name: "Dr. Samantha Perera",
      specialty: "Cardiologist",
      hospital: "National Hospital of Sri Lanka",
      district: "Colombo",
      experience: "15 years",
      rating: 4.9,
      availability: "Available Today",
      phone: "+94 11 269 1111",
      education: "MBBS, MD (Cardiology)",
      languages: ["English", "Sinhala", "Tamil"],
      consultationFee: "Rs. 2,500",
      avatar: "SP"
    },
    {
      id: 2,
      name: "Dr. Roshan Fernando",
      specialty: "Neurologist",
      hospital: "Teaching Hospital Peradeniya",
      district: "Kandy",
      experience: "12 years",
      rating: 4.7,
      availability: "Available Tomorrow",
      phone: "+94 81 238 8000",
      education: "MBBS, MD (Neurology)",
      languages: ["English", "Sinhala"],
      consultationFee: "Rs. 3,000",
      avatar: "RF"
    },
    {
      id: 3,
      name: "Dr. Priya Jayawardena",
      specialty: "Pediatrician",
      hospital: "Lady Ridgeway Hospital",
      district: "Colombo",
      experience: "10 years",
      rating: 4.8,
      availability: "Available Today",
      phone: "+94 11 269 2300",
      education: "MBBS, DCH, MD (Pediatrics)",
      languages: ["English", "Sinhala"],
      consultationFee: "Rs. 2,000",
      avatar: "PJ"
    },
    {
      id: 4,
      name: "Dr. Chaminda Silva",
      specialty: "Orthopedic Surgeon",
      hospital: "Teaching Hospital Karapitiya",
      district: "Galle",
      experience: "18 years",
      rating: 4.6,
      availability: "Available This Week",
      phone: "+94 91 223 2261",
      education: "MBBS, MS (Orthopedics)",
      languages: ["English", "Sinhala"],
      consultationFee: "Rs. 3,500",
      avatar: "CS"
    },
    {
      id: 5,
      name: "Dr. Nimal Rajapaksa",
      specialty: "Emergency Medicine",
      hospital: "National Hospital of Sri Lanka",
      district: "Colombo",
      experience: "8 years",
      rating: 4.5,
      availability: "On Duty Now",
      phone: "+94 11 269 1111",
      education: "MBBS, Dip. Emergency Medicine",
      languages: ["English", "Sinhala", "Tamil"],
      consultationFee: "Rs. 2,500",
      avatar: "NR"
    }
  ];

  const specialties = [
    "All Specialties", "Cardiologist", "Neurologist", "Pediatrician", 
    "Orthopedic Surgeon", "Emergency Medicine", "General Surgery", 
    "Dermatologist", "Psychiatrist", "Gynecologist", "Urologist"
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || 
                           doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();
    return matchesSearch && matchesSpecialty;
  });

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes("Available Today") || availability.includes("On Duty Now")) {
      return "secondary";
    } else if (availability.includes("Available Tomorrow")) {
      return "outline";
    } else {
      return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Find Doctors in Sri Lanka
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with qualified medical professionals across all specialties and districts
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-lg p-6 card-shadow mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search doctors by name, hospital, or location..."
                    className="pl-10 h-12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <select
                  className="w-full h-12 px-3 border border-input bg-background rounded-md"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty.toLowerCase()}>
                      {specialty}
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
                Found {filteredDoctors.length} Doctors
              </h2>
              <Button variant="outline">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>

            <div className="grid gap-6">
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="hover-lift card-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={`/doctors/${doctor.id}.jpg`} alt={doctor.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {doctor.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl text-foreground mb-1">
                              {doctor.name}
                            </CardTitle>
                            <div className="flex items-center space-x-4 mb-2">
                              <Badge variant="outline" className="flex items-center space-x-1">
                                <Stethoscope className="h-3 w-3" />
                                <span>{doctor.specialty}</span>
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="font-semibold">{doctor.rating}</span>
                              </div>
                            </div>
                            <CardDescription className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{doctor.hospital}, {doctor.district}</span>
                            </CardDescription>
                          </div>
                          
                          <div className="text-right">
                            <Badge variant={getAvailabilityColor(doctor.availability)} className="mb-2">
                              {doctor.availability}
                            </Badge>
                            <div className="text-lg font-semibold text-primary">
                              {doctor.consultationFee}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Experience & Education */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Qualifications</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            <span>{doctor.education}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{doctor.experience} experience</span>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{doctor.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Languages: {doctor.languages.join(", ")}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Actions</h4>
                        <div className="space-y-2">
                          <Button variant="hero" size="sm" className="w-full">
                            <Calendar className="h-4 w-4" />
                            Book Appointment
                          </Button>
                          <Button variant="outline" size="sm" className="w-full">
                            <Phone className="h-4 w-4" />
                            Call Doctor
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
                      <Button variant="medical" className="flex-1">
                        <Users className="h-4 w-4" />
                        View Full Profile
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <MapPin className="h-4 w-4" />
                        Hospital Location
                      </Button>
                      <Button variant="secondary" className="flex-1">
                        <Star className="h-4 w-4" />
                        Read Reviews
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