import Head from "next/head";
import Flexibility from "../components/Flexibility";
import Hero from "../components/Hero";
import Smart from "../components/Smart";
import Split from "../components/Split";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arthvit</title>
      </Head>
      <div>
        <Hero />
        <Flexibility />
        <Smart />
        <Split />
      </div>
    </>
  );
}
