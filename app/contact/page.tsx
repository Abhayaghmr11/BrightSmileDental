import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import React, { Suspense } from "react";
import LoadingLottie from "@/components/molecule/LoadingLottie";

const Contact = () => {
  return (
    <Suspense
      fallback={
        <div className=" h-full w-full flex justify-center items-center">
          <LoadingLottie />
        </div>
      }
    >
      <ContactUs />
      <Banner />
      <GoogleMapsContainer />
    </Suspense>
  );
};

export default Contact;
