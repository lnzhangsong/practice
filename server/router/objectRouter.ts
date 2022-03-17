import { Context } from "koa";

import router from "../utils/customRouter";

import listObjects from "../src/object";

router.get("/objectList", async (ctx: Context) => {
  const { region, bunket } = ctx.request.query;
  if (typeof region === "string") {
    const res = await listObjects({
      Region: region,
      Bunket: bunket,
    });
    ctx.body = res;
  }
});

export default router;
