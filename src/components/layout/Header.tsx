import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import datamizLogo from "@/assets/logo-datamiz.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={datamizLogo} alt="Datamız" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/how-it-works"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/how-it-works") ? "text-primary" : "text-foreground/80"
            }`}
          >
            How It Works
          </Link>
          <Link
            to="/for-contributors"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/for-contributors") ? "text-primary" : "text-foreground/80"
            }`}
          >
            For Contributors
          </Link>
          <Link
            to="/for-companies"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/for-companies") ? "text-primary" : "text-foreground/80"
            }`}
          >
            For Companies
          </Link>
          <Link
            to="/early-adopters"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/early-adopters") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Early Adopters
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/waitlist">Join Waitlist</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-muted rounded-lg"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col space-y-3">
            <Link
              to="/how-it-works"
              onClick={toggleMenu}
              className="text-sm font-medium py-2 hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              to="/for-contributors"
              onClick={toggleMenu}
              className="text-sm font-medium py-2 hover:text-primary"
            >
              For Contributors
            </Link>
            <Link
              to="/for-companies"
              onClick={toggleMenu}
              className="text-sm font-medium py-2 hover:text-primary"
            >
              For Companies
            </Link>
            <Link
              to="/early-adopters"
              onClick={toggleMenu}
              className="text-sm font-medium py-2 hover:text-primary"
            >
              Early Adopters
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/login" onClick={toggleMenu}>Sign In</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/waitlist" onClick={toggleMenu}>Join Waitlist</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
