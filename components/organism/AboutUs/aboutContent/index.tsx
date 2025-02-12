import ContainerWrapper from '@/components/Layout/ContainerWrapper'
import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import React from 'react'
import TeamDoctor from "@/public/assets/images/team-doctor.png";
import Image from 'next/image';
import Text from '@/components/atom/Text'

import { aboutUs } from '@/app/constants/config';

const AboutUs = () => {
    return (
        <section className='bg-secondary'>
            <MaxWidthWrapper>
                <ContainerWrapper
                    heading='About'
                    headingSpan='Us'

                >
                    <div className='flex flex-col flex-auto lg:flex-row w-full gap-[40px] items-center justify-center'>
                        <div className='w-full max-w-[570px]'>
                            <Image src={TeamDoctor} alt="About Us" className='md:w-[570px]' style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            />
                        </div>
                        <div className='flex flex-col gap-[30px]'>
                            <Text variant="subheading" className='text-primary font-semibold text-center md:text-left'>
                                Welcome to Bright Smile Dental Clinic
                            </Text>
                            <Text variant='span'>
                                {aboutUs}
                            </Text>
                        </div>
                    </div>
                </ContainerWrapper>
            </MaxWidthWrapper>
        </section>
    )
}

export default AboutUs