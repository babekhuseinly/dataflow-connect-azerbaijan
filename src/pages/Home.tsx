import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building2, TrendingUp, Shield, Clock, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const features = [
    { icon: Users, title: t("home.features.qualityContributors.title"), description: t("home.features.qualityContributors.description") },
    { icon: Target, title: t("home.features.preciseTargeting.title"), description: t("home.features.preciseTargeting.description") },
    { icon: Shield, title: t("home.features.verifiedData.title"), description: t("home.features.verifiedData.description") },
    { icon: Clock, title: t("home.features.fastResults.title"), description: t("home.features.fastResults.description") },
  ];

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
              {t("home.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t("home.hero.subtitle")}
              <br />
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/for-contributors">
                  {t("home.hero.earnMoney")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
                <Link to="/for-companies">
                  {t("home.hero.requestData")}
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
              {t("home.marketplace.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.marketplace.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">{t("home.contributors.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("home.contributors.description")}</p>
              <ul className="space-y-3 mb-6">
                {[t("home.contributors.flexible"), t("home.contributors.quickPayments"), t("home.contributors.workAnywhere")].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link to="/for-contributors">
                  {t("home.contributors.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">{t("home.companies.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("home.companies.description")}</p>
              <ul className="space-y-3 mb-6">
                {[t("home.companies.targeting"), t("home.companies.verified"), t("home.companies.fastTurnaround")].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link to="/for-companies">
                  {t("home.companies.learnMore")}
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
              {t("home.features.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.features.subtitle")}
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
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t("home.earlyAdopters.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.earlyAdopters.subtitle")}
            </p>
          </div>
        </div>
        <div className="relative w-full">
          <div className="flex animate-scroll-left w-max">
            {[...earlyAdopters, ...earlyAdopters].map((adopter, index) => (
              <div key={`${adopter.name}-${index}`} className="flex-shrink-0 mx-4">
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
              {t("home.cta.title")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary border border-white hover:bg-white/90">
                <a href="https://dashboard.datamiz.az/signup/" target="_blank" rel="noopener noreferrer">{t("home.cta.getEarlyAccess")}</a>
              </Button>
              <Button size="lg" asChild className="bg-white text-primary border border-white hover:bg-white/90">
                <Link to="/contact">{t("home.cta.contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
