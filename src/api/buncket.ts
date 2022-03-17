import request from "../utils/request";

function getList(): Promise<any> {
  return request.get("/bunketList");
}

export default getList;
