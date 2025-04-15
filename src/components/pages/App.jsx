import logo from '../../assets/logo.png';

function App() {

  return (
    <>
      <div class="hidden lg:block z-0 shadow-md relative bg-white dark:bg-gray-900 dark:text-gray-300">
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
        <div class="container flex justify-between items-center mx-auto py-5">
          <div class="flex items-center gap-x-6">
            <div className='hidden sm:block cursor-pointer pt-1 z-10'>
              <img className="h-auto sm:w-24" src={logo} alt="casacampo" />
              <h1 className="text-base font-semibold  flex flex-col items-center text-center">
                Casa Campo
                <span className="font-normal text-sm">Arequipa</span>
              </h1>

              <div className="text-xs sm:text-lg font-semibold -mt-1 text-green-700">

              </div>
            </div>

            <div class="flex items-center">
              <a href="" class="mr-2">Products</a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div class="flex items-center">
              <a href="" class="mr-2">Solutions</a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <a href="">Marketplace</a>

            <div class="flex items-center">
              <a href="" class="mr-2">Community</a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <a href="">Pricing</a>
          </div>

          <div>
            <a href="" class="btn-white">Log In</a>
            <a href="" class="btn-blue">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className="relative bg-cover bg-center" style={{
        backgroundImage: "url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
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