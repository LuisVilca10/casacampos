import { Suspense, useState } from 'react';
import DatePickerComponent from '../atoms/DatePickerComponent';
import PeopleSelector from '../atoms/PeopleSelector';
import axios from 'axios';
import { API_URL } from '../../constants/env';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const HeroSlider = () => {
    const [range, setRange] = useState([null, null]);  // Asegúrate de que esto sea un array
    const [totalPeople, setTotalPeople] = useState(1);

    const formattedStart = range[0] ? range[0].toISOString().split("T")[0] : null;
    const formattedEnd = range[1] ? range[1].toISOString().split("T")[0] : null;
    const nav = useNavigate();
    const [isSearching, setIsSearching] = useState(false);

    const handlePeopleChange = (total) => {
        setTotalPeople(total);  // Actualizamos solo el total de personas
    };

    const formData = {
        check_in: formattedStart,
        check_out: formattedEnd,
        persons: totalPeople
    };


    const handleSearch = async (e) => {
        if (!formattedStart || !formattedEnd) {
            Swal.fire({
                icon: "error",
                title: "Faltan Datos",
                text: "Selecciona las fechas por favor"
            });
            return;
        }

        if (totalPeople < 1) {
            Swal.fire({
                icon: "error",
                title: "Faltan Datos",
                text: "Minimo 1 persona "
            });
            return;
        }
        setIsSearching(true);
        try {
            const resp = await axios.post(`${API_URL}searchcottage`, formData);
            setIsSearching(false);
            nav("/SearchCottage", {
                state: {
                    results: resp.data.data,
                    filters: formData,
                    range1: range,
                    suggestions: resp.data.suggestions
                }
            });
        } catch (err) {
            console.error(err);
            setIsSearching(false);
            setErrorMsg("Ocurrió un error al buscar. Intenta nuevamente.");
        }

    };

    return (
        <div className="relative overflow-hidden pb-24 pt-10 2xl:py-20 flex flex-col justify-center text-white px-4">
            {/* Imagen de fondo */}
            <img
                src="/portada.webp"
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
                    <Suspense fallback={<div className="h-[96px] w-full bg-gray-100 animate-pulse rounded-md" />}>
                        <PeopleSelector setPeople={handlePeopleChange} />
                    </Suspense>
                    <button
                        type="button"
                        onClick={handleSearch}
                        disabled={isSearching}
                        className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${isSearching ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSearching ? 'Buscando...' : 'Buscar'}
                    </button>
                </div>
            </div>
        </div>

    );
}

export default HeroSlider;