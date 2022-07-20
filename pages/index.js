import Head from "next/head";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Gonçalo Dias</title>
      </Head>
      <header className="flex flex-col gap-4">
        <img src="/images/headshot.webp" alt="" className="rounded-full w-20" />
        <h1 className="font-semibold text-2xl text-stone-100">Gonçalo Dias</h1>
        <p className="text-lg max-w-prose">
          Welcome to my piece of the internet.
        </p>
      </header>
    </div>
  );
};

export default Home;
