import Head from "next/head";

import { timeAgo } from "../utils/timeAgo";

import {
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  FigmaLogo,
  DribbbleLogo,
  At,
} from "phosphor-react";

import BadgeCounter from "../components/BadgeCounter";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import IconSocial from "../components/IconSocial";

const Home = ({ streams }) => {
  return (
    <div className="flex flex-col gap-16">
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
      <section className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl text-stone-100 font-semibold">
            Featured Projects
          </h1>
          <h4 className="text-lg">
            I enjoy putting my ideas to practice. Here are some projects I'm
            proud of.
          </h4>
        </header>
        <CardGrid>
          <Card
            title="Laboratório Onírico"
            description="Art generated by code."
          />
        </CardGrid>
      </section>
      <section className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <h1 className="text-2xl text-stone-100 font-semibold">Streams</h1>
            <BadgeCounter number={streams.length} />
          </div>
          <h4 className="text-lg">
            Streams are the conversations between me and my brain. It's like
            we're text messaging each other.
          </h4>
        </header>
        <CardGrid>
          {streams
            .map((stream) => (
              <Card
                key={stream.id}
                title={stream.child_page.title}
                description={timeAgo(stream.created_time)}
              />
            ))
            .reverse()}
        </CardGrid>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/streams");
  const data = await res.json();
  const streams = data.response.results;

  return {
    props: {
      streams,
    },
    revalidate: 60,
  };
}

export default Home;
