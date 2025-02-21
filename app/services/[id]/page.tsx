import React from "react";

import Hero from "@/public/assets/images/DentalImage.svg";

import { ServiceData } from "@/app/constants/config";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import Image from "next/image";
import Text from "@/components/atom/Text";
import Link from "next/link";
import Button from "@/components/atom/Button";

const ServiceDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const service = ServiceData.flatMap((category) =>
    category.section.map((service) => service)
  ).find((service) => service.id.toString() === id.toString());
  return (
    <MaxWidthWrapper>
      <main className=" py-[60px] h-full gap-[40px] grid grid-cols-1 ipad-pro:grid-cols-2 w-full justify-items-center">
        {/* Image Container */}
        <div className=" h-full flex items-center image-container">
          <Image
            src={Hero}
            alt={service?.service || ""}
            width={650}
            priority={true}
          />
        </div>

        {/* Service Detail */}
        <div className=" h-full flex flex-col justify-center gap-[10px]">
          {/* Service Bread Crumps */}
          <Text variant="span" className=" text-secondary_foreground">
            <Link href={"/services"}>Services</Link> /{" "}
            <span className=" text-primary font-medium">
              {service?.service}
            </span>
          </Text>

          <div className=" flex flex-col gap-[15px]">
            {/* Service Details */}
            <Text variant="heading" className=" text-black font-medium">
              {service?.service}
            </Text>
            <Text variant="span">
              <span className=" text-primary">रु</span> {service?.price}
            </Text>

            <div>
              <div
                className=" text-secondary_foreground font-normal text-[16px] leading-relaxed flex flex-col gap-[12px]"
                dangerouslySetInnerHTML={{
                  __html: service?.details || <p></p>,
                }}
              ></div>
            </div>

            <div className=" flex gap-[20px] flex-wrap">
              <Link href="/contact">
                <Button variant="default">Book An Appointment</Button>{" "}
              </Link>
              <Link href="/services">
                <Button variant="secondary">Explore More Services</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
};

export async function generateStaticParams() {
  const services = ServiceData.flatMap((category) => category.section);

  return services.map((service) => ({
    id: service.id.toString(),
  }));
}

export default ServiceDetailPage;
