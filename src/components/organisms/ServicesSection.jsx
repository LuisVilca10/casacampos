import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function ServicesSection() {
    const [showServiceModal, setShowServiceModal] = useState(false);
    const handleServiceModalOpen = () => setShowServiceModal(true);
    const handleServiceModalClose = () => setShowServiceModal(false);
    const serviceTexts = [
        {
            img: "../../../src/assets/icons/vista_montana.png",
            title: "Vista al volcan",
            description: "Rodeado de naturaleza para relajarse y disfrutar.",
        },
        {
            img: "../../../src/assets/icons/piscina.png",
            title: "Piscina Temperada",
            description: "Piscina al aire libre privada - abierto las 24 horas.",
        },
        {
            img: "../../../src/assets/icons/wifi_gratis.png",
            title: "WiFi Gratuito", // Traducción dinámica
            description: "Conexión rápida y gratuita en todas las cabañas.", // Traducción dinámica
        },
        {
            img: "../../../src/assets/icons/cocina.png",
            title: "Cocina Equipada",
            description: "Los huéspedes pueden cocinar en este espacio.",
        },
        {
            img: "../../../src/assets/icons/fogata.png",
            title: "translations.fogata_title",
            description: "translations.fogata_description",
        },

        {
            img: "../../../src/assets/icons/estacionamiento.png",
            title: "translations.estacionamiento_title",
            description: "translations.estacionamiento_description",
        },
        {
            img: "../../../src/assets/icons/seguridad_cam.png",
            title: "translations.seguridad_24_7_title",
            description: "translations.seguridad_24_7_description",
        },
        {
            img: "../../../src/assets/icons/tv.png",
            title: "translations.television_title",
            description: "translations.television_description",
        },
        {
            img: "../../../src/assets/icons/grill.png",
            title: "translations.parrilla_title",
            description: "translations.parrilla_description",
        },
        {
            img: "../../../src/assets/icons/futbol.png",
            title: "translations.futbol_title",
            description: "translations.futbol_description",
        },
        {
            img: "../../../src/assets/icons/sapo.png",
            title: "translations.sapo_title",
            description: "translations.sapo_description",
        },

    ];
    return (
        <>
            <main className="w-full flex flex-col gap-3 items-center justify-center">
                <h2 className="md:text-4xl text-2xl font-bold capitalize">
                    Nuestros Servicios
                </h2>

                <div className="w-full h-auto grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-7 sm:gap-10 gap-7 px-8 sm:px-10 mt-4">
                    {serviceTexts.slice(0, 4).map((service, index) => (
                        <div className="relative group w-full flex flex-col items-center justify-center gap-3 p-5 cursor-pointer transition duration-500 hover:shadow-xl rounded-xl border hover:border-red-700 overflow-hidden">
                            <img className="w-20 h-20 relative z-10 object-cover" alt="" src={service.img} />
                            <div className="w-full flex flex-col items-center gap-2">
                                <h4 className="text-base rounded font-semibold">
                                    {service.title}
                                </h4>
                                <p className="text-sm font-light text-center">
                                    {service.description}
                                </p>

                                <div className="absolute top-2 px-1 py-1 bg-red-800 rounded-full group-hover:px-16 duration-500"></div>
                            </div>
                        </div>
                    ))}


                </div>

                {/* Botón para ver más servicios */}
                <button
                    onClick={handleServiceModalOpen}
                    className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Ver más servicios
                </button>


            </main>

            <Dialog
                header="Servicios adicionales"
                visible={showServiceModal}
                onHide={handleServiceModalClose}
                style={{ width: '40vw' }}
                modal
                className="p-fluid"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {serviceTexts.slice(4).map((service, index) => (
                        <div className="relative group w-full flex flex-col items-center justify-center gap-3 p-5 cursor-pointer transition duration-500 hover:shadow-xl rounded-xl border hover:border-red-700 overflow-hidden">
                            <img className="w-20 h-20 relative z-10 object-cover" alt="" src={service.img} />
                            <div className="w-full flex flex-col items-center gap-2">
                                <h4 className="text-base rounded font-semibold">
                                    {service.title}
                                </h4>
                                <p className="text-sm font-light text-center">
                                    {service.description}
                                </p>

                                <div className="absolute top-2 px-1 py-1 bg-red-800 rounded-full group-hover:px-16 duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 w-1/5 mx-auto">
                    <Button
                        label="Cerrar"
                        className="bg-red-700 text-white px-6 py-2 rounded-md border-green-600"
                        onClick={handleServiceModalClose}
                    />
                </div>
            </Dialog>

        </>
    );
}

export default ServicesSection;