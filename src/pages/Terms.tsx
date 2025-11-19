import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <Card className="p-8">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Datamız, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on Datamız for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Collection and Use</h2>
              <p>
                By using our platform, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at info@datamiz.az
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
