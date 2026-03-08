import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building2, TrendingUp, Shield, Clock, Target } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import alatLogo from "@/assets/company-logos/alat.png";
import kapitalBankLogo from "@/assets/company-logos/kapital-bank.png";
import pashaLifeLogo from "@/assets/company-logos/pasha-life.png";
import korponLogo from "@/assets/company-logos/korpon.png";
import enhencerLogo from "@/assets/company-logos/enhencer.png";
import inkYouLogo from "@/assets/company-logos/ink-you.png";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Quality Contributors",
      description: "Access verified contributors with detailed demographic profiles across Azerbaijan",
    },
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Target specific demographics, regions, and occupations for your research needs",
    },
    {
      icon: Shield,
      title: "Verified Data",
      description: "All contributors are KYC verified ensuring authentic and reliable responses",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Get quality responses within 24-48 hours from your target audience",
    },
  ];

  const earlyAdopters = [
    { name: "Alat", logo: alatLogo },
    { name: "Kapital Bank", logo: kapitalBankLogo },
    { name: "PASHA Life Insurance", logo: pashaLifeLogo },
    { name: "KorpON", logo: korponLogo },
    { name: "Enhencer", logo: enhencerLogo },
    { name: "Ink&You", logo: inkYouLogo },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Find the Right People for Your Research
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Connect with verified contributors for surveys and interviews.
              <br />
              Access reliable, targeted data for research and decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/for-contributors">
                  Earn Money
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/for-companies">
                  Request Data
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Sided Marketplace Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              A Two-Sided Data Marketplace
            </h2>
            <p className="text-lg text-muted-foreground">
              Datamız connects those who provide data with those who need it, creating value for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Contributors */}
            <Card className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">For Contributors</h3>
              <p className="text-muted-foreground mb-6">
                Earn money by sharing your opinions through surveys and interviews. Your insights matter.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Flexible earning opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Quick and secure payments</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Work from anywhere</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link to="/for-contributors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            {/* For Companies */}
            <Card className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">For Companies</h3>
              <p className="text-muted-foreground mb-6">
                Access high-quality, targeted data from verified contributors across Azerbaijan.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Precise demographic targeting</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Verified, quality responses</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Fast turnaround times</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link to="/for-companies">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Datamız?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for the Azerbaijani market with local expertise and global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Adopters Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Join these forward-thinking companies already on our waitlist
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {earlyAdopters.map((adopter) => (
              <Card
                key={adopter.name}
                className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 min-h-[140px] bg-muted/30"
              >
                <div className="h-16 mb-3 flex items-center justify-center">
                  <img src={adopter.logo} alt={adopter.name} className="max-h-12 max-w-full object-contain" />
                </div>
                <p className="text-sm font-medium text-foreground">{adopter.name}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/waitlist">
                Join Our Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Join Datamız today and be part of Azerbaijan's data revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/waitlist">Join Waitlist</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white border-primary text-primary hover:bg-primary/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
