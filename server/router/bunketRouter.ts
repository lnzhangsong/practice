import { Context } from "koa";

import router from "../utils/customRouter";

import { getBunketList } from "../src/bucket";

/**
 * get 请求 获取 bunket 列表
 */
router.get("/bunketList", async (ctx: Context) => {
  const res = await getBunketList({ Region: ctx.query.region });
  ctx.body = res.Buckets;
});

export default router;
