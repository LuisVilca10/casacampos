import HeroSlider from '../organisms/HeroSlider';
import SuperHero from '../molecules/header/SuperHero';
import NavBar from '../molecules/header/Navbar';
import ServicesSection from '../organisms/ServicesSection';
import CallToActionSection from '../organisms/CallToActionSection';

function App() {

  return (
    <>
      <div className="fixed hidden lg:block z-0 shadow-md bg-white w-full">
        {/* super-heder */}
        <SuperHero />
        {/* fin super-heder */}

        {/* Nav */}
        <NavBar />
        {/*Fin Nav */}

      </div>
      {/* hero */}
      <HeroSlider />


      <section className="container mx-auto w-full h-auto flex flex-col items-center justify-center  py-12 px-4">
        <ServicesSection />
      </section>

      <CallToActionSection />

      {/* Fin hero */}
    </>
  )
}

export default App

