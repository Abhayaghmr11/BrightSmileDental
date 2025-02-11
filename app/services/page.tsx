import React from "react";

import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import FilterComponent from "@/components/molecule/FilterComponent";

import { ServiceData } from "../constants/config";

const Services = () => {
  const services = ServiceData.flatMap((category) =>
    category.section.map((service) => service)
  );
  console.log(services);
  return (
    <MaxWidthWrapper>
      <ContainerWrapper
        heading="Our"
        headingSpan="Services"
        subheading="Our patients love the professionalism and quality care they receive at our dental clinic. Here are some of their feedbacks:"
      >
        <div className=" w-full">
          <FilterComponent />
        </div>
      </ContainerWrapper>
    </MaxWidthWrapper>
  );
};

export default Services;
