import React from 'react';

const FindDream = ({
  heading = "Find your",
  highlightedText = "dream job",
  subText = "Great platform for the job seeker that searching for new career heights.",
  placeholder = "job title or keyword",
  location = "Delhi",
  buttonText = "Search My Job",
  popularTags = "UI Designer, UX Researcher, Android, Admin",
}) => {
  return (
    <div className='bg-gray-100 bg-home'>
      <div className="flex flex-col items-left lg:items-center md:items-center px-8 lg:px-10 lg:mx-10 md:mx-10 md:px-10 py-10 justify-top h-screen bg-gray-100 bg-home">
        <h1 className="lg:text-[40px] text-[25px] font-semibold leading-[1.0] mb-0">
          {heading}{" "}
          <span className="lg:text-[40px] sm:text-[25px] text-custom-blue leading-[1.1]">
            {highlightedText}
          </span>
        </h1>

        <p className="lg:text-[18px] md:text-auto text-[14px] text-gray-400 mt-8 mb-4">
          {subText}
        </p>

        <div className="w-full max-w-4xl bg-white shadow-md p-3 pl-0 md:pl-3 mt-5 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex items-center w-fit md:w-auto">
            <input
              type="text"
              placeholder={placeholder}
              className="outline-none text-gray-700 w-full md:w-64 pl-10 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center space-x-2 w-full justify-start md:justify-center md:w-auto pl-4">
            <span className="text-gray-400">{location}</span>
          </div>

          <div className="w-full md:w-auto">
            <button className="w-fit md:w-auto bg-custom-indigo text-white hover:bg-blue-700 transition px-6 py-2 text-[16px]">
              {buttonText}
            </button>
          </div>
        </div>

        <p className="mt-2 text-gray-700 font-medium text-left">
          Popular: {popularTags}
        </p>
      </div>
    </div>
  );
};

export default FindDream;
