import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(0_84%_60%/0.15)]"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 text-lg leading-relaxed">"{review.text}"</p>
                <p className="text-primary font-semibold">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;