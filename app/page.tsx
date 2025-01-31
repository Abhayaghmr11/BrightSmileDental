import Image from "next/image";
import Logo from "@/public/assets/icons/Logo/Logo.svg"
import { Button } from "@/components/ui/button";
import Construction  from "@/public/assets/images/Contruction.svg";

export default function Home() {
  return (
   <main className="h-screen ">

     <div className="  hidden md:flex max-w-[1440px] mx-auto  justify-between items-center py-[10px] px-[60px]">
    <Image src={Logo} alt="Logo" />
    <Button variant="default" className=" font-black ml-5">Get Quotation</Button>
    </div>
    <div className="h-full flex flex-col justify-center items-center gap-10">
    <h1 className="text-banner_text font-black ">Under <span className="text-primary">Construction</span></h1>
    <Image src={Construction} alt="COntruction" width={400} />
    </div>
   </main>
  );
}
