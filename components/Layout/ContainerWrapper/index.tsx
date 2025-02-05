import React from 'react'

const ContainerWrapper = (
    {
        children,className,heading,headingSpan,subheading
    }: {
        children: React.ReactNode,className?: string,heading?: string,headingSpan?: string,subheading?: string
    }
) => {
  return (
    <div className={`py-[60px] px-[60px]  flex flex-col justify-center items-center  ${className}`}>
        <div className='pb-[30px] text-center max-w-[632px]'>
        <h1 className='text-[32px] md:text-heading font-black'>{heading}<span className='text-primary'> {headingSpan}</span></h1>
        <h2 className='text-[12px] md:text-paragraph text-secondary_foreground font-normal pt-[5px] '>{subheading}</h2>
        </div>
        {children}
    </div>
  )
}

export default ContainerWrapper