import { Suspense, useState } from 'react';
import DatePickerComponent from '../atoms/DatePickerComponent';
import PeopleSelector from '../atoms/PeopleSelector';
import { Link } from 'react-router-dom';

function HeroSlider() {
    const [range, setRange] = useState([null, null]);


    return (
        <div className="relative overflow-hidden p-12 2xl:py-20 flex flex-col justify-center text-white px-4">
            {/* Imagen de fondo */}
            <img
                src="portada.webp"
                alt="Casa Campo Arequipa"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
            />
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Contenido visible */}
            <div className="relative z-10 flex flex-col h-full w-full text-white text-start container mx-auto md:mt-28 md:mb-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 md:w-1/2">Casa Campo Arequipa</h1>
                <p className="text-lg md:text-2xl mb-2 md:text-end md:w-1/2">
                    Busca las fechas de disponibilidad y reserva!
                </p>
                <div className="shadow-lg md:p-4 pt-5 lg:flex flex-row items-center justify-center gap-4 w-full max-w-5xl grid">
                    <DatePickerComponent range={range} setRange={setRange} />
                    <Suspense fallback={<div className="h-[56px] w-full bg-gray-100 animate-pulse rounded-md" />}>
                        <PeopleSelector />
                    </Suspense>

                    <Link to={"/SearchCottage"}>
                        <button
                            type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                        >
                            Buscar
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default HeroSlider;