// src/organisms/MissionVisionSection.jsx

import MissionVisionBlock from "../molecules/MissionVisionBlock";


const MissionVisionSection = () => (
    <div className="md:px-20 md:py-6 p-7">
        <div className="container mx-auto">
            <section className="md:px-16">
                <div className="grid md:grid-cols-2 md:gap-10">
                    <MissionVisionBlock type="mision" />
                    <MissionVisionBlock type="vision" />
                </div>
            </section>
        </div>
    </div>
);

export default MissionVisionSection;
