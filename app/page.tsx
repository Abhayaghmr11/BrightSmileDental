import Hero from "@/public/assets/images/Hero.png";

import Button from "@/components/atom/Button";
import Text from "@/components/atom/Text";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" h-[1000vh]">
      <MaxWidthWrapper>
        <section className="hero-section  h-[90vh] grid  md:grid-cols-2 w-full">
          {/* Hero Text */}
          <div className=" md:mx-auto space-y-[20px] md:content-center">
            <div className=" max-w-[590px] ">
              <Text variant="title">
                Welcome to <span className=" text-primary">Bright Smile</span>{" "}
                Dental Clinic
              </Text>
              <div className=" max-w-[600px]">
                <Text
                  variant="span"
                  className=" text-secondary_foreground  leading-[-1rem]"
                >
                  Experience dental care redefined with style and precision.
                  Experience dental care redefined with style and precision.
                </Text>
              </div>
            </div>
            {/* Buttons */}
            <div className=" space-x-[15px]">
              <Button variant="default">Book Your Appointment Now</Button>
              <Button variant="secondary">Get Started</Button>
            </div>
          </div>
          {/* Background Hero image */}
          <div className=" bg-slate-600 w-full rounded-bl-[190px] overflow-hidden h-full">
            <Image
              src={Hero}
              className=" object-cover w-full h-full"
              alt="Hero Image"
            />
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
