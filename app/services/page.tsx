"use client";
import React from "react";
import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import FilterComponent from "@/components/molecule/FilterComponent";
import Lottie from "lottie-react";

import LoadingAnimation from "@/public/assets/animations/logooooo4.json";

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
          <Suspense
            fallback={
              <div className="flex items-center justify-between flex-wrap">
                <Skeleton className="w-[250px] h-[50px] rounded-md" />
                <Skeleton className="w-[250px] h-[50px] rounded-md" />
              </div>
            }
          >
            <FilterComponent />
          </Suspense>
        </div>
        <Lottie style={{ height: 110 }} animationData={LoadingAnimation} />
      </ContainerWrapper>
    </MaxWidthWrapper>
  );
};

export default Services;
