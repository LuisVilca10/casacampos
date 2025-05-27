function TableCottage() {

    const cabins = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        nombre: `Cabaña ${i + 1}`,
        ubicacion: `Zona ${((i % 5) + 1)}`,
        precio: `$${100 + i * 10}`,
        estado: i % 2 === 0 ? "Disponible" : "Ocupada",
    }));

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Lista de Cabañas</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full min-w-[800px]">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Ubicación</th>
                            <th>Precio</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cabins.map((cabaña) => (
                            <tr key={cabaña.id}>
                                <td>{cabaña.id}</td>
                                <td>{cabaña.nombre}</td>
                                <td>{cabaña.ubicacion}</td>
                                <td>{cabaña.precio}</td>
                                <td>
                                    <span className={`badge ${cabaña.estado === "Disponible" ? "badge-success" : "badge-error"}`}>
                                        {cabaña.estado}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex gap-2">
                                        <button className="btn btn-sm btn-info">Editar</button>
                                        <button className="btn btn-sm btn-error">Eliminar</button>
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

export default TableCottage;