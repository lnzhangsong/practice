const qiniu = require("qiniu");

const accessKey = "oTmPBjiFwUch96zCWheqwFocH0BNUyBfGhLIMKHO";
const secretKey = "3jGMiOnjfUf1WsnADthnD3zhnQNMjaXu5Xu5RGWO";

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var config = new qiniu.conf.Config();
//config.useHttpsDomain = true;
config.zone = qiniu.zone.Zone_z0;
var bucketManager = new qiniu.rs.BucketManager(mac, config);

var bucket = "zhangsong";
// @param options 列举操作的可选参数
//        prefix    列举的文件前缀
//        marker    上一次列举返回的位置标记，作为本次列举的起点信息
//        limit     每次返回的最大列举文件数量
//        delimiter 指定目录分隔符
var options = {
  limit: 10,
  prefix: "",
};
bucketManager.listPrefix(bucket, options, function (err, respBody, respInfo) {
  if (err) {
    console.log(err);
    throw err;
  }
  if (respInfo.statusCode === 200) {
    //如果这个nextMarker不为空，那么还有未列举完毕的文件列表，下次调用listPrefix的时候，
    //指定options里面的marker为这个值
    console.log(respBody, "相应的文件列表");
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});
