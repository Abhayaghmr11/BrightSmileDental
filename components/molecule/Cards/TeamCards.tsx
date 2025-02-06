import React from 'react'
import Image from "next/image";
import Potrait from "@/public/assets/images/Potrait.png";
import Text from "@/components/atom/Text";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const TeamCards = () => {
  return (
    <div className="bg-white flex flex-col gap-[10px] cursor-pointer max-w-[420px] max-h-[470px] border drop-shadow-lg rounded-[20px] p-[15px]">

              {/* Image for doctors */}
              <div>
                <Image 
                  src={Potrait} 
                  alt="doctor picture" 
                  style={
                  {
                    width:"390px", 
                    height:"300px"
                  }
                } className="rounded-[10px] overflow-hidden object-cover"/>
              </div>

              {/* Name of the doctor */}
              <div className="flex flex-col gap-[8px] px-[10px]">
                <div>
                  <Text variant="card_heading" className="text-black">
                    Dr. Steven Smith
                  </Text>
                  <Text variant="span" className="text-primary">Dental Surgeon</Text>
                </div>
                <div>
                  <Text variant="span" className="text-secondary_foreground line-clamp-3">Dr. Smith is a dedicated dentist specializing in Dental care. With 12 years of experience, they provide gentle and effective treatments for healthy smiles.</Text>
                </div>

                {/* Links */}
                <div className="text-primary flex w-full justify-end gap-[5px]">
                <CiLinkedin width={`18px`} height={`18px`}/>  <FaFacebook />
                </div>

              </div>

            </div>
  )
}

export default TeamCards