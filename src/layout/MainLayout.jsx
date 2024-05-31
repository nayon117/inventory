import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <main className="min-h-[68vh]">
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
