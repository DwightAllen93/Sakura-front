import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";


export function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollLink = (sectionId) => {
    // If we're already on home page, just scroll
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="transition-transform hover:scale-105 duration-200">
               <img src="/logo.png" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className="text-foreground hover:text-primary transition-all duration-300 font-semibold hover:scale-105"
            >
              Services
            </Link>

            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-all duration-300 font-semibold hover:scale-105"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-semibold hover:scale-105"
            >
              Contact
            </Link>

            <Link
              to="/locations"
              className="text-foreground hover:text-primary transition-all duration-300 font-semibold hover:scale-105"
            >
              Accomodations
            </Link>

          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#f89d64] text-white px-6 py-3 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-pink-50 rounded-lg transition-all duration-300"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col py-4 space-y-2">
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="text-foreground hover:text-primary hover:bg-pink-50 transition-all duration-300 font-semibold px-4 py-3 rounded-lg"
              >
                Services
              </Link>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="text-foreground hover:text-primary hover:bg-pink-50 transition-all duration-300 font-semibold px-4 py-3 rounded-lg"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="text-foreground hover:text-primary hover:bg-pink-50 transition-all duration-300 font-semibold px-4 py-3 rounded-lg"
              >
                Contact
              </Link>

              <Link
                to="/locations"
                onClick={closeMobileMenu}
                className="text-foreground hover:text-primary hover:bg-pink-50 transition-all duration-300 font-semibold px-4 py-3 rounded-lg"
              >
                Accomodations
              </Link>

           

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="bg-[#f89d64] text-white px-4 py-3 rounded-lg hover:bg-primary transition-all duration-300 font-semibold text-center mx-4 mt-2"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}