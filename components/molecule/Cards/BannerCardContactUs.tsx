import React from "react";
import { IconType } from "react-icons";

import Text from "@/components/atom/Text";
import { CiMail } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { companyEmail, phoneNumber } from "@/app/constants/config";
import { CiMapPin } from "react-icons/ci";

interface BannerData {
  Icon: IconType;
  title: string;
  data: string;
}

const Banner = ({ Icon, title, data }: BannerData) => {
  return (
    <div className=" flex flex-col gap-[10px]">
      <div className=" flex items-center gap-[10px]">
        <Icon className=" w-[18px] h-[18px] " />{" "}
        <Text variant="body" className=" font-semibold">
          {title}
        </Text>
      </div>
      <Text variant="body">{data}</Text>
    </div>
  );
};

const BannerCardContactUs = () => {
  const BannerData: BannerData[] = [
    {
      Icon: SlPhone,
      title: "Phone",
      data: phoneNumber,
    },
    {
      Icon: CiMail,
      title: "Email",
      data: companyEmail,
    },
    {
      Icon: CiMapPin,
      title: "Address",
      data: "New York, Street 5 House 11",
    },
  ];
  return (
    <div className="md:grid grid-cols-2 hidden flex-none gap-[20px] text-white p-[20px] bg-primary/90 rounded-[10px]">
      {BannerData?.map((banner, index) => (
        <Banner
          key={`${index} ${banner.title}`}
          title={banner?.title}
          Icon={banner?.Icon}
          data={banner?.data}
        />
      ))}
    </div>
  );
};

export default BannerCardContactUs;
