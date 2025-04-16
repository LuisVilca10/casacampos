import { useRef } from "react";
import logo from '../../assets/logo.png';
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { LogIn, User, UserPlus } from 'lucide-react';
import { Link } from "react-router-dom";


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
            <div class="container flex justify-between items-center mx-auto py-5">
                <div class="flex items-center gap-x-2">
                    <img className="h-auto sm:w-24" src={logo} alt="casacampo" />
                    <div className='hidden sm:block cursor-pointer'>
                        <h1 className="sm:text-xl font-semibold  flex flex-col text-red-700">
                            Casa Campo
                            <span className="text-xs font-light sm:text-lg text-black -mt-1">Arequipa</span>
                        </h1>
                    </div>

                    <div className="fixed mt-4 left-1/2 transform -translate-x-1/2 z-50 hidden sm:flex justify-center text-sm">
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
                </div>

                <div className="p-d-flex p-ai-center p-jc-center p-mt-5">
                    <Menu model={items} popup ref={menuRight} />
                    <Button className="border p-2 rounded-full border-black" icon={<User />} onClick={(event) => menuRight.current.toggle(event)} />
                </div>
            </div>
        </>
    );
}

export default NavBar;