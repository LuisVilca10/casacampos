import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { useState } from 'react';

function HeroSlider() {
    const [date, setDate] = useState(null);
    const [dates, setDates] = useState(null);

    return (
        <>
            <div
                className="bg-center bg-cover py-20 flex flex-col justify-center text-white px-4"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
                }}
            >
                {/* Contenido principal */}
                <div className="flex flex-col h-full w- text-white text-start container mx-auto">
                    <h1 className="text-5xl font-bold mb-2 w-1/2">Casa de Campo en Arequipa</h1>
                    <p className="text-xl mb-2 text-end w-1/2">Busca las fechas de disponibilidad y reserva!</p>

                    {/* Buscador */}
                    <div className="shadow-lg p-4 flex flex-wrap items-center justify-center gap-4 w-full max-w-5xl">
                        {/* Fechas */}
                        <Calendar className='flex items-center flex-1 min-w-[250px] cursor-pointer hover:bg-gray-100' value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
                        {/* Campo: Cantidad de personas (simulado) */}
                        <div className="flex items-center border rounded-md px-3 py-2 flex-1 min-w-[250px] cursor-pointer hover:bg-gray-100">
                            <i className="pi pi-user text-gray-600 mr-2 text-lg" />
                            <span className="text-sm text-gray-700">2 adultos · 0 niños · 1 habitación</span>
                            <i className="pi pi-chevron-down text-gray-600 ml-auto text-sm" />
                        </div>

                        {/* Botón: Buscar */}
                        <Button label="Buscar" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700" />
                    </div>
                </div>

            </div>
            <div className="card flex justify-content-center ">
                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
            </div>
        </>
    );
}

export default HeroSlider;
