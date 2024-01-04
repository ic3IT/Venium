import { useRef, useEffect } from "react";
import logo from "../public/assets/images/logo.png";
import twitterImg from "../public/assets/images/twitter.svg";
import discordImg from "../public/assets/images/discord.svg";
import instagramImg from "../public/assets/images/instagram.svg";
import Image from "next/image";
import Link from "next/link";

function Header({ showBackground }) {
  return (
    <header className={`fixed ${showBackground ? "backdrop-blur-sm bg-main-black bg-opacity-25 animate duration-300" : ""} w-screen z-40`}>
      <div className="sticky top-0 grid grid-cols-1 md:grid-cols-2 p-0 sm:p-2 md:px-24">
        {/* left */}
        <div className="flex flex-wrap h-20 sm:items-center justify-center md:justify-start">
          <Image src={logo} objectFit="contain" alt="" height={100} width={100}/>
        </div>

        {/* right icons */}
        <div className="hidden md:flex justify-end items-center">
          <Link href="https://twitter.com/venium_io" target='_blank' rel="noopener noreferrer">
            <div className="mx-1 md:mx-2 -mt-2 sm:">
              <Image
                src={twitterImg}
                objectFit="contain"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </Link>
          <Link href="https://discord.gg/2qgUnqVT" target='_blank' rel="noopener noreferrer">
            <div className="mx-1 md:mx-2">
              <Image
                src={discordImg}
                objectFit="contain"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </Link>
          <a href="https://www.zure.venium.io" target="_blank" rel="noopener noreferrer">
            <button className="font-helvetica-title text-large text-slate-50 ml-3 rounded-md border-2 bg-main-black py-2 px-5 hover:bg-slate-50 hover:border-slate-50 hover:text-zinc-900 transition duration-150 active:scale-90">
             ZURE
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
