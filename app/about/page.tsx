import AboutUs from "@/components/organism/AboutUs/aboutContent";
import ChooseUs from "@/components/organism/AboutUs/chooseUs";
import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import { Suspense } from "react";
import Loading from "../loading";

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AboutUs />
      <ChooseUs />
      <GoogleMapsContainer />
      <Banner />
      <ContactUs />
    </Suspense>
  );
};

export default About;
