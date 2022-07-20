import Head from "next/head";

import {
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  FigmaLogo,
  DribbbleLogo,
  At,
} from "phosphor-react";

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
        <div className="flex gap-4 text-stone-100">
          <a href="" target="_blank">
            <TwitterLogo size={24} />
          </a>
          <a href="" target="_blank">
            <GithubLogo size={24} />
          </a>
          <a href="" target="_blank">
            <LinkedinLogo size={24} />
          </a>
          <a href="" target="_blank">
            <MediumLogo size={24} />
          </a>
          <a href="" target="_blank">
            <FigmaLogo size={24} />
          </a>
          <a href="" target="_blank">
            <DribbbleLogo size={24} />
          </a>
          <a href="" target="_blank">
            <At size={24} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
