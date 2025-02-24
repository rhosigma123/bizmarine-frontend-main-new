import React from 'react'

function WhyChooseCard({bg,title,description}:{bg:string,title:string,description:string}) {
  return (
    <div className={` w-full relative flex p-3 md:p-5   flex-col items-start gap-2 rounded-xl text-secondary  ${bg} `}>
        <h2 className=' text-md md:text-lg lg:text-2xl font-medium text-secondary uppercase '>{title}</h2>
        <p className=' text-sm md:text-base font-medium text-secondary'>{description}</p>

    </div>
  )
}

export default WhyChooseCard