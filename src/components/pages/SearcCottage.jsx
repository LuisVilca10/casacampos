import { useEffect, useState } from "react";
import { CircleParking, UsersRound, Volleyball, WavesLadder, Wifi } from 'lucide-react';
import Carousel from "../molecules/carousel/Carousel";
import CottageRating from "../atoms/CottageRating";
import DatePickerComponent from "../atoms/DatePickerComponent";
import PeopleSelector from "../atoms/PeopleSelector";


const SearcCottage = () => {
    const [range, setRange] = useState([null, null]);
    const paquetes = [
        {
            id: "packA",
            nombre: "Pack A",
            cabañas: [
                {
                    id: 1, nombre: "Cabaña A1", camas: 6, precio: 100,
                    itemImageSrc: 'https://imgs.search.brave.com/XCELAc1_tCMM8obdicXkvXbDGemy-mLpYp51_-O8VSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1jYXNhLWNhbXBv/LXN1aXRlcy1jb252/ZW5jaW9uZXMtYXJl/cXVpcGEuaG90ZWxt/aXguZXMvZGF0YS9Q/aG90b3MvNzAweDUw/MC8xMTY5NC8xMTY5/NDQ4LzExNjk0NDg3/NzgvSG90ZWwtQ2Fz/YS1DYW1wby1CeS1D/YXNzYW5hLUFyZXF1/aXBhLUV4dGVyaW9y/LkpQRUc',

                },
                {
                    id: 2, nombre: "Cabaña A2", camas: 6, precio: 100,
                    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',

                },
            ],
        },
        {
            id: "packB",
            nombre: "Pack B",
            cabañas: [
                {
                    id: 3, nombre: "Cabaña B", camas: 3, precio: 100,
                    itemImageSrc: 'https://imgs.search.brave.com/XCELAc1_tCMM8obdicXkvXbDGemy-mLpYp51_-O8VSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1jYXNhLWNhbXBv/LXN1aXRlcy1jb252/ZW5jaW9uZXMtYXJl/cXVpcGEuaG90ZWxt/aXguZXMvZGF0YS9Q/aG90b3MvNzAweDUw/MC8xMTY5NC8xMTY5/NDQ4LzExNjk0NDg3/NzgvSG90ZWwtQ2Fz/YS1DYW1wby1CeS1D/YXNzYW5hLUFyZXF1/aXBhLUV4dGVyaW9y/LkpQRUc',

                },
            ],
        },
        {
            id: "pack2U",
            nombre: "Pack 2U (2 Cabañas)",
            cabañas: [
                {
                    id: 1, nombre: "Cabaña 1", camas: 6, precio: 100,
                    itemImageSrc: 'https://imgs.search.brave.com/XCELAc1_tCMM8obdicXkvXbDGemy-mLpYp51_-O8VSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1jYXNhLWNhbXBv/LXN1aXRlcy1jb252/ZW5jaW9uZXMtYXJl/cXVpcGEuaG90ZWxt/aXguZXMvZGF0YS9Q/aG90b3MvNzAweDUw/MC8xMTY5NC8xMTY5/NDQ4LzExNjk0NDg3/NzgvSG90ZWwtQ2Fz/YS1DYW1wby1CeS1D/YXNzYW5hLUFyZXF1/aXBhLUV4dGVyaW9y/LkpQRUc',

                },
                {
                    id: 2, nombre: "Cabaña 2", camas: 6, precio: 100,
                    itemImageSrc: 'https://imgs.search.brave.com/XCELAc1_tCMM8obdicXkvXbDGemy-mLpYp51_-O8VSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1jYXNhLWNhbXBv/LXN1aXRlcy1jb252/ZW5jaW9uZXMtYXJl/cXVpcGEuaG90ZWxt/aXguZXMvZGF0YS9Q/aG90b3MvNzAweDUw/MC8xMTY5NC8xMTY5/NDQ4LzExNjk0NDg3/NzgvSG90ZWwtQ2Fz/YS1DYW1wby1CeS1D/YXNzYW5hLUFyZXF1/aXBhLUV4dGVyaW9y/LkpQRUc',

                },
            ],
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(paquetes[0]);

    useEffect(() => {
        // Aquí puedes hacer lógica adicional si necesitas
    }, [paqueteSeleccionado]);

    return (
        <>
            <div className="py-10 space-y-4 container mx-auto">
                <div className="bg-red-700/60 shadow-lg md:p-4 pt-5 lg:flex flex-row items-center justify-center gap-4 w-full max-w-5xl grid">
                    <DatePickerComponent range={range} setRange={setRange} />
                    <PeopleSelector />
                    <a to={"/SearchCottage"}>
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Buscar</button>
                    </a>
                </div>

                {/* Zona de contenido */}
                <div className="grid grid-cols-4 gap-4">

                    {/* Filtros */}
                    <div className="col-span-1 border p-4 rounded-xl space-y-2">
                        <h2 className="font-bold">Filtrar por:</h2>
                        <div className="border-t">
                            <div className="font-semibold my-1">Paquetes</div>
                            <select
                                onChange={(e) => {
                                    const seleccionado = paquetes.find((p) => p.id === e.target.value);
                                    if (seleccionado) setPaqueteSeleccionado(seleccionado);
                                }}
                                className="select select-primary w-full"
                            >
                                {paquetes.map((p) => (
                                    <option key={p.id} value={p.id}>
                                        {p.nombre}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <label className="label">Precio por noche</label>
                        <input type="range" min="50" max="300" className="range range-sm" />
                        <label className="label">Capacidad</label>
                        <input type="range" min="2" max="12" className="range range-sm" />
                    </div>

                    {/* Resultados */}
                    <div className="col-span-3 space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            {paqueteSeleccionado.cabañas.map((c) => (
                                <div className="flex flex-col md:flex-row gap-y-4 gap-6 p-4 rounded-lg shadow-lg items-start border">
                                    <>
                                        <div className="carousel overflow-x-auto snap-x snap-mandatory scroll-smooth w-max">
                                            <div className="carousel-item snap-center w-96 h-72 flex-shrink-0 relative">
                                                <img
                                                    src={c.itemImageSrc}
                                                    alt={c.itemImageSrc}
                                                    className="w-full object-cover rounded-2xl"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-between px-4">
                                                    <button
                                                        className="btn btn-circle"
                                                        onClick={() => setCurrentSlide((prev) => (prev - 1 + c.itemImageSrc.length) % c.itemImageSrc.length)}
                                                    >
                                                        ❮
                                                    </button>
                                                    <button
                                                        className="btn btn-circle"
                                                        onClick={() => setCurrentSlide((prev) => (prev + 1) % c.itemImageSrc.length)}
                                                    >
                                                        ❯
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 flex flex-col justify-center pr-3 pl-2">
                                            <CottageRating details={c.details} />
                                            <h2 className="text-2xl font-bold mt-1">{c.nombre}</h2>
                                            <div className="flex flex-wrap justify-start mt-3 gap-y-4">
                                                <div className="w-1/3 flex gap-x-2 text-sm">
                                                    <Wifi size="20px" /> Cantidad de Camas: {c.camas}
                                                </div>
                                                <div className="w-1/3 flex gap-x-2 text-sm">
                                                    <CircleParking size="20px" /> Parking gratis
                                                </div>
                                                <div className="w-1/3 flex gap-x-2 text-sm">
                                                    <UsersRound size="20px" /> Habitaciones familiares
                                                </div>
                                                <div className="w-1/3 flex gap-x-2 text-sm">
                                                    <WavesLadder size="20px" /> Piscina Temperada
                                                </div>
                                                <div className="w-1/3 flex gap-x-2 text-sm">
                                                    <Volleyball size="20px" /> Juegos con Pelota
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mt-2">{c.descripcion}</p>
                                        </div>


                                    </>



                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SearcCottage;