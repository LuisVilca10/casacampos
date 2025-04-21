import { useRef } from "react";
import logo from '../../../assets/logo.png';

import { LogIn, User, UserPlus } from 'lucide-react';
import { Link } from "react-router-dom";
import SuperHero from "./SuperHero";


function NavBar() {
    const menuRight = useRef(null);
    const items = [
        {
            icon: <LogIn className="mx-2" />,
            label: 'Iniciar Sesión',
            command: () => alert("Iniciar sesión"), // Aquí agregarías la lógica real
        },
        {
            icon: <UserPlus className="mx-2" />,
            label: 'Registrarse',
            command: () => alert("Registrarse"), // Aquí agregarías la lógica real
        }
    ];

    return (
        <>

            <div className="container flex justify-between items-center mx-auto py-5 -mt-5">

                <div className="flex items-center gap-x-4">
                    <img className="h-auto sm:w-24" src={logo} alt="casacampo" />
                    <div className="hidden sm:block cursor-pointer">
                        <h1 className="sm:text-xl font-semibold flex flex-col text-red-700">
                            Casa Campo
                            <span className="text-xs font-light sm:text-lg text-black -mt-1">Arequipa</span>
                        </h1>
                    </div>
                </div>


                <div className="hidden sm:flex justify-center text-sm -ml-36 mt-3">
                    <ul className="flex divide-x opacity-0 md:opacity-100 duration-300">
                        <li
                            className="cursor-pointer px-2 rounded hover:bg-gray-200"
                        >
                            <a href="/">Inicio</a>
                        </li>
                        <li
                            className={`cursor-pointer px-2 rounded hover:bg-gray-200`}
                        >
                            <Link onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                                Nosotros
                            </Link>
                        </li>
                        <li
                            className={`cursor-pointer px-2 rounded hover:bg-gray-200}`}
                        >
                            <Link onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                                Contactanos
                            </Link>
                        </li>
                        <li
                            className={`cursor-pointer px-2 rounded hover:bg-gray-200`}
                        >
                            <Link to="/galeria">Galeria</Link>
                        </li>
                    </ul>
                </div>

                <div className="p-d-flex p-ai-center p-jc-center p-mt-5">
                    {/* <Menu model={items} popup ref={menuRight} /> */}
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
                </div>

            </div>


        </>
    );
}

export default NavBar;