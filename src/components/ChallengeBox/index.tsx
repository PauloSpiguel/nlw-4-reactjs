import React, { useContext } from "react"

import { useChallenges } from "../../contexts/ChallengesContext"
import { useTheme } from "../../contexts/ThemeContext"

import { Container } from "./styles"

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useChallenges()

  const { theme } = useTheme()

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
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className="succeededButton">
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
