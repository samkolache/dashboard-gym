import React from 'react'
import Image from 'next/image'
import { HomeIcon, ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/outline'
import NavigationLink from './NavigationLink'

const Sidebar = () => {
  return (
    <aside className='bg-white w-[300px] min-h-screen p-4'>
        <Image
        src = "/logo.png"
        alt='gymskii logo'
        width={100}
        height={100}
        />
        <div className='mt-8 space-y-4'>
          <NavigationLink link = "/" title = "Dashboard" icon = {<HomeIcon className = "size-6" />}/>
          <NavigationLink link = "/history" title = "Workout History" icon = {<ClockIcon className = "size-6" />}/>
          <NavigationLink link = "/progress" title = "Progress" icon = {<ArrowTrendingUpIcon className = "size-6" />}/>
        </div>
        <div className='flex justify-center'>
          <button className='px-4 py-2 bg-brand text-white rounded-md mt-16'>+ Log Workout</button>
        </div>
        
    </aside>
  )
}

export default Sidebar
