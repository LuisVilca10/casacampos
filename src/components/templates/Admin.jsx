import { Link } from "react-router-dom";

const Admin = () => {
    const cabins = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        nombre: `Cabaña ${i + 1}`,
        ubicacion: `Zona ${((i % 5) + 1)}`,
        precio: `$${100 + i * 10}`,
        estado: i % 2 === 0 ? "Disponible" : "Ocupada",
    }));

    return (
        <div className="flex min-h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-base-200 h-screen p-4 overflow-y-auto">
                <ul className="menu">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/cabins">Cabañas</Link></li>
                    <li><Link to="/bookings">Reservas</Link></li>
                    <li><Link to="/users">Usuarios</Link></li>
                </ul>
            </aside>

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex-1 overflow-y-auto p-4 bg-base-100">
                    <h1 className="text-2xl font-bold mb-4">Lista de Cabañas</h1>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead className="bg-base-200">
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
                                            <span
                                                className={`badge ${cabaña.estado === "Disponible"
                                                        ? "badge-success"
                                                        : "badge-error"
                                                    }`}
                                            >
                                                {cabaña.estado}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-info mr-2">Editar</button>
                                            <button className="btn btn-sm btn-error">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
