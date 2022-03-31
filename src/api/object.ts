import request from "../utils/request";

function getObjectList(param: any): Promise<any> {
  // eslint-disable-next-line no-console
  console.log(param);
  return request.get("/objectList");
}

export default getObjectList;
