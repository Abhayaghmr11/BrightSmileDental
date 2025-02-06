import HeroLanding from "@/components/organism/landing/HeroLanding";
import Services from "@/components/organism/landing/Services";
import Testimonials from "@/components/organism/landing/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroLanding />
      <Testimonials />
      <Services />
    </main>
  );
}
