import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus, FileText, Target, TrendingUp, Building2, CheckCircle, DollarSign, ArrowRight, Star, Search } from "lucide-react";

const HowItWorks = () => {
  const contributorSteps = [
    {
      icon: UserPlus,
      title: "Sign Up & Complete Profile",
      description: "Create your account and fill in your demographics, education, region, and interests. This helps companies find you.",
    },
    {
      icon: Search,
      title: "Browse Opportunities",
      description: "Explore available surveys and interviews that match your profile. See earnings before you apply.",
    },
    {
      icon: FileText,
      title: "Apply & Complete",
      description: "Apply to opportunities you're interested in. Once approved, complete surveys or attend interviews.",
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description: "Receive payment directly to your wallet. Withdraw to your bank account or mobile money anytime.",
    },
  ];

  const companySteps = [
    {
      icon: UserPlus,
      title: "Create Company Account",
      description: "Sign up and complete your company profile. Tell us about your organization and research needs.",
    },
    {
      icon: Target,
      title: "Define Your Target",
      description: "Set specific demographic filters: age range, region, education, occupation, and more to reach the right audience.",
    },
    {
      icon: FileText,
      title: "Create Survey or Interview",
      description: "Design your questionnaire or interview guide. Set compensation rates and deadlines.",
    },
    {
      icon: CheckCircle,
      title: "Review & Approve",
      description: "Review applications from qualified contributors. Approve participants and monitor responses in real-time.",
    },
    {
      icon: TrendingUp,
      title: "Analyze Results",
      description: "Access completed responses and analytics. Export data in your preferred format for deeper analysis.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How Datamız Works
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Datamız connects organizations and independent researchers with verified contributors for surveys and one-to-one interviews. The platform helps product teams, marketing teams, and research professionals collect reliable data, insights, and expertise directly from people who match their target audience. By bringing participant discovery, screening, and compensation into one system, Datamız makes high-quality data collection simple and dependable.
          </p>
        </div>

        {/* For Contributors */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <UserPlus className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">For Contributors</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contributorSteps.map((step, index) => (
              <Card key={step.title} className="p-6 relative hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/for-contributors">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="my-16 border-t border-border" />

        {/* For Companies */}
        <section>
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">For Companies</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {companySteps.map((step, index) => (
              <Card key={step.title} className="p-6 relative hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/for-companies">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Key Principles */}
        <section className="mt-20 bg-muted/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fair Compensation</h3>
              <p className="text-sm text-muted-foreground">
                Contributors are paid competitive rates for their time and participation in surveys and interviews.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">High Data Quality</h3>
              <p className="text-sm text-muted-foreground">
                The platform is designed to ensure reliable responses and reduce low-effort participation.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HowItWorks;
