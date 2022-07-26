import Link from "next/link";

import { getDatabase } from "../lib/notion";
export const databaseId = process.env.NOTION_DATABASE_ID;

import { timeAgo } from "../utils/timeAgo";

import BadgeCounter from "../components/BadgeCounter";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";

const Streams = ({ streams }) => {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <header className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <h1 className="text-2xl text-neutral-100 font-semibold">Streams</h1>
          <BadgeCounter number={streams.length} />
        </div>
        <h4 className="text-lg">
          Streams are the conversations between me and my brain. It's like we're
          text messaging each other.
        </h4>
      </header>
      <CardGrid>
        {streams
          .map((stream) => (
            <Link href={`/streams/${stream.id}`} key={stream.id}>
              <a>
                <Card
                  title={stream.properties.Name.title[0].text.content}
                  description={timeAgo(stream.created_time)}
                />
              </a>
            </Link>
          ))
          .reverse()}
      </CardGrid>
    </div>
  );
};

export async function getStaticProps() {
  const database = await getDatabase(databaseId);

  return {
    props: {
      streams: database,
    },
    revalidate: 60,
  };
}

export default Streams;
