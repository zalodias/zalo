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
      <header className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <img
            src="/images/headshot.webp"
            alt=""
            className="rounded-full w-20"
          />
          <h1 className="font-semibold text-2xl text-stone-100">
            Gonçalo Dias
          </h1>
          <p className="text-lg max-w-prose">
            Welcome to my piece of the internet.
          </p>
          <p className="text-lg max-w-prose">
            I'm mainly focused on exploring the intersection between art, design
            and technology. Most of what you'll see here are the results of that
            exploration: whether in the form of thoughts, words or actions.
          </p>
        </div>
        <div className="flex gap-4 text-stone-100">
          <IconSocial icon={<TwitterLogo size={24} />} />
          <IconSocial icon={<GithubLogo size={24} />} />
          <IconSocial icon={<LinkedinLogo size={24} />} />
          <IconSocial icon={<MediumLogo size={24} />} />
          <IconSocial icon={<FigmaLogo size={24} />} />
          <IconSocial icon={<DribbbleLogo size={24} />} />
          <IconSocial icon={<At size={24} />} />
        </div>
      </header>
      </header>
    </div>
  );
};

export default Home;
