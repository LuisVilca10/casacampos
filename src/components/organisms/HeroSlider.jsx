import { Calendar } from 'primereact/calendar';

import { Button } from 'primereact/button';
import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import PeopleSelector from '../atoms/PeopleSelector';

function HeroSlider() {
    const [date, setDate] = useState(null);


    return (
        <>
            <div
                className="bg-center bg-cover py-20 flex flex-col justify-center text-white px-4 "
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
                }}
            >
                {/* Contenido principal */}
                <div className="flex flex-col h-full w- text-white text-start container mx-auto md:mt-28 md:mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 md:w-1/2 w-full">Casa Campo Arequipa</h1>
                    <p className="text-lg md:text-2xl mb-2 md:text-end md:w-1/2">Busca las fechas de disponibilidad y reserva!</p>

                    {/* Buscador */}
                    <div className="shadow-lg md:p-4 pt-5 md:flex flex-row items-center justify-center gap-4 w-full max-w-5xl grid">
                        {/* Fechas */}
                        <div className='w-full'>
                            <Calendar
                                value={date}
                                onChange={(e) => setDate(e.value)}
                                showIcon={true}
                                icon={<CalendarCheck style={{ color: '#B91C1C' }} />}
                                selectionMode="range"
                                inputClassName="border border-gray-300 rounded-md px-6 py-3 w-full text-black"
                                className="w-full"
                                readOnlyInput
                                placeholder='Check-in ---- Check-out'
                                hideOnRangeSelection />
                        </div>

                        {/* Campo: Cantidad de personas (simulado) */}

                        <div className="w-full">
                            <PeopleSelector />
                        </div>

                        {/* Botón: Buscar */}
                        <Button label="Buscar" className="bg-red-700 text-white px-7 py-2 flex justify-center rounded-md hover:bg-red-800" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default HeroSlider;
