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
    const { setUserData } = useContext(UserContext)

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
                    console.error("❌ Error al establecer cookie:", err);
                });
        }

    }, []);
    return (
        <>
            {/* hero */}
            <HeroSlider />
            {/* Fin hero */}
            <div className='container mx-auto my-9'>
                <h1 className='md:text-4xl text-2xl font-bold capitalize flex justify-center mb-10'>Las cabañas que te ofrecemos</h1>
                <CottageCarrusel data={data} loading={loading} error={error} />
            </div>

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

