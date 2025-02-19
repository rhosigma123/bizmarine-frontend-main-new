import React from 'react'
import PresenceCard from './PresenceCard'

function Presence() {
  return (
    <section className='w-full relative h-auto biz__container flex flex-col gap-10 py-10'>
        <h2 className=' text-lg  sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary  '>Bizmarine Global Presence</h2>

        <div className='w-full relative h-auto  items-start grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <PresenceCard/>
            <PresenceCard/>
            <PresenceCard/>
            <PresenceCard/>
            <PresenceCard/>

        </div>
    </section>
  )
}

export default Presence