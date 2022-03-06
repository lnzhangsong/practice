import { Context } from "koa";
import Router from "koa-router";

import { getBunketList } from "../src/bucket";

const router = new Router();

router.get("/getBunketList", async (ctx: Context) => {
	const res = await getBunketList({ Region: ctx.query.region });
	ctx.body = res.Buckets;
});

export default router;
