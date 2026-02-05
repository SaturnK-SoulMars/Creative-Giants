import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsList = () => {
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // Desktop / Tablet animation
    gsap.to(trackRef.current, {
      xPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: () => `+=${window.innerWidth * 2}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });
  });

  return () => mm.revert(); // cleanup
}, []);


  return (
    <>

      <div
        ref={pinRef}
        className="min-h-[101vh] w-screen bg-[#070707] overflow-hidden"
      >
        <div
          ref={trackRef}
          className="h-full w-full md:w-[300vw] flex flex-wrap items-center"
        >
          <div className="h-[70vh] w-screen bg-amber-300" />
          <div className="h-[70vh] w-screen bg-amber-700" />
          <div className="h-[70vh] w-screen bg-amber-100" />
        </div>
      </div>

      {/* NEXT NORMAL SECTION */}
      {/* <section className="h-screen w-full bg-green-600 flex items-center justify-center text-white text-4xl">
        GREEN SECTION
      </section> */}
    </>
  );
};

export default ProjectsList;
