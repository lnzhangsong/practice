import request from "../utils/request";

function getList(): Promise<any> {
  return request.get("/api/bunketList");
}

export default getList;