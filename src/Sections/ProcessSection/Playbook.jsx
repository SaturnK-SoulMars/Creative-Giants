import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Playbook = () => {
  const imageWrappers = useRef([]);

  useLayoutEffect(() => {
    imageWrappers.current.forEach((wrapper) => {
      gsap.fromTo(
        wrapper,
        { height: 0 },
        {
          height: "100%",
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="px-8 min-h-screen w-full bg-[#FFFEF7]  ">

      {/* HEADER */}
      <div className="h-[20vh] flex w-full">
        <div className="w-[30%] pt-8">
          <h1>OUR PROCESS</h1>
        </div>

        <div className="w-[70%] flex items-center text-6xl font-[Light]">
          <h1>The Play Book (it's not rocket science)</h1>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="h-[40vh] flex w-full py-8 border-t-2 border-black ">
        <div className="w-[30%]  ">
          <h1 className="font-[Light] text-5xl">01</h1>
        </div>

        <div className="w-[70%] flex items-center">
          <div
            ref={(el) => (imageWrappers.current[0] = el)}
            className="w-[45%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/684fdad08d16b8e0736b7b38_image-(Compressify.io).webp"
              alt=""
            />
          </div>

          <div className="w-[55%] h-full flex flex-col justify-between  px-5 font-[Light]">
            <div className="overflow-hidden">
              <h1 className="text-4xl">Discovery</h1>
            </div>

            <div className="overflow-hidden">
              <p>The Discovery phase is the launchpad for your project. A detailed examination of the ideas, scope, challenges and opportunities that your project holds. This is a creative process where clients, producers and creatives work together to remove the barriers to a project’s success and agree on an ambitious but achievable vision.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="h-[40vh] flex w-full py-8 border-t-2 border-black">
        <div className="w-[30%]  ">
          <h1 className="font-[Light] text-5xl">02</h1>
        </div>

        <div className="w-[70%] flex items-center">
          <div
            ref={(el) => (imageWrappers.current[1] = el)}
            className="w-[45%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/684fdadd9163a36aa16b0f44_image-(Compressify.io)_1.webp"
              alt=""
            />
          </div>

          <div className="w-[55%] h-full flex flex-col justify-between  px-5 font-[Light]">
            <div className="overflow-hidden">
              <h1 className="text-4xl">Creative and technical development</h1>
            </div>

            <div className="overflow-hidden">
              <p>Part two of the Playbook takes the agreed vision from the discovery phase and turns it into a detailed blueprint for success. Materials, techniques, venue-finding, staffing - every element of of a project is meticulously planned and costed with sustainability a constant priority. Think of this stage as the architectural drawings that will soon become your palace.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40vh] flex w-full py-8 border-t-2 border-black">
        <div className="w-[30%]  ">
          <h1 className="font-[Light] text-5xl">03</h1>
        </div>

        <div className="w-[70%] flex items-center">
          <div
            ref={(el) => (imageWrappers.current[2] = el)}
            className="w-[45%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/684fdae7d3f2613701e6d930_image-(Compressify.io)_1_1.webp"
              alt=""
            />
          </div>

          <div className="w-[55%] h-full flex flex-col justify-between  px-5 font-[Light]">
            <div className="overflow-hidden">
              <h1 className="text-4xl">Delivery and Construction</h1>
            </div>

            <div className="overflow-hidden">
              <p>This is where your project starts coming to life in the real world. We manage and oversee the build, safety, security and installation process, ensuring every detail from phase two is delivered with care, precision and dedication. At the end of this phase, your project is ready to be unveiled to the world.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="h-[40vh] flex w-full py-8 border-t-2 border-black">
        <div className="w-[30%]  ">
          <h1 className="font-[Light] text-5xl">04</h1>
        </div>

        <div className="w-[70%] flex items-center">
          <div
            ref={(el) => (imageWrappers.current[3] = el)}
            className="w-[45%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/684fdaf4ce7020a2acdf28eb_image-(Compressify.io)_1_1_1.webp"
              alt=""
            />
          </div>

          <div className="w-[55%] h-full flex flex-col justify-between  px-5 font-[Light]">
            <div className="overflow-hidden">
              <h1 className="text-4xl">Impact and completion</h1>
            </div>

            <div className="overflow-hidden">
              <p>Where many other agencies would draw the line under phase three, we continue to be engaged and present throughout the full life-cycle of your project. This may mean removing or disposing of materials sustainably, transferring ownership to a third party, or finding a new home for your artwork or installation.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Playbook;
