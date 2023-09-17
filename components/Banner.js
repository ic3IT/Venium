import Image from "next/image";
import neonLogo from "../public/assets/images/Purple_Neon_Drip_Logo.svg";
// import normaleLogo from "../public/assets/images/Originele_New_Drip_logo_V6_-_512px_X_512px.svg";

function Banner() {
  return (
    <div className="h-screen bg-main-black">
      {/* <div className="relative items-center flex flex-col bg-fixed justify-center bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen"> */}
      {/* <div className="relative items-center flex flex-col bg-fixed justify-center bg-[url(/assets/images/Dripping-Background.png)] bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen"> */}
      <div className="relative items-center flex flex-col bg-fixed justify-center bg-black bg-no-repeat bg-auto sm:bg-cover bg-center w-screen h-screen">
        <div>
          <h4 className="text-white text-lg flex-1">Scrollium</h4>

        </div>
        {/* <h1 className="flex font-akira text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">Dripping Dinos</h1> */}
        {/* <div className="flex"> */}
        <div class="grid grid-cols-4 mt-32">
    <a href="https://scrollium.vercel.app" target="_blank" rel="noopener noreferrer">
        <button class="text-white bounce-in">
            Raffle
        </button>
    </a>
    
    <button class="text-white pl-32 bounce-in"> 
        Pass
    </button>
</div>

          <div className="relative w-[600px] h-[400px]">
            
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
