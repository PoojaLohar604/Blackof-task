
import line13 from '../assets/Line13.png';
import streetlightc from '../assets/street_light_controler.png';
import gatway from '../assets/gateway_png.png';
import cloud from '../assets/cloud_based management.png';
import user from '../assets/users_png.png';
import evalution from '../assets/evaluation_png.png';
import line from '../assets/Line.png';
import Vector7 from '../assets/Vector7.png';

const Ecosystem = () => {
  return (
    <div className="flex flex-col items-center py-16 p-5 Eco">
      <div className='text-start relative lg:right-[8rem] xl:right-[12rem]'>
        <h1 className="text-2xl font-bold mb-4 Ecosystem">Ecosystem</h1>
        <div className='w-full lg:w-[650px]'>
          <h2 className="mb-8 text-[24px] lg:text-[36px] xl:text-[48px]">How does a smart street light ecosystem work?</h2>
        </div>
      </div>

      {/* Top row */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center w-full mb-16 lg:-right-8 xl:-right-10 py-7">
        <div className="flex flex-col items-center w-full lg:w-[250px] h-[225px] lg:left-16 relative mb-8 lg:mb-0">
          <div className='flex gap-6 lg:gap-10 flex-wrap justify-center'>
            <div className="custom-dotted-border p-3 rounded-lg">
              <img src={streetlightc} alt="Street Light Controller" className="w-12 h-14 bg-white p-3 rounded-lg border border-blue-400" />
            </div>
            <div className="custom-dotted-border p-3 rounded-lg">
              <img src={streetlightc} alt="Street Light Controller" className="w-12 h-14 bg-white p-3 rounded-lg border border-blue-400" />
            </div>
          </div>
          <p className="text-center font-bold mt-4">Street Light Controller</p>
          <p className="text-center text-gray-500 text-[12px] lg:text-[14px] xl:text-[15px]">
            Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.
          </p>
        </div>

        <img src={line13} alt='line13' className='relative lg:-top-8 xl:-top-10 lg:left-8 xl:left-16 w-12 lg:w-16 xl:w-auto' />

        <div className="flex flex-col items-center w-full lg:w-[250px] h-[225px] mb-8 lg:mb-0">
          <div className="custom-dotted-border p-3 rounded-lg">
            <img src={gatway} alt="Gateway" className="w-16 h-16 bg-white p-3 rounded-lg border border-gray" />
          </div>
          <p className="text-center font-bold mt-4">Gateway</p>
          <p className="text-center text-gray-500 text-[12px] lg:text-[14px] xl:text-[15px]">
            Employed for interfacing between a Controller and the Lighting Management Software.
          </p>
          <img src={line} alt='line' className='lg:block hidden'/>
          <img src={Vector7} alt='line7' className='lg:block hidden'/>
        </div>

        <img src={line13} alt='line13' className='relative lg:-top-8 xl:-top-10 lg:right-8 xl:right-16 w-12 lg:w-16 xl:w-auto' />

        <div className="flex flex-col items-center w-full lg:w-[250px] h-[225px] lg:relative lg:right-[6rem] xl:right-[8rem]">
          <div className="custom-dotted-border p-3 rounded-lg">
            <img src={cloud} alt="Cloud Management System" className="w-16 h-16 bg-white p-3 rounded-lg border border-gray" />
          </div>
          <p className="text-center font-bold mt-4">Cloud Management System</p>
          <p className="text-center text-gray-500 text-[12px] lg:text-[14px] xl:text-[15px]">
            Collects information from multiple gateways.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:-right-10">
        <div className="flex flex-col items-center w-full lg:w-[250px] h-[225px] p-4 mb-8 lg:mb-0">
          <div className="custom-dotted-border p-3 rounded-lg">
            <img src={user} alt="User" className="w-16 h-16 bg-white p-3 rounded-lg border border-gray" />
          </div>
          <p className="text-center font-bold mt-4">User</p>
          <p className="text-center text-gray-500 text-[12px] lg:text-[14px] xl:text-[15px]">
            Data from the cloud is used to monitor and control street lights by the System Managers.
          </p>
        </div>

        <div className="flex flex-col items-center w-full lg:w-[250px] h-[225px] p-4">
          <div className="custom-dotted-border p-3 rounded-lg">
            <img src={evalution} alt="Evaluation" className="w-16 h-16 bg-white p-3 rounded-lg border border-gray" />
          </div>
          <p className="text-center font-bold mt-4">Evaluation</p>
          <p className="text-center text-gray-500 text-[12px] lg:text-[14px] xl:text-[15px]">
            Gathered insights are used to evaluate the performance of the lighting systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
