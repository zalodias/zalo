import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import { databaseId } from "../index";

export default function Stream({ page, blocks }) {
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].text.content}</title>
      </Head>
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
