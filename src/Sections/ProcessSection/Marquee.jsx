import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = ({ words, speed = 0.6, direction = "left" }) => {
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const items = itemsRef.current;

    // responsive gap
    const GAP =
      window.innerWidth < 640
        ? 24
        : window.innerWidth < 1024
          ? 40
          : 65;

    // responsive speed feel
    const adjustedSpeed =
      window.innerWidth < 640 ? speed * 0.6 : speed;

    let totalWidth = 0;

    // place items side-by-side
    items.forEach((el) => {
      gsap.set(el, { x: totalWidth });
      totalWidth += el.offsetWidth + GAP;
    });

    const dir = direction === "left" ? -1 : 1;

    const tick = () => {
      items.forEach((el) => {
        let x = gsap.getProperty(el, "x") + dir * adjustedSpeed;

        // recycle logic
        if (dir === -1 && x < -el.offsetWidth) {
          x += totalWidth;
        }

        if (dir === 1 && x > totalWidth - el.offsetWidth) {
          x -= totalWidth;
        }

        gsap.set(el, { x });
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [speed, direction]);

  return (
    <div className="relative w-full h-[7vh] md:h-[15vh] overflow-hidden">
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            whitespace-nowrap
            flex items-center
            text-black font-[Light]
            text-xl sm:text-3xl md:text-6xl lg:text-7xl
          "
        >
          {/* DOT */}
          <span
            className="
              leading-none
              mr-3 sm:mr-5 md:mr-7
              text-lg sm:text-2xl md:text-5xl
            "
          >
            •
          </span>

          {/* WORD */}
          {word}
        </span>
      ))}
    </div>
  );
};

export default Marquee;
