import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function MainLayout() {
  return (
    <div className="min-h-screen  ">
      <div>
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
