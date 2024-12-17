import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const ContactBanner = () => {
  return (
    <div className='bg-gray-800 text-white py-6'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            {/* Contact Information */}
            <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
                <p className='text-lg font-semibold'> Call Us: (225) 555-0118</p>
                <p className='text-lg'>Email: michelle.rivera@example.com</p>
            </div>
            {/* Call to Action */}
            <div className='text-center md:text-right mb-4 md:mb-0'>
                <p className='text-lg font-bold'>Follw Us and Get a Chance to Win 80% off </p>
            </div>
            {/* Icons */}
            <div className='flex space-x-4'>
                <a 
                href="#"
                className='text-blue-500 hover:text-blue-400 transition duration-200'aria-label='Facebook'
                >
                    <FaFacebook size={24}/>
                </a>
                <a 
                href="#"
                className='text-blue-400 hover:text-blue-300 transition duration-200'aria-label='Twitter'
                >
                    <FaTwitter size={24}/>
                </a>
                <a 
                href="#"
                className='text-pink-500 hover:text-pink-400 transition duration-200'aria-label='Instagram'
                >
                    <FaInstagram size={24}/>
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default ContactBanner
