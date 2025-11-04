import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trainerImage from "@/assets/trainer.jpg";

const trainers = [
  {
    name: "Rajesh Kumar",
    role: "Head Trainer & Strength Coach",
    experience: "10+ Years",
    specialization: "Strength Training, Bodybuilding",
    clients: "500+",
    certifications: ["ISSA Certified", "ACE Certified"],
    image: trainerImage,
  },
  {
    name: "Priya Sharma",
    role: "Fitness & Yoga Instructor",
    experience: "7 Years",
    specialization: "Yoga, Weight Loss, Flexibility",
    clients: "300+",
    certifications: ["RYT 500", "NASM Certified"],
    image: trainerImage,
  },
  {
    name: "Vikram Reddy",
    role: "Functional Training Expert",
    experience: "8 Years",
    specialization: "CrossFit, HIIT, Athletic Performance",
    clients: "400+",
    certifications: ["CrossFit L2", "FMS Certified"],
    image: trainerImage,
  },
  {
    name: "Anitha Patel",
    role: "Nutrition & Wellness Coach",
    experience: "6 Years",
    specialization: "Diet Planning, Weight Management",
    clients: "350+",
    certifications: ["Precision Nutrition", "ISSA Nutrition"],
    image: trainerImage,
  },
];

const Trainers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pirata">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Expert Trainers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified professionals are dedicated to helping you achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Bottom overlay that slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-muted/95 backdrop-blur-sm p-4 transform translate-y-0 group-hover:translate-y-0 transition-all duration-300">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-pirata text-foreground">{trainer.name}</h3>
                    <p className="text-sm text-primary font-semibold">{trainer.role}</p>
                    
                    {/* Info that appears on hover */}
                    <div className="space-y-1.5 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">
                      <p>⏱️ {trainer.experience}</p>
                      <p>👥 {trainer.clients} Clients</p>
                      <p>🏆 {trainer.specialization}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {trainer.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-primary/20 border border-primary/30 rounded-full text-[10px] font-semibold text-primary"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trainers;
