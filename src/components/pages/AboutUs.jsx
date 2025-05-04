import { Flag, Goal, MountainSnow, RockingChair, Trees, Users } from "lucide-react";
import Carousel from "../molecules/carousel/Carousel";
import ServicesSection from "../organisms/ServicesSection";
import CottageRating from "../atoms/CottageRating";



function AboutUs() {
    const imagenesCarrusel = [
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            alt: 'Imagen 2'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            alt: 'Imagen 2'
        }
    ];

    const ClientsRecomend = [
        {
            name: "Tania Andrew",
            country: "Perú",
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
            description: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!!",
            rating: 5.0
        },
        {
            name: "Carlos García",
            country: "México",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            description: "Great experience! The platform helped me speed up my workflow and the components were easy to customize.",
            rating: 4.5
        },
        {
            name: "Julia Fernandes",
            country: "Brasil",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            description: "Very helpful templates and a friendly team behind the scenes. Highly recommended!",
            rating: 4.8
        },
        {
            name: "Diego Sánchez",
            country: "Argentina",
            img: "https://randomuser.me/api/portraits/men/76.jpg",
            description: "The UI/UX design is top-notch. I integrated everything seamlessly into my Laravel project.",
            rating: 5.0
        },
        {
            name: "Andrea Paredes",
            country: "Chile",
            img: "https://randomuser.me/api/portraits/women/30.jpg",
            description: "It saved me days of development. The documentation is clear and the code quality is impressive.",
            rating: 4.7
        },
        {
            name: "Luis Romero",
            country: "Colombia",
            img: "https://randomuser.me/api/portraits/men/50.jpg",
            description: "From design to deployment, it’s a smooth ride. Amazing job by the team!",
            rating: 4.9
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

            {/*Inicio Nuestra Historia*/}
            <div className="md:px-20 md:py-14 p-7 bg-gray-100">
                <div className="container md:px-10 mx-auto md:flex">
                    <Carousel images={imagenesCarrusel} />
                    <div className="md:mx-7 w-1/2">
                        <h2 className="md:text-4xl font-bold flex justify-start text-2xl">Nuestra Historia</h2>
                        <div className="flex flex-wrap justify mt-4 gap-x-2">
                            <div className="text-xl text-green-600">
                                Un refugio de tranquilidad y aventura.
                            </div>
                            <p className="mt-3 text-lg pr-8">
                                Casa Campoi Arequipa nació hace tres años con el sueño de ofrecer un espacio donde la tranquilidad,
                                la naturaleza y la aventura se encuentren en perfecta armonía. Ubicadas en la encantadora región de Arequipa,
                                nuestras cabañas rústicas están pensadas para brindar una experiencia acogedora,
                                romántica y auténticamente relajante.
                            </p>
                        </div>
                        <div className="flex justify-between mt-5 ">
                            <div className="flex gap-x-11">
                                <div className="flex flex-col text-center items-center">
                                    <Trees size={"50px"} color="#235633" />
                                    <p className="mt-1">Naturaleza</p>
                                </div>
                                <div className="flex flex-col text-center items-center">
                                    <RockingChair size={"50px"} color="#235633" />
                                    <p className="mt-1">Descanso</p>
                                </div>
                                <div className="flex flex-col text-center items-center">
                                    <MountainSnow size={"50px"} color="#235633" />
                                    <p className="mt-1">Aventura</p>
                                </div>
                                <div className="flex flex-col text-center items-center">
                                    <Users size={"50px"} color="#235633" />
                                    <p className="mt-1">Familia</p>
                                </div>
                            </div>

                            <div className="flex justify-start mt-5">
                                <button className="btn text-red-700 border-red-400 hover:text-white hover:bg-red-700 w-auto">
                                    Reservar Ya!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*fin Nuestra Historia*/}

            {/* Inico Mision y Vision */}
            <div className="md:px-20 md:py-6 p-7">
                <div className="container mx-auto">
                    <section className="md:px-16">
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Misión */}
                            <div className="flex space-x-4 p-9 items-center">
                                <div className="text-primary border-r p-4">
                                    <div className="rounded-md h-44 w-56 text-center flex items-center justify-center">
                                        <img src="../../src/assets/aboutus/Mision.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Misión</h3>
                                    <p className="text-gray-600 text-lg">
                                        Queremos ser su destino elegido para desconectarse del ajetreo y reconectar con lo esencial.
                                    </p>
                                </div>
                            </div>

                            {/* Visión */}
                            <div className="flex space-x-4 p-9 items-center">
                                <div className="text-primary border-r p-4">
                                    <div className="rounded-md h-44 w-56 text-center flex items-center justify-center">
                                        <img src="../../src/assets/aboutus/Vision.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Misión</h3>
                                    <p className="text-gray-600 text-lg">
                                        Soñamos con expandir nuestras opciones de alojamiento y seguir creando experiencias únicas.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex items-start space-x-4">
                                <div className="text-primary">
                                    <div className="rounded-md h-44 w-56 text-center flex items-center justify-center">
                                        <img src="../../src/assets/aboutus/Vision.png" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Visión</h3>
                                    <p className="text-gray-600">
                                        Soñamos con expandir nuestras opciones de alojamiento y seguir creando experiencias únicas.
                                    </p>
                                </div>
                            </div> */}

                        </div>
                    </section>
                </div>
            </div>


            <section className='py-4 mt-3 mb-7'>
                <main className="w-full flex flex-col gap-3 items-center justify-center mb-10">
                    <h2 className="md:text-4xl text-2xl font-bold capitalize">
                        Nuestros Clientes nos Respaldan
                    </h2>
                </main>
                <div className="container">
                    <div className="carousel-wrapper overflow-hidden w-full">
                        <div className='flex whitespace-normal animate-scroll'>
                            {/* desde aqui */}
                            {[...ClientsRecomend, ...ClientsRecomend, ...ClientsRecomend].map((blog, index) => (
                                <div class=" h-full w-[400px] m-2 flex-shrink-0 cursor-pointer border p-3 rounded-2xl">
                                    <div class="flex items-center gap-x-9 text-slate-800 justify-between">
                                        <div className="flex gap-x-4">
                                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                                alt="Tania Andrew" class="inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                                            <div class="items-center justify-between">
                                                <h5 class="text-xl font-semibold text-slate-800">
                                                    Tania Andrew
                                                </h5>
                                                <p class="text-xs uppercase font-bold text-slate-500 mt-0.5">
                                                    Perú
                                                </p>
                                            </div>
                                        </div>
                                        <CottageRating details={ClientsRecomend.details} />
                                    </div>
                                    <div className="border-b mt-2"></div>
                                    <div class="mt-2">
                                        <p className="text-base text-slate-600 font-light leading-normal break-words text-justify">
                                            &quot;I found solution to all my design needs from Creative Tim. I use
                                            them as a freelancer in my hobby projects for fun! And its really
                                            affordable, very humble guys !!!&quot;
                                        </p>
                                    </div>
                                </div>
                            )
                            )}


                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutUs;

