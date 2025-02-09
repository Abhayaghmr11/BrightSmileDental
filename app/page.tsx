import HeroLanding from "@/components/organism/landing/HeroLanding";
import Services from "@/components/organism/landing/Services";
import Testimonials from "@/components/organism/landing/Testimonials";
import Teams from "@/components/organism/landing/Teams";
import Banner from "@/components/organism/Banner";
import ContactUs from "@/components/organism/landing/ContactUs";
import GoogleMapsContainer from "@/components/organism/landing/GoogleMaps";

export default function Home() {
  return (
    <main>
      <HeroLanding />
      <Testimonials />
      <Services />
      <Teams />
      <Banner />
      <ContactUs />
      <GoogleMapsContainer />
    </main>
  );
}
