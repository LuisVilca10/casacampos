import { useState } from 'react';
import CottageRating from '../atoms/CottageRating';
import { CircleParking, UsersRound, Volleyball, WavesLadder, Wifi } from 'lucide-react';

const CottageCarrusel = () => {
  const productos = [
    {
      id: 1,
      nombre: "Cabaña Coaba",
      descripcion: "La cabaña Coaba esta ubicado en el corazón de Arequipa, nuestra casa de campo ofrece mucho más que comodidad: es un espacio donde se siente la tranquilidad, la calma y la alegría de estar vivo. Con piscina privada, cuatrimotor para aventuras inolvidables y todos los servicios necesarios para una estadía perfecta, aquí cada momento invita a reconectar contigo mismo y con quienes amas. Más que un destino, es una experiencia de paz y bienestar que se guarda en el alma.",
      precio: 599.99,
      imagenes: [
        {
          itemImageSrc: 'https://imgs.search.brave.com/XCELAc1_tCMM8obdicXkvXbDGemy-mLpYp51_-O8VSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1jYXNhLWNhbXBv/LXN1aXRlcy1jb252/ZW5jaW9uZXMtYXJl/cXVpcGEuaG90ZWxt/aXguZXMvZGF0YS9Q/aG90b3MvNzAweDUw/MC8xMTY5NC8xMTY5/NDQ4LzExNjk0NDg3/NzgvSG90ZWwtQ2Fz/YS1DYW1wby1CeS1D/YXNzYW5hLUFyZXF1/aXBhLUV4dGVyaW9y/LkpQRUc',
          alt: 'Descripción de la imagen 1'
        },
        {
          itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
          alt: 'Descripción de la imagen 2'
        }
      ]
    },
    {
      id: 2,
      nombre: "Cabaña Numero 2",
      descripcion: "La cabaña Coaba esta ubicado en el corazón de Arequipa, nuestra casa de campo ofrece mucho más que comodidad: es un espacio donde se siente la tranquilidad, la calma y la alegría de estar vivo. Con piscina privada, cuatrimotor para aventuras inolvidables y todos los servicios necesarios para una estadía perfecta, aquí cada momento invita a reconectar contigo mismo y con quienes amas. Más que un destino, es una experiencia de paz y bienestar que se guarda en el alma.",
      precio: 199.99,
      imagenes: [
        {
          itemImageSrc: 'https://imgs.search.brave.com/cBSTbXbANZy9b0iI-qZJ2I0Ja35UsccrpZUz1qBgTYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvbWF4NTAw/LzUyMTA4NTE4NS5q/cGc_az02MGQ4NTZl/OWViNGNiYWVkYjZj/NjlkNjNiMmM3ODk4/ZjM0YjA1ZmYyYTlm/MTczNGIzMjQwMWYx/NzIwODcyYmIzJm89',
          alt: 'Imagen de la Cabaña 2,1'
        },
        {
          itemImageSrc: 'https://imgs.search.brave.com/ztxeoWnRZZjO6PHI5WSzFug8xN_ldiFVYeO2GKGy4lA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/cHJvcGVyYXRpLmNv/bS9leUppZFdOclpY/UWlPaUp3Y21RdGJH/bG1kV3hzWTI5dWJt/VmpkQzFpWVdOclpX/NWtMV0l5WWkxcGJX/Rm5aWE1pTENKclpY/a2lPaUpwYm1kbGMz/UmxjaTh3TVRrMU9E/ZGpPQzFtTnpWaExU/YzBPR0l0T0RWaE1p/MDFaRFkzTVRsbU5U/ZGhaVFV2TW1SaVpE/TXlNMlUzWXpWa1ky/RXdOakZoWWpNME5t/UXlNMlkxTWpGbFpq/Y3pPVEJqWkRsaE5U/WTVOMlkyTkdNMllt/UTVOamRtT1dJelpX/UXlaRGd6WVM1cWNH/Vm5JaXdpWW5KaGJt/UWlPaUp3Y205d1pY/SmhkR2tpTENKbFpH/bDBjeUk2ZXlKeWIz/UmhkR1VpT201MWJH/d3NJbkpsYzJsNlpT/STZleUozYVdSMGFD/STZNekl3TENKb1pX/bG5hSFFpT2pJME1D/d2labWwwSWpvaVky/OTJaWElpZlgxOQ',
          alt: 'Imagen de la Cabaña 2,2'
        }
      ]
    }
  ];



  return (
    <div className="flex flex-col gap-8">
      {productos.map((producto, index) => (
        <CabañaCard key={producto.id} producto={producto} index={index} />
      ))}
    </div>
  );
};

const CabañaCard = ({ producto, index }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Galeria = (
    <div className="w-full md:w-1/2">
      <div className="carousel w-full h-96 overflow-x-auto snap-x snap-mandatory scroll-smooth">
        <div className="carousel-item snap-center w-full flex-shrink-0 relative">
          <img
            src={producto.imagenes[currentSlide].itemImageSrc}
            alt={producto.imagenes[currentSlide].alt}
            className="w-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              className="btn btn-circle"
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + producto.imagenes.length) % producto.imagenes.length)
              }
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % producto.imagenes.length)
              }
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Contenido = (
    <div className="w-full md:w-1/2 flex flex-col justify-center pr-3 pl-2">
      <CottageRating details={producto.details} />
      <h2 className="text-2xl font-bold mt-1">{producto.nombre}</h2>
      <p className="text-gray-600 mt-2">{producto.descripcion}</p>
      <h3 className='font-bold text-sm mt-2'>Servicios</h3>
      <div className="flex flex-wrap justify-start mt-3 gap-y-4">
        <div className="w-1/3 flex gap-x-2 text-sm">
          <Wifi size={"20px"} /> WiFi gratis
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
          <CircleParking size={"20px"} /> Parking gratis
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
          <UsersRound size={"20px"} /> Habitaciones familiares
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
          <WavesLadder size={"20px"} /> Piscina Temperada
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
          <Volleyball size={"20px"} /> Juegos con Pelota
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <button className="btn text-red-700 border-red-400 hover:text-white hover:bg-red-700 w-auto">
          Reservar
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-lg shadow-lg items-start border">
      {index % 2 === 0 ? (
        <>
          {Galeria}
          {Contenido}
        </>
      ) : (
        <>
          {Contenido}
          {Galeria}
        </>
      )}
    </div>
  );
};

export default CottageCarrusel;
