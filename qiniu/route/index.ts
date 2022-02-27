import { Context } from "koa";
import Router from "koa-router";

import { getBunketList } from '../src/file'

const router = new Router();

router.get("/test", async (ctx: Context) => {
  const res = await getBunketList({
    limit: 10,
  })
  ctx.body = res.respBody;
})

export default router;
