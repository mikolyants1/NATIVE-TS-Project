import { createContext } from "react";
import { IThemeContext } from "@/libs/types/type";

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);