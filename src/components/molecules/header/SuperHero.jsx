function SuperHero() {

    return (
        <>
            <div className="w-1/4 mx-auto lg:flex md:flex md:justify-between bg-red-700 text-white items-center lg:justify-center text-[0.625rem] md:text-xs px-4 py-1 sm:flex-none rounded-b-2xl transition-all duration-500">
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
        </>
    );
}

export default SuperHero;

{/* Menú de navegación para escritorio */ }
{/* <div className="absolute top-12 left-0 right-0 hidden sm:flex justify-center text-sm">
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
                    Contactanos
                  </Link>
                </li>
                <li
                  className={`cursor-pointer px-2 rounded hover:bg-gray-200`}
                >
                  <Link to="/galeria">galeria</Link>
                </li>
              </ul>
            </div> */}
{/* Fin Menú de navegación para escritorio */ }