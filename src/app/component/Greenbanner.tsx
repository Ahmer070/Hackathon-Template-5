import React from 'react'

const Greenbanner = () => {
  return (
    <div>
        <div className='w-screen h-screen bg-right-top pr-14 bg-contain bg-no-repeat bg-emerald-600'
         style={{backgroundImage:"url(green.png)"}}>
            <div>
                <div className='mx-20 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-26 p-20 mr-6 mb-8 max-w-lg '>
                    <div className=''>
                        <h2 className='text-white text-bold text-xl ml-10 '>SUMMER 2020</h2>
                        <h2 className='text-6xl text-white font-semibold mb-4 p-7'>
                            Vita Classic Product
                        </h2>
                        <p className='text-white font-bold ml-6'>
                            We know how large object will act, We know how large object will act, We know 
                        </p>
                        <span className='text-lg font-bold mt-4 ml-5 text-white rounded-md'>$16.48</span>
                        <button className='bg-green-400 text-white p-4 m-4 px-6 py-3 rounded-md hover:bg-green-600 transition'>
                            Add To Cart
                        </button>

                    </div>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Greenbanner
