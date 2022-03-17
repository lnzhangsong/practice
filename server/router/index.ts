import combineRouters from "koa-combine-routers";

import bunketRouter from "./bunketRouter";
import objectRouter from "./objectRouter";

const router = combineRouters(bunketRouter, objectRouter);

export default router;
