import { ReactNode } from "react"

import ThemeContext from "./ThemeContext"
import { ChallengesProvider } from "./ChallengesContext"
import { SettingsProvider } from "./SettingsContext"

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeContext>
    <SettingsProvider>
      <ChallengesProvider>{children}</ChallengesProvider>
    </SettingsProvider>
  </ThemeContext>
)

export default AppProvider
