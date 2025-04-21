import HeroSlider from '../organisms/HeroSlider';
import SuperHero from '../molecules/header/SuperHero';
import NavBar from '../molecules/header/Navbar';
import ServicesSection from '../organisms/ServicesSection';
import CallToActionSection from '../organisms/CallToActionSection';
import { HandCoins, HandPlatter, Laugh } from 'lucide-react';

function App() {
  const images = [
    { src: "/images/cc_04.jpg", alt: "Lago con montañas y cabaña" },
    {
      src: "/images/cc_02.jpg",
      alt: "Persona frente a montaña nevada",
    },
    { src: "/images/cc_01.jpg", alt: "Grupo alrededor de una fogata" },
    {
      src: "/images/cc_03.jpg",
      alt: "Persona con chaqueta amarilla en bosque",
    },
  ];
  return (
    <>
      <div className="border-b-4 rounded-b-2xl border-red-700 fixed hidden lg:block z-0 shadow-md bg-white w-full">
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

      <section className="container mx-auto w-full h-auto flex flex-col items-center justify-center  py-12">
        <ServicesSection />
      </section>

      <CallToActionSection />

      {/* sobre nosotros */}
      <div className='bg-gray-100 md:py-20 py-10'>
        <div className="container mx-auto md:flex lg:flex-row items-center justify-between gap-x-10 px-10  md:pl-28">
          {/* Texto lado izquierdo */}
          <div className="w-full">
            <h4 className="text-yellow-600 font-extralight">Sobre Nosotros</h4>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Explora Casa Campo Arequipa</h2>
            <p className="text-gray-700 ml-1 mb-7">
              Casa Campo Arequipa es un lugar único y especial en el sur del Perú ubicado en el corazón de la ciudad de Arequipa. Su ubicación te ofrece una exclusividad y te brinda acceso al mejor lugar para disfrutar un día de campo en plena campiña arequipeña, con una vista privilegiada al valle del Chilina y los volcanes Chachani y el majestuoso Misti, acompañado del sonido del río Chili.
            </p>

            {/* Características */}
            <div className="space-y-7">
              {/* 1 */}
              <div className="flex gap-4">
                <div className="p-2 text-green-800 bg-green-700/20 rounded-md flex-none h-14 w-14 flex items-center justify-center">
                  <Laugh size={100} color="#03543F" />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900">Experiencia inolvidable</h3>
                  <p className="text-gray-700 text-sm">
                    Ya sea que busques un refugio relajante o un punto de partida para descubrir la región, en Casa Campo Arequipa encontrarás lo que necesitas. Nuestras instalaciones están preparadas para que vivas momentos inolvidables, rodeado de belleza natural.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-4">
                <div className="p-2 text-blue-500 bg-blue-400/30 rounded-md flex-none h-14 w-14 flex items-center justify-center">
                  <HandPlatter size={100} color="#3F83F8" />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900">Servicio personalizado y profesional</h3>
                  <p className="text-gray-700">
                    Casa Campo Arequipa te brinda 2 cabañas enteramente hechas de madera por carpinteros arequipeños con acabados rústicos y naturales que se conectan perfectamente con su medio ambiente.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-4 ">
                <div className="p-2 text-yellow-500 bg-yellow-200/50 rounded-md flex-none h-14 w-14 flex items-center justify-center">
                  <HandCoins size={100} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Precios leales</h3>
                  <p className="text-gray-700">
                    En Casa Campo Arequipa, nos comprometemos a ofrecer precios justos y accesibles, con promociones especiales disponibles durante todo el año. Te invitamos a descubrir por qué somos el destino preferido para quienes buscan una escapada inolvidable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Galería de imágenes lado derecho */}
          <div className="grid grid-cols-2 gap-4 w-full md:px-14 px-5 mt-10 md:mt-0">
            <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
              <img src="../../src/assets/cc_04.jpg" alt="Casa Campo" className="rounded-2xl object-cover w-full h-full" />
            </div>
            <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
              <img src="../../src/assets/cc_02.jpg" alt="Champán" className="rounded-2xl object-cover w-full h-full" />
            </div>
            <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
              <img src="../../src/assets/cc_01.jpg" alt="Casa Campo" className="rounded-2xl object-cover w-full h-full" />
            </div>
            <div className='overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square'>
              <img src="../../src/assets/cc_03.jpg" alt="Casa Campo" className="rounded-2xl object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Fin sobre nosotros */}


      <footer className="text-white py-10 bg-cover bg-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../src/assets/fondo-01.jpeg')`
        }}>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start md:items-center gap-5 lg:items-baseline lg:gap-10 space-y-8 lg:space-y-0 px-4">
          {/* Logo y descripción */}
          <div className="flex-1 lg:min-w-64">
            <div className="flex gap-2 items-center pb-4">
              <img
                className="h-auto w-14 sm:w-24"
                src="../../src/assets/logo.png"
                alt="--"
              />
              <h2 className="text-2xl font-bold">Casa Campo Arequipa</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ubicado en el corazón de Arequipa, Casa Campo Arequipa te brinda
              una experiencia única donde la naturaleza y el descanso se unen.
              Disfruta de un entorno rodeado de majestuosos árboles y vegetación
              exuberante que te invita a desconectar de la rutina diaria.
            </p>
          </div>

          <div
            style={{ marginTop: "0px" }}
            className="flex flex-col md:flex-row items-start gap-5 md:items-baseline lg:gap-10 m-auto mt-0"
          >
            <div className="responsive-link-polity">
              {/* Enlaces rápidos */}
              <div className="flex-1 grid sm:justify-center max-w-[162px]">
                <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Sobre nosotros
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              {/* Políticas y Condiciones */}
              <div className="flex-1 grid justify-center">
                <h3 className="text-xl font-semibold mb-4">
                  Políticas y Condiciones
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Política de Datos Personales
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Aviso de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Términos y Condiciones de Uso
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comunícate con nosotros y Redes sociales */}
            <div className="flex-1 grid justify-center gap-5">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Comunícate con nosotros
                </h3>
                <div className="flex flex-col space-y-4 p-4 rounded-lg">
                  {/* Asistente Virtual */}
                  <div className="flex items-start space-x-2 text-gray-400">
                    <i className="fas fa-comment text-gray-400 text-xl"></i>
                    <div>
                      <p className="font-semibold ">Asistente virtual</p>
                      <p className="text-sm">Te atenderá las 24 hrs</p>
                    </div>
                  </div>

                  {/* Escribir */}
                  <div className="flex items-start space-x-2 text-gray-400">
                    <i className="fas fa-envelope text-gray-400 text-xl"></i>
                    <div>
                      <p className="font-semibold">Escríbenos</p>
                      <p className="text-sm">
                        Estamos para ayudarte{" "}
                        <a
                          href="mailto:servicioalcliente@spsa.pe"
                          className="text-white hover:underline"
                        >
                          arequipacasacampo@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Llamar */}
                  <div className="flex items-start space-x-2 text-gray-400">
                    <i className="fas fa-phone-alt text-gray-400 text-xl"></i>
                    <div>
                      <p className="font-semibold">Llámanos</p>
                      <p className="text-sm">
                        Centro de servicio al cliente en Arequipa:{" "}
                        <a
                          href="tel:+516258000"
                          className="text-white hover:underline"
                        >
                          (+51) 950 280 738
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Síguenos en:</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61564315336410&locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {/* <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                  </a> */}
                  <a
                    href="https://www.instagram.com/Casacampoaqp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@casacampo.arequipa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Casa Campo Arequipa. Todos los
            derechos reservados.
          </p>
          <p>Desarrollado por Grupo Mani Code</p>
        </div>
      </footer>

    </>
  )
}

export default App

