import Head from "next/head"
import ChallengeBox from "../components/ChallengeBox"
import CompletedChallenges from "../components/CompletedChallenges"
import CountDown from "../components/CountDown"
import ExperienceBar from "../components/ExperienceBar"
import Header from "../components/Header"
import Profile from "../components/Profile"
import { Container } from "../styles/pages/Home"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Byr App</title>
      </Head>

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
    </>
  )
}
