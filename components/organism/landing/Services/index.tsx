import React from "react";
import Link from "next/link";
import { ServiceData } from "@/app/constants/config";

import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/molecule/Cards/ServiceCard";

const Services = () => {
  console.log(
    ServiceData?.flatMap((category) => category?.section).slice(0, 3)
  );
  return (
    <section>
      <MaxWidthWrapper>
        <ContainerWrapper
          heading="Our Dental"
          headingSpan="Services"
          subheading="Discover the range of professional services offered by our clinic."
        >
          {/* Button */}
          <div className="flex w-full justify-end">
            <Link href={`/services`}>
              <Button>View All Services</Button>
            </Link>
          </div>

          {/* Containers */}
          <div className="flex flex-row gap-[25px] flex-wrap justify-center ">
            {ServiceData?.flatMap((category) => category?.section)
              .slice(0, 3)
              .map((service) => (
                <ServiceCard service={service} key={service.id} />
              ))}
          </div>
        </ContainerWrapper>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
