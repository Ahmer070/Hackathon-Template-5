// // components/HeroSection.tsx
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="bg-blue-400 py-12 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className="text-sm text-gray-200 uppercase">Summer 2020</p>
//           <h1 className="text-5xl font-bold text-white mb-4">NEW COLLECTION</h1>
//           <p className="text-gray-300 mb-6">
//             We know how large objects will act, but things on a small scale.
//           </p>
//           <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition">
//             SHOP NOW
//           </button>
//         </div>

//         {/* Right Content - Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <Image
//             src="/main.png" // Replace with your image path
//             alt="Shopping Girl"
//             width={500}
//             height={500}
//             className="w-full h-auto object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div className="relative w-full h-[716px]">
      {/* Background Image */}
      <Image 
        src="/main.png" 
        alt="maingirl" 
        height={716} 
        width={1440} 
        className="w-full h-full object-cover" 
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
        <div className="w-full sm:w-[599px] h-auto gap-[25px] text-center sm:text-left">
          <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-white">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
            We know how large objects will act, 
            but things on a small scale.
          </h4>
          <button className="w-full sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] gap-[10px] text-white font-montserrat">
           Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Herosection