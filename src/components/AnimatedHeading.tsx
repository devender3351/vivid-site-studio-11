import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const words = ["Entertainment", "Learning", "Training", "Experiences", "Adventure"];

const AnimatedHeading = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const letterVariants = {
    initial: { y: 50, opacity: 0, rotateX: -90 },
    animate: { y: 0, opacity: 1, rotateX: 0 },
    exit: { y: -50, opacity: 0, rotateX: 90 },
  };

  return (
    <motion.div
      ref={containerRef}
      className="perspective-1000 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="space-y-2">
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dr. Devender Rapolu Presents
        </motion.p>
        
        <h1 className="apple-text-hero flex flex-wrap items-center gap-x-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-block"
            whileHover={{ scale: 1.05, color: "#8b5cf6" }}
          >
            VR
          </motion.span>
          
          <span className="relative h-[1.2em] overflow-hidden inline-block min-w-[300px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className="text-gradient inline-flex"
                variants={letterVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                {words[currentWordIndex].split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>

      {/* Interactive word selector */}
      <motion.div 
        className="flex gap-2 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {words.map((word, index) => (
          <motion.button
            key={word}
            onClick={() => setCurrentWordIndex(index)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              currentWordIndex === index
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted-foreground/20"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {word}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

// AnimatePresence needs to be imported from framer-motion
import { AnimatePresence } from "framer-motion";

export default AnimatedHeading;
