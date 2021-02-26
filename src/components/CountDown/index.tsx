import React, { useEffect, useState } from "react"

import { BsCheckCircle } from "react-icons/bs"

import { CountDownButton, Container } from "./styles"

let countDownTimeout: NodeJS.Timeout
const initialTime = 0.25 * 60

const CountDown: React.FC = () => {
  const [time, setTime] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const [hasFinish, setHasFinish] = useState(false)
  const [progress, setProgress] = useState(0)

  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

  function handleCountDown() {
    setIsActive(!isActive)
    if (isActive) {
      clearTimeout(countDownTimeout)
      setTime(initialTime)
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinish(true)
      setIsActive(false)
    }
  }, [isActive, time])

  useEffect(() => {
    setProgress(Math.abs((time / initialTime) * 100 - 100))
  }, [time])

  return (
    <>
      <Container>
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
        disabled={hasFinish}
        isActive={isActive}
        onClick={handleCountDown}
        progress={progress}
      >
        {isActive ? (
          "Abandonar ciclo"
        ) : hasFinish ? (
          <>
            <BsCheckCircle
              style={{ marginRight: "0.3rem" }}
              color="var(--green)"
            />
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
