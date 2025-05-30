function TablePackages() {
    const data = {
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
                    placeholder="Buscar Cabaña"
                    className="p-2 border border-gray-300 rounded-lg w-1/3 "
                    value=""
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={() => handelneed()} className=" text-black p-2 rounded border border-black hover:bg-green-800 hover:text-white">
                    Nueva Reserva
                </button>
            </div>

            <div className="overflow-x-auto border rounded-xl">
                <table className="w-full text-left table-auto min-w-max text-sm">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 font-normal">Id Reserva</th>
                            <th className="p-3 font-normal">Nombre Paquete</th>
                            <th className="p-3 font-normal">Cabaña reservada</th>
                            <th className="p-3 font-normal">Fecha de Reservación</th>
                            <th className="p-3 font-normal">Estado</th>
                            <th className="p-3 font-normal">Check in</th>
                            <th className="p-3 font-normal">Chek out</th>
                            <th className="p-3 font-normal">Cantidad de personas</th>
                            <th className="p-3 font-normal">Precio total</th>
                            <th className="p-3 font-normal">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {data?.reservations?.map((cottage, index) => (
                            <tr key={cottage.id} className="hover:bg-gray-100">
                                <td className="p-3 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {cottage.id}
                                </td>
                                <td className="p-3 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {cottage?.package?.name}
                                </td>
                                <td className="p-3">{cottage.cottages?.length > 0 ? (
                                    <ul className="list-disc list-inside">
                                        {cottage.cottages.map(cottage => (
                                            <li key={cottage?.id}>{cottage?.name_cottage}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>No hay cabañas asociadas</span>
                                )}</td>
                                <td className="p-3">
                                    {new Date(cottage?.date_reservation).toISOString().split('T')[0]}
                                </td>
                                <td className="p-3">
                                    <span style={{ color: cottage?.state === 1 ? 'green' : 'red' }}>
                                        {cottage?.state === 1 ? 'Pagado' : 'Falta pagar'}
                                    </span>

                                </td>
                                <td className="p-3">
                                    {new Date(cottage?.date_start).toISOString().split('T')[0]}
                                </td>
                                <td className="p-3">
                                    {new Date(cottage?.date_end).toISOString().split('T')[0]}
                                </td>
                                <td className="p-3">{cottage?.package?.max_person}</td>
                                <td className="p-3">{cottage?.total_price}</td>
                                <td className="p-2">
                                    <div className="flex gap-2">
                                        <button className="px-3 py-2 rounded-lg text-white bg-green-500 hover:bg-green-700" onClick={() => handleEditClick(cottage)}>
                                            <i className="fa-solid fa-pen "></i>
                                        </button>
                                        <button className="px-3 py-2 rounded-lg text-white bg-red-500 hover:bg-red-700" onClick={() => handledeleteClick(cottage.id)}>
                                            <i className="fa-solid fa-trash "></i>
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