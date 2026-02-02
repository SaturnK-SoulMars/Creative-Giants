import React from 'react'
import BgVideo from "../assets/Videos/CreativeBgVideo.mp4"

const BgVid = () => {
  return (
    <div className='h-screen w-full relative overflow-hidden'>
      <video
        className='h-full w-full object-cover'
        src={BgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='font-[Light] h-full w-full flex gap-3 md:gap-5 flex-col justify-end px-3 py-5 md:px-8 md:py-6 lg:px-8 lg:py-10 absolute top-0 left-0'>
        <h1 className='text-white text-[15px]  lg:text-xl '>BRIGHTON, UNITED KINGDOM </h1>
        <h1 className='text-white w-full text-xl sm:text-2xl md:text-3xl  md:w-[80%]  lg:text-5xl lg:w-[50%] '>Production, design, and the art of the possible</h1>
      </div>
    </div>

  )
}

export default BgVid
