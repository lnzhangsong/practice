import Koa, { Context } from "koa";
import cors from "koa2-cors";
import Logger from "koa-logger";
import bodyParse from "koa-bodyparser";
import body from "koa-body";

import router from "./router/index";

class App extends Koa {
	constructor(port: number) {
		super();

		// logger
		const logger = Logger();
		this.use(logger);


		// Generic error handling middleware.
		this.use(async (ctx: Context, next: () => Promise<any>) => {
			console.log(ctx);
			
			try {
				await next();
			} catch (error) {
				ctx.body = { error };
				ctx.app.emit("error", error, ctx);
			}
		});

		// cors
		this.use(cors({
			origin: "*",
			allowMethods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
			allowHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With", "X-Custom-Header", "Origin", "Referer", "User-Agent", "Cookie"],
		}));

		// router
		this.use(router());

		// Application error logging.
		this.on("error", console.error);

		this.use(body());
		this.use(bodyParse());

		this.listen(port);
	}
}

export default App;