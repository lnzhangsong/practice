import Koa, { Context } from "koa";
import cors from "koa2-cors";
import Logger from "koa-logger";
import router from "./router";

const app: Koa = new Koa();

// Generic error handling middleware.
app.use(async (ctx: Context, next: () => Promise<any>) => {
	try {
		await next();
	} catch (error) {
		ctx.body = { error };
		ctx.app.emit("error", error, ctx);
	}
});

// cors
app.use(cors({
	origin: "*",
	allowMethods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
	allowHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With", "X-Custom-Header", "Origin", "Referer", "User-Agent", "Cookie"],
}));

// logger
const logger = Logger();
app.use(logger);

// router
app.use(router.routes());
app.use(router.allowedMethods({
  throw: true, // 抛出错误，代替设置响应头状态
  notImplemented: () =>
		"不支持当前请求所需要的功能",
	methodNotAllowed: () =>
		"不支持的请求方式",
}));

// Application error logging.
app.on("error", console.error);

app.listen(10086);

export default app;
