import axios from "axios"
import { useContext, useState } from "react";
import { Mail, Lock, Facebook, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../templates/Authentication";
import { API_URL } from "../../constants/env";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const nav = useNavigate();
    const { setUserData } = useContext(UserContext)
    const [error, setError] = useState();

    const handleLogin = async (e) => {
        e.preventDefault()
        setError()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        axios
            .post(`${API_URL}auth/login`, data, {
                withCredentials: true
            })
            .then((resp) => {
                setUserData(resp.data.user);
                console.log(resp.data.user);
                nav("/");

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    },
                });

                Toast.fire({
                    icon: "success",
                    title: "Acceso Autorizado",
                });
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    deleteToken(); // solo si aún usas token en memoria
                }
                console.error(err);
                setError(err);
            });

    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/api/auth/google-auth/redirect";
    };

    return (
        <Authentication>
            <form autoComplete="on" onSubmit={handleLogin} className="space-y-4">
                <label className="w-full bg-white/60 text-sm rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm border border-transparent focus-within:ring-2 focus-within:ring-gray-500">
                    <svg className="h-[1.8em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <Mail size={"25px"} />
                    </svg>
                    <input type="email" name="email" className="bg-transparent outline-none w-full placeholder:text-gray-500" placeholder="Correo electrónico" autoComplete="email" />
                </label>
                <label className="w-full bg-white/60 text-sm rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm border border-transparent focus-within:ring-2 focus-within:ring-gray-500">
                    <svg className="h-[1.8em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <Lock size={"25px"} />
                    </svg>
                    <input type={showPassword ? "text" : "password"} name="password" className="bg-transparent outline-none w-full placeholder:text-gray-500" placeholder="Contraseña" autoComplete="current-password" />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="focus:outline-none"
                    >
                        {showPassword ? (
                            <EyeOff className="text-gray-500" size={20} />
                        ) : (
                            <Eye className="text-gray-500" size={20} />
                        )}
                    </button>
                </label>
                <div className="flex justify-between items-center text-sm">
                    {/* <label className="flex items-center gap-2 text-gray-200">
                        <input type="checkbox" className="checkbox checkbox-sm border text-white border-white bg-white/30" />
                        Recuérdame
                    </label> */}
                    <Link to={"/rememberpassqord"} className="text-white border-b">¿Olvidaste tu contraseña?</Link>
                </div>

                <button type="submit" className="btn btn-block bg-green-700 hover:bg-green-800 text-white border border-green-700">
                    Iniciar sesión
                </button>
            </form>

            <div className="divider text-sm text-gray-200">o ingresa con</div>

            <div className="flex gap-4">
                <button className="btn btn-outline flex-1 bg-blue-700 text-white border border-blue-700">
                    <Facebook className="w-5 h-5 text-white" />
                    Facebook
                </button>
                <button onClick={handleGoogleLogin} className="btn btn-outline flex-1 bg-white border border-white">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                    Google
                </button>
            </div>

            <p className="text-center text-sm text-white">
                ¿No tienes una cuenta?{' '}
                <Link to={"/register"} className="ml-4 text-white/80 border-b" >Regístrate</Link>
            </p>
        </Authentication>
    );
};

export default Login;