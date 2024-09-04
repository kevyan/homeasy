import Image from "next/image";
import { IoLocation, IoLogoWechat } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";


const HomeBanner = () => {

  return (
    // <div className="relative bg-gradient-to-r from-slate-400 to-sky-950 mb-8">
    //   <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
    //     <div className="mb-8 md:mb-0 text-center">
    //       <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    //         Grand Opening Sale
    //       </h1>
    //       <p className="text-lg md:text-xl text-white mb-2">
    //         Enjoy discouts on selected items
    //       </p>
    //       <p className="text-2xl md:text-5xl text-yellow-400 font-bold">
    //         GET Up To 50% OFF
    //       </p>
    //     </div>
    //     <div className="w-1/3 relative aspect-video">
    //       <Image
    //         src="/homeasy-logo-gold.png"
    //         fill
    //         alt="Banner Image"
    //         className="object-contain"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div
      className="relative w-full h-[78vh] bg-gradient-to-r bg-cover"
      style={{
        backgroundImage: `url('/comingsoonop70.png')`
      }}
    >
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-100 md:mb-0 text-center">
          <h1 className="text-6xl lg:text-5xl xl:text-6xl text-grey tracking-wider font-mono font-bold">
            Coming Soon...
          </h1>
          <div className="mt-20 text-black">
            <p className="flex items-center text-lg md:text-xl mb-2">
              <IoLocation /> 
              <span className="ml-2">132 Denison St, Markham, ON L3R 1B6</span>
            </p>
            <p className="flex items-center text-lg md:text-xl mb-2">
              <IoLogoWechat /> 
              <span className="ml-2">Homeasysupplies</span>
            </p>
            <p className="flex items-center text-lg md:text-xl mb-2">
              <FaPhoneVolume />
              <span className="ml-2">+1 647-888-8888</span>
            </p>
          </div>
        </div>
        <div className="w-1/3 relative aspect-video"></div>
      </div>
    </div>
  );
};

export default HomeBanner;
