import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitTextIntoLines } from "../Utils/splitTextsIntoLines.js";

export function useSplitTextAnimation({ headingRef, textRef }) {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const heading = headingRef?.current;
    const textEl = textRef?.current;

    if (!textEl) return;

    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        // Clear previous split (important!)
        textEl.innerHTML = textEl.textContent;
        delete textEl.dataset.split;

        // Heading animation
        if (heading) {
          gsap.from(heading, {
            yPercent: 120,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              once: true,
            },
          });
        }

        // Split + animate text
        const lines = splitTextIntoLines(textEl);

        gsap.from(lines, {
          yPercent: 100,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: textEl,
            start: "top 70%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}
