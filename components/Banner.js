import Image from "next/image";
import neonLogo from "../public/assets/images/Purple_Neon_Drip_Logo.svg";
import { useState, useEffect } from "react";

function Banner() {
    const [isBouncing, setIsBouncing] = useState(false);

    return (
        <div className="flex flex-col h-screen bg-main-black items-center justify-center">
            <h1 className="font-akira text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-10 mt-52 ">
                Scrollium
            </h1>

            <div className="flex flex-wrap  gap-32 w-full mb-10 px-4 justify-center items-center">
    <div className="col-start-1 sm:col-start-1 md:col-start-2 lg:col-start-2 xl:col-start-2 2xl:col-start-2">
        <a
            href="https://raffle.scrollium.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center md:justify-normal"
        >
            <button className="font-akira text-xl md:text-3xl lg:text-5xl text-white px-5 py-1 border-b-2 mt-10 bounce-in">
                Raffle
            </button>
        </a>
    </div>
    <div className="col-start-1 sm:col-start-2 md:col-start-3 lg:col-start-3 xl:col-start-3 2xl:col-start-3">
        <a
            href="https://prophex.scrollium.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center md:justify-normal"
        >
            <button className="font-akira text-xl md:text-3xl lg:text-5xl text-white px-5 md:px-12 py-1 border-b-2 2xl:ml-48 mt-10 bounce-in line-through">
                Prophex
            </button>
        </a>
    </div>
</div>



            <a
                href="https://pass.scrollium.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-10 mt-5 translate-x-5 5xl:translate-x-4"
            >
                <button className="font-akira text-2xl md:text-6xl text-white border-b-2 pb-1 mr-10 mt-10 bounce-in">
                    Pass
                </button>
            </a>

            <div className="relative w-48 md:w-96 lg:w-[600px] h-32 md:h-72 lg:h-[400px]">
                {/* Uncomment the image you want to use */}
                {/* <Image src={neonLogo} objectFit="cover" /> */}
                {/* <Image src={normaleLogo} objectFit="cover" /> */}
            </div>
        </div>
    );
}

export default Banner;
