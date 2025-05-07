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
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col w-full min-h-screen">
              {/* Page content here */}
             
              <div className="navbar bg-base-100 shadow-md">
                <div className="flex-1">
                  <Link to="/" className="btn btn-ghost text-xl">
                    MiEmpresa
                  </Link>
                </div>
                <div className="flex-none gap-2">
                  <ul className="menu menu-horizontal px-1">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/cabins">Cabañas</Link></li>
                    <li><Link to="/reservas">Reservas</Link></li>
                    <li><Link to="/perfil">Perfil</Link></li>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                      </label>
                  </ul>
                </div>
              </div>
              <main className="flex-1 overflow-auto p-6">
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
              </main>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
               
                <div className="flex gap-2 sm:gap-4 items-center justify-center mb-4">
                    <a href="/">
                      <img
                        className="h-auto w-14 sm:w-28"
                        src="/../../src/assets/logo.png"
                        alt=""
                      />
                    </a>
                    <div className="cursor-pointer pt-1">
                      <Link to="/">
                        <h1 className="text-base sm:text-lg font-bold text-red-700">
                          Casa Campo
                        </h1>
                      </Link>
                      <div className="text-xs sm:text-sm font-semibold -mt-1">
                        Arequipa
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs bg-gradient-to-tr from-red-600 bg-red-500 w-full rounded-lg text-center text-white mb-3">
                    Administrador
                  </div>
                  <div className="flex flex-col gap-2 ">
                   
                      <Link to="/">
                        <div className="flex items-center justify-between truncate hover:bg-gray-100 group py-2 px-2 rounded-lg hover:shadow">
                          <div className="flex items-center ">
                            <span className="text-gray-500 group-hover:text-gray-800 duration-500">
                             
                            </span>
                            <span className="text-sm ml-3 2xl:opacity-100 duration-200">
                             Inicio
                            </span>
                          </div>
                        </div>
                      </Link>
                    
                  </div>
              </ul>
            </div>
          </div>
    );
};

export default Admin;
