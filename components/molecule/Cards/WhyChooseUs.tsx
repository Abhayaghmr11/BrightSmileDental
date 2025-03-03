import React from 'react'
import Chooseus from "@/public/assets/images/Chooseus.png"
import Text from '@/components/atom/Text'
import { LiaStethoscopeSolid } from "react-icons/lia";

import { whychooseUs } from '@/app/interface/types';
import Image from 'next/image'

const WhyChooseUs = ({item}:{item:whychooseUs}) => {
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
                <div className='px-[10px] space-y-1'>
                    <div>
                        <Text variant='body'>
                            {item.title}
                        </Text>
                    </div>

                    <div className='flex flex-col gap-[5px] justify-center '>
                        {/* paragraph */}
                        <div className='flex-1'>
                            <Text className='text-secondary_foreground line-clamp-2 h-[35px]' variant='span'>{item.desc}</Text>
                        </div>
                        {/* Bottom Numbering and Image */}
                        <div className='flex flex-row items-center justify-between'>
                            <Text className='text-primary font-black' variant='heading'>
                                0{item.id}
                            </Text>
                            <LiaStethoscopeSolid className='text-primary w-[25px] h-[25px]'  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs;
