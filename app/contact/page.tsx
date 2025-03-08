import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import React, { Suspense } from "react";
import Loading from "../loading";

const Contact = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ContactUs />
      <Banner />
      <GoogleMapsContainer />
    </Suspense>
  );
};

export default Contact;
