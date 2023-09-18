import Image from "next/image";
import neonLogo from "../public/assets/images/Purple_Neon_Drip_Logo.svg";
// import normaleLogo from "../public/assets/images/Originele_New_Drip_logo_V6_-_512px_X_512px.svg";

function Banner() {
  return (
    
    <div className="h-screen bg-main-black md:flex">
      <div className="">
      </div>
      {/* <div className="relative items-center flex flex-col bg-fixed justify-center bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen"> */}
      {/* <div className="relative items-center flex flex-col bg-fixed justify-center bg-[url(/assets/images/Dripping-Background.png)] bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen"> */}
      <div className="relative items-center flex flex-col bg-fixed justify-center bg-black bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen">
  <h1 className="font-akira text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white bounce-in mt-16 sm:mt-32 md:mt-48 lg:mt-64">Scrollium</h1>

<div className="grid grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-32 items-center justify-center w-full">

    {/* Spacer div */}
    <div></div>

    <a href="https://scrollium.vercel.app" target="_blank" rel="noopener noreferrer" className="col-start-2">
      <button className="font-akira text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white bounce-in px-2 sm:px-5 py-1 -mt-4 sm:-mt-8">Raffle</button>
    </a>

    <a href="https://prophex.vercel.app" target="_blank" rel="noopener noreferrer" className="col-start-3">
      <button className="font-akira text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white bounce-in px-2 sm:px-5 py-1 -mt-4 sm:-mt-8">Prophex</button>
    </a>

    {/* Spacer div */}
    <div></div>

</div>
Changes made:

I've introduced additional breakpoints (sm:, md:, lg:, xl:) to incrementally adjust



<br className="sm:block sm:visible" />
<br className="sm:block sm:visible" />


<div className="">
        <a href="https://discord.com/invite/5qGxb8Sa" target="_blank" rel="noopener noreferrer">
    <button class="flex font-akira text-2xl sm:text-5xl md:text-6xl lg:text-6xl text-white bounce-in mt-8 sm:mt-0"> 
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
