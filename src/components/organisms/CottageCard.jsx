
import CottageRating from '../atoms/CottageRating';
import Carousel from '../molecules/carousel/Carousel';
import ServiceList from '../molecules/carousel/ServicesCarousel';

const CottageCard = ({ producto, index }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 rounded-lg shadow-lg items-start border">
            {index % 2 === 0 ? (
                <>
                    <Carousel images={producto.imagenes} />
                    <div className="w-full md:w-1/2 flex flex-col justify-center pr-3 pl-2">
                        <CottageRating details={producto.details} />
                        <h2 className="text-2xl font-bold mt-1">{producto.nombre}</h2>
                        <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                        <h3 className="font-bold text-sm mt-2">Servicios</h3>
                        <ServiceList />
                        <div className="flex justify-start mt-5">
                            <button className="btn text-red-700 border-red-400 hover:text-white hover:bg-red-700 w-auto">
                                Reservar
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full md:w-1/2 flex flex-col justify-center pr-3 pl-2">
                        <CottageRating details={producto.details} />
                        <h2 className="text-2xl font-bold mt-1">{producto.nombre}</h2>
                        <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                        <h3 className="font-bold text-sm mt-2">Servicios</h3>
                        <ServiceList />
                        <div className="flex justify-start mt-5">
                            <button className="btn text-red-700 border-red-400 hover:text-white hover:bg-red-700 w-auto">
                                Reservar
                            </button>
                        </div>
                    </div>
                    <Carousel images={producto.imagenes} />
                </>
            )}
        </div>
    );
};

export default CottageCard;