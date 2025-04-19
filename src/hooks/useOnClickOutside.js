import { useEffect } from 'react';

// Hook personalizado para detectar clics fuera de un elemento
export const useOnClickOutside = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(); // Ejecuta la función cuando se hace clic fuera del componente
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup en caso de que el componente se desmonte
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};
