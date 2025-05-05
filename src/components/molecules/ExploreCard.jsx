import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExploreCard({ iconTop, heading, paragraph, iconRight, jobs }) {
  return (
    <div className="p-5 pl-4 bg-white text-black hover:bg-[#4640DE] group shadow transition duration-300">
      <div className="flex">
    
      <i className={`${iconTop} ri-3x text-[#4640DE] group-hover:text-white`}></i>
      

      </div>
      <h2 className="text-left text-2xl font-semibold group-hover:text-white">
        {heading}
      </h2>

      <div className="mt-4 flex justify-between items-start">
        <p className="text-sm text-gray-400 font-semibold group-hover:text-white">
          {jobs} jobs available         <i className={`${iconRight} ri-lg text-black group-hover:text-white`}></i>

        </p>
      </div>
    </div>
  );
}

export default ExploreCard;