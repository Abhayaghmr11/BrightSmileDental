import ContainerWrapper from '@/components/Layout/ContainerWrapper'
import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'

import Chooseus from "@/public/assets/images/Chooseus.png"

const ChooseUs = () => {
  return (
    <MaxWidthWrapper>
        <ContainerWrapper heading='Why Choose' headingSpan='Us'>
            <div className='w-full flex flex-col md:flex-row flex-wrap'>

            {/* Conatiner */}
            <div className='max-w-[395px] h-[360px] flex flex-col gap-[10px] rounded-[20px] p-[10px] border border-border_color'>
                {/* image */}
                <div>
                    <Image src={Chooseus} alt="Choose us" className='object-cover rounded-[10px] w-[375px] h-[220px] overflow-hidden'/> 
                </div>
                {/* heading test */}
                <div></div>
                {/* numbering */}
                <div></div>
            </div>

            </div>
        </ContainerWrapper>
    </MaxWidthWrapper>
  )
}

export default ChooseUs