export const textVariant = (delay = 0) => ({
  hidden: {
    y: -30, // Reduced distance for mobile
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: window.innerWidth < 640 ? 0.8 : 1, // Faster on mobile
      delay,
      stiffness: 120, // Smoother spring
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0, // Reduced distance
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration: window.innerWidth < 640 ? duration * 0.7 : duration, // Faster on mobile
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0.8, // Less drastic scaling
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration: window.innerWidth < 640 ? duration * 0.7 : duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-50%" : direction === "right" ? "50%" : 0, // Reduced distance
    y: direction === "up" ? "50%" : direction === "down" ? "50%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration: window.innerWidth < 640 ? duration * 0.7 : duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0.2) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: window.innerWidth < 640 ? delayChildren * 0.7 : delayChildren,
    },
  },
});