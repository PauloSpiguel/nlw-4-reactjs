import { ReactNode } from "react"

import ThemeContext from "./ThemeContext"
import { SettingsProvider } from "./SettingsContext"

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeContext>
    <SettingsProvider>{children}</SettingsProvider>
  </ThemeContext>
)

export default AppProvider
