"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/atom/Button";
import Text from "@/components/atom/Text";
import NotFoundLottie from "@/components/molecule/404Lottie";

const NotFound = () => {
  const router = useRouter();
  return (
    <main className=" max-w-[1440px] mx-auto px-[20px] md:px-[60px] ipad-pro:h-[550px] flex items-center justify-center w-full">
      <section>
        <div className="flex flex-col gap-1 ">
          <Text variant="heading" className=" text-primary">
            Oops, <span className=" italic">404!</span>
          </Text>
          <Text variant="subheading">
            <span className=" text-black font-semibold">Nothing</span> here...
          </Text>
          <Text
            className=" text-secondary_foreground font-light ipad-pro:max-w-[650px]"
            variant="body"
          >
            {`We couldn't find the page you were looking for. Please check the URL or click the button below to return to the homepage.`}
          </Text>
          <Button
            className=" w-min mt-5"
            variant="default"
            onClick={() => router.push("/")}
          >
            Go back to the homePage
          </Button>
        </div>
      </section>
      <section>
        <NotFoundLottie />
      </section>
    </main>
  );
};

export default NotFound;
