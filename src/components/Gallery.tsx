import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import equipmentImg from "@/assets/equipment.jpg";
import saunaImg from "@/assets/sauna.jpg";
import trainerImg from "@/assets/trainer.jpg";
import heroGymImg from "@/assets/hero-gym.jpg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: heroGymImg, alt: "Gym Interior" },
    { src: equipmentImg, alt: "Modern Equipment" },
    { src: trainerImg, alt: "Personal Training" },
    { src: saunaImg, alt: "Sauna Facility" },
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-pirata">
            Our <span className="text-primary">Facility</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at our state-of-the-art gym facilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-4">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
