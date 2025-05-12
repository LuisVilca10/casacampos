const Footer = () => {
    return (
        <><footer
            className="text-white py-10 bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/fondo-01.jpeg')`,
            }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-4">
                {/* Logo y descripción */}
                <div className="flex-1 min-w-[250px]">
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            className="w-14 sm:w-24"
                            src="/logo.png"
                            alt="Casa Campo Arequipa"
                        />
                        <h2 className="text-2xl font-bold">Casa Campo Arequipa</h2>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Ubicado en el corazón de Arequipa, Casa Campo te brinda una experiencia
                        única donde la naturaleza y el descanso se unen. Disfruta de un entorno
                        rodeado de árboles y vegetación que invita a desconectar.
                    </p>
                </div>

                {/* Enlaces rápidos y Políticas */}
                <div className="flex-1 flex flex-col sm:flex-row justify-between gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Enlaces rápidos</h3>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li><a href="/" className="hover:text-white">Inicio</a></li>
                            <li><a href="/nosotros" className="hover:text-white">Sobre nosotros</a></li>
                            <li><a href="/servicios" className="hover:text-white">Servicios</a></li>
                            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Políticas</h3>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li><a href="#" className="hover:text-white">Política de Datos</a></li>
                            <li><a href="#" className="hover:text-white">Privacidad</a></li>
                            <li><a href="#" className="hover:text-white">Términos de Uso</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contacto y Redes */}
                <div className="flex-1 min-w-[250px]">
                    <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                    <div className="space-y-4 text-sm text-gray-300">
                        <div>
                            <p className="font-semibold">Asistente Virtual</p>
                            <p>Disponible 24/7</p>
                        </div>
                        <div>
                            <p className="font-semibold">Email</p>
                            <a
                                href="mailto:arequipacasacampo@gmail.com"
                                className="hover:text-white"
                            >
                                arequipacasacampo@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold">Teléfono</p>
                            <a href="tel:+51950280738" className="hover:text-white">
                                (+51) 950 280 738
                            </a>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Síguenos</h4>
                            <div className="flex space-x-4 text-xl">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61564315336410&locale=es_LA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/Casacampoaqp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@casacampo.arequipa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Derechos */}
            <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Casa Campo Arequipa. Todos los derechos reservados.</p>
                <p>
                    Powered by{" "}
                    <a
                        href="https://maniscode.online/"
                        className="hover:underline text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mani Dev's
                    </a>
                </p>
            </div>
        </footer>

        </>
    );
};

export default Footer;
