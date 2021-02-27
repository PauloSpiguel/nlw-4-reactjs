import React from "react"
import { useChallenges } from "../../contexts/ChallengesContext"

import { Container } from "./styles"

const Profile: React.FC = () => {
  const { level } = useChallenges()

  return (
    <Container>
      <img src="https://github.com/PauloSpiguel.png" alt="PauloSpiguel" />
      <div>
        <strong>Paulo Spiguel</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile
