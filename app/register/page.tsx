import React from 'react'

import { FaPhoneVolume } from "react-icons/fa6";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { TbMailPlus } from "react-icons/tb";
import Link from 'next/link'
import Logo from '@/components/Logo'
const Register = () => {
  return (
    <section className="bg-blue-400 m-0 flex flex-col justify-center pt-4">
      {/*logo*/}
      <Logo />
      
      <div>
        <form
        className="flex flex-col items-center bg-white p-4 rounded-tl-3xl rounded-tr-3xl mt-4 gap-3 "
        > 
        <div className="mt-2 mb-4"> 
          <h2 className="text-2xl text-blue-400 font-bold">XMG-এ স্বাগতম!</h2>
          <p className="text-md">আপনার উত্তেজনাপূর্ণ অভিজ্ঞতা দ্রুত শুরু করুন</p>
        </div>
          <div className="flex flex-col items-start relative">
            <label className="text-lg mb-1">Phone</label> 
            <input 
            type="number"
            placeholder="Enter your number:"
            className="border-[2px] border-gray-300 py-1 pr-4 pl-10 text-lg rounded-md outline-blue-500"
            />
            <FaPhoneVolume
            className="text-xl absolute top-11 left-2"
            />
          </div>
          
          <div className="flex flex-col items-start relative">
            <label className="text-lg mb-1">Password</label> 
            <input 
            type="number"
            placeholder="Enter your Password:"
            className="border-[2px] border-gray-300 py-1 pr-4 pl-10 text-lg rounded-md outline-blue-500"
            />
            <TbPasswordMobilePhone
            className="text-xl absolute top-11 left-2"
            />
          </div>
          
          <div className="flex flex-col items-start relative">
            <label className="text-lg mb-1">Re-password</label> 
            <input 
            type="number"
            placeholder="Enter your Re-password:"
            className="border-[2px] border-gray-300 py-1 pr-4 pl-10 text-lg rounded-md outline-blue-500"
            />
            <TbPasswordMobilePhone
            className="text-xl absolute top-11 left-2"
            />
          </div>
          
          <div className="flex flex-col items-start relative">
            <label className="text-lg mb-1">Refer code</label> 
            <input 
            type="number"
            placeholder="Enter your Refer code:"
            className="border-[2px] border-gray-300 py-1 pr-4 pl-10 text-lg rounded-md outline-blue-500"
            />
            <TbMailPlus
            className="text-xl absolute top-11 left-2"
            />
          </div>
          <div>
            <input 
            type="submit"
            className="w-[100%] bg-blue-400 text-white font-bold px-15 py-2 rounded-xl text-lg"
            />
          </div>
          <div>
            <Link href="/login" className="text-lg text-blue-600">সরাসরি লগইন করুন</Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register