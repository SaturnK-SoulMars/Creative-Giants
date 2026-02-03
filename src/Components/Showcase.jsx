import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const showcaseData = [
    {
      type: "video",
      src: "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34%2F684fe7eb7bbb5f98f878e6b7_LG%20-%20photoreal%20fast-mp4%20Comp%201-transcode.mp4",
      height:"50vh"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      height:"40vh"
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      height:"30vh"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      height:"50vh"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      height:"35vh"
    },
    {
      type: "video",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      height:"45vh"
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".showcase-card");

    gsap.set(cards, { yPercent: 520 });

    gsap.to(cards, {
      yPercent: -100,
      ease: "none",
      stagger: 0.12,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 2}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen bg-black flex overflow-hidden -mt-0.5"
    >
      {/* CENTER TEXT */}
      <div className="pointer-events-none text-white w-full h-[40vh] flex flex-col items-center justify-center gap-2 absolute top-1/2 -translate-y-1/2 z-30 mix-blend-difference">
        <h3 className="font-[Light] text-2xl font-extrabold">GET STARTED</h3>
        <h1 className="font-[Regular] text-4xl md:text-7xl">Let's make</h1>
        <h1 className="font-[Regular] text-4xl  md:text-7xl">things happen.</h1>
      </div>

      
      {showcaseData.map((item, i) => (
        <div
          key={i}
          className={`h-full flex-1 px-2 ${i < showcaseData.length - 1 ? "border-r border-white" : ""
            } ${i > 3 ? "hidden sm:flex" : ""}`}
        >
          <div
            className="showcase-card w-full overflow-hidden"
            style={{ height: item.height }}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        </div>
      ))}


      {/* FADE MASK */}
      {/* <div className="pointer-events-none absolute inset-0 z-20
        bg-[linear-gradient(to_bottom,#070707_0%,transparent_18%,transparent_82%,#070707_100%)]"
      /> */}
    </div>
  );
};

export default Showcase;
