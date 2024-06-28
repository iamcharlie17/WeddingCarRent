import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";

const MainLayouts = () => {
  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
