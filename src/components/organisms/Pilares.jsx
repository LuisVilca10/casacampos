function Pilares() {
    return (
        <div className="md:px-20 md:py-14 p-7">
            <div className="container mx-auto bg-white md:px-10">
                <h4 className="flex justify-center font-bold text-4xl mb-12 items-center text-center">Una empresa con gran pasión</h4>
                <div className="md:flex grid gap-y-8 mt-8 gap-x-10 text-lg mx-7">
                    <div className="w-full flex flex-wrap justify-center border-l border-r border-gray-400 rounded-2xl items-center text-center py-3 gap-y-3">
                        <div className="rounded-md h-44 w-56 text-center flex items-center justify-center">
                            <img src="../../src/assets/aboutus/VocaciónServicio.png" alt="" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-y-2">
                            <h4 className="text-2xl font-semibold">Vocación de servicio</h4>
                            <p className="px-7">
                                Nuestro equipo combina entusiasmo y profesionalismo para ofrecerte lo mejor.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap justify-center border-l border-r border-gray-400 rounded-2xl items-center text-center py-3 gap-y-3">
                        <div className="rounded-md h-36 w-56 text-center flex items-center justify-center">
                            <img src="../../src/assets/aboutus/AtenciónPersonalizada.png" alt="" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-y-2">
                            <h4 className="text-2xl font-semibold">Atención personalizada</h4>
                            <p className="px-7">
                                Escuchamos tus necesidades para diseñar la experiencia perfecta.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap justify-center border-l border-r border-gray-400 rounded-2xl items-center text-center py-3 gap-y-3">
                        <div className="rounded-md h-44 w-56 text-center flex items-center justify-center">
                            <img src="../../src/assets/aboutus/CompromisoCalidad.png" alt="" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-y-2">
                            <h4 className="text-2xl font-semibold">Compromiso con la calidad</h4>
                            <p className="px-7">
                                Nos esforzamos en cada detalle para superar tus expectativas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pilares;
