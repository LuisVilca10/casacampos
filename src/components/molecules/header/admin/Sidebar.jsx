import { NavLink } from "react-router-dom";
import { LayoutDashboard, Calendar, User, BarChart2, House, UsersRound, PackageOpen, MessageCircle } from "lucide-react";

function Sidebar() {
    return (
        <>
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4 rounded-r-2xl border-r border-red-700">
                {/* Sidebar content here */}

                <div className="flex gap-2 sm:gap-4 items-center justify-center mb-4">
                    <NavLink to={"/"}>
                        <img
                            className="h-auto w-14 sm:w-28"
                            src="/logo.png"
                            alt=""
                        />
                    </NavLink>
                    <div className="cursor-pointer pt-1">
                        <NavLink to={"/"}>
                            <h1 className="text-base sm:text-lg font-bold text-red-700">
                                Casa Campo
                            </h1>
                        </NavLink>
                        <div className="text-xs sm:text-sm font-semibold -mt-1">
                            Arequipa
                        </div>
                    </div>
                </div>
                <div className="px-2 py-1 text-xs bg-gradient-to-tr from-red-600 bg-red-500 w-full rounded-lg text-center text-white mb-3">
                    Administrador
                </div>

                <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Menu</div>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/admin" end  >
                            <LayoutDashboard className="w-4 h-4 mr-2" />
                            Dashboard
                        </NavLink>
                    </li>
                </div>

                <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Autentificación</div>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/admin/profile">
                            <User className="w-4 h-4 mr-2" />
                            Mi Perfil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/admin/users">

                            <UsersRound className="w-4 h-4 mr-2" />
                            Usuarios
                        </NavLink>
                    </li>
                </div>

                <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Sistema</div>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/admin/cottage">
                            <House className="w-4 h-4 mr-2" />
                            Cabañas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/admin/packages">
                            <PackageOpen className="w-4 h-4 mr-2" />
                            Paquetes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/admin/reservations">
                            <Calendar className="w-4 h-4 mr-2" />
                            Reservas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/admin/suport-helps">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Centro de ayuda
                        </NavLink>
                    </li>
                </div>

                <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Others</div>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-red-700/20 text-red-600 font-medium' : 'text-sm hover:bg-gray-200'
                        } to="/charts">
                            <BarChart2 className="w-4 h-4 mr-2" />
                            Charts
                        </NavLink>
                    </li>
                </div>
            </ul>

        </>
    );
}
export default Sidebar;