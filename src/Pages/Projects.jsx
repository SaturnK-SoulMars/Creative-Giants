import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Mailing from "../Components/Mailing";
import { ProjectsGridData } from "../Components/ProjectsGridData";


const Projects = () => {
  return (
    <div className='min-h-screen w-full flex flex-col font-[Light] text-white bg-[#000000]'>

      <div className='h-[50vh] w-full gap-5 flex flex-col items-center justify-end '>

        <div className='overflow-hidden'>

          <h3 className='text-xl'>GET STARTED</h3>

        </div>

        <div className='overflow-hidden py-3'>
          <h1 className='text-7xl'>Selected Projects</h1>
        </div>

        <div className='overflow-hidden w-[45%] text-center'>
          <p className='text-[18px]'>Real-world installations, immersive experiences and public art that challenge expectations, spark
            conversation and leave a lasting mark.</p>
        </div>


      </div>

      <div className="min-h-screen w-full  flex flex-wrap">

        
        <div className='overflow-hidden h-[20vh] sticky top-0 z-50 flex justify-center items-center w-full'>

          <div className="h-[8vh] w-[10%] border-2 border-white rounded-[30px] flex items-center justify-center overflow-hidden">

            <button className="px-5 py-2 rounded-[20px] bg-white text-black">Grid</button>
            <Link to="/projects/list" className="px-5 py-2 rounded-[20px] text-white hover:bg-[#383737] transition-all duration-150">List</Link>

          </div>

        </div>

        {ProjectsGridData.map((item) => (
          <div
            key={item.id}
            className="h-screen w-[33.3%] px-6 py-5"
          >
            <div className="h-[90%] w-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="overflow-hidden mt-2">
              <h1>{item.projectNo}</h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-5xl">{item.title}</h1>
            </div>
          </div>
        ))}

      </div>

      <Mailing />
      <Footer />



    </div>
  );
};

export default Projects;
