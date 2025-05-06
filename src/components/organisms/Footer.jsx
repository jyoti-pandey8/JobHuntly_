
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#202430] text-white px-5 py-20 lg:px-20 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
                <Image
                           src="/image/home/Frame 3.png"
                           alt="Logo"
                           className="rounded-full"
                           width={24}
                           height={24}
                         />
              <h2 className=" font-semibold text-[26px]">JobHuntly</h2>
            </div>
            <p className="text-sm text-gray-400 text-[14px] lg:text-[16px] md:[text-[16px] ">
             Great platform for job seekers and employers to connect. We provide a seamless experience for job searching and hiring.
            </p>
          </div>

          <div>
            <h3 className="text-gray-100 mb-4 text-[16px] lg:text-[22px] md:[text-[22px]">About</h3>
            <ul className="space-y-2 text-sm text-gray-400 text-[14px] lg:text-[18px] md:[text-[18px] md:leading-[2] lg:leading-[2]">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-100 mb-4 text-[16px] lg:text-[22px] md:[text-[22px]">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400 text-[14px] lg:text-[18px] md:[text-[18px] md:leading-[2] lg:leading-[2]">
              <li>Docs</li>
              <li>Support</li>
              <li>API</li>
              <li>Guides</li>
            </ul>
          </div>

          <div>
            <h3 className=" mb-4 text-gray-100 text-[16px] lg:text-[22px] md:[text-[22px]">
              Get Job Notifications
            </h3>
            <p className="text-sm mb-4 text-gray-400 text-[14px] lg:text-[18px] md:[text-[18px]">
              Stay updated with the latest job openings and career opportunities
              by subscribing below.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white text-gray-700 px-8 py-2 outline-none w-full"
              />
              <button className="bg-blue-600 text-white px-5 py-3 text-[14px] lg:text-[16px] md:[16px] font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-30 md:mt-30"></div>
        <hr className="border-white" />

        <div className=" -my-6 flex flex-col md:flex-row justify-between items-center ">
  <p className="text-gray-400 text-[14px] lg:text-[18px] md:[text-[18px] mb-4 md:mb-0">
    © 2025 All rights reserved by CompanyName
  </p>
  <div className="flex space-x-4">
  <div className="w-[34px] h-[34px] bg-gray-700 rounded-full flex items-center justify-center">
  <i className="ri-facebook-fill text-white text-lg"></i>
</div>
<div className="w-[34px] h-[34px]  bg-gray-700 rounded-full flex items-center justify-center">
  <i className="ri-instagram-line text-white text-lg"></i>
</div>
   
    <div className="w-[34px] h-[34px] bg-gray-700 rounded-full flex items-center justify-center">
  <i className="ri-whatsapp-line text-white text-lg"></i>
</div>
<div className="w-[34px] h-[34px] bg-gray-700 rounded-full flex items-center justify-center">
  <i className="ri-linkedin-fill text-white text-lg"></i>
</div>
<div className="w-[34px] h-[34px] bg-gray-700 rounded-full flex items-center justify-center">
  <i className="ri-twitter-fill text-white text-lg"></i>
</div>
  </div>
</div>

      </div>
    </footer>
  );
}
