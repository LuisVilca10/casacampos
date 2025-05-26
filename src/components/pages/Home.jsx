import { useEffect, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import CallToActionSection from "../organisms/CallToActionSection";
import CottageCarrusel from "../organisms/CottageCarrusel";
import HeroSlider from "../organisms/HeroSlider";
import ServicesSection from "../organisms/ServicesSection";
import SobreNosotros from "../organisms/SobreNosotros";
import axios from "axios";
import { API_URL } from "../../constants/env";
import { UserContext } from "../../context/UserContext";


function Home() {
    const { data, loading, error } = useFetch("home");
    const { userData, setUserData } = useContext(UserContext)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (token) {
            axios.post(`${API_URL}auth/set-cookie`, { token }, { withCredentials: true })
                .then(res => {
                    setUserData(res.data.user);
                    window.history.replaceState({}, document.title, window.location.pathname);
                })
                .catch(err => {
                    console.error("Error al establecer cookie:", err);
                });
        }

    }, []);

    return (
        <>

            {/* hero */}
            <HeroSlider />
            {/* Fin hero */}
            {userData && (<div className="mx-auto container pt-7 px-7">
                <div className="flex justify-between ">
                    <h1 className='md:text-3xl text-2xl font-bold capitalize flex justify-end mb-10'>Tus ultimas reservas:</h1>
                    <button
                        type="button"
                        // onClick={handleSearch}
                        // disabled={isSearching}
                        // className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${isSearching ? 'opacity-50 cursor-not-allowed' : ''}`}
                        className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 px-4 my-5 rounded-lg`}
                    >
                        {/* {isSearching ? 'Buscando...' : 'Buscar'} */}
                        Ver +
                    </button>
                </div>
                <div className="flex justify-end ">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}


            {/* Inicio mis cabañas */}
            <div className='container mx-auto my-9'>
                <h1 className='md:text-4xl text-2xl font-bold capitalize flex justify-center mb-10'>Las cabañas que te ofrecemos</h1>
                <CottageCarrusel data={data} loading={loading} error={error} />
            </div>
            {/* Fin mis cabañas */}

            {/* servicios */}
            <section className='py-4 mt-3 '>
                <main className="w-full flex flex-col gap-3 items-center justify-center mb-7">
                    <h2 className="md:text-4xl text-2xl font-bold capitalize">
                        Nuestros Servicios
                    </h2>
                </main>
                <ServicesSection />
            </section>
            {/* fin servicios */}


            {/* contac us */}
            <CallToActionSection />
            {/* fin contact us */}
            {/* about us */}
            <SobreNosotros />
            {/* fin about us */}

        </>
    );
}

export default Home;

