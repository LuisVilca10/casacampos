import { useEffect, useRef, useState } from 'react';

const CottageCarrusel = () => {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [galeriaHeight, setGaleriaHeight] = useState(0);
  const textoRef = useRef(null);

  const productos = [
    {
      id: 1,
      nombre: "Cabaña Coaba",
      descripcion: "Escápate a un refugio acogedor y lleno de confort ..",
      precio: 599.99,
      imagenes: [
        {
          itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
          alt: 'Descripción de la imagen 1'
        },
        {
          itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
          alt: 'Descripción de la imagen 2'
        }
      ]
    },
    {
      id: 2,
      nombre: "Cabaña Numero 2",
      descripcion: `Descubre el lugar perfecto para relajarte y reconectar con la naturaleza. Esta cabaña combina lo mejor del diseño tradicional y moderno, equipada con todos los servicios para una estadía placentera...`,
      precio: 199.99,
      imagenes: [
        {
          itemImageSrc: 'https://images.unsplash.com/photo-1585386959984-a415522c2807',
          thumbnailImageSrc: 'https://images.unsplash.com/photo-1585386959984-a415522c2807',
          alt: 'Imagen de la Cabaña 2'
        }
      ]
    }
  ];

  const producto = productos[index];

  useEffect(() => {
    if (textoRef.current) {
      setTimeout(() => {
        setGaleriaHeight(textoRef.current.offsetHeight);
      }, 100); // le damos tiempo al render para medir bien
    }
  }, [index, producto.descripcion]);

  const itemTemplate = (item) => (
    <img
      src={item.itemImageSrc}
      alt={item.alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );

  const thumbnailTemplate = (item) => (
    <img
      src={item.thumbnailImageSrc}
      alt={item.alt}
      style={{ display: 'block' }}
    />
  );
  const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 0 },
    { breakpoint: '768px', numVisible: 0 },
    { breakpoint: '560px', numVisible: 1 }
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-lg shadow-lg items-start">
      {/* Galería */}
      <div
        className="w-full md:w-1/2 flex border border-rose-900"
        style={{ height: galeriaHeight || 'auto' }}
      >
        {/* <div className="w-full card" style={{ height: galeriaHeight || 'auto' }}>
          <Galleria
            value={producto.imagenes}
            activeIndex={activeIndex}
            responsiveOptions={responsiveOptions}
            onItemChange={(e) => setActiveIndex(e.index)}
            numVisible={5}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            circular
            autoPlay
            style={{ maxWidth: '500px' }}
            transitionInterval={3000}
          />
        </div> */}
      </div>

      {/* Contenido */}
      <div
        ref={textoRef}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <h2 className="text-2xl font-bold">{producto.nombre}</h2>
        <p className="text-gray-600 mt-2">{producto.descripcion}</p>
        <p className="text-blue-600 font-semibold mt-4">${producto.precio}</p>
      </div>
    </div>
  );
};

export default CottageCarrusel;
