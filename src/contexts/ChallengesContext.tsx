import { createContext, ReactNode, useContext, useState } from "react"

import challenges from "../assets/data/challenges.json"

type Challenge = {
  type: "body" | "eye"
  description: string
  amount: number
}

interface ChallengeContextData {
  level: number
  currentExperience: number
  challengeCompleted: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  startNewChallenge: () => void
  levelUp: () => void
  resetChallenge: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
}

const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengeCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        levelUp,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

export function useChallenges() {
  const context = useContext(ChallengesContext)

  if (!context) {
    throw new Error("useChallenges must be used within a ChallengesContext")
  }

  return { ...context }
}
