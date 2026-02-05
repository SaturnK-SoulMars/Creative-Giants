import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const headingRef = useRef(null);
  const heading2Ref = useRef(null);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  // Heading animation
  useEffect(() => {
    gsap.from(
      [headingRef.current, heading2Ref.current],
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // TRUE trackpad horizontal swipe
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const cards = gsap.utils.toArray(track.children);

    if (!cards.length) return;

    const gap = 20;
    const cardWidth = cards[0].offsetWidth + gap;

    let currentIndex = 0;
    let isAnimating = false;

    const goToSlide = (index) => {
      isAnimating = true;

      gsap.to(track, {
        x: -index * cardWidth,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    const onWheel = (e) => {
      // 👉 ONLY react to horizontal gesture
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

      e.preventDefault();
      if (isAnimating) return;

      if (e.deltaX > 0) {
        // swipe left → go next
        currentIndex = Math.min(currentIndex + 1, cards.length - 1);
      } else {
        // swipe right → go previous
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      goToSlide(currentIndex);
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      wrapper.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="h-[120vh] w-full flex flex-col gap-5 bg-[#FFFEF7] py-5 justify-center">

      {/* HEADINGS */}
      <div className="px-10 flex flex-col gap-3 h-[20vh]">
        <div className="overflow-hidden font-[Light]">
          <h2 ref={headingRef}>NEWS & OPINION</h2>
        </div>

        <div className="overflow-hidden font-[Regular] py-3">
          <h1 ref={heading2Ref} className="text-7xl">
            Stay up to date
          </h1>
        </div>
      </div>

      {/* HORIZONTAL TRACKPAD SLIDER */}
      <div
        ref={wrapperRef}
        className="px-10 h-[70vh] w-[190vw] overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex items-center justify-center gap-5 h-full will-change-transform"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col h-[50vh] w-[30vw] shrink-0"
            >
              <div className="h-[50vh] w-full bg-red-200" />

              <h1 className="mt-4">
                CALM Missed Birthdays Wins Big
              </h1>

              <p className="mt-2 text-sm">
                There are certain projects that offer a sense of pride,
                regardless of how they’re received in the industry. In fact
                our favourite work is often defined not by the number of awards
                it receives, but by how emotionally invested we are in the idea.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
