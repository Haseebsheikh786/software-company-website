// AnimatedSection.js
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const AnimatedSection = ({
  children,
  threshold = 0.1,
  animationType = "translateY",
  animationDistance = "100px",
  triggerOnce = true,
  direction = "up", // new prop to control the direction
}) => {
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce,
    threshold: threshold,
  });

  let animationProps = {};

  switch (animationType) {
    case "translateY":
      const translateYValue = direction === "up" ? `-${animationDistance}` : animationDistance;
      animationProps = {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${translateYValue})`,
        config: { tension: 18, friction: 10 },
      };
      break;
    case "translateX":
      animationProps = {
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0)"
          : `translateX(-${animationDistance})`,
        config: { tension: 18, friction: 10 },
      };
      break;
    // Add more animation types if needed
    default:
      break;
  }

  const animationStyle = useSpring(animationProps);

  return (
    <div ref={ref}>
      <animated.div style={animationStyle}>{children}</animated.div>
    </div>
  );
};

export default AnimatedSection;
