import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import BannerCardContactUs from "@/components/molecule/Cards/BannerCardContactUs";
import FormCard from "@/components/molecule/Cards/FormCard";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <ContainerWrapper
          heading="Contact"
          headingSpan="Us"
          subheading="Contact us to book an appointment"
        >
          <div className="flex w-full lg:flex-row flex-col flex-auto gap-[40px] justify-center items-center">
            <BannerCardContactUs />
            <FormCard title={"Schedule an"} titleSpan={"Appointment"} />
          </div>
        </ContainerWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactUs;
