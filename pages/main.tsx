import Head from "next/head";
import Home  from "@/app/page";
export default function home() {
  return (
    <>
      <Head>
        <title>Yajat Chaudhary | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Home />
    </>
  );
}
