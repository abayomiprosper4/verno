// Animation constants for easy tuning
export const ANIMATION_CONFIG = {
  // Initial load sequence timing (in ms)
  LOAD_DELAY_START: 350,
  IMAGE_FADE_DURATION: 800,
  ELEMENT_STAGGER: 120,
  ELEMENT_FADE_DURATION: 600,
  
  // Navbar underline
  UNDERLINE_DURATION: 450,
  UNDERLINE_EASE: [0.4, 0, 0.2, 1] as const, // cubic-bezier ease-in-out
  
  // Page transitions
  PAGE_TRANSITION_DURATION: 650,
  PAGE_ROTATION_DEG: 12,
  PAGE_TRANSLATE_X: 40,
  PAGE_TRANSITION_EASE: [0.4, 0, 0.2, 1] as const,
  
  // Micro-interactions
  HOVER_DURATION: 200,
  HOVER_LIFT_Y: -4,
  HOVER_SCALE: 1.02,
} as const;

// Framer Motion variants
export const fadeInUpVariant = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: (custom: number = 0) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      delay: custom * ANIMATION_CONFIG.ELEMENT_STAGGER / 1000,
      duration: ANIMATION_CONFIG.ELEMENT_FADE_DURATION / 1000,
      ease: ANIMATION_CONFIG.UNDERLINE_EASE,
    }
  })
};

export const heroImageVariant = {
  hidden: { 
    opacity: 0, 
    scale: 1.02 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay: ANIMATION_CONFIG.LOAD_DELAY_START / 1000,
      duration: ANIMATION_CONFIG.IMAGE_FADE_DURATION / 1000,
      ease: [0.55, 0.1, 0.55, 1] as const, // easeOut curve
    }
  }
};

export const pageTransitionVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? ANIMATION_CONFIG.PAGE_TRANSLATE_X : -ANIMATION_CONFIG.PAGE_TRANSLATE_X,
    rotateY: direction > 0 ? ANIMATION_CONFIG.PAGE_ROTATION_DEG : -ANIMATION_CONFIG.PAGE_ROTATION_DEG,
    opacity: 0,
  }),
  animate: {
    x: 0,
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.PAGE_TRANSITION_DURATION / 1000,
      ease: ANIMATION_CONFIG.PAGE_TRANSITION_EASE,
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -ANIMATION_CONFIG.PAGE_TRANSLATE_X : ANIMATION_CONFIG.PAGE_TRANSLATE_X,
    rotateY: direction > 0 ? -ANIMATION_CONFIG.PAGE_ROTATION_DEG : ANIMATION_CONFIG.PAGE_ROTATION_DEG,
    opacity: 0,
    transition: {
      duration: ANIMATION_CONFIG.PAGE_TRANSITION_DURATION / 1000,
      ease: ANIMATION_CONFIG.PAGE_TRANSITION_EASE,
    }
  })
};
