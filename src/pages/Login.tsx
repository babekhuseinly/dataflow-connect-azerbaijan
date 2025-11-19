import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen py-20 flex items-center justify-center">
      <div className="container max-w-md">
        <Card className="p-8 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Coming Soon
          </h1>
          <p className="text-muted-foreground mb-8">
            Login functionality will be available once we launch. Join our waitlist to be notified!
          </p>
          <Button asChild>
            <Link to="/waitlist">Join Waitlist</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Login;
