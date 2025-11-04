import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Monthly",
    price: "₹2,499",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Full gym access",
      "Cardio equipment",
      "Free weights area",
      "Locker facilities",
      "Group fitness classes",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "₹6,499",
    period: "/3 months",
    description: "Most popular choice",
    features: [
      "Everything in Monthly",
      "Personal trainer consultation",
      "Nutrition guidance",
      "Sauna access",
      "Priority booking",
      "10% discount",
    ],
    popular: true,
  },
  {
    name: "Annual",
    price: "₹19,999",
    period: "/year",
    description: "Best value for committed fitness",
    features: [
      "Everything in Quarterly",
      "Dedicated personal trainer (2 sessions/week)",
      "Custom diet plan",
      "Free guest passes (4/month)",
      "Supplement discounts",
      "25% discount",
    ],
    popular: false,
  },
];

const Subscriptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pirata">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Membership Plans
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your fitness journey. All plans include access to our premium facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular
                    ? "border-primary shadow-[0_0_30px_hsl(0_84%_60%/0.3)]"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-red-600"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Join Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscriptions;
