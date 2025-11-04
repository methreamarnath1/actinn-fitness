import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const hours = [
    { day: "Monday - Saturday", time: "5:00 AM - 11:00 PM" },
    { day: "Sunday", time: "5:00 AM - 11:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pirata">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us or reach out - we're here to help you start your fitness journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Location</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        3rd floor, ACTINN FITNESS unisex gym,<br />
                        Durganagar signal, above Vijaya Diagnostic Centre,<br />
                        Durga Nagar, Mailardevpally,<br />
                        Hyderabad, Telangana 500077
                      </p>
                      <Button
                        className="mt-4 bg-gradient-to-r from-primary to-red-600"
                        onClick={() => window.open("https://share.google/S3do7YNtNTOzPjOpA", "_blank")}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <a
                        href="tel:+917330922633"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        073309 22633
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
                      <div className="space-y-3">
                        {hours.map((schedule, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-border last:border-0"
                          >
                            <span className="text-muted-foreground">{schedule.day}</span>
                            <span className="font-semibold text-primary">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                      <a
                        href="https://www.instagram.com/actinnfitness/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @actinnfitness
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div className="h-[600px] rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.983!2d78.4148!3d17.3398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95e1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sACTINN%20FITNESS%20unisex%20gym!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Actinn Fitness Location"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
