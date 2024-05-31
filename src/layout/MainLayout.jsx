import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";

const MainLayout = () => {
  return (
    <div>
      <div >
        <Navber />
      </div>

      <main className="section-container">
        <Outlet></Outlet>
      </main>
    </div>
  );
};
export default MainLayout;
