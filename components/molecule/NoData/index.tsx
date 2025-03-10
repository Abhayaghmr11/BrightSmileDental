import React from "react";
import Image from "next/image";

import NoDataSvg from "@/public/assets/animations/filing-system-animate.svg";

interface NoDataProps {
  title: string;
  message: string | undefined;
}

const NoData = ({ title, message }: NoDataProps) => {
  return (
    <div className=" col-span-3 w-full flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center justify-center">
        <Image src={NoDataSvg} alt="No Data" height={300} />
      </div>
      <h2 className="text-xl text-center font-medium text-gray-800">{title}</h2>
      {message ? <p className="text-center text-gray-600">{message}</p> : null}
    </div>
  );
};

export default NoData;
