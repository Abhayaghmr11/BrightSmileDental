import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

import Text from "@/components/atom/Text";
import Hero from "@/public/assets/images/Dental.svg";

const ServiceCard = () => {
  return (
    <div className="container transition-all flex flex-col gap-[20px] ease-in-out duration-300 cursor-pointer max-w-[420px] border border-border_color p-[10px] rounded-[20px] hover:shadow-md">
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

      <div className="flex flex-col gap-[5px] px-[10px]">
        <div>
          <Text variant="card_heading" className="text-black  ">
            Dental Implants
          </Text>
        </div>
        <div>
          <Text variant="span" className="text-secondary_foreground line-clamp-2">
            Maintain your oral health with regular checkups and preventive care.
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
