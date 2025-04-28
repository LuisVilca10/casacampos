import { useState } from 'react';
import PeopleSelector from '../atoms/PeopleSelector';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';


registerLocale('es', es);

function HeroSlider() {
    const [range, setRange] = useState([null, null]);
    const [startDate, endDate] = range;
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
                    <div className="shadow-lg md:p-4 pt-5 lg:flex flex-row items-center justify-center gap-4 w-full max-w-5xl grid">
                        {/* Fechas */}

                        <div className="w-full relative">
                            <DatePicker
                                selected={startDate}
                                onChange={(update) => {
                                    setRange(update);
                                }}
                                startDate={startDate}
                                endDate={endDate}
                                selectsRange
                                minDate={new Date()}
                                popperPlacement="bottom"
                                dropdownMode="select"
                                showMonthDropdown
                                showYearDropdown
                                locale="es"
                                calendarIconClassName='border'
                                dateFormat="dd 'de' MMMM"
                                placeholderText="Check-in ---- Check-out"
                                className="lg:w-[27rem] w-[20rem] bg-white flex py-3.5 px-4 text-black rounded-md border border-gray-300 shadow-sm focus:outline-none transition"
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-700">
                                <Calendar />
                            </span>
                            {/* {startDate && endDate && (
                                <p className="mt-2 text-sm text-gray-600">
                                    Check-in: {startDate.toLocaleDateString()} | Check-out: {endDate.toLocaleDateString()}
                                </p>
                            )} */}
                        </div>

                        {/* Campo: Cantidad de personas (simulado) */}

                        <div className="w-full">
                            <PeopleSelector />
                        </div>

                        {/* Botón: Buscar */}
                        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Default</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HeroSlider;
