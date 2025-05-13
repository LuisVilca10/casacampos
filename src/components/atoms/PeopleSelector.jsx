import { ChevronDown, User, Plus, Minus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function PeopleSelector({ setPeople }) {
    const [open, setOpen] = useState(false);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    const panelRef = useRef(null); // Referencia para el panel
    const inputRef = useRef(null); // Referencia para el input principal

    // Detectar clics fuera del panel
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                panelRef.current && !panelRef.current.contains(event.target) &&
                inputRef.current && !inputRef.current.contains(event.target)
            ) {
                setOpen(false); // Cierra el panel si se hace clic fuera
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Cleanup en caso de que el componente se desmonte
        };
    }, []);
    useEffect(() => {
        setPeople(adults + children);  // Llama a la función del padre con el total
    }, [adults, children, setPeople]);
    const handlePerson = (type, value) => {
        if (type === 'rooms') {
            if (value >= 0 && value <= 8) setRooms(value);
            return;
        }
        const total = type === 'adults' ? value + children : type === 'children' ? adults + value : adults + children;

        if (value >= 0 && total <= 16) {
            if (type === 'adults') setAdults(value);
            else if (type === 'children') setChildren(value);
        }

    };

    return (
        <>
            <div className="relative w-full border rounded-lg">
                {/* Input visual principal */}
                <div
                    ref={inputRef}
                    className="bg-white flex py-3.5 px-4 text-black rounded-md"
                    onClick={() => setOpen(!open)}
                >
                    <User className="text-black mr-2" />
                    <span className="text-base">
                        {adults} adulto{adults !== 1 ? "s" : ""} · {children} niño{children !== 1 ? "s" : ""} · {rooms} habitación{rooms !== 1 ? "es" : ""}
                    </span>
                    <ChevronDown className="ml-auto text-red-700" />
                </div>

                {/* Panel de opciones */}
                {open && (
                    <div
                        ref={panelRef}
                        className="absolute bg-white shadow-lg rounded-md p-4 mt-2 z-10 w-full space-y-3 text-black"
                    >
                        {[{ label: "Adultos", value: adults, type: "adults", setter: setAdults },
                        { label: "Niños", value: children, type: "children", setter: setChildren },
                        { label: "Habitaciones", value: rooms, type: "rooms", setter: setRooms },
                        ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                                <span>{item.label}</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="bg-gray-200 px-2 py-1 rounded"
                                        onClick={() => handlePerson(item.type, item.value - 1)}
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span>{item.value}</span>
                                    <button
                                        className="bg-gray-200 px-2 py-1 rounded"
                                        onClick={() => handlePerson(item.type, item.value + 1)}
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default PeopleSelector;
