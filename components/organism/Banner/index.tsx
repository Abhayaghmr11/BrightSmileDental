import { CiClock1 } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { CiMapPin } from "react-icons/ci";

import { BannerItem } from "@/app/interface/types";

import { phoneNumber, companyEmail } from "@/app/constants/config";
import Button from "@/components/atom/Button";
import Text from "@/components/atom/Text";

const bannerData: BannerItem[] = [
  {
    title: "Open Hours",
    Icon: CiClock1,
    detail: [
      {
        data: "Sun to Fri",
      },
      {
        data: "9:00 am to 8 pm",
      },
    ],
  },
  {
    title: "Contact Us",
    Icon: SlPhone,
    detail: [
      {
        data: phoneNumber,
      },
      {
        data: companyEmail,
      },
    ],
  },
  {
    title: "Address",
    Icon: CiMapPin,
    detail: [
      {
        data: "New York, Street 5 House 11",
      },
    ],
  },
];

const DetailComponent = ({ title, Icon, detail }: BannerItem) => {
  return (
    <div className=" flex flex-col gap-[10px]">
      <div className="flex gap-[8px] items-center">
        <Icon className="w-[22px] h-[22px] text-white" />
        <Text variant="body" className=" text-white font-extrabold">
          {title}
        </Text>
      </div>
      {detail?.map((info, index: number) => (
        <div className="pl-[35px]" key={`${title}${index}`}>
          <Text variant="body" className=" text-white">
            {info?.data}
          </Text>
        </div>
      ))}
    </div>
  );
};

const Banner = () => {
  return (
    <div className="  bg-primary">
      <div className=" max-w-[1440px] items-center flex justify-around mx-auto py-[45px] px-[110px] flex-col lg:flex-row gap-[15px]">
        {bannerData?.map((banner) => (
          <div className=" hidden lg:block" key={banner.title}>
            <DetailComponent
              title={banner.title}
              Icon={banner.Icon}
              detail={banner.detail}
            />
          </div>
        ))}
        <div className="flex lg:hidden ">
          <Text
            variant="body"
            className=" flex flex-col text-center text-white font-extrabold"
          >
            Request Your
            <span className=" italic font-light">
              Appointment{" "}
              <span className=" not-italic font-extrabold">Today</span>
            </span>
          </Text>
        </div>
        <Button variant="secondary">Book an Appointment</Button>
      </div>
    </div>
  );
};

export default Banner;
