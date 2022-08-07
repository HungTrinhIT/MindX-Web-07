import { createContext, useContext } from "react";

export const ThemeContext = createContext();

// Custom hooks
export const useThemeContext = () => {
  const themeCtx = useContext(ThemeContext);
  return themeCtx;
};

