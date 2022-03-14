// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
import cos from "../utils/init";

interface IGetBunketResponce {
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

interface IGetBunketRequest {
	Region: string[] | string;
}

interface IAddBunketRequest {
	bucket: string,
	region: string,
	ACL?: string,
	GrantRead?: string,
	GrantWrite?: string,
	GrantReadAcp?: string,
	GrantWriteAcp?: string,
	GrantFullControl?: string,
}

interface IStatussResponce {
	err?: {
		statusCode: Number,
		header: Object,
	},
	data?: {
		statusCode: Number,
		header: object,
	}
}

/**
 * 获取 Bucket 列表
 * @param {IGetBunketRequest} request 请求区域
 * @returns bunket 列表
 */
const getBunketList = (request?: IGetBunketRequest): Promise<IGetBunketResponce> => {
	return new Promise((resolve, reject) => {
		cos.getService(request, (err: IGetBunketResponce, data: IGetBunketResponce) => {
			err ? reject(err) : resolve(data);
		});
	});
};

/**
 * 创建存储桶
 * @param request 创建存储桶需要传递的参数
 * @returns 创建结果
 */
const addBunket = (request: IAddBunketRequest): Promise<IStatussResponce> => {
	return new Promise((resolve, reject) => {
		cos.putBucket(request, (err: IStatussResponce, data: IStatussResponce) => {
			err ? reject(err) : resolve(data);
		});
	});
};

/**
 * 删除存储桶
 * @param request 删除存储桶需要传递的参数
 * @returns 删除结果
 */
const delBunket = (request: IGetBunketResponce): Promise<IStatussResponce> => {
	return new Promise((resolve, reject) => {
		cos.deleteBucket(request, (err: IStatussResponce, data: IStatussResponce) => {
			err ? reject(err) : resolve(data);
		});
	});
};

export {
	getBunketList,
	addBunket,
	delBunket,
};
