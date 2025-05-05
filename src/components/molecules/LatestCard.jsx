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
      <h2 className="text-xl font-semibold text-black group-hover:text-white">
        {headingText}
      </h2>
  
      <p className="flex justify-start items-center text-gray-600 group-hover:text-white">
        <span>{paragraphOnePart1}</span>
        <span className="inline-block mx-2 w-1 h-1 bg-[#515B6F] rounded-full" />
        <span>{paragraphOnePart2}</span>
      </p>
  
      <div className="space-y-1">
        <p className="text-gray-600 group-hover:text-white">{paragraphTwoLine1}</p>
        <p className="text-gray-600 group-hover:text-white">{paragraphTwoLine2}</p>
      </div>
  
      {/* Buttons - unaffected by group hover */}
   {/* Buttons - responsive, small, and fit-content */}
   {/* <div className="flex flex-row flex-wrap justify-start gap-y-2 gap-x-0 sm:flex-nowrap sm:gap-x-3 sm:gap-y-0">
  <button
    className="w-1/2 sm:w-fit px-3 py-1 text-sm rounded-full border border-yellow-500 bg-gray-200 text-yellow-500 hover:bg-yellow-500 hover:text-white"
  >
    {leftButtonText}
  </button>
  <button
    className="w-1/2 sm:w-fit px-3 py-1 text-sm rounded-full border border-green-600 bg-gray-200 text-green-600 hover:bg-green-600 hover:text-white"
  >
    {middleButtonText}
  </button>
  
  <button
    className="w-full sm:w-fit px-3 py-1 text-sm rounded-full border border-indigo-600 bg-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white"
  >
    {rightButtonText}
  </button>
</div> */}
<div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 justify-start">
  <button className="px-3 py-1 text-sm rounded-full border border-yellow-500 bg-gray-200 text-yellow-500 hover:bg-yellow-500 hover:text-white w-fit">
    {leftButtonText}
  </button>
  <button className="px-3 py-1 text-sm rounded-full border border-green-600 bg-gray-200 text-green-600 hover:bg-green-600 hover:text-white w-fit">
    {middleButtonText}
  </button>
  <button className="px-3 py-1 text-sm rounded-full border border-indigo-600 bg-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white w-fit">
    {rightButtonText}
  </button>
</div>


    </div>
  </div>
  
  );
}

export default LatestJobs;
