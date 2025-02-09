import ContainerWrapper from '@/components/Layout/ContainerWrapper'
import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import React from 'react'

const GoogleMapsContainer = () => {
    return (
        <section className='bg-secondary'>
            <MaxWidthWrapper>
                <ContainerWrapper
                    heading='Find us on'
                    headingSpan='Google Maps'
                    subheading='Get direction of our dental clinic through google map.'
                >
                    <div className='w-full p-[15px] lg:max-w-[1030px] h-[450px] lg:h-[415px] mx-auto bg-white rounded-[27px] drop-shadow-lg'>
                        <div className='rounded-[12px] h-full overflow-hidden'>
                            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0338215222628!2d85.324719!3d27.716241999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190fee6f2ca5%3A0xf94d85b4330ec9e1!2sBright%20Smile%20Dental%20Clinic%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1738864551855!5m2!1sen!2snp" loading="lazy" >
                            </iframe>
                        </div>
                    </div>
                </ContainerWrapper>
            </MaxWidthWrapper>
        </section>
    )
}

export default GoogleMapsContainer