import { LogIn, User } from 'lucide-react';
import logo from '../../../assets/logo.png';
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="container flex justify-between items-center mx-auto py-5 2xl:-mt-5 -mt-5">

                <div className="flex items-center gap-x-4">
                    <img className="h-auto sm:w-24" src={logo} alt="casacampo" />
                    <div className="hidden sm:block cursor-pointer">
                        <h1 className="sm:text-xl font-bold flex flex-col text-red-700">
                            Casa Campo
                            <span className="text-xs font-medium sm:text-lg text-black -mt-1">Arequipa</span>
                        </h1>
                    </div>
                </div>


                <div className="hidden sm:flex justify-center text-sm -ml-44 mt-4 text-black">
                    <ul className="flex divide-x  md:opacity-100 duration-300">
                        <li
                            className="cursor-pointer px-2 rounded hover:bg-gray-200"
                        >
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-red-700 font-bold' : 'text-sm'
                            } to={"/"} >
                                Inicio
                            </NavLink>
                        </li>
                        <li
                            className={`cursor-pointer px-2 rounded hover:bg-gray-200`}
                        >
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-red-700 font-bold' : 'text-sm'
                            } to={"/nosotos"}>
                                Nosotros
                            </NavLink>
                        </li>
                        <li
                            className={`cursor-pointer px-2 rounded hover:bg-gray-200}`}
                        >
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-red-700 font-bold' : 'text-sm'
                            } to={"/contactanos"}>
                                Contactanos
                            </NavLink>
                        </li>
                        <li
                            className={`cursor-pointer px-2 rounded hover:bg-gray-200`}
                        >
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-red-700 font-bold' : 'text-sm'
                            } to="/galeria">Galeria</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="border p-1 rounded-2xl border-gray-600"><User size={'28'} color='#000000' /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a href='/login'><User />Iniciar Sesión</a></li>
                        <li className="border-r-2 border-gray-300 pr-4"></li>
                        <li><a><LogIn />Registrase</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;