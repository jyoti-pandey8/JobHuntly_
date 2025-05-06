import React from "react";
import Footer from "../organisms/Footer";
import HomeHeader from "../organisms/Header";
import Image from "next/image";
import ExploreCard from "../molecules/ExploreCard";
import Feature from "../molecules/FeatureCard";
import LatestJobs from "../molecules/LatestCard";

const exploreData = [
  { heading: "Design", jobs: 235 },
  { heading: "Sales", jobs: 750 },
  { heading: "Marketing", jobs: 140 },
  { heading: "Finance", jobs: 325 },
  { heading: "Technology", jobs: 436 },
  { heading: "Engineering", jobs: 550 },
  { heading: "Business", jobs: 240 },
  { heading: "Human Resource", jobs: 336 },
];
const jobs = [
  {
    imageSrc: "/image/home/featurejob/R.png",
    topButtonText: "Full Time",
    headingText: "Email Marketing",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Marketing to help team ma ...",
    leftButtonText: "Marketing",
    rightButtonText: "Design",
  },
  // {
  //   imageSrc: "/image/home/featurejob/Dropbox.png",
  //   topButtonText: "Full Time",
  //   headingText: "Brand Designer",
  //   paragraphOnePart1: "Dropbox",
  //   paragraphOnePart2: "San Fransisco, US",
  //   paragraphTwoLine1: "Dropbox is looking for Brand Designer to help the team t ...",
  //   paragraphTwoLine2: "Business Development openings",
  //   leftButtonText: "Marketing",
  //   rightButtonText: "Business",
  // },
  {
    imageSrc: "/image/home/featurejob/pitch.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Business Development openings",
    leftButtonText: "View Jobs",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/pitch.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Business Development openings",
    leftButtonText: "View Jobs",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/pitch.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Business Development openings",
    leftButtonText: "View Jobs",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/R.png",
    topButtonText: "Full Time",
    headingText: "Email Marketing",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Marketing to help team ma ...",
    leftButtonText: "Marketing",
    rightButtonText: "Design",
  },
  {
    imageSrc: "/image/home/featurejob/pitch.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Business Development openings",
    leftButtonText: "View Jobs",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/pitch.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Business Development openings",
    leftButtonText: "View Jobs",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/pitch.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    paragraphTwoLine1:
      "Dropbox is looking for Brand Designer to help the team t ...",
    paragraphTwoLine2: "Business Development openings",
    leftButtonText: "View Jobs",
    rightButtonText: "Learn More",
  },
];

const jobsData = [
  {
    imageSrc: "/image/home/latestjobs/netlify.png",
    topButtonText: "Full Time",
    headingText: "Email Marketing",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "Marketing",
    middleButtonText: "Full time",
    rightButtonText: "Design",
  },
  {
    imageSrc: "/image/home/featurejob/Dropbox.png",
    topButtonText: "Full Time",
    headingText: "Brand Designer",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "Design",
    middleButtonText: "Full time",
    rightButtonText: "Business",
  },
  {
    imageSrc: "/image/home/featurejob/pitch.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "View Jobs",
    middleButtonText: "Full time",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/green.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "View Jobs",
    middleButtonText: "Full time",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/blue.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "View Jobs",
    middleButtonText: "Full time",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/canva.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "View Jobs",
    middleButtonText: "Full time",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/godaddy.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "View Jobs",
    middleButtonText: "Full time",
    rightButtonText: "Learn More",
  },
  {
    imageSrc: "/image/home/featurejob/Twitter.png",
    topButtonText: "Full Time",
    headingText: "Sales",
    paragraphOnePart1: "Revolut",
    paragraphOnePart2: "Madrid, Spain",
    leftButtonText: "View Jobs",
    middleButtonText: "Full time",
    rightButtonText: "Learn More",
  },
];

