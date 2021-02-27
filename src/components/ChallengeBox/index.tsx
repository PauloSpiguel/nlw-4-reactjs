import React, { useContext } from "react"

import { useChallenges } from "../../contexts/ChallengesContext"
import { useCountDown } from "../../contexts/CountDownContext"
import { useTheme } from "../../contexts/ThemeContext"

import { Container } from "./styles"

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()
  const { resetCountDown } = useCountDown()

  const { theme } = useTheme()

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }

  return (
    <Container isDark={theme.name === "dark"}>
      {activeChallenge ? (
        <div className="active">
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className="failedButton"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className="succeededButton"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="notActive">
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </Container>
  )
}

export default ChallengeBox
