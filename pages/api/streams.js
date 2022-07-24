import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

export default async (req, res) => {
  const response = await notion.blocks.children.list({
    block_id: "b2eae7aac6b84e15a2fe5d69cdaef18a",
    page_size: 50,
  });
  res.status(200).json({ response });
};
