import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const reviews = [
    {
      name: "Sandeep Chary",
      rating: 5,
      text: "Excellent gym and supportive trainers best place to workout."
    },
    {
      name: "Vishal Biradar",
      rating: 5,
      text: "Amazing facility, top equipment and great environment."
    },
    {
      name: "Roja Varkala",
      rating: 5,
      text: "The first thing that I got attracted is the ambience and training equipment."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-pirata">
            What Our <span className="text-primary">Members Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-muted-foreground">on Google</span>
          </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <Card className="bg-card border-border">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex justify-center mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 text-xl md:text-2xl leading-relaxed text-center">"{review.text}"</p>
                    <p className="text-primary font-semibold text-lg text-center">- {review.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;