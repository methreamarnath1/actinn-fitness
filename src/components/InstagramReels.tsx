import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const InstagramReels = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Example Instagram reel embed codes - replace with actual ones
  const reels = [
    "https://www.instagram.com/p/EXAMPLE1/embed",
    "https://www.instagram.com/p/EXAMPLE2/embed",
    "https://www.instagram.com/p/EXAMPLE3/embed",
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-pirata">
              Follow Us on <span className="text-primary">Instagram</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our latest workout videos and member transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reels.map((reel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src={reel}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
                title={`Instagram Reel ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/actinnfitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg"
          >
            <Instagram className="h-5 w-5" />
            @actinnfitness
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramReels;
