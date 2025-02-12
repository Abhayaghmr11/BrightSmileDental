import React from "react";
import AboutUs from "@/components/organism/AboutUs/aboutContent";
import ChooseUs from "@/components/organism/AboutUs/chooseUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";


const About = () => {
  return (
    <>
      <AboutUs />
      <ChooseUs />
      <GoogleMapsContainer />
      <Banner />
      <ContactUs />
    </>
  );
};

export default About;
