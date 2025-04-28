import { useState } from 'react';

const CottageCarrusel = () => {
  const [index] = useState(0); // Mantengo el estado por si luego quieres cambiar de producto
  const [currentSlide, setCurrentSlide] = useState(0);

  const productos = [
    {
      id: 1,
      nombre: "Cabaña Coaba",
      descripcion: "Escápate a un refugio acogedor y lleno de confort…",
      precio: 599.99,
      imagenes: [
        {
          itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
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
      descripcion: "Descubre el lugar perfecto para relajarte y reconectar con la naturaleza…",
      precio: 199.99,
      imagenes: [
        {
          itemImageSrc: 'https://images.unsplash.com/photo-1585386959984-a415522c2807',
          alt: 'Imagen de la Cabaña 2'
        }
      ]
    }
  ];

  const producto = productos[index];
  const numSlides = producto.imagenes.length;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-lg shadow-lg items-start border">
      {/* Galería dinámica */}
      <div className="w-full md:w-1/2">
        <div className="carousel w-full h-96 overflow-x-auto snap-x snap-mandatory scroll-smooth">
          {producto.imagenes.map((img, idx) => {
            const slide = idx + 1;
            return (
              <div
                id={`slide${slide}`}
                key={idx}
                className="carousel-item snap-center w-full flex-shrink-0 relative"
              >
                <img
                  src={producto.imagenes[currentSlide].itemImageSrc}
                  alt={producto.imagenes[currentSlide].alt}
                  className="w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    className="btn btn-circle"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + producto.imagenes.length) % producto.imagenes.length)}
                  >
                    ❮
                  </button>

                  <button
                    className="btn btn-circle"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % producto.imagenes.length)}
                  >
                    ❯
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contenido del producto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold">{producto.nombre}</h2>
        <p className="text-gray-600 mt-2">{producto.descripcion}</p>
        <p className="text-blue-600 font-semibold mt-4">${producto.precio}</p>
      </div>
    </div>
  );
};

export default CottageCarrusel;
