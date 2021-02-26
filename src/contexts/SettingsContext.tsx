import { createContext, ReactNode, useContext, useState } from "react"

interface SettingsContextProps {
  children: ReactNode
}

interface SettingsContextData {
  isLoading: boolean
  toggleIsLoading: (value: boolean) => void
}

export const SettingsContext = createContext({} as SettingsContextData)

export function SettingsProvider({ children }: SettingsContextProps) {
  const [isLoading, setIsLoading] = useState(false)

  function toggleIsLoading(value: boolean) {
    setIsLoading(value)
  }

  return (
    <SettingsContext.Provider
      value={{
        isLoading,
        toggleIsLoading
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error("useSettings must be used within a SettingsContext")
  }

  return { ...context }
}
