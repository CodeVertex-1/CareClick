import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Menu, 
  X, 
  Hospital, 
  Users, 
  Activity, 
  MapPin, 
  Phone,
  UserCircle 
} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/", icon: Heart },
    { name: "Hospitals", path: "/hospitals", icon: Hospital },
    { name: "Emergency", path: "/emergency", icon: Phone },
    { name: "Doctors", path: "/doctors", icon: Users },
    { name: "Services", path: "/services", icon: Activity },
    { name: "About", path: "/about", icon: MapPin },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border medical-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-primary p-2 rounded-lg group-hover:shadow-medical medical-transition">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">CareClick</h1>
              <p className="text-xs text-muted-foreground">Sri Lanka</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg medical-transition hover-lift ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/login")}
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <UserCircle className="h-4 w-4" />
              Login
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent medical-transition"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg medical-transition ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                >
                  <UserCircle className="h-4 w-4" />
                  Login
                </Button>
                <Button
                  variant="hero"
                  className="w-full justify-start"
                  onClick={() => {
                    navigate("/signup");
                    setIsOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}