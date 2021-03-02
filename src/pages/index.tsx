import Head from "next/head"
import { GetServerSideProps } from "next"

import ChallengeBox from "../components/ChallengeBox"
import CompletedChallenges from "../components/CompletedChallenges"
import CountDown from "../components/CountDown"
import ExperienceBar from "../components/ExperienceBar"
import Header from "../components/Header"
import Profile from "../components/Profile"

import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountDownProvider } from "../contexts/CountDownContext"

import { Container } from "../styles/pages/Home"

interface HomeProps {
  level: number
  currentExperience: number
  challengeCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.currentExperience}
    >
      <Head>
        <title>Home | Byr App</title>
      </Head>
      <CountDownProvider>
        <Container>
          <Header />
          <ExperienceBar />

          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </Container>
      </CountDownProvider>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}
