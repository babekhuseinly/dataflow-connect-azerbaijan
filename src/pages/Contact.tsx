import { MapPin, Phone, Instagram, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+994706000280" className="text-sm text-muted-foreground hover:text-primary">
              +994 70 600 02 80
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">
              Baku, Azerbaijan
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Instagram className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Instagram</h3>
            <a href="https://instagram.com/datamiz.az" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
              @datamiz.az
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/company/datamiz/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
              Datamız
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
