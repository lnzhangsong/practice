import cos from "../utils/init";

import {
	IBunketListRequest,
	IBunketListResponce,
	IStatussResponce,
	IBunketRequest,
} from "./types/bucketTypes";

/**
 * 获取 Bucket 列表
 * @param {IGetBunketRequest} request 请求区域
 * @returns bunket 列表
 */
const getBunketList = (request?: IBunketListRequest): Promise<IBunketListResponce> => {
	return new Promise((resolve, reject) => {
		cos.getService(request, (err: IBunketListResponce, data: IBunketListResponce) => {
			err ? reject(err) : resolve(data);
		});
	});
};

/**
 * 创建存储桶
 * @param request 创建存储桶需要传递的参数
 * @returns 创建结果
 */
const addBunket = (request: IBunketRequest): Promise<IStatussResponce> => {
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
const delBunket = (request: Pick<IBunketRequest, "Bunket" | "Region">): Promise<IStatussResponce> => {
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
