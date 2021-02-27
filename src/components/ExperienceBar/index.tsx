import React from "react"

import { useChallenges } from "../../contexts/ChallengesContext"

import { Container } from "./styles"

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span
          className="current-experience"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}

export default ExperienceBar
