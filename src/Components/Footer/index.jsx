import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaGithub,FaYoutube} from 'react-icons/fa'

const Footer = () => {

  return (
    
    <footer className=" w-full bg-gray-200 bottom-0">
      <div className="flex justify-center items-center mb-6 mt-14">
        <h2 className="font-bold text-slate-700 text-2xl">Follow us on social media</h2>
      </div>
      <div className="flex justify-center items-center mb-6 gap-3">
        <a href=""><FaFacebook className='h-6 w-6' /></a>
        <a href=""><FaTwitter className='h-6 w-6'/></a>
        <a href=""><FaInstagram className='h-6 w-6'/></a>
        <a href=""><FaGithub className='h-6 w-6'/></a>
        <a href=""><FaYoutube className='h-6 w-6'/></a>
      </div>
      <p className="text-center mb-14 font-light text-black">© 2023 Shoppi, Inc. All rights reserved.</p>

    </footer>
  )
}

export { Footer }