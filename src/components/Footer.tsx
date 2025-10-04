import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/prospera-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Prospera Finance" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/80 text-base leading-relaxed">
              Building Your Prosperity, One Smart Decision at a Time
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/80 hover:text-background text-base transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-background text-base transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background text-base transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-background/80 hover:text-background text-base transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3 text-base text-background/80">
              <li>Business Loans</li>
              <li>Payroll Loans</li>
              <li>Asset Financing</li>
              <li>LPO Loans</li>
              <li>Personal Loans</li>
              <li>Investments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-base text-background/80">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>0803 969 5299</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>enquiries@prosperagroup.co</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>House 1, 52 Junction by 5th Avenue, Festac Town, Lagos</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Prospera Finance Limited. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/legal" className="text-background/60 hover:text-background text-sm transition-colors">
              Legal & Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
