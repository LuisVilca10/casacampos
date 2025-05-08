import { useState } from "react";
import { Calendar, Users, Search, Home } from "lucide-react";


const SearcCottage = () => {
    const paquetes = [
        { id: "packA", nombre: "Pack A" },
        { id: "packB", nombre: "Pack B" },
        { id: "pack2U", nombre: "Pack 2U (2 Cabañas)" },
    ];

    const cabañas = [
        { id: 1, nombre: "Cabaña 1", camas: 6, precio: 100 },
        { id: 2, nombre: "Cabaña 2", camas: 6, precio: 100 },
    ];

    const [paquete, setPaquete] = useState("packA");

    return (
        <>
            <div className="py-20 space-y-4">

                {/* Zona de contenido */}
                <div className="grid grid-cols-4 gap-4">
                    {/* Filtros */}
                    <div className="col-span-1 border p-4 rounded-xl space-y-4">
                        <h2 className="font-bold">Filtros</h2>
                        <select defaultValue="Pick a text editor" className="select select-primary">
                            {paquetes.map((p) => (
                                <option key={p.id} value={p.id}> {p.nombre}</option>
                            ))}

                        </select>
                        <label className="label">Precio por noche</label>
                        <input type="range" min="50" max="300" className="range range-sm" />
                        <label className="label">Capacidad</label>
                        <input type="range" min="2" max="12" className="range range-sm" />
                    </div>

                    {/* Resultados */}
                    <div className="col-span-3 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {cabañas.map((c) => (
                                <div key={c.id} className="border p-4 rounded-xl shadow">
                                    <h3 className="text-lg font-bold">{c.nombre}</h3>
                                    <p>{c.camas} camas</p>
                                    <p className="text-green-600 font-semibold">S/ {c.precio}/noche</p>
                                    <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Buscar</button>
                                </div>
                            ))}
                        </div>

                        {paquete === "pack2U" && (
                            <div className="border border-dashed p-4 rounded-xl">
                                <h3 className="font-bold">Pack 2U seleccionado:</h3>
                                <ul className="list-disc list-inside">
                                    <li>Cabaña 1 + Cabaña 2</li>
                                    <li>12 camas</li>
                                    <li>S/ 190/noche (ambas)</li>
                                </ul>
                                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Reservar paquete completo</button>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearcCottage;