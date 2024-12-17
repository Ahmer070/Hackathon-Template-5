

import Image from 'next/image';
import React from 'react';

const Editorpick = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-6 lg:px-12">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Editor's Pick</h2>
        <p className="text-gray-600 mb-8">
          Problem trying to resolve the conflict between
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-flow-col auto-cols-max justify-center gap-10">
          {/* Men */}
          <div className="flex flex-col items-center">
            <Image
              src="/edit-2.png"
              alt="boy"
              width={200}
              height={100}
              className="object-cover"
            />
            <div className="font-extrabold text-black mt-2">Men</div>
          </div>

          {/* Women */}
          <div className="flex flex-col items-center">
            <Image
              src="/edit-1.png"
              alt="boy"
              width={200}
              height={100}
              className="object-cover"
            />
            <div className="font-extrabold text-black mt-2">Women</div>
          </div>

          {/* Women */}
          <div className="flex flex-col items-center">
            <Image
              src="/edit-3.png"
              alt="boy"
              width={200}
              height={100}
              className="object-cover"
            />
            <div className="font-extrabold text-black mt-2">Women</div>
          </div>

          {/* Women */}
          <div className="flex flex-col items-center">
            <Image
              src="/edit-4.png"
              alt="boy"
              width={200}
              height={100}
              className="object-cover"
            />
            <div className="font-extrabold text-black mt-2">Women</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editorpick;
