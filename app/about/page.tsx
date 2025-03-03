import React, { Suspense } from "react";
import AboutUs from "@/components/organism/AboutUs/aboutContent";
import ChooseUs from "@/components/organism/AboutUs/chooseUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";

const About = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUs />
      <ChooseUs />
      <GoogleMapsContainer />
      <Banner />
      <ContactUs />
    </Suspense>
  );
};

export default About;
