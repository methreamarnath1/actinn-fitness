import { Dumbbell, Users, Award, Flame } from "lucide-react";
import equipmentImage from "@/assets/equipment.jpg";
import saunaImage from "@/assets/sauna.jpg";
import trainerImage from "@/assets/trainer.jpg";
import pullupBarImage from "@/assets/pullup-bar.png";
import image from "@/assets/image2.png";
const Features = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Top Equipment",
      description: "State-of-the-art fitness equipment for all your training needs",
      image: pullupBarImage
    },
    {
      icon: Users,
      title: "Certified Trainers",
      description: "Experienced and supportive trainers to guide your fitness journey",
      image: trainerImage
    },
    {
      icon: Flame,
      title: "Environmental Gym",
      description: "Relax and rejuvenate in our premium sauna facility",
      image: image
    },
    {
      icon: Award,
      title: "Premier Facility",
      description: "High-energy environment with comfort and safety guaranteed",
      image: equipmentImage
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-pirata">
            Why Choose <span className="text-primary">Actinn Fitness</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the best in fitness with our world-class facilities and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(0_84%_60%/0.2)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;