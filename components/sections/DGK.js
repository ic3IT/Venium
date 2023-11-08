import Image from "next/image";
import twins from "../../public/assets/images/twin_dinos.png";

function DGK({sectionRef}) {
  return (
    <section className="bg-white" ref={sectionRef}>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto py-40 sm:px-16">
        <div className="text-black mb-12 md:mb-0 order-1 text-center md:text-left p-7 md:p-0">
          <h1 className="font-helvetica-title text-3xl mb-8">ScrollPass: The Key to Venium&apos;s Future</h1>
          <p className="max-w-lg text-xl font-helvetica-regular">
          Dive early into the Venium universe and earn your exclusive VenPass – a mintable NFT crafted especially for our pioneering supporters. As you engage and interact with our platform, not only do you showcase your support, but you&apos;re also rewarded with this distinctive token of appreciation. But ScrollPass isn&apos;t just a mere token; it&apos;s a promise. A promise that unlocks a plethora of benefits, opportunities, and surprises in Venium&apos;s unfolding journey. Secure yours and pave the way to a future brimming with potential!
          </p>
        </div>
        <div className="flex items-center justify-center order-2">
          <div className="w-[300px] md:w-[400px]">
            <Image src={twins} objectFit="cover" className="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DGK;
