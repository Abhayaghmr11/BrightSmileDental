import Text from "@/components/atom/Text";
import React from "react";

const FormCard = ({
  title,
  titleSpan,
}: {
  title: string;
  titleSpan: string;
}) => {
  return (
    <div className=" p-[45px] grow w-full flex-1 border border-border_color rounded-[20px]">
      <Text variant="subheading" className=" pb-[25px] font-extrabold">
        {title} <span className=" text-primary">{titleSpan}</span>
      </Text>
    </div>
  );
};

export default FormCard;
