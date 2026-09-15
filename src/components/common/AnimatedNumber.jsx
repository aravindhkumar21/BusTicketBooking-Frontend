import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedNumber = ({
  value = 0,
  duration = 0.8,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startValue = 0;
    const difference = Number(value) - startValue;
    const startTime = performance.now();

    let animationFrame;

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / (duration * 1000),
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(
        startValue + difference * easedProgress
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateNumber);
      }
    };

    animationFrame = requestAnimationFrame(updateNumber);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;