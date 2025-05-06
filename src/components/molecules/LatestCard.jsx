import React from 'react';

function LatestJobs({
  imageSrc,
  headingText,
  paragraphOnePart1,
  paragraphOnePart2,
  paragraphTwoLine1,
  paragraphTwoLine2,
  leftButtonText,
  middleButtonText,
  rightButtonText,
}) {
  return (
    <div className="group flex p-5 bg-white shadow transition duration-300 hover:bg-indigo-600">
    {/* Left: Image */}
    <img
      src={imageSrc}
      alt="Top Image"
      className="w-16 h-16 object-cover rounded-md flex-shrink-0  mr-8"
    />
    {/* Right: All content */}
    <div className="flex-1 text-left space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 group-hover:text-white">
        {headingText}
      </h2>
  
      <p className="flex justify-start items-center text-gray-600 text-[14px] lg:text-[17px] md:text-[17px] group-hover:text-white">
        <span>{paragraphOnePart1}</span>
        <span className="inline-block mx-2 w-1 h-1 bg-[#515B6F] rounded-full" />
        <span>{paragraphOnePart2}</span>
      </p>
  
      <div className="space-y-1">
        <p className="text-gray-600 group-hover:text-white">{paragraphTwoLine1}</p>
        <p className="text-gray-600 group-hover:text-white">{paragraphTwoLine2}</p>
      </div>
  
<div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 justify-start font-bold">
<button className="px-4 py-2 text-sm rounded-full  bg-gray-200 text-green-600 hover:bg-green-600 hover:text-white w-fit">
    {middleButtonText}
  </button>
  <div className="h-10 w-px bg-gray-300" />
  <button className="px-4 py-2 text-sm rounded-full border border-yellow-500 bg-gray-200 text-yellow-500 hover:bg-yellow-500 hover:text-white w-fit">
    {leftButtonText}
  </button>
  <button className="px-4 py-2 text-sm rounded-full border border-indigo-600 bg-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white w-fit">
    {rightButtonText}
  </button>
</div>


    </div>
  </div>
  
  );
}

export default LatestJobs;
