import React, { Suspense } from "react";
import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import TeamContent from "@/components/molecule/TeamContent";
import { Team } from "../constants/config";
import Loading from "../loading";

const Teams = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MaxWidthWrapper>
        <ContainerWrapper
          heading="Our"
          headingSpan="Teams"
          subheading="Get to know the skilled and experienced team members of our dental clinic, reflecting the professionalism and expertise of our staff."
        >
          <div>
            <TeamContent teams={Team} />
          </div>
        </ContainerWrapper>
      </MaxWidthWrapper>
    </Suspense>
  );
};

export default Teams;
