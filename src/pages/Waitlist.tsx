import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Rocket } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Waitlist = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    role: "",
    phone: "",
    userType: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send to a backend
    console.log("Waitlist submission:", formData);
    
    setSubmitted(true);
    toast({
      title: "Successfully joined waitlist!",
      description: "We'll be in touch soon with early access details.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="container max-w-2xl">
          <Card className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              You're on the list!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for joining the Datamız waitlist. We'll reach out soon with early access details and updates on our launch.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                In the meantime, learn more about how Datamız works:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/how-it-works">How It Works</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/for-contributors">For Contributors</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/for-companies">For Companies</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Early Access</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Join the Waitlist
          </h1>
          <p className="text-xl text-muted-foreground">
            Be among the first to access Datamız when we launch. Limited spots available for our beta program.
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type */}
            <div className="space-y-2">
              <Label htmlFor="userType">I am interested as a *</Label>
              <Select
                required
                value={formData.userType}
                onValueChange={(value) => handleChange("userType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contributor">Contributor (Earn money)</SelectItem>
                  <SelectItem value="company">Company (Access data)</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+994 50 123 45 67"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName">Company/Organization Name</Label>
              <Input
                id="companyName"
                placeholder="Enter company name (if applicable)"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role">Your Role/Position</Label>
              <Input
                id="role"
                placeholder="e.g., Marketing Manager, Student, etc."
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
              />
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments">Additional Comments</Label>
              <Textarea
                id="comments"
                placeholder="Tell us about your interest in Datamız or specific needs..."
                rows={4}
                value={formData.comments}
                onChange={(e) => handleChange("comments", e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              Join Waitlist
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By joining, you agree to receive updates about Datamız. You can unsubscribe at any time.
            </p>
          </form>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">Early Access</div>
            <p className="text-sm text-muted-foreground">
              Beta testers get priority access and special features
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">No Commitment</div>
            <p className="text-sm text-muted-foreground">
              Join the waitlist with no obligation to use the platform
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">Stay Updated</div>
            <p className="text-sm text-muted-foreground">
              Get exclusive updates on our progress and launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
