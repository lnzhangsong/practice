import request from "@/utils/request";

function getList(): Promise<any> {
  return request.get("/hello");
}

export { getList };
