
// import Image from 'next/image';

// import React from 'react';

// const NeuralUniverse = () => {
//   return (
//     <div className="w-full h-screen bg-slate-100">
//       {/* Container Section */}
//       <div className="container mx-auto flex flex-col lg:flex-row items-center h-full px-6 lg:px-16 gap-10">
//         {/* Left Section - Image */}
//         <div className="w-full lg:w-1/2 h-80 lg:h-full flex items-center justify-center">
//           <Image
//              src={require('../public/asian.png')}
//             alt="Neural Universe"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//             width={600}
//             height={320}
            
//           />
//         </div>

//         {/* Right Section - Text and Buttons */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
//           <h3 className="text-lg font-bold text-gray-700 mb-4">SUMMER 2020</h3>
//           <h2 className="text-3xl lg:text-4xl text-black font-semibold mb-6">
//             Part of the Neural Universe
//           </h2>
//           <p className="text-md lg:text-lg font-medium text-gray-600 mb-8">
//             We know how large objects will act, but things on a small scale can behave differently.
//           </p>
//           <div className="flex gap-4">
//             <button
//               className="bg-gray-600 text-white py-2 px-6 rounded hover:bg-green-700 transition duration-300"
//             >
//               Buy Now
//             </button>
//             <button
//               className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400 transition duration-300"
//             >
//               Read More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeuralUniverse;


import Image from 'next/image';
import React from 'react';

const NeuralUniverse = () => {
  return (
    <div className="w-full h-screen bg-slate-100">
      {/* Container Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center h-full px-6 lg:px-16 gap-10">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 h-80 lg:h-full flex items-center justify-center">
          <Image
             src="/asian.png" // Use the public folder path
            alt="Neural Universe"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            width={600}
            height={320}
            priority // Ensures image is loaded quickly
          />
        </div>

        {/* Right Section - Text and Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
          <h3 className="text-lg font-bold text-gray-700 mb-4">SUMMER 2020</h3>
          <h2 className="text-3xl lg:text-4xl text-black font-semibold mb-6">
            Part of the Neural Universe
          </h2>
          <p className="text-md lg:text-lg font-medium text-gray-600 mb-8">
            We know how large objects will act, but things on a small scale can behave differently.
          </p>
          <div className="flex gap-4">
            <button className="bg-gray-600 text-white py-2 px-6 rounded hover:bg-green-700 transition duration-300">
              Buy Now
            </button>
            <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralUniverse;
