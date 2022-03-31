import cos from "../utils/init";

import {
  IListObjectRequest,
  IListObjectResponce,
} from "./types/objectTypes";

/**
 * 获取文件夹下的内容
 * @param request 条件
 * @returns 文件夹内容
 */
const listObjects = (request: IListObjectRequest): Promise<IListObjectResponce> => {
  return new Promise((resolve, reject) => {
    cos.getBucket({ request }, (err: IListObjectResponce, data: IListObjectResponce) => {
      err ? reject(err) : resolve(data);
    });
  });
};

export default listObjects;
