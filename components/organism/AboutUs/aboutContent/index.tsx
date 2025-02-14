import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import React from "react";
import TeamDoctor from "@/public/assets/images/team-doctors.png";
import Image from "next/image";
import Text from "@/components/atom/Text";

import { FlipWords } from "@/components/ui/flip-words";

import { aboutUs } from "@/app/constants/config";

const AboutUs = () => {
  const words = ["excellence", "care", "smiles"];
  return (
    <section className="bg-secondary relative md:py-[100px]">
      <MaxWidthWrapper>
        <div className="flex  flex-col pt-[60px] md:pt-0  flex-auto lg:flex-row w-full gap-[40px] items-center justify-center">
          <div className="flex md:max-w-[700px] flex-col gap-[30px]">
            <Text
              variant="heading"
              className=" font-bold text-center md:text-left"
            >
              <span className=" text-primary">Bright Smile</span> Dental Clinic
            </Text>
            <Text variant="body" className=" leading-5 font-light">
              {aboutUs}
              {aboutUs}
            </Text>

            <div className=" text-center font-bold md:text-left mt-2 text-[30px]">
              Committed to
              <FlipWords words={words} />
            </div>
          </div>
          <div className=" mt-[20px] w-full max-w-[500px]">
            <Image
              src={TeamDoctor}
              alt="About Us"
              className="md:w-[500px]  rounded-[20px]"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
