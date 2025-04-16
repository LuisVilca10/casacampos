import { useState } from 'react';
import NavBar from '../molecules/Navbar';
import SuperHero from '../molecules/SuperHero';
import HeroSlider from '../organisms/HeroSlider';

function App() {

  return (
    <>
      <div class="hidden lg:block z-0 shadow-md relative bg-white dark:bg-gray-900 dark:text-gray-300">
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
    </>
  )
}

export default App