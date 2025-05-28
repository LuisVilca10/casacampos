import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, Calendar, User, BarChart2, House, UsersRound, PackageOpen, MessageCircle } from "lucide-react";
import NavBar from "../molecules/header/admin/Navbar";
import Sidebar from "../molecules/header/admin/Sidebar";

const Admin = () => {


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col w-full min-h-screen">
        {/* Page content here */}
        <NavBar />

        <main className="flex-1 overflow-auto p-6 ">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side z-40">
         <Sidebar />
       </div >
    </div>
  );
};

export default Admin;