import React from 'react';
import Footer from '../organisms/Footer';
import HomeHeader from '../organisms/Header';
import Image from 'next/image';
import FindDream from '../organisms/FindDream';

const LandingPageComponent = () => {
  return (
    <>
      <HomeHeader />
      <FindDream 
  heading="Find your"
  highlightedText="dream job"
  subText="Find your next career at companies like HubSpot, Nike, and Dropbox"
  placeholder="Job title or keyword"
  location="Florence, Italy"
  buttonText="Find Jobs"
  popularTags="Popular : UI Designer, UX Researcher, Android, Admin"
/>
      <Footer />
    </>
  );
};

export default LandingPageComponent;