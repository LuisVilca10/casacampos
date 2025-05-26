import { CalendarPlus, LogIn, ShieldCheck, User } from 'lucide-react';
import logo from '/logo.png';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import axios from 'axios';
import { API_URL } from '../../../constants/env';

function NavBar() {
    const nav = useNavigate()
    const { userData, setUserData } = useContext(UserContext);
    
    const location = useLocation();

    const handleLogout = () => {
        axios.post(`${API_URL}auth/logout`, {}, { withCredentials: true })
            .then(() => {
                setUserData(null);
                nav("/login");
            })
            .catch(err => {
                console.error("Error al cerrar sesión", err);
            });
    };

    useEffect(() => {
        // Cierra el drawer cuando cambia la ruta
        const drawerCheckbox = document.getElementById('mobile-nav');
        if (drawerCheckbox && drawerCheckbox.checked) {
            drawerCheckbox.checked = false;
        }
    }, [location]);
    return (
        <>
            <div className="container md:flex justify-between items-center mx-auto py-5 2xl:-mt-5 -mt-5  hidden">
                <Link to={"/"}>
                    <div className="flex items-center gap-x-4">
                        <img className="h-auto sm:w-24" src={logo} alt="casacampo" />
                        <div className="hidden sm:block cursor-pointer">
                            <h1 className="sm:text-xl font-bold flex flex-col text-red-700">
                                Casa Campo
                                <span className="text-xs font-medium sm:text-lg text-black -mt-1">Arequipa</span>
                            </h1>
                        </div>
                    </div>
                </Link>



                <div className="hidden sm:flex justify-center text-sm -ml-36 mt-4 text-black">
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
                            className="cursor-pointer px-2 rounded hover:bg-gray-200"
                        >
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-red-700 font-bold' : 'text-sm'
                            } to={"/SearchCottage"} >
                                Reservar
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
                    <div className='flex justify-center items-center'>
                        {userData ? (<div className='mr-2 text-sm'>
                            <div>{userData.name}</div>
                            <div>{userData.lastname}</div>
                        </div>) : (<div className='mr-2 text-sm'>
                            <div>Iniciar</div>
                            <div>Sesión</div>
                        </div>)}
                        <div tabIndex={0} role="button" className={`${userData ? 'border border-gray-300 rounded-2xl' : 'border p-1 rounded-2xl border-gray-600'}`}
                        >
                            {userData ? (
                                <img className="inline-block h-[40px] w-[40px] rounded-2xl object-cover object-center" src={userData.profile_photo_path} alt="" />
                            )
                                : (<User size={'28'} color='#000000' />)}</div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {userData ?
                            (<>
                                <li><Link to={'/login'} > <User />Mi Perfil</Link></li>
                                <li className="border-r-2 border-gray-300 pr-4"></li>

                                {userData?.role === "Admin" ? (
                                    <>
                                        <li>
                                            <Link to={"/admin"}>
                                                <ShieldCheck className="w-6 h-6" />
                                                Panel de Administrador
                                            </Link>
                                        </li>
                                        <li className="border-r-2 border-gray-300 pr-4"></li>
                                        <li><Link to={'/login'} > <CalendarPlus className="w-6 h-6" />Mis Reservas</Link></li>
                                    </>
                                ) : (<li><Link to={'/login'} > <CalendarPlus className="w-6 h-6" />Mis Reservas</Link></li>)}

                                <li className="border-r-2 border-gray-300 pr-4"></li>
                                <li><button onClick={handleLogout} type="button" ><LogIn />Cerrar Sesion</button ></li>
                            </>)
                            : (<>
                                <li><Link to={'/login'}><User />Iniciar Sesión</Link></li>
                                <li className="border-r-2 border-gray-300 pr-4"></li>
                                <li><Link to={"/register"} ><LogIn />Registrase</Link></li>
                            </>)}

                    </ul >
                </div >
            </div >

            {/* Drawer para móviles */}
            < div className="drawer drawer-end md:hidden" >
                <input id="mobile-nav" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex justify-between items-center px-4 py-2">
                    <Link to={"/"}>
                        {/* Logo + Nombre */}
                        <div className="flex items-center gap-2">
                            <img src={logo} className="h-auto w-16" alt="logo" />
                            <div className="leading-tight">
                                <h1 className="text-base font-bold text-red-700">Casa Campo</h1>
                                <span className="text-sm text-black -mt-1">Arequipa</span>
                            </div>
                        </div>
                    </Link>


                    {/* Ícono perfil + botón drawer */}
                    <div className="flex items-center">
                        {/* Perfil */}
                        <div className={`${userData ? 'border border-gray-300 rounded-2xl' : 'border p-1 rounded-2xl border-gray-600'}`} >
                            {userData ? (
                                <img
                                    className="h-8 w-8 rounded-full object-cover"
                                    src={userData.profile_photo_path}
                                    alt="perfil"
                                />
                            ) : (
                                <User size={24} color="#000000" />
                            )}
                        </div>

                        {/* Botón menú */}
                        <label htmlFor="mobile-nav" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                </div>

                {/* Drawer lateral */}
                <div className="drawer-side z-50">
                    <label htmlFor="mobile-nav" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 min-h-full bg-base-100 text-base-content space-y-2">
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/SearchCottage">Reservar</NavLink></li>
                        <li><NavLink to="/nosotos">Nosotros</NavLink></li>
                        <li><NavLink to="/contactanos">Contáctanos</NavLink></li>
                        <li><NavLink to="/galeria">Galería</NavLink></li>
                        <div className="divider" />
                        {userData ? (
                            <>
                                <li><Link to="/login"><User />Mi Perfil</Link></li>
                                {userData.role === "Admin" && (
                                    <li><Link to="/admin"><ShieldCheck />Panel Admin</Link></li>
                                )}
                                <li><Link to="/login"><CalendarPlus />Mis Reservas</Link></li>
                                <li><button onClick={handleLogout}><LogIn />Cerrar Sesión</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login"><User />Iniciar Sesión</Link></li>
                                <li><Link to="/register"><LogIn />Registrarse</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div >


        </>
    );
}

export default NavBar;