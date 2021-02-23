import React from "react"

import { Container } from "./styles"

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/PauloSpiguel.png" alt="PauloSpiguel" />
      <div>
        <strong>Paulo Spiguel</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </Container>
  )
}

export default Profile
