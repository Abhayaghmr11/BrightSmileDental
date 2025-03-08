import React, { Suspense } from "react";

import HeroLanding from "@/components/organism/landing/HeroLanding";
import Services from "@/components/organism/landing/Services";
import Testimonials from "@/components/organism/landing/Testimonials";
import Teams from "@/components/organism/landing/Teams";
import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroLanding />
        <Testimonials />
        <Services />
        <Teams />
        <Banner />
        <ContactUs />
        <GoogleMapsContainer />
      </Suspense>
    </main>
  );
}
