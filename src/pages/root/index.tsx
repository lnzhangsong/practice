import { Outlet } from "react-router-dom";

import SideBar from "../../components/SideBar/index";

function Root() {
  return (
    <div className="flex">
      <aside className="left_side flex flex-none h-screen w-60">
        <SideBar used={10} sum={20} />
      </aside>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
