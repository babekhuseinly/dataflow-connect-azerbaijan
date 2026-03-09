import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={isDark ? logoDark : logoLight} alt="Datamız" className="h-8 transition-opacity duration-300" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting contributors and companies for high-quality local insights.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/for-contributors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  For Contributors
                </Link>
              </li>
              <li>
                <Link to="/for-companies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/early-adopters" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Early Adopters
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Datamız
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:datamizaz@gmail.com" className="hover:text-primary transition-colors">
                  datamizaz@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+994 70 600 02 80</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Instagram className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="https://www.instagram.com/datamiz.az/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @datamiz.az
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="https://www.linkedin.com/company/datamiz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Datamız
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Datamız. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
