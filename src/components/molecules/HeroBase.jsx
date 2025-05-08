const HeroBase = ({ subtitle, description }) => {
    return (
        <>
            <div className="bg-center bg-cover py-20 flex flex-col justify-center text-white px-4"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
                }}>
                <div className="flex flex-col h-full w-full text-white text-start container mx-auto md:mt-12 md:mb-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 md:w-1/2"> {subtitle}</h1>
                    <p className="text-lg md:text-xl mb-2 md:text-start md:w-1/2 font-extralight"> {description}</p>
                </div>
            </div>
        </>
    );
};

export default HeroBase;
