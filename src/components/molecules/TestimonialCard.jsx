import ClientAvatar from "../atoms/ClientAvatar";
import CottageRating from "../atoms/CottageRating";


const TestimonialCard = ({ testimonial }) => (
    <div className="h-full w-[400px] m-2 flex-shrink-0 cursor-pointer border p-3 rounded-2xl">
        <div className="flex items-center gap-x-9 text-slate-800 justify-between">
            <ClientAvatar
                img={testimonial.img}
                name={testimonial.name}
                country={testimonial.country}
            />
            <CottageRating rating={testimonial.rating} />
        </div>
        <div className="border-b mt-2" />
        <div className="mt-2">
            <p className="text-base text-slate-600 font-light leading-normal break-words text-justify">
                “{testimonial.description}”
            </p>
        </div>
    </div>
);

export default TestimonialCard;
