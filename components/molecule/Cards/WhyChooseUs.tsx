import React from 'react'
import Chooseus from "@/public/assets/images/Chooseus.png"
import Text from '@/components/atom/Text'
import { FaRegHospital } from "react-icons/fa";
import Image from 'next/image'
const WhyChooseUs = () => {
    return (
        <>
            <div className='max-w-[395px] flex flex-col gap-[10px]  cursor-pointer rounded-[20px] p-[10px] border border-border_color'>
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
                <div>
                    <Text variant='body'>
                        State of the Art Technology
                    </Text>
                </div>

                {/* paragraph */}
                <div>
                    <Text className='text-secondary_foreground line-clamp-2 flex-1' variant='span'>We use the latest equipment and techniques for precise and effective treatments.</Text>
                </div>
                {/* numbering */}
                <div className='flex flex-row items-center justify-between'>
                    <Text className='text-primary font-black' variant='heading'>
                        01
                    </Text>
                    <FaRegHospital className='text-primary' size="15px" />
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs