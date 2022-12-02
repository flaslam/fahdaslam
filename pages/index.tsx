import Head from "next/head";
import Model from "../components/model";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fahd Aslam</title>
        <meta name="description" content="Fahd Aslam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-screen w-screen">
          <Model />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
