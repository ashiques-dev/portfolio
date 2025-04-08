
export type TMobileNavMenu = {
  mobileNav: boolean;
  mobileNavButtonClick: () => void;
  page: string;
  handlePageChange: (page: string) => void;
};

export type TBluredInText = {
  words: string[];
  duration?: number;
  className?: string;
};

export type TEaseInText = { word: string; className?: string; top?: boolean };