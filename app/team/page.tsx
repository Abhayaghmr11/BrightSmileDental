import React from 'react'
import ContainerWrapper from '@/components/Layout/ContainerWrapper'
import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import TeamContent from '@/components/molecule/TeamContent'
import { Team } from "../constants/config"

const Teams = () => {
  return (
    <>
      <MaxWidthWrapper>
        <ContainerWrapper 
          heading='Our' 
          headingSpan='Teams' 
          subheading='Get to know the skilled and experienced team members of our dental clinic, reflecting the professionalism and expertise of our staff.'
        >
          <div>
            <TeamContent teams={Team} />
          </div>
        </ContainerWrapper>
      </MaxWidthWrapper>
    </>
  )
}

export default Teams