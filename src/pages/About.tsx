import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Datamız
          </h1>
          <p className="text-xl text-muted-foreground">
            Building Azerbaijan's premier data marketplace
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Datamız connects contributors who want to earn money by sharing their insights with companies that need high-quality, targeted data to make better business decisions. We're building a transparent, efficient marketplace that creates value for everyone.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Data</h3>
              <p className="text-sm text-muted-foreground">
                Verified contributors ensure authentic, reliable responses
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fair Marketplace</h3>
              <p className="text-sm text-muted-foreground">
                Transparent pricing and fair compensation for all
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Local Focus</h3>
              <p className="text-sm text-muted-foreground">
                Built specifically for the emerging markets
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-heading font-bold mb-4">SABAH Lab Incubation</h2>
            <p className="text-muted-foreground">
              Datamız is proud to be part of the SABAH Lab Incubation Program, receiving mentorship, resources, and support as we build Azerbaijan's leading data marketplace platform.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
