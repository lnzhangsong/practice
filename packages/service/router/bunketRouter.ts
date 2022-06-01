import { Context } from "koa";

import router from "../utils/customRouter";

import { getBunketList, addBunket, delBunket } from "../src/bucket";

/**
 * get 请求 获取 bunket 列表
 */
router.get("/bunketList", async (ctx: Context) => {
  const res = await getBunketList({ Region: ctx.query.region });
  ctx.body = res.Buckets;
});

router.get("/h", async (ctx: Context) => {
  ctx.body = 'sd';
})

/**
 * post 请求 增加 bunket
 */
router.post("/bunket", async (ctx: Context) => {
  const { bunket, region } = ctx.request.body;
  if (!bunket || !region) {
    ctx.status = 400;
    ctx.throw("missing param Bucket");
  }
  const res = await addBunket({
    Bunket: bunket,
    Region: region,
  });
  ctx.body = res;
});

/**
 * del 请求 删除 bunket
 */
router.del("/bunket", async (ctx: Context) => {
  const { bunket, region } = ctx.request.body;
  if (!bunket || !region) {
    ctx.status = 400;
    ctx.throw("missing param Bucket");
  }
  const res = await delBunket({
    Bunket: bunket,
    Region: region,
  });
  ctx.body = res;
});

export default router;
