"use client"
import React from 'react'

import { FaPhoneVolume } from "react-icons/fa6";
import { TbPasswordMobilePhone } from "react-icons/tb";

import Link from 'next/link'
import Logo from '@/components/Logo'
const Register = () => {
  const [userNumber,setNumber] = React.useState<number | null>(null)
  const [password,setPassword] = React.useState<string>("") 
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("https://mini-web-projects-rho.vercel.app/user/loginPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userNumber,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      window.location.href = "https://xiamusic-bd.com/#/login";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message); // ✅ safe
  } else {
    console.error(err);         // যদি Error না হয়
  }
  alert("Something went wrong");
}
};
  return (
    <section className="bg-blue-400 m-0 flex flex-col justify-center pt-4">
      {/*logo*/}
      <Logo />
      
      <div>
        <form
        className="flex flex-col items-center bg-white p-4 rounded-tl-3xl rounded-tr-3xl mt-4 gap-3 "
        onSubmit={submitHandler}
        > 
        <div className="mt-2 mb-4"> 
          <h2 className="text-2xl text-blue-400 font-bold text-center">লগইন করুন</h2>
        </div>
          <div className="flex flex-col items-start relative">
            <label className="text-lg mb-1">ফোন নম্বর</label> 
            <input 
            type="number"
            placeholder="আপনার ফোন নম্বর লিখুন:"
            className="border-[2px] border-gray-300 py-1 pr-4 pl-10 text-lg rounded-md outline-blue-500"
            value={userNumber ?? ""}
            onChange={(e)=> setNumber(Number(e.target.value))}
            />
            <FaPhoneVolume
            className="text-xl absolute top-11 left-2"
            />
          </div>
          
          <div className="flex flex-col items-start relative">
            <label className="text-lg mb-1">পাসওয়ার্ড</label> 
            <input 
            type="text"
            placeholder="আপনার পাসওয়ার্ড লিখুন:"
            className="border-[2px] border-gray-300 py-1 pr-4 pl-10 text-lg rounded-md outline-blue-500"
            value = {password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <TbPasswordMobilePhone
            className="text-xl absolute top-11 left-2"
            />
          </div>
          <div>
            <input 
            type="submit"
            className="w-[100%] bg-blue-400 text-white font-bold px-15 py-2 rounded-xl text-lg"
            value="Login"
            />
          </div>
          <div>
            <p className="text-md">আপনার কি XMG অ্যাকাউন্ট নেই?</p>
            <Link href="/register" className="text-lg text-blue-600">রেজিস্টার করুন</Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register