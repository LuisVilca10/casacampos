function ServicesSection() {
    const serviceTexts = [
        {
            img: "/icons/vista_montana.png",
            title: "Vista al volcan",
            description: "Rodeado de naturaleza para relajarse y disfrutar.",
        },
        {
            img: "/icons/piscina.png",
            title: "Piscina Temperada",
            description: "Piscina al aire libre privada - abierto las 24 horas.",
        },
        {
            img: "/icons/wifi_gratis.png",
            title: "WiFi Gratuito", // Traducción dinámica
            description: "Conexión rápida y gratuita en todas las cabañas.", // Traducción dinámica
        },
        {
            img: "/icons/cocina.png",
            title: "Cocina Equipada",
            description: "Los huéspedes pueden cocinar en este espacio.",
        },
        {
            img: "/icons/fogata.png",
            title: "translations.fogata_title",
            description: "translations.fogata_description",
        },

        {
            img: "/icons/estacionamiento.png",
            title: "translations.estacionamiento_title",
            description: "translations.estacionamiento_description",
        },
        {
            img: "/icons/seguridad_cam.png",
            title: "translations.seguridad_24_7_title",
            description: "translations.seguridad_24_7_description",
        },
        {
            img: "/icons/tv.png",
            title: "translations.television_title",
            description: "translations.television_description",
        },
        {
            img: "/icons/grill.png",
            title: "translations.parrilla_title",
            description: "translations.parrilla_description",
        },
        {
            img: "/icons/futbol.png",
            title: "translations.futbol_title",
            description: "translations.futbol_description",
        },
        {
            img: "/icons/sapo.png",
            title: "translations.sapo_title",
            description: "translations.sapo_description",
        },

    ];
    return (

        <div className="container">
            <div className="carousel-wrapper overflow-hidden w-full">
                <div className='flex whitespace-nowrap animate-scroll'>
                    {[...serviceTexts, ...serviceTexts, ...serviceTexts].map((blog, index) => (
                        <div key={index} className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'>
                            <div className='group w-full flex flex-col items-center justify-center gap-3 p-5 cursor-pointer transition duration-500 hover:shadow-xl rounded-xl border hover:border-red-700 overflow-hidden mb-4 relative h-[250px]'>
                                <img className="w-20 h-20 object-cover" src={blog.img} alt={blog.title} />
                                <div className="w-full flex flex-col items-center gap-2">
                                    <h4 className="text-base rounded font-semibold">
                                        {blog.title}
                                    </h4>
                                    <p className="text-sm font-light text-center mx-5">
                                        {blog.description}
                                    </p>

                                    <div className="top-64 px-1 py-1 bg-red-800 rounded-full group-hover:px-16 duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default ServicesSection;