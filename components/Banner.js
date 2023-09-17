import Image from "next/image";
import neonLogo from "../public/assets/images/Purple_Neon_Drip_Logo.svg";
// import normaleLogo from "../public/assets/images/Originele_New_Drip_logo_V6_-_512px_X_512px.svg";

function Banner() {
  return (
    <div className="h-screen bg-main-black md:flex">
      {/* <div className="relative items-center flex flex-col bg-fixed justify-center bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen"> */}
      {/* <div className="relative items-center flex flex-col bg-fixed justify-center bg-[url(/assets/images/Dripping-Background.png)] bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen"> */}
      <div className="relative items-center flex flex-col bg-fixed justify-center bg-black bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen">
        <h1 className="flex font-akira text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white bounce-in">Scrollium</h1>
        {/* <div className="flex"> */}
        <div class="grid grid-cols-4 mt-32 items-center justify-center">
    <a href="https://scrollium.vercel.app" target="_blank" rel="noopener noreferrer">
        <button class="flex font-akira text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white bounce-in pl-5 md:pl-5">
    Raffle
</button>

    </a>
</div>
<br className="sm:block sm:visible" />
<br className="sm:block sm:visible" />


<div className="">
        <a href="https://discord.com/invite/5qGxb8Sa" target="_blank" rel="noopener noreferrer">
    <button class="flex font-akira text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white bounce-in"> 
        Pass 
    </button>
    </a>
    </div>

        <div className="relative w-48 sm:w-64 md:w-96 lg:w-[600px] h-32 sm:h-48 md:h-72 lg:h-[400px]">
            
            {/* <Image src={normaleLogo} objectFit="cover" /> */}
            {/* <Image src={neonLogo} objectFit="cover" /> */}
          </div>

        {/* </div> */}
        {/* <button className="flex mt-5 items-center rounded-full text-white font-akira bg-purple-700 h-10 top-96 p-6 text-lg hover:shadow-xl hover:bg-purple-800 transition duration-150 active:scale-95">
          Connect Wallet
        </button> */}
      </div>
    </div>
  );
}

export default Banner;
