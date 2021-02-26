import React from "react"

import { Container } from "./styles"

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true

  return (
    <Container>
      {hasActiveChallenge ? (
        <div className="active">
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
            <footer>
              <button type="button" className="failedButton">
                Falhou
              </button>
              <button type="button" className="succeededButton">
                Completei
              </button>
            </footer>
          </main>
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
