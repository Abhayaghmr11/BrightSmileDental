import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import TeamCards from "@/components/molecule/Cards/TeamCards";

import Link from "next/link";
import { Button } from "@/components/ui/button";


const Teams = () => {
  return (
    <section className="bg-secondary">
        <MaxWidthWrapper>
          <ContainerWrapper
            heading="Meet our" 
            headingSpan="Team" 
            subheading="Get to know the skilled and experienced team members of our dental clinic, reflecting the professionalism and expertise of our staff.">
            
            {/* Button */}
          <div className="flex w-full justify-end">
            <Link href={`/team`}>
              <Button>View the Team</Button>
            </Link>
          </div>

          {/* Team Members Container */}
          {/* padding on container missing, check and reconfirm */}
          <div className="flex flex-row gap-[20px] flex-wrap justify-center ">
            {[...Array(2)].map((_, index) => (
              <TeamCards key={index} />
            ))}
          </div>
            
          </ContainerWrapper>
        </MaxWidthWrapper>
      </section>
  )
}

export default Teams