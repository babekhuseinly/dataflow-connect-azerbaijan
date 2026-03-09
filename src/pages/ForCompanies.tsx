import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, TrendingUp, Clock, CheckCircle, XCircle, ArrowRight, ClipboardCheck, Star, Puzzle, Bot } from "lucide-react";

const ForCompanies = () => {
  const painPoints = [
    {
      icon: XCircle,
      title: "Low Response Rates",
      problem: "Traditional surveys struggle to reach target audiences",
      solution: "Pre-qualified participants matched to your exact criteria",
    },
    {
      icon: XCircle,
      title: "Unreliable Data",
      problem: "Bot responses and fake accounts compromise data quality",
      solution: "Identity-verified contributors, reputation-based participation, and automated response quality control",
    },
    {
      icon: XCircle,
      title: "Slow Turnaround",
      problem: "Waiting weeks for enough responses delays decisions",
      solution: "Get quality responses within 24–48 hours",
    },
    {
      icon: XCircle,
      title: "Poor Targeting",
      problem: "Generic surveys miss your specific demographic needs",
      solution: "Filter by age, region, occupation, education, and more",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Filter participants by demographics, location, education, occupation, income level, and interests to reach your exact audience.",
    },
    {
      icon: Shield,
      title: "Verified Quality",
      description: "All contributors undergo identity verification while automated systems monitor response quality and detect low-effort submissions.",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Launch surveys and start receiving responses within hours. Most projects complete within 24–48 hours.",
    },
    {
      icon: TrendingUp,
      title: "Actionable Insights",
      description: "Real-time analytics dashboard, export capabilities, and detailed response tracking to drive business decisions.",
    },
  ];

  const dataIntegrity = [
    {
      icon: Shield,
      title: "KYC-Verified Contributors",
      description: "Identity verification using a national ID or passport is required for all contributors to ensure transparency.",
    },
    {
      icon: ClipboardCheck,
      title: "Application-Based Participation",
      description: "Contributors apply before joining, filtering out low-quality and opportunistic users early.",
    },
    {
      icon: Star,
      title: "Reputation System",
      description: "Contributor performance and response quality are tracked over time. High-performing contributors gain stronger reputation scores and access to more research opportunities.",
    },
    {
      icon: Puzzle,
      title: "Proof of Fit",
      description: "Companies can request documented proof such as residency, employment history, or credentials.",
    },
    {
      icon: Bot,
      title: "AI Response Quality Control",
      description: "Automated systems detect low-effort responses, inconsistencies, and suspicious activity to maintain high-quality research data.",
    },
    {
      icon: Target,
      title: "Targeted Participant Matching",
      description: "Participants are matched based on relevant demographics, location, profession, and interests to ensure responses come from the right audience for your research.",
    },
  ];

  const targetingFilters = [
    {
      category: "Demographics",
      filters: ["Age range", "Gender", "Marital status", "Household size"],
    },
    {
      category: "Location",
      filters: ["City", "Region", "District", "Urban/Rural"],
    },
    {
      category: "Education & Career",
      filters: ["Education level", "Field of study", "Occupation", "Industry", "Income range"],
    },
    {
      category: "Interests & Behavior",
      filters: ["Shopping habits", "Tech usage", "Travel frequency", "Hobbies"],
    },
  ];

  const useCases = [
    {
      title: "Market Research",
      description: "Test product concepts, understand customer preferences, and validate market opportunities before launch.",
    },
    {
      title: "Customer Satisfaction",
      description: "Gather feedback from your customer segments to improve products, services, and customer experience.",
    },
    {
      title: "Brand Perception",
      description: "Measure brand awareness, sentiment, and positioning against competitors in emerging markets.",
    },
    {
      title: "Product Testing",
      description: "Get detailed feedback on prototypes, features, and user experience from your target demographics.",
    },
    {
      title: "Policy & Public Opinion",
      description: "Understand public sentiment on social, economic, and policy issues across different segments.",
    },
    {
      title: "Employee Insights",
      description: "Conduct anonymous workplace surveys to improve organizational culture and employee satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Access Verified Data Samples
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Collect structured responses from participants in your target market.
          </p>
        </div>

        {/* Pain Points */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">
            Common Challenges We Solve
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Traditional data collection methods have significant limitations.
            <br />
            Here's how Datamız addresses them:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {painPoints.map((point) => (
              <Card key={point.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <XCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.problem}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 pl-14">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground">{point.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>


        {/* Data Integrity System */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">
            How Datamız Ensures Reliable Data
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Datamız uses a multi-layer data integrity system to ensure organizations receive reliable insights from real and relevant participants. Identity verification, participant screening, reputation tracking, proof of fit, targeted participant matching, and AI-powered response analysis work together to prevent fraudulent or low-quality participation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {dataIntegrity.map((item) => (
              <Card key={item.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Targeting Filters */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">
            Powerful Targeting Filters
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reach exactly who you need with comprehensive demographic and behavioral filters.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetingFilters.map((group) => (
              <Card key={group.category} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-4 text-foreground">{group.category}</h3>
                <ul className="space-y-2">
                  {group.filters.map((filter) => (
                    <li key={filter} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{filter}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            How Companies Use Datamız
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h3 className="text-lg font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20 bg-muted/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Run Research in Five Simple Steps
          </h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Create Company Account" },
              { step: "2", title: "Define Your Target" },
              { step: "3", title: "Create Survey or Interview" },
              { step: "4", title: "Launch & Monitor" },
              { step: "5", title: "Analyze Results" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="mb-20">
          <Card className="p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-muted-foreground mb-8">
              Pay only for completed responses. No subscription fees or hidden costs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$1 - $8</div>
                <div className="text-sm text-muted-foreground">per survey response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">From $7</div>
                <div className="text-sm text-muted-foreground">per 15-minute interview</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Price depends on survey length, complexity, and targeting criteria.
              <br />
              Custom pricing available for large-scale projects and ongoing research partnerships.
            </p>
          </Card>
        </section>

        {/* Analytics */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">
            Campaign Analytics
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Monitor your research campaigns with comprehensive analytics and insights.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl font-bold text-primary mb-2">USD 700</p>
              <p className="text-sm text-muted-foreground">Total Spent</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl font-bold text-primary mb-2">92%</p>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl font-bold text-primary mb-2">24h</p>
              <p className="text-sm text-muted-foreground">Avg Response Time</p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Get Quality Insights?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start collecting targeted data from screened, identity-verified participants.
          </p>
          <Button size="lg" asChild className="bg-white text-primary border-white hover:bg-white/90">
            <a href="https://dashboard.datamiz.az/signup/company/" target="_blank" rel="noopener noreferrer">
              Create a Company Account
            </a>
          </Button>
        </section>

      </div>
    </div>
  );
};

export default ForCompanies;
