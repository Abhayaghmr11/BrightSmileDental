"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaArrowRight } from "react-icons/fa6";

import Text from "@/components/atom/Text";
import Hero from "@/public/assets/images/DentalImage.svg";
import { service } from "@/app/interface/types";

const ServiceCard = ({ service }: { service: service }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/services/${service?.id}`)}
      className="container transition-all flex flex-col gap-[20px] ease-in-out duration-300 cursor-pointer max-w-[420px] border border-border_color p-[10px] rounded-[20px] hover:shadow-md"
    >
      <div>
        <Image
          src={Hero}
          priority
          width={400}
          height={225}
          className="object-cover w-[400px] h-[225] overflow-hidden rounded-[10px]  "
          alt="Services"
        />
      </div>

      <div className="flex flex-col gap-[10px] px-[10px]">
        <div className="flex flex-row justify-between gap-[3px] w-full flex-grow">
          <Text variant="card_heading" className="text-black h-[45px] line-clamp-2">
            {service?.service}
          </Text>
          <Text variant="span" className="text-primary font-normal min-w-[70px] ">
            RS. {service?.price}
          </Text>
        </div>
        <div>
          <Text
            variant="span"
            className="text-secondary_foreground line-clamp-2"
          >
            {service?.sub_desc}
          </Text>
        </div>
      </div>

      <div className="flex flex-row gap-1 w-full justify-end items-center">
        <Text variant="span" className="text-primary">
          View More
        </Text>
        <div className="text-primary">
          <FaArrowRight className=" w-[12px] h-[12px]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
