import React from 'react'

const NewCollection = () => {
  return (
    <div>
      <div className='w-screen h-screen bg-right-top pr-14' style={{backgroundImage:"url(main.png)"}}>
        <div className='py-20'>
            <div className='mx-20 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-26'>
                <div className='text-center lg:text-left max-w-lg p-3'>
                    <h2 className='text-sm font-bold text-white p-5'> SUMMER 2020 </h2>
                    <h3 className='text-5xl text-white font-semibold mb-4 pl-4 p-4 '>New Collection</h3>
                    <p className='text-white mt-2 p-6'>
                        We know how large objects will act, but things on a small scale 
                    </p>
                    <div className='w-full lg:w-1/2'></div>
                    <div className='pl-4'>
                        <button className='bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection
