import { HandCoins, HandPlatter, Laugh } from 'lucide-react';

const SobreNosotros = () => {
    return (
        <>
            {/* sobre nosotros */}
            <div className='bg-gray-100 md:py-20 py-10'>
                <div className="container mx-auto md:flex lg:flex-row items-center justify-between gap-x-10 px-10  md:pl-28">
                    {/* Texto lado izquierdo */}
                    <div className="w-full">
                        <h4 className="text-yellow-600 font-extralight">Sobre Nosotros</h4>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Explora Casa Campo Arequipa</h2>
                        <p className="text-gray-700 ml-1 mb-7">
                            Casa Campo Arequipa es un lugar único y especial en el sur del Perú ubicado en el corazón de la ciudad de Arequipa. Su ubicación te ofrece una exclusividad y te brinda acceso al mejor lugar para disfrutar un día de campo en plena campiña arequipeña, con una vista privilegiada al valle del Chilina y los volcanes Chachani y el majestuoso Misti, acompañado del sonido del río Chili.
                        </p>

                        {/* Características */}
                        <div className="space-y-7">
                            {/* 1 */}
                            <div className="flex gap-4">
                                <div className="p-2 text-green-800 bg-green-700/20 rounded-md flex-none h-14 w-14 flex items-center justify-center">
                                    <Laugh size={100} color="#03543F" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Experiencia inolvidable</h3>
                                    <p className="text-gray-700 text-sm">
                                        Ya sea que busques un refugio relajante o un punto de partida para descubrir la región, en Casa Campo Arequipa encontrarás lo que necesitas. Nuestras instalaciones están preparadas para que vivas momentos inolvidables, rodeado de belleza natural.
                                    </p>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="flex gap-4">
                                <div className="p-2 text-blue-500 bg-blue-400/30 rounded-md flex-none h-14 w-14 flex items-center justify-center">
                                    <HandPlatter size={100} color="#3F83F8" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Servicio personalizado y profesional</h3>
                                    <p className="text-gray-700">
                                        Casa Campo Arequipa te brinda 2 cabañas enteramente hechas de madera por carpinteros arequipeños con acabados rústicos y naturales que se conectan perfectamente con su medio ambiente.
                                    </p>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="flex gap-4 ">
                                <div className="p-2 text-yellow-500 bg-yellow-200/50 rounded-md flex-none h-14 w-14 flex items-center justify-center">
                                    <HandCoins size={100} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Precios leales</h3>
                                    <p className="text-gray-700">
                                        En Casa Campo Arequipa, nos comprometemos a ofrecer precios justos y accesibles, con promociones especiales disponibles durante todo el año. Te invitamos a descubrir por qué somos el destino preferido para quienes buscan una escapada inolvidable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Galería de imágenes lado derecho */}
                    <div className="grid grid-cols-2 gap-4 w-full md:px-14 px-5 mt-10 md:mt-0">
                        <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
                            <img src="/cc_04.jpg" alt="Casa Campo" className="rounded-2xl object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
                            <img src="/cc_02.jpg" alt="Champán" className="rounded-2xl object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
                            <img src="/cc_01.jpg" alt="Casa Campo" className="rounded-2xl object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
                            <img src="/cc_03.jpg" alt="Casa Campo" className="rounded-2xl object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin sobre nosotros */}
        </>
    );
};

export default SobreNosotros;