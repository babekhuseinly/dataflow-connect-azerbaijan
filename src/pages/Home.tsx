import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import alatLogo from "@/assets/company-logos/alat.png";
import kapitalBankLogo from "@/assets/company-logos/kapital-bank.png";
import pashaLifeLogo from "@/assets/company-logos/pasha-life.png";
import korponLogo from "@/assets/company-logos/korpon.png";
import enhencerLogo from "@/assets/company-logos/enhencer.png";
import inkYouLogo from "@/assets/company-logos/ink-you.png";
import swanLogo from "@/assets/company-logos/swan.png";
import fourYouCareLogo from "@/assets/company-logos/4youcare.jpg";

const Home = () => {


  const earlyAdopters = [
    { name: "Alat", logo: alatLogo },
    { name: "Kapital Bank", logo: kapitalBankLogo },
    { name: "PASHA Life", logo: pashaLifeLogo },
    { name: "KorpON", logo: korponLogo },
    { name: "Enhencer", logo: enhencerLogo },
    { name: "Ink&You", logo: inkYouLogo },
    { name: "SWAN", logo: swanLogo },
    { name: "4YouCare", logo: fourYouCareLogo },
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
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-relaxed">
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
                  Get Paid
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
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
              Datamız connects those who provide data with those who need it,<br />creating value for everyone.
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
                Earn money by sharing your opinions through surveys and interviews.
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
                Access high-quality, targeted data from verified contributors across the region.
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



      {/* Early Adopters Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Companies on Our Waitlist
            </h2>
            <p className="text-lg text-muted-foreground">
              Join these forward-thinking companies exploring Datamız.
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex animate-scroll-left w-max">
            {[...earlyAdopters, ...earlyAdopters].map((adopter, index) => (
              <div
                key={`${adopter.name}-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <Card className="p-6 flex flex-col items-center justify-center text-center min-h-[140px] w-[180px] bg-muted/30">
                  <div className="h-16 mb-3 flex items-center justify-center">
                    <img src={adopter.logo} alt={adopter.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{adopter.name}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Be Part of a New Data Economy
            </h2>
            <p className="text-xl text-white/90">
              Built with local expertise, designed for regional scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary border border-white hover:bg-white/90">
                <a href="https://dashboard.datamiz.az/signup/" target="_blank" rel="noopener noreferrer">Get Early Access</a>
              </Button>
              <Button size="lg" asChild className="bg-white text-primary border border-white hover:bg-white/90">
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
