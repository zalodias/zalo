import Head from "next/head";

export const databaseId = process.env.NOTION_DATABASE_ID;

import {
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  FigmaLogo,
  DribbbleLogo,
  At,
} from "phosphor-react";

import IconSocial from "../components/IconSocial";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
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
          <h1 className="font-semibold text-2xl text-neutral-100">
            Gonçalo Dias
          </h1>
          <p className="text-lg max-w-prose">
            Welcome to my piece of the internet.
          </p>
          <p className="text-lg max-w-prose">
            This is my digital home: a place where I grow my ideas & projects.
          </p>
          <p className="text-lg max-w-prose">
            Feel free to explore and get to know me better!
          </p>
          <div className="flex gap-4 text-neutral-100">
            <IconSocial icon={<TwitterLogo size={24} />} />
            <IconSocial icon={<GithubLogo size={24} />} />
            <IconSocial icon={<LinkedinLogo size={24} />} />
            <IconSocial icon={<MediumLogo size={24} />} />
            <IconSocial icon={<FigmaLogo size={24} />} />
            <IconSocial icon={<DribbbleLogo size={24} />} />
            <IconSocial icon={<At size={24} />} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
