import Image from "next/image";
import Logo from "@/public/assets/icons/Logo/Logo.svg"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" max-w-[1440px] mx-auto flex justify-between items-center py-[10px] px-[60px]">
    <Image src={Logo} alt="Logo" />
    <Button variant="default" className=" font-black ml-5">Get Quotation</Button>
    </div>
  );
}
