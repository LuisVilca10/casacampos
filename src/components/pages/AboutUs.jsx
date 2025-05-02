import Carousel from "daisyui/components/carousel";
import { Laugh } from "lucide-react";

function AboutUs() {
    const productos = [
        {
            id: 1,
            nombre: "Cabaña Coaba",
            descripcion: "La cabaña Coaba esta ubicado en el corazón de Arequipa, nuestra casa de campo ofrece mucho más que comodidad: es un espacio donde se siente la tranquilidad, la calma y la alegría de estar vivo. Con piscina privada, cuatrimotor para aventuras inolvidables y todos los servicios necesarios para una estadía perfecta, aquí cada momento invita a reconectar contigo mismo y con quienes amas. Más que un destino, es una experiencia de paz y bienestar que se guarda en el alma.",
            precio: 599.99,
            imagenes: [
                {
                    itemImageSrc: 'https://imgs.search.brave.com/XCELAc1_tCMM8obdicXkvXbDGemy-mLpYp51_-O8VSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1jYXNhLWNhbXBv/LXN1aXRlcy1jb252/ZW5jaW9uZXMtYXJl/cXVpcGEuaG90ZWxt/aXguZXMvZGF0YS9Q/aG90b3MvNzAweDUw/MC8xMTY5NC8xMTY5/NDQ4LzExNjk0NDg3/NzgvSG90ZWwtQ2Fz/YS1DYW1wby1CeS1D/YXNzYW5hLUFyZXF1/aXBhLUV4dGVyaW9y/LkpQRUc',
                    alt: 'Descripción de la imagen 1'
                },
                {
                    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
                    alt: 'Descripción de la imagen 2'
                }
            ]
        },
        {
            id: 2,
            nombre: "Cabaña Numero 2",
            descripcion: "La cabaña Coaba esta ubicado en el corazón de Arequipa, nuestra casa de campo ofrece mucho más que comodidad: es un espacio donde se siente la tranquilidad, la calma y la alegría de estar vivo. Con piscina privada, cuatrimotor para aventuras inolvidables y todos los servicios necesarios para una estadía perfecta, aquí cada momento invita a reconectar contigo mismo y con quienes amas. Más que un destino, es una experiencia de paz y bienestar que se guarda en el alma.",
            precio: 199.99,
            imagenes: [
                {
                    itemImageSrc: 'https://imgs.search.brave.com/cBSTbXbANZy9b0iI-qZJ2I0Ja35UsccrpZUz1qBgTYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvbWF4NTAw/LzUyMTA4NTE4NS5q/cGc_az02MGQ4NTZl/OWViNGNiYWVkYjZj/NjlkNjNiMmM3ODk4/ZjM0YjA1ZmYyYTlm/MTczNGIzMjQwMWYx/NzIwODcyYmIzJm89',
                    alt: 'Imagen de la Cabaña 2,1'
                },
                {
                    itemImageSrc: 'https://imgs.search.brave.com/ztxeoWnRZZjO6PHI5WSzFug8xN_ldiFVYeO2GKGy4lA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/cHJvcGVyYXRpLmNv/bS9leUppZFdOclpY/UWlPaUp3Y21RdGJH/bG1kV3hzWTI5dWJt/VmpkQzFpWVdOclpX/NWtMV0l5WWkxcGJX/Rm5aWE1pTENKclpY/a2lPaUpwYm1kbGMz/UmxjaTh3TVRrMU9E/ZGpPQzFtTnpWaExU/YzBPR0l0T0RWaE1p/MDFaRFkzTVRsbU5U/ZGhaVFV2TW1SaVpE/TXlNMlUzWXpWa1ky/RXdOakZoWWpNME5t/UXlNMlkxTWpGbFpq/Y3pPVEJqWkRsaE5U/WTVOMlkyTkdNMllt/UTVOamRtT1dJelpX/UXlaRGd6WVM1cWNH/Vm5JaXdpWW5KaGJt/UWlPaUp3Y205d1pY/SmhkR2tpTENKbFpH/bDBjeUk2ZXlKeWIz/UmhkR1VpT201MWJH/d3NJbkpsYzJsNlpT/STZleUozYVdSMGFD/STZNekl3TENKb1pX/bG5hSFFpT2pJME1D/d2labWwwSWpvaVky/OTJaWElpZlgxOQ',
                    alt: 'Imagen de la Cabaña 2,2'
                }
            ]
        }
    ];
    return (
        <>
            {/*Inicio hero*/}
            <div className="bg-center bg-cover py-20 flex flex-col justify-center text-white px-4"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
                }}>
                <div className="flex flex-col h-full w-full text-white text-start container mx-auto md:mt-12 md:mb-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 md:w-1/2">Sobre Nosotros</h1>
                    <p className="text-lg md:text-xl mb-2 md:text-start md:w-1/2 font-extralight">Descubre un refugio auténtico para descansar y disfrutar con tus seres queridos en Arequipa. En Casa Campo Arequipa te ofrecemos casas cálidas y cómodas, pensadas para que tu experiencia sea inolvidable.</p>
                </div>
            </div>
            {/*Fin hero*/}

            {/*Inicio pilares*/}
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
            {/*Fin  pilares*/}

            <div className="md:px-20 md:py-14 p-7 bg-gray-100">
                <div className="container md:px-10 mx-auto md:flex">
                    <div className="md:mx-7">
                        <h2 className="md:text-4xl font-bold flex justify-center text-center text-2xl">Casas de campo acogedoras y confortables</h2>
                    </div>
                    <div>
                       

                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;

