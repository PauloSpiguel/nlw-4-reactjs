import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { useChallenges } from "./ChallengesContext"

interface CountDownContextProps {
  children: ReactNode
}

interface CountDownContextData {
  minutes: number
  seconds: number
  hasFinish: boolean
  isActive: boolean
  progress: number
  startCountDown: () => void
  resetCountDown: () => void
}

export const CountDownContext = createContext({} as CountDownContextData)

let countDownTimeout: NodeJS.Timeout
const initialTime = 0.25 * 60

export function CountDownProvider({ children }: CountDownContextProps) {
  const [time, setTime] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const [hasFinish, setHasFinish] = useState(false)
  const [progress, setProgress] = useState(0)

  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  const { startNewChallenge } = useChallenges()

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout)
    setIsActive(false)
    setTime(initialTime)
    setHasFinish(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinish(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  useEffect(() => {
    setProgress(Math.abs((time / initialTime) * 100 - 100))
  }, [time])

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinish,
        isActive,
        progress,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}

export function useCountDown() {
  const context = useContext(CountDownContext)

  if (!context) {
    throw new Error("useCountDown must be used within a CountDownContext")
  }

  return { ...context }
}
