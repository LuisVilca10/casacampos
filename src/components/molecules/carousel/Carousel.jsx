// molecules/Carousel.js
import { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    if (!images || images.length === 0) {
        return (
            <div className="w-full md:w-1/2 h-96 flex items-center justify-center bg-gray-100 rounded-2xl text-gray-500">
                <span>No hay imágenes para mostrar</span>
            </div>
        );
    }

    return (
        <div className="w-full md:w-1/2">
            <div className="carousel w-full h-96 overflow-x-auto snap-x snap-mandatory scroll-smooth">
                <div className="carousel-item snap-center w-full flex-shrink-0 relative">
                    <img
                        src={images[currentSlide].itemImageSrc}
                        alt={images[currentSlide].alt}
                        className="w-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button
                            className="btn btn-circle"
                            onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                        >
                            ❮
                        </button>
                        <button
                            className="btn btn-circle"
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
