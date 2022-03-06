// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
var COS = require("cos-nodejs-sdk-v5");
var cos = new COS({
	SecretId: "AKIDnPkpd9PO6WgZAUYLr75oFPIuFJ6dsqWv",
	SecretKey: "9AzYw3tRjlWzC8m9F4nIWT9XeU3LL4Wh",
});

interface IResponce {
	statusCode: number;
	headers: object;
	Owner?: { DisplayName: string; ID: string };
	Buckets?: Array<{
		Name: String;
		Location: String;
		CreationDate: Date;
		BucketType: String;
	}>;
	DisplayName?: String;
}

interface IRequest {
	Region: string[] | string;
}

/**
 * 获取 Bucket 列表
 * @param {IRequest} Region 请求区域
 * @returns bunket 列表
 */
const getBunketList = (Region?: IRequest): Promise<IResponce> => {
	return new Promise((resolve, reject) => {
		cos.getService(Region, function (err: IResponce, data: IResponce) {
			err ? reject(err) : resolve(data);
		});
	});
};

export { getBunketList };
