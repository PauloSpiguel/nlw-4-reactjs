import React, { useEffect, useState } from "react"

import { useChallenges } from "../../contexts/ChallengesContext"

import { Container } from "./styles"

const ExperienceBar: React.FC = () => {
  const [experienceValue, setExperienceValue] = useState(0)

  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )

  useEffect(() => {
    setExperienceValue(currentExperience)
  }, [])

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span
          className="current-experience"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {experienceValue} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}

export default ExperienceBar
