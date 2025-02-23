import ContainerWrapper from '@/components/Layout/ContainerWrapper'
import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import WhyChooseUs from '@/components/molecule/Cards/WhyChooseUs'
import React from 'react'

import { whyChooseUs } from '@/app/constants/config'
import WhyChooseUsContent from '@/components/molecule/WhyChooseUsContent'

const ChooseUs = () => {
    return (
        <MaxWidthWrapper>
            <ContainerWrapper
                heading='Why Choose'
                headingSpan='Us'>
                <div className='flex flex-col gap-[25px] lg:gap-[60px] md:flex-row flex-wrap justify-center'>
                {/* {[...Array(3)].map((_, index) => (
              <WhyChooseUs key={index} />
            ))} */}
              <WhyChooseUsContent item={whyChooseUs}/>
                    
                </div>
            </ContainerWrapper>
        </MaxWidthWrapper>
    )
}

export default ChooseUs