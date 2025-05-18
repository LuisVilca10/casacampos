import { Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { isWithinInterval, eachDayOfInterval } from 'date-fns';
import Swal from 'sweetalert2';
registerLocale('es', es);

const DatePickerComponent = ({ range, setRange, reservedRanges }) => {
    const [startDate, endDate] = range;

    const excludedIntervals = reservedRanges?.map(([start, end]) => ({
        start,
        end
    }));

    const safeReservedRanges = reservedRanges ?? [];

    const isDateInReservedRange = (date) => {
        return safeReservedRanges.some(([start, end]) =>
            isWithinInterval(date, { start, end })
        );
    };

    const isRangeValid = (start, end) => {
        if (!start || !end) return true;

        const daysInRange = eachDayOfInterval({ start, end });
        return !daysInRange.some((date) => isDateInReservedRange(date));
    };

    const handleChange = (update) => {
        const [start, end] = update;

        if (start && end && !isRangeValid(start, end)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El rango seleccionado incluye fechas ya reservadas.",
                footer: '<a href="#">Selecciona un nuevo rango disponible</a>'
            });

            // Restablecer el valor del selector
            setRange([null, null]);
            return;
        }

        setRange(update);
    };


    return (
        <div className="w-full relative">
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={new Date()}
                popperPlacement="bottom"
                dropdownMode="select"
                showMonthDropdown
                showYearDropdown
                locale="es"
                excludeDateIntervals={excludedIntervals}
                dateFormat="dd 'de' MMMM"
                withPortal
                placeholderText="Check-in ---- Check-out"
                onKeyDown={(e) => e.preventDefault()}
                className="caret-transparent lg:w-[27rem] w-[20rem] bg-white flex py-3.5 px-4 text-black rounded-md border border-gray-300 shadow-sm focus:outline-none transition"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-700">
                <Calendar />
            </span>
        </div>
    );
};

export default DatePickerComponent;
