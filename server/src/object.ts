import cos from "../utils/init";

import {
  IListObjectRequest,
  IListObjectResponce,
} from "./types/objectTypes";

const listObjects = (request: IListObjectRequest): Promise<IListObjectResponce> => {
  return new Promise((resolve, reject) => {
    cos.getBucket({ request }, (err: IListObjectResponce, data: IListObjectResponce) => {
      err ? reject(err) : resolve(data);
    });
  });
};

export default listObjects;
