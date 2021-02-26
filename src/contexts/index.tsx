import { ReactNode } from "react"
import { ChallengesProvider } from "./ChallengesContext"
import { SettingsProvider } from "./SettingsContext"
import ThemeContext from "./ThemeContext"

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <SettingsProvider>
    <ThemeContext>
      <ChallengesProvider>{children}</ChallengesProvider>
    </ThemeContext>
  </SettingsProvider>
)

export default AppProvider
