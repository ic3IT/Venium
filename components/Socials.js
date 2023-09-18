// Socials.js

import { useRef, useEffect } from "react";
import logo from "../public/assets/images/logo.png";
import twitterImg from "../public/assets/images/twitter.svg";
import discordImg from "../public/assets/images/discord.svg";
import instagramImg from "../public/assets/images/instagram.svg";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
    return (
        <div className="absolute right-0 flex justify-end items-center md:space-x-2 space-x-1 bg-black">
            <Link href="">
                <div className="mx-1 md:mx-2">
                    <Image
                        src={twitterImg}
                        objectFit="contain"
                        className="cursor-pointer"
                        alt=""
                    />
                </div>
            </Link>
            <Link href="https://discord.gg/5qGxb8Sa" target='_blank' rel="noopener noreferrer">
                <div className="mx-1 md:mx-2">
                    <Image
                        src={discordImg}
                        objectFit="contain"
                        className="cursor-pointer"
                        alt=""
                    />
                </div>
            </Link>
            <a href="https://scrollium.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="font-helvetica-title text-sm text-slate-50 ml-3 rounded-md border-2 bg-main-black py-2 px-5 hover:bg-slate-50 hover:border-slate-50 hover:text-zinc-900 transition duration-150 active:scale-90">
                    RAFFLE
                </button>
            </a>
        </div>
    );
}
