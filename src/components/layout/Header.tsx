import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="relative h-10 md:h-12">
            <img
              src={logoLight}
              alt="Datamız"
              className={`h-10 md:h-12 object-contain absolute top-0 left-0 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src={logoDark}
              alt="Datamız"
              className={`h-10 md:h-12 object-contain transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
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
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button asChild>
            <Link to="/waitlist">Join Waitlist</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-muted rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col space-y-3">
            <Link to="/how-it-works" onClick={toggleMenu} className="text-sm font-medium py-2 hover:text-primary">
              How It Works
            </Link>
            <Link to="/for-contributors" onClick={toggleMenu} className="text-sm font-medium py-2 hover:text-primary">
              For Contributors
            </Link>
            <Link to="/for-companies" onClick={toggleMenu} className="text-sm font-medium py-2 hover:text-primary">
              For Companies
            </Link>
            <Link to="/early-adopters" onClick={toggleMenu} className="text-sm font-medium py-2 hover:text-primary">
              Early Adopters
            </Link>
            <div className="pt-4">
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
