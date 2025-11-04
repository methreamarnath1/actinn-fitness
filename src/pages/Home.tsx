import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import InstagramReels from "@/components/InstagramReels";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const Home = () => {
  const navigate = useNavigate();
  const plansRef = useRef(null);
  const isPlansInView = useInView(plansRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Subscription Plans Section */}
      <section ref={plansRef} className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPlansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-pirata">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Membership Plans
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your fitness journey. All plans include access to our premium facilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isPlansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  className={`relative h-full ${
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
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
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
                      onClick={() => navigate('/contact')}
                    >
                      Join Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <InstagramReels />
      <Footer />
    </main>
  );
};

export default Home;
