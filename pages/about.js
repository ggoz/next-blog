import Head from "next/head";

const AboutPage = () => {
  console.log("AboutPage render");
  return (
    <>
      <Head>
        <title>About - my Blog</title>
      </Head>
      <main>
        <h1>AboutPage</h1>
      </main>
    </>
  );
};

export default AboutPage;
