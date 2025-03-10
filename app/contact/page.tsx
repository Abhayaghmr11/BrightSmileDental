import React, { Suspense } from "react";
import { Metadata } from "next";

import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "Contact | Bright Smile Dental Clinic",
};

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
