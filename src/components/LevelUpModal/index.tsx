import React from "react"
import { useTheme } from "styled-components"
import { useChallenges } from "../../contexts/ChallengesContext"

import { Container } from "./styles"

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useChallenges()
  const theme = useTheme()

  return (
    <Container isDark={theme.name === "dark"}>
      <main>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Voce alcançou um novo level.</p>
      </main>
    </Container>
  )
}

export default LevelUpModal
