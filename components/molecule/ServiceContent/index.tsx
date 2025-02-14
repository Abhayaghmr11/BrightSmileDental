"use client";
import React from "react";
import { service } from "@/app/interface/types";
import ServiceCard from "../Cards/ServiceCard";

const ServiceContent = ({ services }: { services: service[] }) => {
  return (
    <main className=" w-full grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
      {services.map((service) => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </main>
  );
};

export default ServiceContent;
