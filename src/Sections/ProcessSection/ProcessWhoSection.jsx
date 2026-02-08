import React from 'react'

const ProcessWhoSection = () => {
 
  return (
    <div className='h-[60vh] lg:h-screen w-full bg-[#FFFEF7]  flex flex-col gap-4 items-center justify-center'>

      <div className='overflow-hidden font-[Regular]'>
        <h1>WHO WE ARE</h1>
      </div>

      <div className="h-[40vh] lg:h-[70vh] w-full flex flex-col justify-center items-center px-4 ">

        {/* LINE 1 */}
        <div className="overflow-hidden flex flex-wrap justify-center items-center gap-2 sm:gap-3 
                  font-[Light] text-lg sm:text-2xl md:text-4xl lg:text-6xl text-center">
          <h1>From Visionary</h1>

          <div className="w-10 h-[25px] sm:w-[55px] sm:h-[35px] lg:w-20 lg:h-[75px] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a4f6721536a4d4bb95d77b_Process%20Span%201.avif" alt="" />
          </div>

          <h1>artist and</h1>
        </div>

        {/* LINE 2 */}
        <div className="overflow-hidden flex flex-wrap justify-center items-center gap-2 sm:gap-3
                  font-[Light] text-lg sm:text-2xl md:text-4xl lg:text-6xl text-center">
          <h1>designers</h1>

          <div className="w-10 h-[25px] sm:w-[55px] sm:h-[35px] lg:w-20 lg:h-[75px] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a4f672766f367f88b2d910_Process%20Span%202.avif" alt="" />
          </div>

          <h1>to industry and</h1>
        </div>

        {/* LINE 3 */}
        <div className="overflow-hidden text-center font-[Light] 
                  text-lg sm:text-2xl md:text-4xl lg:text-6xl pb-2">
          <h1>community changemakers, we</h1>
        </div>

        {/* LINE 4 */}
        <div className="overflow-hidden flex flex-wrap justify-center items-center gap-2 sm:gap-3
                  font-[Light] text-lg sm:text-2xl md:text-4xl lg:text-6xl text-center">
          <h1>bring</h1>

          <div className="w-10 h-[25px] sm:w-[55px] sm:h-[35px] lg:w-20 lg:h-[75px] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a4f672d497894db4ec23f5_Process%20Span%203.avif" alt="" />
          </div>

          <h1>powerful voices together</h1>
        </div>

        {/* LINE 5 */}
        <div className="overflow-hidden flex flex-wrap justify-center items-center gap-2 sm:gap-3
                  font-[Light] text-lg sm:text-2xl md:text-4xl lg:text-6xl text-center">
          <h1>create new</h1>

          <div className="w-10 h-[25px] sm:w-[55px] sm:h-[35px] lg:w-20 lg:h-[75px] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a4f6724b947d7346ecc7b8_Process%20Span%204.avif" alt="" />
          </div>

          <h1>inspiring spaces</h1>
        </div>

      </div>


    </div>
  )
}

export default ProcessWhoSection
