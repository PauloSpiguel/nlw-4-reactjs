import React from "react"

import logo from "../../assets/img/logo.png"

import { Container } from "./styles"

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  )
}

export default Header
