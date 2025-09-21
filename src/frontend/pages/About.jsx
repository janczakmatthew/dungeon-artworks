 import React from 'react';
import HeroHeader from '../components/hero-header';

const About = () => {
  return (
 
 <HeroHeader
          heroTitle="About"
          heroSubtitle="Learn More About Us"
          heroDescription="Discover our mission, values, and the team behind our success. Join us on our journey to make a difference."
          bgColor="bg-blue-950"
          textColor="text-white"
          customStyles="min-h-[300px]"
        />
  )
};

export default About;