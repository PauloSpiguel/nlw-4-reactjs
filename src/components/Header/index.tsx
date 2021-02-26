import React, { useContext } from "react"
import { FcFaq, FcAreaChart, FcOnlineSupport } from "react-icons/fc"

import { useTheme } from "../../contexts/ThemeContext"

import logo from "../../assets/img/logo.png"
import ToggleThemeMode from "../ToggleThemeMode"

import { Container } from "./styles"

const Header: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Container isDark={theme.name === "dark"}>
      <img src={logo} alt="logo" />
      <nav>
        <FcAreaChart />
        <FcFaq />
        <FcOnlineSupport />
        <img src="icons/anonymous.svg" alt="Sign in" />
      </nav>

      <ToggleThemeMode />
    </Container>
  )
}

export default Header
