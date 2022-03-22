import { Context } from "koa";

import router from "../utils/customRouter";

import listObjects from "../src/object";

router.get("/objectList", async (ctx: Context) => {
  const { region, bunket, prefix } = ctx.request.query;
  if (typeof region === "string" && typeof bunket === "string" && typeof prefix === "string") {
    const res = await listObjects({
      Region: region,
      Bunket: bunket,
      Prefix: prefix,
    });
    ctx.status = 200;
    ctx.body = res;
  } else {
    ctx.status = 400;
    ctx.throw("missing param Bucket");
  }
});

export default router;
