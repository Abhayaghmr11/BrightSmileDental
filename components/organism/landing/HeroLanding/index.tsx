import React from "react";

import Hero from "@/public/assets/images/Hero.png";

import Button from "@/components/atom/Button";
import Text from "@/components/atom/Text";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import Image from "next/image";

const HeroLanding = () => {
  return (
    <MaxWidthWrapper>
      <section className="hero-section  lg:h-[92vh] grid lg:grid-cols-2 w-full">
        {/* Hero Text */}
        <div className=" md:mx-auto space-y-[20px] py-20 sm:py-0 md:content-center">
          <div className=" max-w-[590px] ">
            <Text variant="title">
              Welcome to <span className=" text-primary">Bright Smile</span>{" "}
              Dental Clinic
            </Text>
            <div className=" max-w-[600px]">
              <Text variant="span" className=" text-secondary_foreground  ">
                Experience dental care redefined with style and precision.
                Experience dental care redefined with style and precision.
              </Text>
            </div>
          </div>
          {/* Buttons */}
          <div className=" flex gap-[15px] flex-wrap-reverse">
            <Button variant="default">Book Your Appointment Now</Button>
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
        {/* Background Hero image */}
        <div className="w-full hidden lg:block rounded-bl-[190px] overflow-hidden h-full">
          <Image
            src={Hero}
            className=" object-cover w-full h-full"
            alt="Hero Image"
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default HeroLanding;
