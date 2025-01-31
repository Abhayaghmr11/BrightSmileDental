import Image from "next/image";
import Logo from "@/public/assets/icons/Logo/Logo.svg"
export default function Home() {
  return (
    <>
    <Image src={Logo} alt="Logo" />
    </>
  );
}
