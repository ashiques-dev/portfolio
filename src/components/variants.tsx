export const NavbarVisibilityVariant = {
  visible: {
    y: 0,
  },
  hidden: {
    y: "-80%",
  },
};

export const characterVariant = {
  initial: {
    opacity: 0,
    y: -25,
    filter: "blur(3px)",
  },
  animate: (custom: { charIndex: number }) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: custom.charIndex * 0.1,
    },
  }),
  exit: (custom: { charIndex: number; wordLength: number }) => ({
    opacity: 0,
    y: 25,
    filter: "blur(3px)",
    rotate: 10,
    transition: {
      duration: 0.5,
      delay: (custom.wordLength - 1 - custom.charIndex) * 0.1,
    },
  }),
};

export const easeInTextVariant = {
  initial: (custom: { top: boolean }) => ({
    translateY: custom.top ? "-100%" : "100%",
    opacity: 0,
  }),
  whileInView: (custom: { id: number; top: boolean }) => ({
    translateY: 0,
    opacity: 1,
    transition: {
      duration: custom.top ? 0.6 : 0.3,
      delay: custom.id * 0.1,
    },
  }),
};
