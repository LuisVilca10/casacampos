import { useState } from 'react';
import DatePickerComponent from '../atoms/DatePickerComponent';
import PeopleSelector from '../atoms/PeopleSelector';
import { Link } from 'react-router-dom';

function HeroSlider() {
    const [range, setRange] = useState([null, null]);
    

    return (
        <div className="bg-center bg-cover p-12 2xl:py-20 flex flex-col justify-center text-white px-4"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
            }}>
            <div className="flex flex-col h-full w-full text-white text-start container mx-auto md:mt-28 md:mb-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 md:w-1/2">Casa Campo Arequipa</h1>
                <p className="text-lg md:text-2xl mb-2 md:text-end md:w-1/2">Busca las fechas de disponibilidad y reserva!</p>

                <div className="shadow-lg md:p-4 pt-5 lg:flex flex-row items-center justify-center gap-4 w-full max-w-5xl grid">
                    <DatePickerComponent range={range} setRange={setRange} />
                    <PeopleSelector />
                    <Link to={"/SearchCottage"}>
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Buscar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;