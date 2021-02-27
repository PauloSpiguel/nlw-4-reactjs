import React, { useContext, useEffect, useState } from "react"

import { FcOk } from "react-icons/fc"
import { useCountDown } from "../../contexts/CountDownContext"

import { useTheme } from "../../contexts/ThemeContext"

import { CountDownButton, Container } from "./styles"

const CountDown: React.FC = () => {
  const { theme } = useTheme()
  const {
    startCountDown,
    minutes,
    seconds,
    hasFinish,
    isActive,
    progress,
    resetCountDown
  } = useCountDown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

  return (
    <>
      <Container isDark={theme.name === "dark"}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>
      <CountDownButton
        isDark={theme.name === "dark"}
        disabled={hasFinish}
        isActive={isActive}
        onClick={isActive ? resetCountDown : startCountDown}
        progress={progress}
      >
        {isActive ? (
          <>
            <img
              src="icons/clock.gif"
              alt="Clock Time"
              style={{ height: "1.5rem" }}
            />
            Abandonar ciclo
          </>
        ) : hasFinish ? (
          <>
            <FcOk style={{ marginRight: "0.3rem" }} color="var(--green)" />
            Ciclo encerrado
          </>
        ) : (
          "Iniciar um ciclo"
        )}
      </CountDownButton>
    </>
  )
}

export default CountDown
