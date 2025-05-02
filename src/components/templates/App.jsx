import { Outlet } from "react-router-dom"
import NavBar from "../molecules/header/Navbar"
import SuperHero from "../molecules/header/SuperHero"
import Footer from "../molecules/footer/Footer";

function App() {
  return (
    <>
      <div>
        <div className="border-b-4 rounded-b-2xl border-red-700 fixed hidden lg:block z-50 shadow-md bg-white w-full">
          {/* super-heder */}
          <SuperHero />
          {/* fin super-heder */}

          {/* Nav */}
          <NavBar />
          {/*Fin Nav */}

        </div>
        <div className="contar mx-auto pt-20 md:pt-16 lg:pt-20">
          <Outlet />
        </div>
        {/* footer */}
        <Footer />
        {/* fin footer */}
      </div>
    </>
  );
}

export default App;