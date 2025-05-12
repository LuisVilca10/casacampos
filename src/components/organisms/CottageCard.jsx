
import CottageRating from '../atoms/CottageRating';
import Carousel from '../molecules/carousel/Carousel';
import ServiceList from '../molecules/carousel/ServicesCarousel';

const CottageCard = ({ producto, index, loading }) => {
    if (loading || !producto) {
        return (
            <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-6 p-4 rounded-lg shadow-lg items-start border animate-pulse w-full`}>
                {/* Imagen */}
                <div className="w-full md:w-1/2 h-64 bg-gray-300 rounded-lg" />
                {/* Texto */}
                <div className="w-full md:w-1/2 flex flex-col space-y-3 px-4">
                    <div className="h-4 w-24 bg-gray-400 rounded" />
                    <div className="h-6 w-3/4 bg-gray-500 rounded" />
                    <div className="h-4 w-full bg-gray-300 rounded" />
                    <div className="h-4 w-5/6 bg-gray-300 rounded" />
                    <div className="h-4 w-2/3 bg-gray-300 rounded" />
                    <div className="h-4 w-24 bg-gray-400 rounded" />
                    <div className="h-4 w-1/2 bg-gray-300 rounded" />
                    <div className="h-10 w-32 bg-red-300 rounded mt-4" />
                </div>

            </div>
        );

    }

    const main = producto.main_image
        ? [{ itemImageSrc: producto.main_image, alt: 'Imagen principal' }]
        : [];

    const gallery = Array.isArray(producto.gallery_images)
        ? producto.gallery_images.map((img, i) => ({
            itemImageSrc: img,
            alt: `Imagen ${i + 1}`,
        }))
        : [];

    const allImages = [...main, ...gallery];

    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 rounded-lg shadow-lg items-start border">
            {index % 2 === 0 ? (
                <>
                    <Carousel images={allImages} />
                    <div className="w-full md:w-1/2 flex flex-col justify-center pr-3 pl-2">
                        <CottageRating details={producto.details} />
                        <h2 className="text-2xl font-bold mt-1">{producto.name_cottage}</h2>
                        <p className="text-gray-600 mt-2">{producto.description}</p>
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
                        <h2 className="text-2xl font-bold mt-1">{producto.name_cottage}</h2>
                        <p className="text-gray-600 mt-2">{producto.description}</p>
                        <h3 className="font-bold text-sm mt-2">Servicios</h3>
                        <ServiceList />
                        <div className="flex justify-start mt-5">
                            <button className="btn text-red-700 border-red-400 hover:text-white hover:bg-red-700 w-auto">
                                Reservar
                            </button>
                        </div>
                    </div>
                    <Carousel images={allImages} />
                </>
            )}
        </div>
    );
};

export default CottageCard;
