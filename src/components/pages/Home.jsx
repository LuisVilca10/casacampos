import CallToActionSection from "../organisms/CallToActionSection";
import CottageCarrusel from "../organisms/CottageCarrusel";
import HeroSlider from "../organisms/HeroSlider";
import ServicesSection from "../organisms/ServicesSection";
import SobreNosotros from "../organisms/SobreNosotros";

function Home() {

    return (
        <>
            {/* hero */}
            <HeroSlider />
            {/* Fin hero */}
            <div className='container mx-auto my-9'>
                <h1 className='md:text-4xl text-2xl font-bold capitalize flex justify-center mb-10'>Las cabañas que te ofrecemos</h1>
                <CottageCarrusel />
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

