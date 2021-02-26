import React from "react"

import { useChallenges } from "../../contexts/ChallengesContext"

import { Container } from "./styles"

const CompletedChallenges: React.FC = () => {
  const { challengeCompleted } = useChallenges()

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </Container>
  )
}

export default CompletedChallenges
