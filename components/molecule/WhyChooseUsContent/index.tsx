"use client";
import React from "react";
import { whychooseUs } from "@/app/interface/types";
import WhyChooseUsCard from "../Cards/WhyChooseUs";

const WhyChooseUsContent = ({ item }: { item: whychooseUs[] }) => {
    return (
      <main className="w-full grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {item.map((option) => (
          <WhyChooseUsCard item={option} key={option.id} /> // Ensure teamMember is passed correctly
        ))}
      </main>
    );
  };
  

export default WhyChooseUsContent;