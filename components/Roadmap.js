import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import roadmapSVG from "../public/assets/images/road-map.svg";
import dino3 from "../public/assets/images/roadmap_dino_3.png";
import closeIcon from "../public/assets/images/close.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Phase from "./Phase";
import scrolliumlogo from '../public/assets/images/scrolliumlogo.png';

function Roadmap({ buttonRef, changeColor }) {
  const { _, width } = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [animateState, setAnimateState] = useState("hidden");
  const [hideTimeoutOn, setHideTimeoutOn] = useState(false);
  const [showTimeoutOn, setShowTimeoutOn] = useState(false);
  const scrollTimerRef = useRef(null);

  const phasesData = [
    {
      name: "Phase 1",
      description: [
          { text: 'dApp Development:', style: 'bold' },
          { text: ' Successfully developed an intuitive dApp with a primary focus on user-friendliness.' },
          { text: 'Alpha Launch on Scroll:', style: 'bold' },
          { text: 'Scrollium\'s alpha version is now live, marking a significant milestone in our roadmap' },
          { text: 'UI Design:', style: 'bold' },
          { text: 'Emphasized a meticulously crafted user interface to ensure ease of use and a seamless experience for our users.' }
      ],
      image: scrolliumlogo,
    },
    {
      name: "Phase 2",
      description: [
          { text: 'User Feedback & Iteration:', style: 'bold' },
          { text: ' Gather feedback from initial users, identify pain points from the alpha launch, and refine accordingly.' },
          { text: 'Community Building:', style: 'bold' },
          { text: 'Host events, AMAs, and workshops to expand the Scrollium community and engage users on platforms like Discord and Telegram.' },
          { text: 'Partnerships', style: 'bold' },
          { text: 'Forge partnerships in the crypto realm to bolster and enhance the Scrollium ecosystem, collaborating with various dApps that can leverage Scrollium\'s intuitive platform.' },
      ],
      image: scrolliumlogo,
    },
    {
      name: "Phase 3",
      description: [
          { text: 'Platform Scaling:', style: 'bold' },
          { text: ' Based on the growing user base, enhance backend infrastructure to ensure smooth user experiences even under high demand.' },
          { text: 'Global Outreach:', style: 'bold' },
          { text: 'Begin targeting users in diverse geographical regions, considering localizations and region-specific partnerships to make Scrollium more globally accessible.' },
          { text: 'Safety & Security:', style: 'bold' },
          { text: 'Strengthen platform security by undergoing third-party audits and introducing additional safety features based on latest cybersecurity best practices.' },
      ],
      image: scrolliumlogo,
    },
  ];

  const handleOnClick = (e) => {
    e.preventDefault();
    if (!hideTimeoutOn || !showTimeoutOn) {
      if (show) {
        document.body.classList.remove('no-scroll');
        setAnimateState("fixed animate-slide-left");
        setHideTimeoutOn(true);
      } else {
        document.body.classList.add('no-scroll');
        setAnimateState("fixed animate-slide-right");
        setShowTimeoutOn(true);
      }
      setShow(!show);
    }
  };

  useEffect(() => {
    const roadmapEl = document.getElementById("roadmap");
    if (roadmapEl) {
      roadmapEl.addEventListener("wheel", handleRoadmapScroll);
    }
    return () => {
      if (roadmapEl) {
        roadmapEl.removeEventListener("wheel", handleRoadmapScroll);
      }
    };
  }, []);

  const handleRoadmapScroll = (e) => {
    const roadmapEl = document.getElementById("roadmap");
    
    if (roadmapEl.scrollTop === roadmapEl.scrollHeight - roadmapEl.offsetHeight && e.deltaY > 0) {
      // Clear any previous timer
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }

      // Start a new timer
      scrollTimerRef.current = setTimeout(() => {
        handleOnClick(e);
      }, 150); // 1000 milliseconds = 1 second
    }
  };

  useEffect(() => {
    const roadmapEl = document.getElementById("roadmap");
    if (roadmapEl) {
      roadmapEl.addEventListener("wheel", handleRoadmapScroll);
    }
    return () => {
      if (roadmapEl) {
        roadmapEl.removeEventListener("wheel", handleRoadmapScroll);
      }
    };
  }, [handleRoadmapScroll]);

  // Hide roadmap after animation has finished
  useEffect(() => {
    if (hideTimeoutOn) {
      setTimeout(() => {
        setHideTimeoutOn(false);
        setAnimateState("hidden");
      }, 1000);
      return () => clearTimeout();
    }
  }, [hideTimeoutOn]);

  useEffect(() => {
    if (showTimeoutOn) {
      setTimeout(() => {
        setShowTimeoutOn(false);
        setAnimateState("fixed");
      }, 1000);
      return () => clearTimeout();
    }
  }, [showTimeoutOn]);

  const RoadmapComponent = ({ phases }) => (
    <div
      className={`${animateState} top-0 z-50 h-screen bg-white p-5 lg:p-20 sm:w-4/6 md:w-5/12 duration-100 overflow-y-scroll`}
      id="roadmap"
    >
      {/* Top */}
      <div className="grid grid-cols-2 center items-center">
        <h1 className="text-black font-helvetica-title text-md md:text-xl justify-start">
          Venium ROADMAP
        </h1>
        <div className="flex justify-end">
          <button
            className="border-2 rounded-full p-2 flex hover:shadow-sm hover:scale-95"
            onClick={handleOnClick}
          >
            <Image
              src={closeIcon}
              layout="fixed"
              objectFit="contain"
              className=""
              alt=""
            />
          </button>
        </div>
      </div>
      {/* Content */}
      {phases.map((phase) => (
        <div className="pt-10" key={phase.name}>
          <Phase
            name={phase.name}
            description={phase.description}
            image={phase.image}
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <RoadmapComponent phases={phasesData} />

      <div
        className="fixed bottom-6 sm:bottom-10 pl-8 md:pl-32 w-5"
        ref={buttonRef}
      >
        <button
          className={`${
            changeColor ? "text-black" : "text-white"
          } sticky font-helvetica-title px-7 py-4 text-sm sm:text-md border-2 rounded-full backdrop-blur-md active:scale-95 transition duration-100 hover:shadow-xl hover:backdrop-blur-sm`}
          onClick={handleOnClick}
        >
          ROADMAP
        </button>
      </div>
    </>
  );
}

export default Roadmap;
