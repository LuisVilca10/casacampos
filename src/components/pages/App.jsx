import HeroSlider from '../organisms/HeroSlider';
import SuperHero from '../molecules/header/SuperHero';
import NavBar from '../molecules/header/Navbar';
import ServicesSection from '../organisms/ServicesSection';
import CallToActionSection from '../organisms/CallToActionSection';

import SobreNosotros from '../organisms/SobreNosotros';
import Footer from '../molecules/footer/Footer';
import CottageCarrusel from '../organisms/CottageCarrusel';

function App() {


  return (
    <>
      <div className="border-b-4 rounded-b-2xl border-red-700 fixed hidden lg:block z-50 shadow-md bg-white w-full">
        {/* super-heder */}
        <SuperHero />
        {/* fin super-heder */}

        {/* Nav */}
        <NavBar />
        {/*Fin Nav */}

      </div>
      {/* hero */}
      <HeroSlider />
      {/* Fin hero */}

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

      <div className='container mx-auto mt-2 pb-20'>
        <h1 className='md:text-4xl text-2xl font-bold capitalize flex justify-center mb-8'>Las cabañas que te ofrecemos</h1>
        <CottageCarrusel />
      </div>

      {/* contac us */}
      <CallToActionSection />
      {/* fin contact us */}
      {/* about us */}
      <SobreNosotros />
      {/* fin about us */}
      {/* footer */}
      <Footer />
      {/* fin footer */}
    </>
  )
}

export default App