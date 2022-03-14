import { Notification } from "@douyinfe/semi-ui";

/**
 * 重试辅助函数 Fn1-part1
 * @returns {Promise<any>}
 */
const retryHelper = (): Promise<any> =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
/**
 * 重试函数 Fn1-part2
 * @param fn 需要重试函数
 * @param retryTimes 重试次数 默认3次
 * @param info 提示信息
 * @returns {Promise<any>} 重试后 promise 的结果
 */
const retry = (
  fn: Function,
  retryTimes: number = 3,
  info: string = "信息",
): Promise<any> =>
  new Promise((resolve, reject) => {
    let retryCount = 0;
    const retryFn = () => {
      fn()
        .then(resolve)
        .catch((err: any) => {
          retryCount += 1;
          if (retryCount < retryTimes) {
            retryHelper().then(retryFn);
          } else {
            const opts = {
              title: info,
              content: err.toString(),
              duration: 3,
            };
            Notification.warning(opts);
            reject(err);
          }
        });
    };
    retryFn();
  });

export default retry;
