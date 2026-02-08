import Marquee from "./Marquee";

const words = [
  "Concept Design",
  "Production Planning",
  "Location Scouting",
  "Concept Design",
  "Production Planning",
  "Location Scouting",
];

const words2 = [
  "Brand Strategy",
  "Creative Direction",
  "Spatial Design",
  "Brand Strategy",
  "Creative Direction",
  "Spatial Design",
];

const words3 = [
  "Casting",
  "Commissioning & Artist Liaison",
  "Experiential Direction",
  "Casting",
  "Commissioning & Artist Liaison",
  "Experiential Direction",
];

const words4 = [
  "Funding Strategy",
  "Event Operations",
  "Life-Cycle Planning",
  "Funding Strategy",
  "Event Operations",
  "Life-Cycle Planning",
];

const Services = () => {
  return (
    <>
      <div className="h-[50vh] lg:h-[90vh] w-full flex flex-col items-center justify-center bg-[#FFFEF7]">
        <Marquee words={words} speed={0.6} direction="left" />
        <Marquee words={words2} speed={0.6} direction="right" />
        <Marquee words={words3} speed={0.6} direction="left" />
        <Marquee words={words4} speed={0.6} direction="right" />
      </div>
    </>
  );
};

export default Services;
