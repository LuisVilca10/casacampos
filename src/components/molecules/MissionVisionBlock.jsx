import ImageWithText from "../atoms/ImageWithText";


const MissionVisionBlock = ({ type }) => {
    const data = {
        mision: {
            src: "../../src/assets/aboutus/Mision.png",
            alt: "Misión",
            title: "Misión",
            text: "Queremos ser su destino elegido para desconectarse del ajetreo y reconectar con lo esencial.",
        },
        vision: {
            src: "../../src/assets/aboutus/Vision.png",
            alt: "Visión",
            title: "Visión",
            text: "Soñamos con expandir nuestras opciones de alojamiento y seguir creando experiencias únicas.",
        },
    };

    return <ImageWithText {...data[type]} />;
};

export default MissionVisionBlock;
