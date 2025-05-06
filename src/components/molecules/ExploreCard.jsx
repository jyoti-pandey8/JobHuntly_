import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExploreCard({ iconTop, heading, paragraph, iconRight, jobs }) {
  return (
    <div className="p-5 pl-4 bg-white text-black hover:bg-[#4640DE] group shadow transition duration-300">
      <div className="flex">
    
      <i className={`${iconTop} ri-3x text-[#4640DE] group-hover:text-white`}></i>
      

      </div>
      <h2 className="text-left mt-5 text-2xl font-semibold text-gray-800 group-hover:text-white">
        {heading}
      </h2>

      <div className="mt-4 flex justify-between items-start">
        <p className="text-14px lg:text-[20px] md:text-[18px] text-gray-400  group-hover:text-white">
          {jobs} jobs available         <i className={`${iconRight} ri-lg text-gray-600 ri-xl group-hover:text-white`}></i>

        </p>
      </div>
    </div>
  );
}

export default ExploreCard;