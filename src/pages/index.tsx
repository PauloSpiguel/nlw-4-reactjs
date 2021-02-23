import Head from "next/head";
import ExperienceBar from "../components/ExperienceBar";
import Header from "../components/Header";
import { Container } from "../styles/pages/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Header />
        <ExperienceBar />
      </Container>
    </>
  );
}
