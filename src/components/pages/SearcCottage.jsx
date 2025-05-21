import { useEffect, useState } from "react";
import { Banknote, CircleParking, UsersRound, Volleyball, WavesLadder, Wifi } from 'lucide-react';
import CottageRating from "../atoms/CottageRating";
import DatePickerComponent from "../atoms/DatePickerComponent";
import PeopleSelector from "../atoms/PeopleSelector";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const SearcCottage = () => {
    const location = useLocation();
    const [mensaje, setMensaje] = useState("");
    const { data, loading, error } = useFetch("packages");
    const { results, filters, range1, suggestions } = location?.state || {};

    const [people, setPeople] = useState(filters?.persons ? filters?.persons : 1);
    const [range, setRange] = useState(
        Array.isArray(range1) ? [range1[0] ?? null, range1[1] ?? null] : [null, null]
    );

    const [currentSlide, setCurrentSlide] = useState(0);
    const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(null);
    const [cottagesFiltradas, setCottagesFiltradas] = useState([]);

    useEffect(() => {
        if (data?.packeges?.length > 0) {
            const idPaqueteEnviado = results?.id;
            const idfechaEnviado = suggestions?.package_name.id;

            let paqueteEncontrado = null;

            if (idPaqueteEnviado) {
                paqueteEncontrado = data.packeges.find(p => p.id === idPaqueteEnviado);
                setMensaje("Encontramos estas cabañas para ti para tus fechas que dispones");
            } else if (idfechaEnviado) {
                paqueteEncontrado = data.packeges.find(p => p.id === idfechaEnviado);
                setMensaje("No encontramos cabañas disponibles en esas fechas, pero estas son las más cercanas");
            } else {
                paqueteEncontrado = data.packeges[0];
                setMensaje("Estas son las cabañas que te ofrecemos");
            }

            if (paqueteEncontrado) {
                setPaqueteSeleccionado(paqueteEncontrado);
                const cabañasAsociadas =
                    results?.cottages ?? suggestions?.package_name?.cottages ?? [];

                const filtradas =
                    Array.isArray(cabañasAsociadas) && cabañasAsociadas.length > 0
                        ? paqueteEncontrado.cottages?.filter(c =>
                            cabañasAsociadas.some(rc => rc.id === c.id)
                        ) ?? []
                        : paqueteEncontrado.cottages ?? [];

                setCottagesFiltradas(filtradas);
            }
        }
    }, [data]);
    useEffect(() => {
        if (paqueteSeleccionado) {
            const cabañasAsociadas =
                results?.cottages ?? suggestions?.package_name?.cottages ?? [];

            const filtradas =
                Array.isArray(cabañasAsociadas) && cabañasAsociadas.length > 0
                    ? paqueteSeleccionado.cottages?.filter(c =>
                        cabañasAsociadas.some(rc => rc.id === c.id)
                    ) ?? []
                    : paqueteSeleccionado.cottages ?? [];

            setCottagesFiltradas(filtradas);
        }
    }, [paqueteSeleccionado]);


    return (
        <>
            <div className="py-10 space-y-4 container mx-auto">
                {mensaje && (
                    <h2 className="container mx-auto text-xl font-semibold mb-4 text-start">
                        {mensaje}
                    </h2>
                )}
                {/* Zona de contenido */}
                <div className="md:grid flex flex-col gap-y-2 mx-4 md:grid-cols-5 gap-4">
                    {/* Filtros */}
                    <div className="col-span-1 border p-4 rounded-xl space-y-2 w-full">
                        <h2 className="font-bold">Ubicación:</h2>
                        <div className="border-y pb-2">
                            <div className="mt-2">
                                <iframe
                                    title="Imagen"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.9153845853557!2d-71.5348554!3d-16.3772141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0046940e37%3A0x6dce74acc45296dc!2sCasa%20Campo%20Arequipa!5e1!3m2!1ses-419!2spe!4v1728063705471!5m2!1ses-419!2spe"
                                    className="rounded-lg border lg:w-[215px] lg:h-[150px] object-cover w-full"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        <h2 className="font-bold">Filtrar por:</h2>
                        <div className="border-t pb-2">
                            <div className="font-semibold my-1">Paquetes</div>
                            <select
                                value={paqueteSeleccionado?.id ?? ""}
                                onChange={(e) => {
                                    const seleccionado = data?.packeges?.find((p) => String(p.id) === e.target.value);
                                    console.log("hola")
                                    console.log(seleccionado)
                                    if (seleccionado) setPaqueteSeleccionado(seleccionado);
                                }}
                                className="select select-primary w-full"
                            >
                                {data?.packeges?.map((p) => (
                                    <option key={p.id} value={p.id}>
                                        {p.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className="border-t pb-2">
                            <div className="font-semibold my-1">Precio por noche Lunes - Jueves</div>
                            <label className="input w-full input-primary">
                                <Banknote />
                                <input type="number" className="grow validator" min="1" readOnly value={paqueteSeleccionado ? paqueteSeleccionado.price_monday_to_thursday : ''} />
                            </label>
                        </div>
                        <div className="border-t pb-2">
                            <div className="font-semibold my-1">Precio por noche Viernes - Jueves</div>
                            <label className="input  w-full  input-primary">
                                <Banknote />
                                <input type="number" className="grow validator" min="1" readOnly value={paqueteSeleccionado ? paqueteSeleccionado.price_friday_to_sunday : ''} />
                            </label>
                        </div>
                        {/* <div className="border-t ">
                            <div className="font-semibold my-1">Ofertas</div>

                            <label className="label">
                                <input type="checkbox" defaultChecked className="checkbox border-blue-600" />
                                Buscar
                            </label>
                        </div> */}
                    </div>

                    {/* Resultados */}
                    <div className="col-span-3 space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            {cottagesFiltradas.map((c) => (
                                <div className="flex items-center flex-col md:flex-row gap-y-4 gap-6 p-4 rounded-lg shadow-lg md:items-start border">
                                    <>
                                        <div className="carousel overflow-x-auto snap-x snap-mandatory scroll-smooth w-max">
                                            <div className="carousel-item snap-center md:w-80 md:h-72 h-72 w-80 flex-shrink-0 relative">
                                                <img
                                                    src={c.itemImageSrc}
                                                    alt={c.itemImageSrc}
                                                    className="w-full object-cover rounded-2xl"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-between px-4">
                                                    <button
                                                        className="btn btn-circle"
                                                        onClick={() =>
                                                            setCurrentSlide(
                                                                (prev) => (prev - 1 + c.itemImageSrc.length) % c.itemImageSrc.length
                                                            )
                                                        }
                                                    >
                                                        ❮
                                                    </button>
                                                    <button
                                                        className="btn btn-circle"
                                                        onClick={() =>
                                                            setCurrentSlide(
                                                                (prev) => (prev + 1) % c.itemImageSrc.length
                                                            )
                                                        }
                                                    >
                                                        ❯
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 flex flex-col justify-center pr-3 pl-2">
                                            <CottageRating details={c.details} />
                                            <h2 className="text-2xl font-bold mt-1">{c.name_cottage}</h2>
                                            <div className="flex flex-wrap justify-start mt-3 gap-y-4 gap-x-1">
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <Wifi size="20px" /> Cantidad de Camas: {c.beds}
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <CircleParking size="20px" /> Parking gratis
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <UsersRound size="20px" /> Habitaciones familiares
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <WavesLadder size="20px" /> Piscina Temperada
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <Volleyball size="20px" /> Juegos con Pelota
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="col-span-3 space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            {results?.data?.cottages.map((c) => (
                                <div className="flex flex-col md:flex-row gap-y-4 gap-6 p-4 rounded-lg shadow-lg items-start border">
                                    <>
                                        <div className="carousel overflow-x-auto snap-x snap-mandatory scroll-smooth w-max">
                                            <div className="carousel-item snap-center w-80 h-72 flex-shrink-0 relative">
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
                                            <div className="flex flex-wrap justify-start mt-3 gap-y-4 gap-x-1">
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <Wifi size="20px" /> Cantidad de Camas: {c.camas}
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <CircleParking size="20px" /> Parking gratis
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <UsersRound size="20px" /> Habitaciones familiares
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <WavesLadder size="20px" /> Piscina Temperada
                                                </div>
                                                <div className="w-1/2 flex gap-x-2 text-sm">
                                                    <Volleyball size="20px" /> Juegos con Pelota
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mt-2">{c.descripcion}</p>
                                        </div>

                                    </>
                                </div>
                            ))}

                        </div>
                    </div> */}
                    {/* Paquete Recomendado */}
                    <div className="col-span-1 border p-4 rounded-xl space-y-2">
                        <h2 className="font-bold">Paquete: <span className="font-medium text-gray-700">{paqueteSeleccionado ? paqueteSeleccionado.name : ''}</span></h2>
                        <div className="border-y pb-2">
                            <div className=" mt-2 w-full border overflow-hidden rounded-lg">
                                <img
                                    // src={results.data.img ? results.data.img : ('/icons/sapo.png')}
                                    src={results?.data?.img ? ('/icons/sapo.png') : ('/icons/sapo.png')}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <h2 className="font-bold">Incluye:</h2>
                        <ul>
                            <li>
                                Maximo de Personas: {results?.data?.max_person} Personas
                            </li>
                            <li>
                                Numero de Cabañas:{results?.data?.max_cottages_selectable} Seleccionable
                            </li>
                            <li>
                                2 habitaciones
                            </li>
                            <li>
                                10 persoans
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SearcCottage;