import { Link } from "react-router-dom";
import { LayoutDashboard, Calendar, User, BarChart2, House, UsersRound, PackageOpen, MessageCircle } from "lucide-react";

function Sidebar() {
    return (
        <>
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4 rounded-r-2xl border-r border-red-700">
                {/* Sidebar content here */}

                <div className="flex gap-2 sm:gap-4 items-center justify-center mb-4">
                    <Link to={"/"}>
                        <img
                            className="h-auto w-14 sm:w-28"
                            src="/logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="cursor-pointer pt-1">
                        <Link to={"/"}>
                            <h1 className="text-base sm:text-lg font-bold text-red-700">
                                Casa Campo
                            </h1>
                        </Link>
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
                        <Link to="/admin">
                            <LayoutDashboard className="w-4 h-4 mr-2" />
                            Dashboard
                        </Link>
                    </li>
                </div>

                <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Autentificación</div>
                    <li>
                        <Link to="/admin/profile">
                            <User className="w-4 h-4 mr-2" />
                            Mi Perfil
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users">

                            <UsersRound className="w-4 h-4 mr-2" />
                            Usuarios
                        </Link>
                    </li>
                </div>

                <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Sistema</div>
                    <li>
                        <Link to="/admin/cottage">
                            <House className="w-4 h-4 mr-2" />
                            Cabañas
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/packages">
                            <PackageOpen className="w-4 h-4 mr-2" />
                            Paquetes
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/reservations">
                            <Calendar className="w-4 h-4 mr-2" />
                            Reservas
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/suport-helps">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Centro de ayuda
                        </Link>
                    </li>
                </div>

                <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Others</div>
                    <li>
                        <Link to="/charts">
                            <BarChart2 className="w-4 h-4 mr-2" />
                            Charts
                        </Link>
                    </li>
                </div>
            </ul>
        
    </>
);
}
export default Sidebar;