import { useEffect, useRef, useState } from "react";

import bgImage from "../../assets/mountain_bg.png";
import midImage from "../../assets/buddha_at_lake2.png";
import fgImage from "../../assets/lush_plants2.png";

export default function ParallaxHeroSection() {


    return (
        <section>
            <div>
                <img src={bgImage} alt="Background" />
                <img src={midImage} alt="Middle Layer" />
                <img src={fgImage} alt="Foreground" />
            </div>
        </section>
    );
}