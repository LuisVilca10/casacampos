import { useState } from "react";
import { Mail, Lock, Facebook, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-700 flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8">
                <div className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold">🏕️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-red-700">Bienvenido a</h2>
                    <h1 className="text-3xl font-bold text-brown-700">Casa Campo Arequipa</h1>
                </div>

                <form className="space-y-4">
                    <label className="w-full bg-white/60 text-sm rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm border border-transparent focus-within:ring-2 focus-within:ring-gray-500">
                        <svg className="h-[1.8em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <Mail size={"25px"} />
                        </svg>
                        <input type="email" className="bg-transparent outline-none w-full placeholder:text-gray-500" placeholder="Correo electrónico" />
                    </label>
                    <label className="w-full bg-white/60 text-sm rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm border border-transparent focus-within:ring-2 focus-within:ring-gray-500">
                        <svg className="h-[1.8em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <Lock size={"25px"} />
                        </svg>
                        <input type={showPassword ? "text" : "password"} className="bg-transparent outline-none w-full placeholder:text-gray-500" placeholder="Contraseña" />
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
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm border border-" />
                            Recuérdame
                        </label>
                        <a href="#" className="text-teal-600 hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button className="btn btn-block bg-red-700 hover:bg-red-800 text-white border border-red-700">
                        Iniciar sesión
                    </button>
                </form>

                <div className="divider text-sm">o ingresa con</div>

                <div className="flex gap-4">
                    <button className="btn btn-outline flex-1 bg-blue-700 text-white border border-blue-700">
                        <Facebook className="w-5 h-5 text-white" />
                        Facebook
                    </button>
                    <button className="btn btn-outline flex-1 bg-white border border-white">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                        Google
                    </button>
                </div>

                <p className="text-center text-sm">
                    ¿No tienes una cuenta?{' '}
                    <a href="#" className="text-teal-800 hover:underline">Regístrate</a>
                </p>
            </div>
        </div >
    );
};

export default Login;