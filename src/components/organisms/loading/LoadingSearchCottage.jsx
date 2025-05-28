function LoadingSearchCottage() {
    return (
        <>
            <div className="py-10 space-y-4 container mx-auto animate-pulse">
                {/* Título */}
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-6" />

                {/* Estructura de columnas */}
                <div className="md:grid flex flex-col gap-y-2 mx-4 md:grid-cols-5 gap-4">

                    {/* Filtros */}
                    <div className="col-span-1 border p-4 rounded-xl space-y-4 w-full">
                        <div className="h-5 bg-gray-400 w-1/2 rounded" />
                        <div className="h-40 bg-gray-300 w-full rounded" />
                        <div className="h-5 bg-gray-400 w-1/2 rounded" />
                        <div className="h-10 bg-gray-300 w-full rounded" />
                        <div className="h-10 bg-gray-300 w-full rounded" />
                        <div className="h-10 bg-gray-300 w-full rounded" />
                    </div>

                    {/* Resultados simulados (ej. 2 tarjetas) */}
                    <div className="col-span-3 space-y-4">
                        {[1, 2].map((_, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-4 rounded-lg shadow-lg border">
                                <div className="w-full md:w-1/2 h-64 bg-gray-300 rounded-lg" />
                                <div className="w-full md:w-1/2 flex flex-col space-y-3 px-4">
                                    <div className="h-6 w-3/4 bg-gray-400 rounded" />
                                    <div className="h-4 w-full bg-gray-300 rounded" />
                                    <div className="h-4 w-5/6 bg-gray-300 rounded" />
                                    <div className="h-4 w-2/3 bg-gray-300 rounded" />
                                    <div className="h-4 w-24 bg-gray-400 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Paquete recomendado */}
                    <div className="col-span-1 border p-4 rounded-xl space-y-4">
                        <div className="h-6 w-2/3 bg-gray-300 rounded" />
                        <div className="h-40 bg-gray-300 w-full rounded" />
                        <div className="h-4 bg-gray-300 w-3/4 rounded" />
                        <div className="h-4 bg-gray-300 w-2/3 rounded" />
                        <div className="h-4 bg-gray-300 w-1/2 rounded" />
                    </div>
                </div>

                {/* Testimonios (placeholder simple) */}
                <div className="mt-8 space-y-4">
                    <div className="h-6 bg-gray-300 w-1/4 rounded" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="h-24 bg-gray-200 rounded-lg" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadingSearchCottage;