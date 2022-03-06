import { Outlet } from "react-router-dom";

import SideBar from "../../components/SideBar/index";

function Root() {
  return (
    <div className="flex">
      <aside className="h-screen w-60 flex flex-none">
        <SideBar used={10} sum={20} />
      </aside>
      <div className="flex flex-1 p-2 m-2 border rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
