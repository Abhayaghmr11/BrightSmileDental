import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import HeroLanding from "@/components/organism/landing/HeroLanding";
import Testimonials from "@/components/organism/landing/Testimonials";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";


import { Button } from "@/components/ui/button";
import Dental from "@/public/assets/images/Dental.svg";
import Text from "@/components/atom/Text";


export default function Home() {
  return (
    <main>
      <HeroLanding />
      <Testimonials />

      <div>
        <MaxWidthWrapper>
          <ContainerWrapper
            heading="Our Dental"
            headingSpan="Services"
            subheading="Discover the range of professional services offered by our clinic.">
            
            {/* Button */}
            <div className="p5-[5px] pb-[35px] flex w-full justify-end">
              <Link href={`/services`}>
                <Button>View All Services</Button>
              </Link>
            </div>

            {/* Containers */}
            <div className="flex flex-row gap-[25px] flex-wrap justify-center " >


              <div className="container max-w-[420px] border border-secondary_foreground p-[10px] rounded-[10px] shadow-md">
                <div>
                  <Image src={Dental} width={400} height={225} className="object-fill rounded-[10px]" alt="Services" />
                </div>
                <div className="py-[20px] px-[10px]">
                  <div>
                    <Text variant="subheading" className="text-black  ">
                      Dental Implants
                    </Text>
                  </div>
                  <div>
                    <Text variant="span" className="text-secondary_foreground">
                      Maintain your oral health with regular checkups and preventive care.
                    </Text>
                  </div>
                </div>
                  <div className="flex flex-row gap-1 w-full justify-end align-center">
                    <div className="flex">
                    <Text variant="span" className="text-primary">View More
                    </Text>
                    </div>
                    <div className="text-primary"><FaArrowRight/></div>
                  </div>
              </div>

              <div className="container max-w-[420px] border border-secondary_foreground p-[10px] rounded-[10px] shadow-md">
                <div>
                  <Image src={Dental} width={400} height={225} className="object-fill rounded-[10px]" alt="Services" />
                </div>
                <div className="py-[20px] px-[10px]">
                  <div>
                    <Text variant="subheading" className="text-black  ">
                      Dental Implants
                    </Text>
                  </div>
                  <div>
                    <Text variant="span" className="text-secondary_foreground">
                      Maintain your oral health with regular checkups and preventive care.
                    </Text>
                  </div>
                </div>
                  <div className="flex flex-row gap-1 w-full justify-end align-center">
                    <div className="flex">
                    <Text variant="span" className="text-primary">View More
                    </Text>
                    </div>
                    <div className="text-primary"><FaArrowRight/></div>
                  </div>
              </div>

              <div className="container max-w-[420px] border border-secondary_foreground p-[10px] rounded-[10px] shadow-md">
                <div>
                  <Image src={Dental} width={400} height={225} className="object-fill rounded-[10px]" alt="Services" />
                </div>
                <div className="py-[20px] px-[10px]">
                  <div>
                    <Text variant="subheading" className="text-black  ">
                      Dental Implants
                    </Text>
                  </div>
                  <div>
                    <Text variant="span" className="text-secondary_foreground">
                      Maintain your oral health with regular checkups and preventive care.
                    </Text>
                  </div>
                </div>
                  <div className="flex flex-row gap-1 w-full justify-end align-center">
                    <div className="flex">
                    <Text variant="span" className="text-primary">View More
                    </Text>
                    </div>
                    <div className="text-primary"><FaArrowRight/></div>
                  </div>
              </div>
            </div>

          </ContainerWrapper>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
