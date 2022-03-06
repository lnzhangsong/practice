import { Handler } from "@netlify/functions";
import { getBunketList } from "../../server/src/bucket"

const handler: Handler = async () => {
  const res = await getBunketList()
  return {
    statusCode: 200,
    body: JSON.stringify(res.Buckets),
  };
};

export { handler };