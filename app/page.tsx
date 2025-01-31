import Image from "next/image";
import Logo from "@/public/assets/icons/Logo/Logo.svg"
export default function Home() {
  return (
    <>
    <h1 className=" max-w-[588px] md:text-banner_text font-black text-[25px]">Welcome to <span className=" text-primary">Bright Smile</span> Dental Clinic</h1>
    <Image src={Logo} alt="Logo" />
    </>
  );
}
