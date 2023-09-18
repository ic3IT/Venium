import Image from "next/image";
import dino3 from "../../public/assets/images/roadmap_dino_3.png";
import logo from "../../public/assets/images/scrolliumlogo.png";


function AboutUs() {
  return (
    <section className="bg-main-black md:flex">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto py-40 sm:px-16">
        <div className="text-slate-50 mb-12 md:mb-0 order-1 text-center md:text-left p-7 md:p-0">
          <h1 className="font-helvetica-title text-3xl mb-8  md:text-left">
            ABOUT US
          </h1>
          <p className="text-xl font-helvetica-regular leading-7">
            Welcome to Scrollium, the pioneering ecosystem on the Scroll
            Network. We stand at the forefront of innovation, merging the power
            of cryptocurrency with the boundless potential of entertainment. Our vision is to propel the Scroll ecosystem into the
            future, and we&apos;re doing this one game at a time.
          </p>
          <h1 className="font-helvetica-title text-3xl mt-5 md:text-left">
            Why Scrollium?
          </h1>
          <p className="text-xl font-helvetica-regular mt-3 leading-7 font-semibold">
          1. All-Inclusive Experience:
          </p>
          <p className="text-xl font-helvetica-regular mt-1 leading-7">
          We are curating a diverse library tailored to the ever-evolving crypto landscape. Whether you&apos;re a newcomer exploring the basics or a seasoned expert delving into advanced topics, Scrollium offers a wealth of resources for every enthusiast.
          </p>

          <p className="text-xl font-helvetica-regular mt-3 leading-7 font-semibold">
          2. Interactive & Rewarding
          </p>
          <p className="text-xl font-helvetica-regular mt-1 leading-7">
          At Scrollium, every interaction is not just immersive but also rewarding. Our dApps don&apos;t just offer fun; they offer tangible returns, blending entertainment with real-world value.
          </p>
          <p className="text-xl font-helvetica-regular mt-3 leading-7 font-semibold">
          3. Designed for Scroll Adopters:
          </p>
          <p className="text-xl font-helvetica-regular mt-1 leading-7">
          We recognize the potential of the Scroll Network and are dedicated to enriching its ecosystem. Our platform is tailored for Beginner Scroll adopters, ensuring seamless compatibility, optimized performance, and an easy unmatched user experience.
          </p>
          <p className="text-xl font-helvetica-regular mt-3 leading-7 font-semibold">
          4. Forever Evolutionary:
          </p>
          <p className="text-xl font-helvetica-regular mt-1 leading-7">
          In a rapidly advancing digital age, we don&apos;t just adapt; we revolutionize. Scrollium is a living entity, continuously evolving, improving, and expanding. We&apos;re not here to follow trends but to set them.
          </p>


        </div>
        <div className="flex items-center justify-center order-2">
          <div className="w-[300px] md:w-[400px]">
            <Image
              src={logo}
              objectFit="cover"
              className="rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
