import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <Card className="p-8">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including name, email address, phone number, and demographic information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
              <p>
                We do not share your personal information with third parties except as described in this policy or with your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at datamizaz@gmail.com
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
