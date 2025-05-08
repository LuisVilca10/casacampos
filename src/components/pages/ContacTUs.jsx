import { Phone, Mail, User, MessageCircle, Pencil, MapPinHouse, MailCheck } from "lucide-react";
import HeroBase from "../molecules/HeroBase";

function ContactUs() {
    return (
        <>
            {/*Inicio hero*/}
            <HeroBase subtitle="Contáctanos" description="¿Tienes preguntas, quieres reservar o simplemente saber más sobre nuestras cabañas? Escríbenos y con gusto te responderemos.">
            </HeroBase>
            {/*Fin hero*/}
            <div className="container mx-auto py-16 px-4 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Lado izquierdo: texto */}
                    <div>
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">
                            Obtenga su Cotización Gratuita Instantánea Ahora
                        </h2>
                        <p className="text-slate-600 text-lg mb-3 font-medium">
                            Tu escapada perfecta empieza aquí.
                        </p>
                        <p className="text-slate-500 mb-6">
                            Relájate en nuestras acogedoras cabañas rodeadas de paisajes increíbles. Ofrecemos opciones para parejas, familias y grupos. Solicita tu cotización sin compromiso y vive la experiencia de desconectarte de la rutina.
                        </p>
                        <div className="flex flex-col tems-center gap-4 text-slate-700">
                            <div className="flex gap-4 items-center">
                                <div className="bg-red-700 text-white p-3 rounded-full">
                                    <Phone size={20} />
                                </div>
                                <span className="text-lg font-semibold">(+51) 987 563 711</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-red-700 text-white p-3 rounded-full">
                                    <MapPinHouse size={20} />
                                </div>
                                <span className="text-lg font-semibold">Arequipa - Yanahuara</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-red-700 text-white p-3 rounded-full">
                                    <MailCheck size={20} />
                                </div>
                                <span className="text-lg font-semibold">arequipacasacampo@gmail.com</span>
                            </div>
                        </div>

                        <div className="mt-5">
                            <iframe
                                title="Imagen"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.9153845853557!2d-71.5348554!3d-16.3772141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0046940e37%3A0x6dce74acc45296dc!2sCasa%20Campo%20Arequipa!5e1!3m2!1ses-419!2spe!4v1728063705471!5m2!1ses-419!2spe"
                                className="rounded-lg border lg:w-[650px] lg:h-[300px] object-cover w-full"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Lado derecho: formulario */}
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 w-full max-w-lg mx-auto h-">
                        <form className="flex flex-col gap-4 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium text-slate-700 mb-2">Nombre completo</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <User size={18} />
                                    <input type="text" className="grow" placeholder="Name" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium text-slate-700 mb-2">Teléfono</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <Phone size={18} />
                                    <input type="tel" className="grow" placeholder="Teléfono" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium text-slate-700 mb-2">Correo Electronico</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <Mail size={18} />
                                    <input type="email" className="grow" placeholder="Correo Electronico" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium text-slate-700 mb-2">Asunto</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <MessageCircle size={18} />
                                    <input type="text" className="grow" placeholder="Asunto" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium text-slate-700 mb-2">Mensaje</span>
                                </label>
                                <label className="textarea textarea-bordered flex items-start gap-2">
                                    <Pencil size={18} className="mt-2" />
                                    <textarea className="grow w-full resize-none" rows={3} placeholder="¿Cómo podemos ayudarte? ¡No dudes en contactarnos!"></textarea>
                                </label>
                            </div>

                            <button className="btn bg-red-700 text-white hover:bg-green-800 mt-4 w-full rounded-xl">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ContactUs;

