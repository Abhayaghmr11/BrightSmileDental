import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import React from "react";

const Contact = () => {
  return (
    <>
      <ContactUs />
      <Banner />
      <GoogleMapsContainer />
    </>
  );
};

export default Contact;
