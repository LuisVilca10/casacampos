// src/organisms/HistorySection.jsx
import IconWithLabel from "../atoms/IconWithLabel";
import Carousel from "../molecules/carousel/Carousel";
import { Trees, RockingChair, MountainSnow, Users } from "lucide-react";
import StoryDescription from "../molecules/StoryDescription";

const HistorySection = ({ images }) => (
    <div className="md:px-20 md:py-14 p-7 bg-gray-100">
        <div className="container md:px-10 mx-auto md:flex">
            <Carousel images={images} />
            <div className="md:mx-7 md:w-1/2 w-full">
                <StoryDescription />

                <div className="flex justify-between mt-5">
                    <div className="flex flex-wrap gap-x-11">
                        <IconWithLabel Icon={Trees} label="Naturaleza" />
                        <IconWithLabel Icon={RockingChair} label="Descanso" />
                        <IconWithLabel Icon={MountainSnow} label="Aventura" />
                        <IconWithLabel Icon={Users} label="Familia" />
                    </div>

                    <div className="flex justify-start md:mt-5 mr-3">
                        <button className="btn text-red-700 border-red-400 hover:text-white hover:bg-red-700 w-auto">
                            Reservar Ya!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HistorySection;
