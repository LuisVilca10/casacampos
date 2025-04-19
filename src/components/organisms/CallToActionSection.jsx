import { Phone, SearchCheck } from 'lucide-react';

function CallToActionSection() {

    return (
        <>
            <div className="bg-center bg-cover grid justify-items-center" style={{
                backgroundImage:
                    "linear-gradient(rgba(153, 27, 27, 0.5), rgba(153, 27, 27, 1)), url('../../src/assets/casa-campo.jpg')"
            }}>
                <div className="max-w-[1180px] w-full mx-auto">
                    <div className="py-12 px-4">
                        <div className="flex md:flex-row flex-col justify-between items-center text-white md:gap-36 gap-4">
                            <div className="flex gap-4 items-center text-5xl md:text-left text-center">
                                <SearchCheck size={100} strokeWidth={2.5} />
                                <div className="border py-6 md:block hidden"></div>
                                <div className="text-2xl font-bold">
                                    Para Eventos especiales, Corporativos y consultas comunicate con nosotros o al Whatsapp.
                                </div>
                            </div>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-6 py-3 flex items-center gap-2 bg-green-700 border hover:bg-green-800  duration-500 rounded-lg text-sm whitespace-nowrap"
                            >
                                <Phone />
                                <h1 className="m-0">Contáctanos</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CallToActionSection;