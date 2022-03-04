import { Context } from "koa";
import Router from "koa-router";

import { getBunketList } from '../src/file'

const router = new Router();

router.get("/hello", async (ctx: Context) => {
  const res = await getBunketList({
    limit: 0,
    prefix: '',
  })
  ctx.body = res.respBody;
})

export default router;
