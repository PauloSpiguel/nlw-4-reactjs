import React, { useState, useRef, useContext, useEffect } from "react"

import { FaMoon, FaSun } from "react-icons/fa"

import { useTheme } from "../../contexts/ThemeContext"

import { Container } from "./styles"

const ToggleThemeMode: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  function toggleCheckbox() {
    toggleTheme()
  }

  return (
    <Container isChecked={theme.name === "light"}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" onClick={toggleCheckbox}>
        <FaMoon className="moon" />
        <FaSun className="sun" />
        <div className="ball" />
      </label>
    </Container>
  )
}

export default ToggleThemeMode
