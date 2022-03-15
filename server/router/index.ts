import combineRouters from "koa-combine-routers";

import bunketRouter from "./bunketRouter";

const router = combineRouters(bunketRouter);

export default router;
