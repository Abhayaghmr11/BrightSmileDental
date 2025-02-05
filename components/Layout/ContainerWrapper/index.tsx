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
  subheading: string;
}) => {
  return (
    <div
      className={`py-[60px]  flex flex-col justify-center items-center  ${className}`}
    >
      <div className="pb-[30px] text-center max-w-[630px]">
        {/* <h1 className="text-[32px] md:text-heading font-black"> */}
        <Text variant="heading">
          {heading}
          <span className="text-primary "> {headingSpan}</span>
        </Text>

        {/* </h1> */}

        <Text variant="span" className=" text-secondary_foreground">
          {subheading}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default ContainerWrapper;
