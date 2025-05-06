"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, } from 'lucide-react';
 const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 px-4 py-2 md:px-20 flex items-center justify-between bg-home relative">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Image
            src="/image/home/Frame 3.png"
            alt="Logo"
            className="rounded-full"
            width={24}
            height={24}
          />
          <span className="text-[26px] font-semibold">JobHuntly</span>
        </div>
        <div className="hidden md:flex space-x-6 pl-6 text-sm font-medium">
        <Link href="/findjob" className="text-gray-500 hover:text-blue-600 text-[17px] font-bold ">
            Find Jobs
            </Link>
          <a href="#" className="text-gray-500  hover:text-blue-600 text-[17px] font-bold">
            Browse Companies
          </a>
        </div>
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
      <a href="#" className="text-custom-indigo hover:underline font-bold text-[16px]">
  Login
</a>

        <div className="h-12 w-px bg-gray-200" />
        <button className="font-bold bg-custom-indigo text-white px-6 py-4 text-[17px]">
          Sign Up
        </button> 
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-100 flex flex-col space-y-4 p-4 md:hidden z-10 text-sm font-medium transform origin-top transition-all duration-300 ease-in-out ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        <a href="#" className="text-gray-800 hover:text-blue-600">
          Find Jobs
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600">
          Browse Companies
        </a>
        <a href="#" className="text-custom-indigo hover:underline">
          Login
        </a>
        <button className="bg-custom-indigo text-white px-4 py-2 text-sm w-fit">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default HomeHeader;