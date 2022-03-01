import { Outlet } from "react-router-dom";

import SideBar from "../../components/SideBar/index";

import "./index.scss";

function Root() {
  return (
    <div className="flex">
      <aside className="left_side flex flex-none">
        <SideBar />
      </aside>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
