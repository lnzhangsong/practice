const qiniu = require('qiniu');

const accessKey = 'oTmPBjiFwUch96zCWheqwFocH0BNUyBfGhLIMKHO'; // 配置文件
const secretKey = '3jGMiOnjfUf1WsnADthnD3zhnQNMjaXu5Xu5RGWO'; // 配置文件

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();

config.zone = qiniu.zone.Zone_z0; // 配置文件
const bucketManager = new qiniu.rs.BucketManager(mac, config);

const bucket = 'zhangsong'; // 配置文件

interface IOptions {
  prefix?: string; // 列举的文件前缀
  marker?: string; // 列举标识符
  limit?: number; // 单次列举个数限制
  delimiter?: string; // 指定目录分隔符
}

/**
 * @param {*} options 列举操作的可选参数
 * @returns bunket 列表
 */
const getBunketList = (options: IOptions): Promise<{ respBody: any, respInfo: any }> => {
  return new Promise((resolve, reject) => {
    // tslint:disable-next-line:ter-prefer-arrow-callback
    bucketManager.listPrefix(bucket, options, function (err: any, respBody: any, respInfo: any) {
      if (err) {
        reject(err);
      } else {
        resolve({ respBody, respInfo });
      }
    });
  });
};

export {
  getBunketList
};
