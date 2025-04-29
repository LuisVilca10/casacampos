// molecules/ServiceList.js
import { CircleParking, UsersRound, Volleyball, WavesLadder, Wifi } from 'lucide-react';

const ServiceList = () => (
    <div className="flex flex-wrap justify-start mt-3 gap-y-4">
        <div className="w-1/3 flex gap-x-2 text-sm">
            <Wifi size="20px" /> WiFi gratis
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
            <CircleParking size="20px" /> Parking gratis
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
            <UsersRound size="20px" /> Habitaciones familiares
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
            <WavesLadder size="20px" /> Piscina Temperada
        </div>
        <div className="w-1/3 flex gap-x-2 text-sm">
            <Volleyball size="20px" /> Juegos con Pelota
        </div>
    </div>
);

export default ServiceList;
