import { Clock, MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visit <span className="text-primary">Actinn Fitness</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Come experience Hyderabad's premier fitness destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    3rd floor, ACTINN FITNESS unisex gym<br />
                    Durganagar signal, above Vijaya Diagnostic Centre<br />
                    Durga Nagar, Mailardevpally<br />
                    Hyderabad, Telangana 500077
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-foreground font-medium mb-1">Open Now</p>
                  <p className="text-muted-foreground">Closes 11:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Most popular: 5 PM (Usually a little busy)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a 
                    href="tel:07330922633" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    073309 22633
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
                <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                  <a 
                    href="https://www.instagram.com/actinn_fitness/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    @actinn_fitness
                  </a>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-red-600 hover:shadow-[0_0_30px_hsl(0_84%_60%/0.5)] transition-all duration-300"
                size="lg"
                asChild
              >
                <a 
                  href="https://maps.app.goo.gl/GbBe4PAkWvWHLUH9A" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          <div className="text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <p className="text-lg text-muted-foreground mb-1">Average Visit Duration</p>
            <p className="text-3xl font-bold text-primary">1.5 - 2 Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;