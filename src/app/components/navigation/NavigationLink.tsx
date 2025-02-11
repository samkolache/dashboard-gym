'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationLink = ({link, title, icon}) => {

    const path = usePathname()

  return (
    <Link href={link} className = {`${path === link ? ' flex gap-2  p-2 rounded-md text-brand bg-gray-100 ' : 'flex gap-2  p-2 rounded-md text-black' }`} >
        {icon}
        <p className='font-medium'>{title}</p>
    </Link>
  )
}

export default NavigationLink

