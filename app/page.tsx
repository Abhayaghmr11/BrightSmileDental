import Image from "next/image";
import Logo from "@/public/assets/icons/Logo/Logo.svg";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { HelpCircleIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen ">
      <div className="  hidden md:flex max-w-[1440px] mx-auto  justify-between items-center py-[10px] px-[60px]">
        <Image src={Logo} alt="Logo" />
        <Button variant="default" className=" font-black ml-5">
          Get Quotation
        </Button>
      </div>
      <div className=" max-w-[678px]">
        <Text variant="title">
          Welcome to <span className=" text-primary">Bright Smile </span>Dental
          Clinic{" "}
        </Text>

        <Text variant="body" className=" font-light text-secondary_foreground">
          Experience dental care redefined with style and precision. Experience
          dental care redefined with style and precision.
        </Text>
      </div>
      <Text variant="heading" className=" text-center">
        Our Clients <span className=" text-primary">Testimonials</span>
      </Text>
      <Text variant="nav" className=" text-center">
        Home Nav Item
      </Text>

      <div className=" flex flex-col gap-2">
        <div className=" flex gap-2 items-center">
          Primary button
          <Button variant="default">Get Quotation</Button>
        </div>
        <div className=" flex gap-2 items-center">
          Primary Disabled button
          <Button variant="default" disabled>
            Get Quotation
          </Button>
        </div>

        <div className=" flex gap-2 items-center">
          Secondary button
          <Button variant="secondary">Get Started</Button>
        </div>
        <div className=" flex gap-2 items-center">
          Secondary Disabled button
          <Button variant="secondary" disabled>
            Get Started
          </Button>
        </div>

        <div>
          Input field with password
          <Input type="password" className=" w-[200px]" />
          <br />
          Input field without password
          <Input type="text" className=" w-[200px]" />
          <br />
          Input field with icon and without password
          <Input type="text" icon={<HelpCircleIcon />} className=" w-[200px]" />
        </div>
      </div>
    </main>
  );
}
