import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import benchpressImage from "@/assets/benchpress.png";
import buildingImage from "@/assets/building.jpg";
import dumbleImage from "@/assets/dumblle.png";
import equipmentImage from "@/assets/equipment.jpg";
import heroGymImage from "@/assets/hero-gym.jpg";
import image2Image from "@/assets/image2.png";
import image3Image from "@/assets/image3.png";
import img1Image from "@/assets/img1.png";
import pullupBarImage from "@/assets/pullup-bar.png";
import pullupbarImage from "@/assets/pullupbar.png";
import saunaImage from "@/assets/sauna.jpg";
import trainerImage from "@/assets/trainer.jpg";
const galleryImages = [
  // { src: heroGymImage, title: "Main Gym Floor", category: "Facilities" },
  // { src: equipmentImage, title: "Premium Equipment", category: "Equipment" },
  // { src: trainerImage, title: "Personal Training", category: "Training" },
  // { src: saunaImage, title: "Luxury Sauna", category: "Amenities" },
  { src: buildingImage, title: "Modern Gym Building", category: "Facilities" },
  { src: benchpressImage, title: "Bench Press Station", category: "Equipment" },
  { src: dumbleImage, title: "Dumbbell Zone", category: "Equipment" },
  { src: img1Image, title: "Cardio Area", category: "Facilities" },
  { src: image2Image, title: "Workout Session", category: "Training" },
  { src: image3Image, title: "Strength Training", category: "Equipment" },
  { src: pullupBarImage, title: "Pull-Up Bar", category: "Equipment" },
  { src: pullupbarImage, title: "Bodyweight Training", category: "Training" },
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pirata">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Our Facility
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience world-class fitness facilities designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-semibold text-primary mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Overlay Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-semibold text-primary mb-2">
                {selectedImage.category}
              </span>
              <h2 className="text-3xl font-bold text-foreground font-pirata">{selectedImage.title}</h2>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
