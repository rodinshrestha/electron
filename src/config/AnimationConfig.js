/* LAYOUT ANIMATION TIMING */
export const layoutAnimation = {
  duration: 0.5,
};

export const fadeInRightScreenAnimation = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "10%",
  },
};

export const fadeInLeftScreenAnimation = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-10%",
  },
};
export const fadeInTopScreenAnimation = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-10%",
  },
};
export const fadeInTop2ScreenAnimation = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-20%",
  },
};
export const fadeInTop3ScreenAnimation = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-5%",
  },
};
export const fadeInBottomScreenAnimation = {
  in: {
    y: 0,
  },
  out: {
    y: "10%",
  },
};

export const fadeInBottom2ScreenAnimation = {
  in: {
    y: 0,
  },
  out: {
    y: "5%",
  },
};

export const fadeInScreenAnimation = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
export const fadeInScreenAnimationTransition = {
  type: "tween",
  duration: 0.35,
  stiffness: 1,
};

export const accordionAnimation = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

export const accordionAnimationTransition = {
  duration: 0.6,
  ease: [0.04, 0.62, 0.13, 0.98],
};

export const accordionAnimationBody = {
  collapsed: {
    opacity: 0,
    y: "-20%",
  },
  open: {
    opacity: 1,
    y: 0,
  },
};

export const accordionAnimationBodyTransition = {
  duration: 0.45,
};

/* * * * * *
 *   COMPONENT ANIMATIONS
 *  * * * * */

export const collapsedMenuAnimation = () => ({
  initial: { x: 5, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: layoutAnimation.duration,
    },
  },
  exit: { x: 5, opacity: 0 },
});

export const statusPanelAnimation = () => ({
  initial: { y: -5, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: layoutAnimation.duration,
    },
  },
  exit: { y: -5, opacity: 0 },
});

export const fullScreenMenuAnimation = ({ expanded }) => ({
  initial: { opacity: 0, right: "-1%", paddingLeft: 110 },
  animate: {
    opacity: 1,
    right: 0,
    paddingLeft: expanded ? 368 : 110,
    transition: {
      type: `spring`,
      duration: layoutAnimation.duration,
    },
  },
  exit: {
    opacity: 0,
    right: "-1%",
    paddingLeft: 110,
  },
});

export const inputFieldsAnimation = ({ disabled }) => ({
  animate: {
    opacity: disabled ? 0.7 : 1,
    transition: {
      type: `spring`,
      duration: layoutAnimation.duration,
    },
  },
});

/* * * * * *
 *   STAGGERING CHILDREN ANIMATIONS
 *  * * * * */
export const parentAnimation = ({ y }) => ({
  hidden: { opacity: 0.8 },
  visible: {
    opacity: 1,
    y: y,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0.75,
    transition: {
      duration: 0.08,
    },
  },
});

export const childAnimationAppearRight = {
  hidden: { x: 4, y: 4, scale: 0.95 },
  visible: { x: 0, y: 0, scale: 1 },
};

export const branchContentTitleChildAnimation = {
  hidden: { x: -4 },
  visible: { x: 0 },
};

export const branchContentTitleParentAnimation = {
  hidden: {},
  visible: {
    transition: {
      type: `spring`,
      duration: 0.3,
      staggerChildren: 0.03,
    },
  },
};

export const childAnimationAppearDown = {
  hidden: { x: -10 },
  visible: { x: 0, y: 0 },
};
