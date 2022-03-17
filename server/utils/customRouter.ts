import Router from "koa-router";

const router = new Router();

// add prefix
// conflict with serverless,(same name)
// router.prefix("/api");

// 修改错误默认显示
router.allowedMethods({
  throw: true, // 抛出错误，代替设置响应头状态
  notImplemented: () => { return "不支持当前请求所需要的功能"; },
  methodNotAllowed: () => { return "不支持的请求方式"; },
});

export default router;
