import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="Actinn Fitness Logo" 
                className="h-20 w-20 object-contain rounded-full"
              />
              <span className="text-2xl font-pirata font-normal">
                <span className="text-foreground">ACTINN</span>
                <span className="text-primary"> FITNESS</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              Hyderabad's premier gym for all-round health & fitness.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:07330922633" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                073309 22633
              </a>
              <a 
                href="https://share.google/S3do7YNtNTOzPjOpA" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Durga Nagar, Mailardevpally, Hyderabad</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
            <a 
              href="https://www.instagram.com/actinnfitness/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all"
            >
              <Instagram className="h-5 w-5" />
              @actinn_fitness
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Actinn Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;