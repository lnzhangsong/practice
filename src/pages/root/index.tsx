import { Outlet } from "react-router-dom";
import { useRequest } from "ahooks";

import SideBar from "../../components/SideBar/index";

import { getList } from "../../api/manage";

function Root() {
  const { data } = useRequest(getList);

  return (
    <div className="flex">
      <aside className="left_side flex flex-none h-screen w-60">
        <SideBar used={10} sum={20} />
      </aside>
      {data}
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