const LandingPageComponent = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-left   px-8  lg:px-20 md:px-10  py-10  justify-top h-screen bg-gray-100 bg-home">
        <h1 className="lg:text-[70px] text-[35px] font-semibold leading-[1.05] mb-0">
          Discover
          <br /> more than <br />
          <span className="lg:text-[70px] sm:text-[35px] text-custom-blue leading-[1.1]">
            {" "}
            5000+ Jobs
          </span>
          <Image
            src="/image/home/Group.png"
            alt="Image 1"
            className="mt-3 lg:w-[400px] md:w-[300px]"
            width={200}
            height={32}
          />
        </h1>

        <br />
        <p className="lg:text-[20px] md:text-auto text-[14px] text-gray-400 mt-0 lg:mt-4 md:mt-4 mb-4 leading-[1.5]  ">
          Great platform for the job seeker that searching for new career <br />
          heights Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="w-full max-w-4xl bg-white shadow-md p-3 pl-4 md:pl-3 mt-5 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex items-center w-fit md:w-auto">
            <i className="ri-search-line absolute ri-xl left-1 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 "></i>
            <input
              type="text"
              placeholder="job title or keyword"
              className="outline-none text-gray-700 w-full md:w-64 pl-10 py-2   rounded lg:text-[20px] md:text-auto text-[14px]  "
            />
          </div>

          <div className="flex items-center space-x-2 w-full justify-start md:justify-center md:w-auto pl-4">
            <i className="ri-map-pin-line text-gray-400 w-6 h-6 ri-xl"></i>
            <span className="text-gray-800  lg:text-[20px] md:text-auto text-[14px] ">
              Delhi
            </span>
            <i className="ri-arrow-down-line text-gray-400 w-6 h-6 ml-4 ri-xl"></i>
          </div>

          <div className="w-full md:w-auto">
            <button className="w-fit md:w-auto bg-custom-indigo text-white hover:bg-blue-700 transition lg:px-8 lg:py-4 px-6 py-2  lg:text-[18px] md:text-[16px] text-14px font-bold">
              Search My Job
            </button>
          </div>
        </div>

        <p className="mt-2 text-gray-500 font-semibold text-left lg:text-[16px] md:text-auto text-[14px]">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </div>

      {/* explore section */}

      <div className="overflow-x-auto scroll-hide -mt-15 lg:mt-1 md:mt-1 lg:py-6 md:py-6">
        <div className="px-2 py-8 lg:px-10 lg:mx-10 md:mx-10 md:px-10 lg:text-[20px] md:text-[16px] text-[14px] text-gray-400">
          <p>Companies we helped grow.</p>
        </div>
        <div className="grid grid-cols-5 gap-4 mb-15  px-2 py-1 lg:px-10 lg:mx-10 md:mx-10 md:px-10 min-w-[1000px] ">
          <div className="bg-gray-100 rounded-lg  ">
            <Image
              src="/image/home/explore/vodafone.png"
              alt="Image 1"
              className=""
              width={153}
              height={40}
            />
          </div>
          <div className="bg-gray-100 rounded-lg ">
            <Image
              src="/image/home/explore/intel.png"
              alt="Image 2"
              className=""
              width={82}
              height={32}
            />
          </div>
          <div className="bg-gray-100 rounded-lg ">
            <Image
              src="/image/home/explore/tesla.png"
              alt="Image 3"
              className="w-auto"
              width={182}
              height={23}
            />
          </div>
          <div className="bg-gray-100 rounded-lg ">
            <Image
              src="/image/home/explore/amd.png"
              alt="Image 4"
              className=""
              width={116}
              height={28}
            />
          </div>
          <div className="bg-gray-100 rounded-lg ">
            <Image
              src="/image/home/explore/talkit.png"
              alt="Image 5"
              className=""
              width={108}
              height={32}
            />
          </div>
        </div>
      </div>

      {/* ExploreCard  */}
      {/* -my-60 -mt-65 */}
      <div className="flex flex-row justify-between items-center px-8 -my-60 -mt-65  lg:px-10 lg:mx-10 md:mx-10 md:px-10 h-screen bg-gray-100 bg-home">
        <div>
          <h3 className="lg:text-[50px] md:text-[text-40] text-20px font-semibold">
            Explore by <span className="text-blue-600">category</span>
          </h3>
        </div>
        <div className="lg:text-[18px] md:text-[text-18px] text-14px flex items-center font-semibold text-custom-indigo cursor-pointer pr-4 md:pr-10 lg:pr-20">
          See all jobs{" "}
          <i className="ri-arrow-right-line w-5 h-5 text-[10px] ri-xl"></i>
          {/* <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-[10px]" /> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 -mt-65 md:-mt-50  lg:-mt-50 px-8 lg:px-10 lg:mx-10 md:mx-10 md:px-10 rounded shadow">
        {exploreData.map((item, index) => (
          <div
            key={index}
            className={`${
              index <= 4
                ? " hidden lg:block md:block"
                : ""
            } bg-home text-center shadow-lg ring-1 ring-gray-200`}
          >
            <ExploreCard
              iconTop="ri-home-office-line"
              heading={item.heading}
              jobs={item.jobs}
              iconRight="ri-arrow-right-line"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-5">
        <button className="text-white px-6 py-2 bg-[#4640DE] hover:bg-[#FFFFFF] hover:text-[#4640DE] transition-all">
          View More
        </button>
      </div>

      <div className="w-full">
        <Image
          src="/image/home/explore/Desktop.png"
          alt="Responsive Image"
          className="w-full h-auto"
          width={1400}
          height={500}
        />
      </div>

      {/* feature */}

      <div className="flex flex-row justify-between items-center px-8 -my-60 -mt-65 md:-mt-50  lg:-mt-50 lg:px-10 lg:mx-10 md:mx-10 md:px-10 h-screen 8">
        <h3 className=" lg:text-[50px] md:text-[text-40] text-20px font-semibold">
          Featured <span className="text-blue-600">jobs</span>
        </h3>
        <div className="lg:text-[18px] md:text-[text-18px] text-14px flex items-center font-bold text-custom-indigo cursor-pointer pr-4 md:pr-10 lg:pr-20">
          See all jobs{" "}
          <i className="ri-arrow-right-line w-5 h-5 text-[10px] ri-xl"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 -mt-65 md:-mt-50  lg:-mt-50 gap-8 px-8 lg:px-10 lg:mx-10 md:mx-10 md:px-10 rounded shadow">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`${
              index <= 4
                ? " hidden lg:block md:block"
                : ""
            } bg-home text-center shadow-lg ring-1 ring-gray-200`}
          
          >
            <Feature {...job} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-6">
        <button className="text-white px-6 py-2 bg-[#4640DE] hover:bg-[#FFFFFF] hover:text-[#4640DE] transition-all">
          View More
        </button>
      </div>

      {/* latestjob */}

      <div className="flex flex-row justify-between items-center px-8 -my-60 lg:px-10 lg:mx-10 md:mx-10 md:px-10  h-screen bg-gray-100 bg-home">
        <div>
          <h3 className="lg:text-[50px] md:text-[text-40] text-20px  font-semibold">
            Latest <span className="text-blue-600">jobs open </span>
          </h3>
        </div>
        <div className="lg:text-[18px] md:text-[text-18px] text-14px flex items-center font-bold text-custom-indigo cursor-pointer pr-4 md:pr-10 lg:pr-20">
          See all jobs{" "}
          <i className="ri-arrow-right-line w-5 h-5 text-[10px] ri-xl"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 -mt-65 md:-mt-50  lg:-mt-50 gap-8 px-8 pb-15 lg:px-10 lg:mx-10 md:mx-10 md:px-10 rounded shadow">
        {jobsData.map((job, index) => (
          <div
            key={index}
            className={`${
              index <= 4
                ? " hidden lg:block md:block"
                : ""
            } bg-home text-center shadow-lg ring-1 ring-gray-200`}
          >
            <LatestJobs {...job} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-6">
        <button className="text-white px-6 py-2 bg-[#4640DE] hover:bg-[#FFFFFF] hover:text-[#4640DE] transition-all">
          View More
        </button>
      </div>

      <Footer />
    </>
  );
};

export default LandingPageComponent;
