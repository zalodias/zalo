import Head from "next/head";
import { Fragment } from "react";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import { databaseId } from "../index";

const renderBlock = (block) => {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <div className="bg-stone-700 text-stone-100 p-2 rounded-lg max-w-sm self-start">
          {value.rich_text[0].plain_text}
        </div>
      );
    case "quote":
      return (
        <div className="bg-blue-600 text-stone-100 p-2 rounded-lg max-w-sm self-end">
          {value.rich_text[0].plain_text}
        </div>
      );
  }
};

export default function Stream({ page, blocks }) {
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].text.content}</title>
      </Head>
      <section className="flex flex-col gap-2">
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </section>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 60,
  };
};
