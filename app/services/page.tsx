import React from "react";
import { Suspense } from "react";
import { Metadata } from "next";

import { Skeleton } from "@/components/ui/skeleton";
import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import FilterComponent from "@/components/molecule/FilterComponent";

import { ServiceData } from "../constants/config";
import ServiceContent from "@/components/molecule/ServiceContent";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "Services | Bright Smile Dental Clinic",
};

const Services = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const services = ServiceData.flatMap((category) =>
    category.section.map((service) => service)
  );
  const searchParam = await searchParams;

  // Filtering Services based on Search Query
  const filteredServices = services.filter((service) =>
    service?.service
      .toLocaleLowerCase()
      .includes(searchParam?.search?.toString().toLocaleLowerCase() || "")
  );

  const sortedServices = filteredServices.sort((a, b) =>
    searchParam?.sort === "high" ? b.price - a.price : a.price - b.price
  );

  return (
    <Suspense fallback={<Loading />}>
      <MaxWidthWrapper>
        <ContainerWrapper
          heading="Our"
          headingSpan="Services"
          subheading="Our patients love the professionalism and quality care they receive at our dental clinic. Here are some of their feedbacks:"
        >
          {/* Filter */}
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
          {/* Service Content */}
          <ServiceContent services={sortedServices} />
        </ContainerWrapper>
      </MaxWidthWrapper>
    </Suspense>
  );
};

export default Services;
