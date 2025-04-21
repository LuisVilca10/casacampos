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

      <div className='container mx-auto mt-8'>
        <h1 className='md:text-4xl text-2xl font-bold capitalize flex justify-center mb-6'>Las cabañas que te ofrecemos</h1>
        <CottageCarrusel />
      </div>

      {/* servicios */}
      <section className="container mx-auto w-full h-auto flex flex-col items-center justify-center  py-12">
        <ServicesSection />
      </section>
      {/* fin servicios */}
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