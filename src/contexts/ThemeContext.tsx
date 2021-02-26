import { createContext, ReactNode, useContext, useState } from "react"

import { ThemeProvider } from "styled-components"

import { Theme } from "../styles/themes/types"

interface ThemesContextProps {
  children: ReactNode
}

interface ThemesContextData {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemesContextData)

import { dark, light } from "../styles/themes"

export default function ThemeContextProvider({ children }: ThemesContextProps) {
  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(theme.name === "light" ? dark : light)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }

  return { ...context }
}
