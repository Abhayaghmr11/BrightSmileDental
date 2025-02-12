import React from 'react'
import Chooseus from "@/public/assets/images/Chooseus.png"
import Text from '@/components/atom/Text'
import { LiaStethoscopeSolid } from "react-icons/lia";

import Image from 'next/image'
const WhyChooseUs = () => {
    return (
        <>
            <div className='max-w-[395px] flex flex-col gap-[10px] h-full  cursor-pointer rounded-[20px] p-[10px] border border-border_color hover:shadow-md ease-in-out duration-300 transition-all'>
                {/* image */}
                <div>
                    <Image
                        src={Chooseus}
                        alt="Choose us"
                        width={375}
                        height={220}
                        className='object-cover rounded-[10px] w-[375px] h-[220px] overflow-hidden' />
                </div>
                {/* heading test */}
                <div className='px-[10px]'>
                    <div>
                        <Text variant='body'>
                            State of the Art Technology
                        </Text>
                    </div>

                    <div className='flex flex-col gap-[10px] justify-between h-full '>
                        {/* paragraph */}
                        <div>
                            <Text className='text-secondary_foreground line-clamp-2 ' variant='span'>We use the latest equipment and techniques for precise and effective treatments.</Text>
                        </div>
                        {/* Bottom Numbering and Image */}
                        <div className='flex flex-row items-center justify-between'>
                            <Text className='text-primary font-black' variant='heading'>
                                01
                            </Text>
                            <LiaStethoscopeSolid className='text-primary w-[25px] h-[25px]'  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs