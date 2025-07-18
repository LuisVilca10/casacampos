import { Pencil, Trash } from "lucide-react";
import useFetch from "../../../../hooks/useFetch";

function TablePackages() {

    const { data, loading, error } = useFetch("packages-admin");
    console.log(data);
    const data1 = {
        reservations: [
            {
                id: 1,
                package: {
                    name: "Paquete Familiar",
                    max_person: 5
                },
                cottages: [
                    { id: 101, name_cottage: "Cabaña Río" },
                    { id: 102, name_cottage: "Cabaña Bosque" }
                ],
                date_reservation: "2025-05-28T00:00:00Z",
                state: 1,
                date_start: "2025-06-01T00:00:00Z",
                date_end: "2025-06-05T00:00:00Z",
                total_price: 500
            },
            {
                id: 2,
                package: {
                    name: "Escapada Romántica",
                    max_person: 2
                },
                cottages: [
                    { id: 103, name_cottage: "Cabaña Lago" }
                ],
                date_reservation: "2025-05-25T00:00:00Z",
                state: 0,
                date_start: "2025-06-10T00:00:00Z",
                date_end: "2025-06-12T00:00:00Z",
                total_price: 300
            },
            {
                id: 3,
                package: {
                    name: "Paquete Aventura",
                    max_person: 8
                },
                cottages: [],
                date_reservation: "2025-05-27T00:00:00Z",
                state: 1,
                date_start: "2025-06-15T00:00:00Z",
                date_end: "2025-06-20T00:00:00Z",
                total_price: 750
            }
        ]
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Buscar Paquete"
                    className="p-2 border border-gray-300 rounded-lg w-1/3 "
                    value=""
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className=" text-black p-2 rounded border border-black hover:bg-green-800 hover:text-white" onClick={() => setOpenModal(true)}>
                    Nuevo Paquete
                </button>
            </div>

            <div className="overflow-x-auto border rounded-xl">
                <table className="w-full text-left table-auto min-w-max text-sm">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 font-normal">Id</th>
                            <th className="p-3 font-normal">Imagen</th>
                            <th className="p-3 font-normal">Nombre Paquete</th>
                            <th className="p-3 font-normal">Capacidad</th>
                            <th className="p-3 font-normal">Precio de L- J</th>
                            <th className="p-3 font-normal">Precio de V - D</th>
                            <th className="p-3 font-normal">Precio de Garantia</th>
                            <th className="p-3 font-normal">Precio de Limpieza</th>
                            <th className="p-3 font-normal">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {data?.packeges.map((packege, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="p-3 whitespace-nowrap font-medium text-gray-900">
                                    {packege.id}
                                </td>
                                <td className="p-3">  <img src={packege.img} alt={packege.name} className="object-cover w-24 h-24 rounded-lg border" />
                                </td>
                                <td className="p-3">{packege.name}</td>
                                <td className="p-3">{packege.max_person} Personas</td>
                                <td className="p-3">{packege.price_monday_to_thursday} </td>
                                <td className="p-3">{packege.price_friday_to_sunday}</td>
                                <td className="p-3">{packege.guarantee}</td>
                                <td className="p-3">{packege.cleaning}</td>
                                <td className="p-2">
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-lg text-white bg-green-500 hover:bg-green-700" onClick={() => handleEditClick(packege)}>
                                            <Pencil size={17} />
                                        </button>
                                        <button className="p-2 rounded-lg text-white bg-red-500 hover:bg-red-700" onClick={() => handledeleteClick(packege.id)}>
                                            <Trash size={17} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </>
    );
}

export default TablePackages;