import React from 'react';
import Image from 'next/image';


function Feature({
  imageSrc,
  topButtonText,
  headingText,
  paragraphOnePart1,
  paragraphOnePart2,
  paragraphTwoLine1,
  paragraphTwoLine2,
  leftButtonText,
  rightButtonText,
}) {
  return (
    <div className="group p-5 pl-4 bg-white shadow transition duration-300 hover:bg-[#4640DE]">
      <div className="flex justify-between items-center">
        <img src={imageSrc} alt="Top Image" className="object-cover rounded-md" />
        {/* <Image 
  src={imageSrc} 
  alt="Top Image" 
  className="object-cover rounded-md"
  width={500} // you must define width
  height={300} // you must define height
/> */}

        <button className="border border-blue-600 bg-white px-4 py-2  text-blue-600 ">
          {topButtonText}
        </button>
      </div>

      <div className="mt-4" />

      <div className="space-y-2 text-left">
        <h2 className="text-black text-xl font-semibold group-hover:text-white">
          {headingText}
        </h2>
       <div className=" " />
        <p className="text-gray-600 flex items-center group-hover:text-white">
          <span>{paragraphOnePart1}</span>
          <span className="inline-block mx-2 w-1 h-1 bg-[#515B6F] rounded-full" />
          <span>{paragraphOnePart2}</span>
        </p>

        <div className="space-y-1 mt-5">
          <p className="text-gray-600 group-hover:text-white">{paragraphTwoLine1}</p>
          <p className="text-gray-600 group-hover:text-white">{paragraphTwoLine2}</p>
        </div>

        <div className="flex justify-between items-center pt-4">
          <button className="bg-gray-200 px-4 py-2 rounded-full text-yellow-500 ">
            {leftButtonText}
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded-full text-green-600 ">
            {rightButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
