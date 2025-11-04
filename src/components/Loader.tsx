import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Dumbbell className="h-16 w-16 text-primary" />
      </motion.div>
    </div>
  );
};

export default Loader;
