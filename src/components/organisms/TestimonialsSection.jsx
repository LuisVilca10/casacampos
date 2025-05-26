// src/organisms/TestimonialsSection.jsx
import TestimonialCard from "../molecules/TestimonialCard";

const TestimonialsSection = ({ testimonials }) => (
    <section className="py-4 mt-3 mb-7">
        {/* <main className="w-full flex flex-col gap-3 items-center justify-start mb-10">
            <h2 className="md:text-4xl text-2xl font-bold capitalize">
                Nuestros Clientes nos Respaldan
            </h2>
        </main> */}
        <main className="w-full flex flex-col gap-3 items-start justify-start mb-10">
            <h2 className="md:text-4xl text-2xl font-bold capitalize">
                Opinion de los clientes
            </h2>
        </main>
        <div className="container">
            <div className="carousel-wrapper overflow-hidden w-full">
                <div className="flex whitespace-normal animate-scroll">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard testimonial={t} key={i} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default TestimonialsSection;
