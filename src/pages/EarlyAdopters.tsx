import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Handshake, Layers, GraduationCap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import alatLogo from "@/assets/company-logos/alat.png";
import kapitalBankLogo from "@/assets/company-logos/kapital-bank.png";
import pashaLifeLogo from "@/assets/company-logos/pasha-life.png";
import korponLogo from "@/assets/company-logos/korpon.png";
import enhencerLogo from "@/assets/company-logos/enhencer.png";
import inkYouLogo from "@/assets/company-logos/ink-you.png";

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

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

  const contributorCounter = useCountUp(300, 2000);
  const companyCounter = useCountUp(10, 1500);

  const stats = [
    { value: contributorCounter.count, suffix: "+", label: "Waitlisted Contributors", ref: contributorCounter.ref },
    { value: companyCounter.count, suffix: "+", label: "Waitlisted Companies", ref: companyCounter.ref },
  ];

  return (
    <>
      <title>Featured Companies & Early Adopters | Datamız</title>
      <meta name="description" content="Discover the companies that trust Datamız for high-quality market research in Azerbaijan. Join 300+ contributors and 10+ organizations on our platform." />
      <div className="min-h-screen py-20">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Featured Companies
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center" ref={stat.ref}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
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
              Why Organizations Partner With Datamız
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Direct Access to Participants</h3>
                <p className="text-sm text-muted-foreground">
                  Connect directly with respondents instead of purchasing expensive pre-collected datasets. Launch research campaigns and gather insights straight from the source.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Single Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Run surveys and conduct one-to-one interviews in the same platform. Collect measurable data and deeper insights without switching between multiple research tools.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">SABAH.lab Graduate</h3>
                <p className="text-sm text-muted-foreground">
                  Datamız is a graduate of the SABAH.lab startup incubation program supporting the development of innovative technology ventures.
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
                  <div className="text-sm text-muted-foreground">— Local Startup</div>
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
                "Food & Beverage",
                "Marketing Technology",
                "Creative Services",
                "Corporate Training",
                "FMCG",
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
        </div>
      </div>
    </>
  );
};

export default EarlyAdopters;
