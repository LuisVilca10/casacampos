import { Phone, SearchCheck } from 'lucide-react';

function CallToActionSection() {

    return (
        <>
            <div className="bg-center bg-cover grid justify-items-center" style={{
                backgroundImage:
                    "linear-gradient(rgba(153, 27, 27, 0.5), rgba(153, 27, 27, 1)), url('/casa-campo.jpg')"
            }}>
                <div className="container w-full mx-auto md:px-14">
                    <div className="py-12 px-4">
                        <div className="flex md:flex-row flex-col justify-between items-center text-white xl:gap-x-96 gap-4">
                            <div className="flex md:flex-row flex-col gap-4 items-center text-5xl md:text-left text-center justify-center">
                                <div className="w-12 h-12 sm:w-24 sm:h-24">
                                    <SearchCheck className="w-full h-full" strokeWidth={2.5} />
                                </div>
                                <div className="border py-6 md:block hidden"></div>
                                <div className="text-lg md:text-2xl font-bold">
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