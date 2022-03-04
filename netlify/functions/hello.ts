import { Handler } from "@netlify/functions";
import { getBunketList } from "../../server/src/file"

const handler: Handler = async (event, context) => {
  const res = await getBunketList({
    limit: 0,
    prefix: '',
  })
  return {
    statusCode: 200,
    body: JSON.stringify(res.respBody),
  };
};

export { handler };