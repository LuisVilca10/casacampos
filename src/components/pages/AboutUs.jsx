import { MountainSnow, RockingChair, Trees, Users } from "lucide-react";
import Carousel from "../molecules/carousel/Carousel";
import CottageRating from "../atoms/CottageRating";
import HeroBase from "../molecules/HeroBase";
import Pilares from "../organisms/Pilares";
import HistorySection from "../organisms/HistorySection";
import MissionVisionSection from "../organisms/MissionVisionSection";
import TestimonialsSection from "../organisms/TestimonialsSection";



function AboutUs() {
    const imagenesCarrusel = [
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            alt: 'Imagen 2'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            alt: 'Imagen 2'
        }
    ];

    const ClientsRecomend = [
        {
            name: "Tania Andrew",
            country: "Perú",
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
            description: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!!",
            rating: 5
        },
        {
            name: "Carlos García",
            country: "México",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            description: "Great experience! The platform helped me speed up my workflow and the components were easy to customize.",
            rating: 4
        },
        {
            name: "Julia Fernandes",
            country: "Brasil",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            description: "Very helpful templates and a friendly team behind the scenes. Highly recommended!",
            rating: 4
        },
        {
            name: "Diego Sánchez",
            country: "Argentina",
            img: "https://randomuser.me/api/portraits/men/76.jpg",
            description: "The UI/UX design is top-notch. I integrated everything seamlessly into my Laravel project.",
            rating: 5
        },
        {
            name: "Andrea Paredes",
            country: "Chile",
            img: "https://randomuser.me/api/portraits/women/30.jpg",
            description: "It saved me days of development. The documentation is clear and the code quality is impressive.",
            rating: 4
        },
        {
            name: "Luis Romero",
            country: "Colombia",
            img: "https://randomuser.me/api/portraits/men/50.jpg",
            description: "From design to deployment, it’s a smooth ride. Amazing job by the team!",
            rating: 4
        }
    ];

    return (
        <>
            {/*Inicio hero*/}
            <HeroBase subtitle="Sobre Nosotros" description="Descubre un refugio auténtico para descansar y disfrutar con tus seres queridos en Arequipa. En Casa Campo Arequipa te ofrecemos casas cálidas y cómodas, pensadas para que tu experiencia sea inolvidable.">
            </HeroBase>
            {/*Fin hero*/}

            {/*Inicio pilares*/}
            <Pilares />
            {/*Fin  pilares*/}

            {/*Inicio Nuestra Historia*/}
            <HistorySection images={imagenesCarrusel} />
            {/*fin Nuestra Historia*/}

            {/* Inico Mision y Vision */}
            <MissionVisionSection />


            <TestimonialsSection testimonials={ClientsRecomend} />

        </>
    );
}

export default AboutUs;