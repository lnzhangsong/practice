import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getBunketList } from "../packages/service/src/bucket";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse) => {
  const res = await getBunketList();
  response.status(200).send(res.Buckets);
};
