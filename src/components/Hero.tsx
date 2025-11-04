import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-gym.jpg";
const Hero = () => {
  const navigate = useNavigate();
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background - Image on mobile, Video on desktop */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background Image */}
        <img src={heroImage} alt="Actinn Fitness Gym" className="md:hidden w-full h-full object-cover" />
        {/* Desktop Background Video */}
        <video autoPlay loop muted playsInline className="hidden md:block w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/60 md:bg-gradient-to-r md:from-background/80 md:via-background/60 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-3xl md:max-w-2xl lg:max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">★ 4.9 Rating on Google</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight font-pirata tracking-wider">
            <span className="text-foreground drop-shadow-lg">ACTINN</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent drop-shadow-lg">
              FITNESS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-3 md:mb-4 font-medium drop-shadow">
            Unisex Gym
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8 max-w-2xl drop-shadow leading-relaxed">
            Hyderabad's premier gym for all-round health & fitness. Our high-energy facility offers comfort and safety along with a robust exercise regime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-red-600 hover:shadow-[0_0_30px_hsl(0_84%_60%/0.5)] transition-all duration-300 text-lg px-8" onClick={() => navigate('/contact')}>
              Join Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8" onClick={() => window.location.href = 'tel:07330922633'}>
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm md:text-base text-foreground/80 bg-background/40 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Durga Nagar, Mailardevpally, Hyderabad</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <span>073309 22633 </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>;
};
export default Hero;