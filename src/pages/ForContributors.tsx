import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Clock, Shield, Users, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";

const ForContributors = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Get paid for sharing your opinions. Earn competitive rates for surveys and interviews that match your profile.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work whenever you want, wherever you are. Choose opportunities that fit your availability.",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Your data is protected and payments are guaranteed. We ensure a safe and transparent platform.",
    },
    {
      icon: Users,
      title: "Shape Products & Services",
      description: "Your insights help companies build better products and services for the emerging markets.",
    },
  ];

  const howToEarn = [
    {
      title: "Complete Your Profile",
      description: "Add your demographics, education, occupation, and interests. The more complete your profile, the more opportunities you'll see.",
      amount: "One-time setup",
    },
    {
      title: "Surveys",
      description: "From quick polls to detailed questionnaires. Compensation depends on the length, complexity, and other advanced factors of each survey.",
      amount: "$0.5–$30 per submission",
    },
    {
      title: "Video Interviews",
      description: "One-to-one or group video conversations with researchers, usually 15 minutes or longer.",
      amount: "From $5 per 15 minutes",
    },
  ];

  const analyticsStats = [
    {
      label: "Total Earned",
      value: "245 AZN",
    },
    {
      label: "Surveys Completed",
      value: "32",
    },
    {
      label: "Average Rating",
      value: "4.8 / 5",
    },
    {
      label: "Active Opportunities",
      value: "5 open",
    },
  ];

  const eligibility = [
    "18 years or older",
    "Resident of Azerbaijan",
    "Valid government-issued ID for verification",
    "Active mobile number and email",
    "Bank account or mobile money for payments",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Earn Money Sharing Your Opinions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of contributors in Azerbaijan who earn extra income by participating in surveys and interviews
          </p>
        </div>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Why Become a Contributor?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Earn */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">
            How You Can Earn
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Different types of opportunities with varying time commitments and compensation
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howToEarn.map((opportunity) => (
              <Card key={opportunity.title} className="p-6 hover:shadow-lg transition-shadow duration-300 border-2">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {opportunity.amount}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-sm text-muted-foreground">{opportunity.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-muted/30">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
                Who Can Join?
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Basic requirements to become a contributor on Datamız
              </p>
              <div className="space-y-4">
                {eligibility.map((requirement) => (
                  <div key={requirement} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground">{requirement}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20 bg-muted/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Getting Started is Easy
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Sign Up</h3>
              <p className="text-sm text-muted-foreground">
                Create your account in minutes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Complete Profile</h3>
              <p className="text-sm text-muted-foreground">
                Add your details to get matched
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Start Earning</h3>
              <p className="text-sm text-muted-foreground">
                Apply to surveys and interviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Paid</h3>
              <p className="text-sm text-muted-foreground">
                Withdraw your earnings anytime
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">How much can I earn?</h3>
              <p className="text-sm text-muted-foreground">
                Earnings vary based on the type and length of surveys. Active contributors can earn 100-500 AZN per month.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">When do I get paid?</h3>
              <p className="text-sm text-muted-foreground">
                Payments are processed within 48 hours of completing a survey. You can withdraw once you reach 20 AZN.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">How often are surveys available?</h3>
              <p className="text-sm text-muted-foreground">
                It depends on your profile and current demand. Most contributors see new opportunities weekly.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Is my information safe?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! All your personal data is encrypted and we never share your identity with companies without consent.
              </p>
            </Card>
          </div>
        </section>

        {/* Analytics */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">
            Your Analytics at a Glance
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Track your earnings, performance, and opportunities in real-time
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {analyticsStats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of local contributors and start earning shortly.
          </p>
          <Button size="lg" asChild className="bg-white text-primary border-white hover:bg-white/90">
            <a href="https://dashboard.datamiz.az/signup/user/" target="_blank" rel="noopener noreferrer">
              Create a Contributor Account
            </a>
          </Button>
        </section>

      </div>
    </div>
  );
};

export default ForContributors;
