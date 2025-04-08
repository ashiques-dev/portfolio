import { Dispatch, SetStateAction } from "react";

export type TMobileNavMenu = {
  mobileNav: boolean;
  mobileNavButtonClick: () => void;
  page: string;
  handlePageChange: (page: string) => void;
};
