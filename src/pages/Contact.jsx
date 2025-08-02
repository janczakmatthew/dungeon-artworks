import React from "react";

import HeroHeader from "../components/hero-header";

const Contact = () => {
  return (
    <div>
      <HeroHeader
        heroTitle="Contact Us"
        heroSubtitle="Get in Touch"
        heroDescription="We would love to hear from you! Reach out to us with any questions or feedback."
        bgColor="bg-blue-950"
        textColor="text-white"
        customStyles="min-h-[300px]"
      />
    </div>
  );
};

export default Contact;
