import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className="relative bg-cover bg-center" style={{
        backgroundImage: "url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          {/* super-heder */}
          <div className={`lg:flex md:flex md:justify-between bg-red-800 text-white items-center lg:justify-between text-[0.625rem] md:text-xs px-4 py-1 sm:flex-none rounded-b-2xl transition-all duration-500 `}>
            <ul className="flex space-x-4 justify-center flex-wrap">
              <li className="flex items-center">
                <i className="fa-solid fa-location-dot mr-1"></i>Arequipa - Yanahuara
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-1"></i>+51 950280738

              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-1"></i><a href="mailto:arequipacasacampo@gmail.com">arequipacasacampo@gmail.com</a>
              </li>
            </ul>
          </div>
          {/* fin super-header */}

          <div className="flex h-[4.4rem] md:items-center items-end justify-between w-full">
            {/* Botón de menú para móvil y logo */}
            <div className="flex items-center gap-2 sm:gap-4 relative">
              {/* Ícono de menú en vista móvil */}
         

              {/* Logo */}
              <a href="/" className="relative z-10">
                <img
                  className="h-auto w-14 sm:w-24"
                  src="/images/logo-arequipa-remove.png"
                  alt="Logo"
                />
                {/* Gorro navideño */}
              </a>
            </div>


            {/* Menú de navegación para escritorio */}
            <div className="absolute top-12 left-0 right-0 hidden sm:flex justify-center text-sm">
              <ul className="flex divide-x opacity-0 md:opacity-100 duration-300">
                <li
                  className={`cursor-pointer px-2 rounded hover:bg-gray-200
                    }`}
                >
                  <a href="/">Inicio</a>
                </li>
                <li
                  className={`cursor-pointer px-2 rounded hover:bg-gray-200`}
                >
                  <Link onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                    Nosotros
                  </Link>
                </li>
                <li
                  className={`cursor-pointer px-2 rounded hover:bg-gray-200}`}
                >
                  <Link onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                    contactanos
                  </Link>
                </li>
                <li
                  className={`cursor-pointer px-2 rounded hover:bg-gray-200`}
                >
                  <Link to="/galeria">galeria</Link>
                </li>
              </ul>
            </div>

            {/* Icono de usuario y selector de idioma */}
            <div className="relative flex items-center justify-end w-12 sm:w-28 gap-5">

              <div className="text-2xl cursor-pointer" onClick={""}>
              </ div>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">Casa de Campo</h1>
          <p className="text-xl">¡Separa tu fecha hoy mismo!</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App