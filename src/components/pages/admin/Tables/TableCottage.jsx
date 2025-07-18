import { Pencil, Trash } from "lucide-react";
import useFetch from "../../../../hooks/useFetch";

function TableCottage() {
    const { data, loading, error } = useFetch("cottage-admin", {
        withCredentials: true // 👈 Necesario para enviar la cookie
    });

    console.log(data);
    const cabins = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        nombre: `Cabaña ${i + 1}`,
        ubicacion: `Zona ${((i % 5) + 1)}`,
        precio: `$${100 + i * 10}`,
        estado: i % 2 === 0 ? "Disponible" : "Ocupada",
    }));

    return (
        // <>
        //     <h1 className="text-3xl font-bold mb-6">Lista de Cabañas</h1>

        //     <div className="overflow-x-auto">
        //         <table className="table table-zebra w-full min-w-[800px]">
        //             <thead>
        //                 <tr>
        //                     <th>ID</th>
        //                     <th>Nombre</th>
        //                     <th>Ubicación</th>
        //                     <th>Precio</th>
        //                     <th>Estado</th>
        //                     <th>Acciones</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {cabins.map((cabaña) => (
        //                     <tr key={cabaña.id}>
        //                         <td>{cabaña.id}</td>
        //                         <td>{cabaña.nombre}</td>
        //                         <td>{cabaña.ubicacion}</td>
        //                         <td>{cabaña.precio}</td>
        //                         <td>
        //                             <span className={`badge ${cabaña.estado === "Disponible" ? "badge-success" : "badge-error"}`}>
        //                                 {cabaña.estado}
        //                             </span>
        //                         </td>
        //                         <td>
        //                             <div className="flex gap-2">
        //                                 <button className="btn btn-sm btn-info">Editar</button>
        //                                 <button className="btn btn-sm btn-error">Eliminar</button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </>
        <>
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Buscar Cabaña"
                    className="p-2 border border-gray-300 rounded-lg w-1/3 "
                    value=""
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className=" text-black p-2 rounded border border-black hover:bg-green-800 hover:text-white" onClick={() => setOpenModal(true)}>
                    Agregar Cabaña
                </button>
            </div>

            <div className="overflow-x-auto border rounded-xl">
                <table className="w-full text-left table-auto min-w-max text-sm">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 font-normal">Id</th>
                            <th className="p-3 font-normal">Portada</th>
                            <th className="p-3 font-normal">Nombre</th>
                            <th className="p-3 font-normal">Descripcion</th>
                            <th className="p-3 font-normal">Capacidad total</th>
                            <th className="p-3 font-normal">Total de cuartos</th>
                            <th className="p-3 font-normal">Total de camas</th>
                            <th className="p-3 font-normal">Total de baños</th>
                            <th className="p-3 font-normal">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {data?.cottages.map((cottage, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="p-3 whitespace-nowrap font-medium text-gray-900">
                                    {cottage.id}
                                </td>
                                <td className="p-3">
                                    <img
                                        src={cottage.main_image || "https://placehold.co/150?text=Sin+Imagen"}
                                        alt="Imagen de la cabaña"
                                        className="w-32 h-20 object-cover rounded"
                                    />
                                </td>

                                <td className="p-3">{cottage.name_cottage}</td>
                                <td className="p-3 ">{cottage.description.length > 100
                                    ? `${cottage.description.slice(0, 40)}...`
                                    : cottage.description}</td>
                                <td className="p-3">{cottage.capacity} Personas</td>
                                <td className="p-3">{cottage.rooms} cuartos</td>
                                <td className="p-3">{cottage.beds} camas</td>
                                <td className="p-3">{cottage.bathrooms} baños</td>
                                <td className="p-2">
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-lg text-white bg-green-500 hover:bg-green-600" onClick={() => handleEditClick(cottage)}>
                                            <Pencil size={17} />
                                        </button>
                                        <button className="p-2 rounded-lg text-white bg-red-500 hover:bg-red-600" onClick={() => handledeleteClick(cottage.id)}>
                                            <Trash size={17} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
            </div>
        </>
    );
}

export default TableCottage;