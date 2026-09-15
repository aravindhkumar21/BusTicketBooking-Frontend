import { useEffect, useState } from "react";

const AnimatedCounter = ({
  from = 0,
  to = 0,
  duration = 800,
}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let animationFrame;
    const startTime = performance.now();
    const difference = to - from;

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(
        from + difference * easedProgress
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [from, to, duration]);

  return <span className="counter">{count}</span>;
};

export default AnimatedCounter;