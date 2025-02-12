import Text from "@/components/atom/Text";
import React from "react";

const ContainerWrapper = ({
  children,
  className,
  heading,
  headingSpan,
  subheading,
}: {
  children: React.ReactNode;
  className?: string;
  heading: string;
  headingSpan: string;
  subheading?: string;
}) => {
  return (
    <div
      className={`py-[70px]  flex flex-col gap-[35px] justify-center items-center  ${className}`}
    >
      <div className="flex flex-col gap-[6px] text-center max-w-[630px]">
        {/* <h1 className="text-[32px] md:text-heading font-black"> */}
        <Text variant="heading">
          {heading}
          <span className="text-primary "> {headingSpan}</span>
        </Text>

        {/* </h1> */}

        <Text variant="span" className=" text-secondary_foreground italic">
          {subheading}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default ContainerWrapper;
