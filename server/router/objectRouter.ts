import { Context } from "koa";

import router from "../utils/customRouter";

import listObjects from "../src/object";

router.get("/objectList", async (ctx: Context) => {
  const { region, bunket, prefix } = ctx.request.query;
  if (typeof region === "string"
    && typeof bunket === "string"
    && typeof prefix === "string") {
    const res = await listObjects({
      Region: region,
      Bunket: bunket,
      Prefix: prefix,
    });
    ctx.body = res;
  }
});

export default router;
