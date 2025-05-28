import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { Search, AlignLeft, Moon, BellIcon } from "lucide-react";
import axios from 'axios';
import { UserContext } from "../../../../context/UserContext";
import { API_URL } from "../../../../constants/env";

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

            <div className="navbar bg-base-100 shadow-md border-b-4 rounded-b-2xl border-red-700 sticky top-0 z-30  bg-white w-full px-4 py-5">
                <div className="flex justify-between w-full">
                    <div className="flex w-full gap-x-2">
                        <label htmlFor="my-drawer-2" className="btn drawer-button text-[#B4B8BF] hover:text-[#344054] p-3">
                            <AlignLeft size={"20px"} />
                        </label>
                        <div className="flex items-center w-full max-w-xl relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={10} />
                            <input
                                type="text"
                                placeholder="Search or type command..."
                                className="input input-bordered w-full pl-10 rounded-full"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end items-end gap-x-2 w-full ">
                        <button className="border border-gray-300 btn btn-circle btn-ghost hover:bg-gray-100 text-[#B4B8BF] hover:text-[#344054]">
                            <Moon />
                        </button>
                        <button className="border border-gray-300 btn btn-circle btn-ghost hover:bg-gray-100 text-[#B4B8BF] hover:text-[#344054]">
                            <BellIcon />
                        </button>
                        <div className="dropdown dropdown-end">
                            <div className='flex justify-center items-center gap-x-2'>
                                <div tabIndex={0} role="button" className={`${userData ? 'border border-gray-300 rounded-2xl' : 'border p-1 rounded-2xl border-gray-600'}`} >
                                    <img className="inline-block h-[40px] w-[40px] rounded-2xl object-cover object-center" src="https://demo.tailadmin.com/src/images/user/owner.jpg" alt="" />
                                </div>
                                <span tabIndex={0} role="button" className="font-semibold text-sm text-gray-800">Musharof</span>
                                <svg tabIndex={0} role="button" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul >
                        </div >
                    </div>
                </div>

            </div>
        </>
    );
}

export default NavBar;