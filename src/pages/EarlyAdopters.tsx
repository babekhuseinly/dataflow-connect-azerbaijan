import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, TrendingUp, Users, ArrowRight } from "lucide-react";
import alatLogo from "@/assets/company-logos/alat.png";
import kapitalBankLogo from "@/assets/company-logos/kapital-bank.png";
import pashaLifeLogo from "@/assets/company-logos/pasha-life.png";
import korponLogo from "@/assets/company-logos/korpon.png";
import enhencerLogo from "@/assets/company-logos/enhencer.png";
import inkYouLogo from "@/assets/company-logos/ink-you.png";

const EarlyAdopters = () => {
  const adopters = [
    {
      name: "Alat",
      logo: alatLogo,
      industry: "Smart Building Technology",
      description: "Saudi Arabian smart-building and advanced technology manufacturer leading large-scale infrastructure solutions.",
    },
    {
      name: "Kapital Bank",
      logo: kapitalBankLogo,
      industry: "Financial Services",
      description: "One of Azerbaijan's largest and most innovative banks.",
    },
    {
      name: "PASHA Life Insurance",
      logo: pashaLifeLogo,
      industry: "Insurance",
      description: "Premier life insurance provider with modern customer-centric approach.",
    },
    {
      name: "KorpON",
      logo: korponLogo,
      industry: "Corporate Solutions",
      description: "Corporate training and development solutions provider.",
    },
    {
      name: "Enhencer",
      logo: enhencerLogo,
      industry: "Marketing Technology",
      description: "AI-powered marketing and analytics platform.",
    },
    {
      name: "Ink&You",
      logo: inkYouLogo,
      industry: "Creative Services",
      description: "Design and branding agency creating memorable brand experiences.",
    },
  ];

  const stats = [
    { value: "6+", label: "Early Adopters" },
    { value: "5", label: "Industries" },
    { value: "1000+", label: "Potential Users" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Featured Companies
          </h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Adopters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {adopters.map((adopter) => (
            <Card
              key={adopter.name}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:border-primary bg-muted/30"
            >
              <div className="mb-4 flex items-center justify-center h-20">
                <img src={adopter.logo} alt={adopter.name} className="max-h-16 max-w-full object-contain" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{adopter.name}</h3>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                {adopter.industry}
              </div>
              <p className="text-sm text-muted-foreground">{adopter.description}</p>
            </Card>
          ))}
        </div>

        {/* Why They Trust Us */}
        <section className="mb-20 bg-muted/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Why Organizations Choose Datamız
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Deep understanding of the Azerbaijani market with verified local contributors
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Data</h3>
              <p className="text-sm text-muted-foreground">
                KYC-verified contributors ensure authentic, reliable responses for better decisions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">SABAH Lab Backed</h3>
              <p className="text-sm text-muted-foreground">
                Part of the prestigious SABAH Lab Incubation Program ensuring quality and support
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">💬</div>
                <div>
                  <div className="font-semibold text-foreground">Early Adopter Feedback</div>
                  <div className="text-sm text-muted-foreground">Beta Program Participant</div>
                </div>
              </div>
              <p className="text-lg text-foreground/90 italic mb-6">
                "Datamız is exactly what Azerbaijan's market research landscape needs. The ability to target specific demographics with verified contributors saves us time and gives us confidence in our data quality."
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">— Leading Financial Institution</div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Industries Represented */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Industries Represented
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Financial Services",
              "Insurance",
              "Economic Development",
              "Marketing Technology",
              "Creative Services",
              "Corporate Training",
              "Technology",
              "Retail",
            ].map((industry) => (
              <div
                key={industry}
                className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Join These Leading Organizations
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of Azerbaijan's data revolution. Get early access to Datamız.
          </p>
          <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90">
            <a href="https://dashboard.datamiz.az/signup/" target="_blank" rel="noopener noreferrer">
              Get Early Access
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default EarlyAdopters;
