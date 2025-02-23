import { IconType } from "react-icons";
import React from "react";
import Image from "next/image";

import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

import {
  companyEmail,
  companyMoto,
  phoneNumber,
  ServiceData,
} from "@/app/constants/config";
import { navitems } from "../Navbar/config";

import MaxWidthWrapper from "../MaxWidthWrapper";
import FooterLogo from "@/public/assets/icons/Logo/LogoFooter.svg";
import Text from "@/components/atom/Text";
import Link from "next/link";

interface link {
  Icon?: IconType;
  name: string;
  path: string;
}

const FooterLinks = ({ title, links }: { title: string; links: link[] }) => {
  return (
    <div className=" flex flex-col items-center w-full lg:items-start lg:w-fit text-center lg:text-start gap-[20px]">
      <Text variant="card_heading" className=" font-semibold">
        {title}
      </Text>
      <div className=" flex flex-col gap-[15px]">
        {links?.map((link: link) => (
          <div key={`${link.name} ${link.path}`}>
            <Link href={link?.path} className=" flex gap-[5px] items-center">
              {link?.Icon && <link.Icon className=" w-[22px] h-[22px]" />}
              <Text
                variant="nav"
                className=" hover:text-white text-center lg:text-start w-full cursor-pointer"
              >
                {link.name}
              </Text>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const socialLinks: link[] = [
    {
      name: "Facebook",
      path: "/facebook",
      Icon: CiFacebook,
    },
    {
      name: "Instagram",
      path: "/instagram",
      Icon: CiInstagram,
    },
    {
      name: "LinkedIn",
      path: "/",
      Icon: CiLinkedin,
    },
  ];

  const serviceLink: link[] = ServiceData.flatMap((category) =>
    category.section.map((service) => ({
      name: service.service,
      path: `/services/${service.id}`,
    }))
  ).slice(0, 4);

  return (
    <div className=" bg-primary text-white">
      <MaxWidthWrapper>
        <div className=" flex flex-col gap-[50px] pt-[50px] pb-[15px]">
          <section className=" w-full flex flex-col gap-[40px] lg:gap-0 lg:flex-row justify-between items-start">
            {/* Company Detail */}
            <div className=" flex items-center w-full lg:items-start lg:w-min text-center lg:text-start flex-col gap-[30px]">
              <Image src={FooterLogo} alt="Bright Smile Dental" className="" />
              <Text variant="nav" className=" hover:text-white max-w-[265px]">
                {companyMoto}
              </Text>
              <div className=" flex  flex-col gap-[10px]">
                <Text variant="nav" className="font-bold hover:text-white">
                  {phoneNumber}
                </Text>
                <Text variant="nav" className=" font-bold hover:text-white">
                  {companyEmail}
                </Text>
              </div>
            </div>

            <FooterLinks title="Navigation" links={navitems} />
            <FooterLinks title="Services" links={serviceLink} />
            <FooterLinks title="Socials" links={socialLinks} />
          </section>
          <section className=" w-full flex flex-col gap-[15px] relative">
            <hr className=" hidden lg:block border-t bg-white ml-[500px]"></hr>
            <Text variant="span" className=" text-center lg:text-right">
              © Designed and developed by Anish™ and Abhaya™
            </Text>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
