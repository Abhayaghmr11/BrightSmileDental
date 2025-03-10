"use client";
import React from "react";

import { service } from "@/app/interface/types";
import ServiceCard from "../Cards/ServiceCard";
import NoData from "../NoData";

const ServiceContent = ({ services }: { services: service[] }) => {
  return (
    <main className=" w-full grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
      {services.length > 0 ? (
        services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))
      ) : (
        <NoData title="Service not found." message={undefined} />
      )}
    </main>
  );
};

export default ServiceContent;
