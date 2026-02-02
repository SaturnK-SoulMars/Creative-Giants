import { useRef } from "react";
import { useSplitTextAnimation } from "../Hooks/useSplitTextAnimation.js";

const Stats = () => {
  const paraRef = useRef(null);

  useSplitTextAnimation({
    textRef: paraRef,
  });

  return (
    <div className="min-h-[50vh] w-full">
      <p
        ref={paraRef}
        className="block font-[Light] text-[#767675] w-full text-[15px] md:text-[18.5px] leading-5"
      >
        We go beyond the traditional agency model and empower people across different
        industries to realise their creative ambitions. From the marketing director looking for more
        impact, to the artist reaching out to new audiences - we have the experience, the
        dedication, the skills and the resources to make seemingly impossible projects happen.
        Our clients don’t hire us, they join us. And in doing so, become Creative Giants themselves.
      </p>

      <div className="w-full mt-10 flex gap-5 flex-wrap sm:flex-nowrap overflow-hidden bg-green-400
      ">
        <div className="h-[30vh] w-full sm:w-[30%] bg-red-500">

        </div>

        <div className="h-[30vh] w-full sm:w-[30%] bg-red-500">

        </div>

        <div className="h-[30vh] w-full sm:w-[30%] bg-red-500">

        </div>
      </div>

    </div>
  );
};

export default Stats;
