"use client";

import { createContext, useState } from "react";
type AppContextType = {
  page: string;
  setPage: (page: string) => void;
  project: string;
  setProject: (project: string) => void;
};

export const AppContext = createContext<AppContextType>({
  page: "Home",
  setPage: () => {},
  project: "Next",
  setProject: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState("Home");
  const [project, setProject] = useState("Next.Js");
  return (
    <AppContext.Provider value={{ page, setPage, project, setProject }}>
      {children}
    </AppContext.Provider>
  );
};
