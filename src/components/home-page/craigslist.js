import React from 'react'
import { OffcanvasData } from '../header/offcanvas-data'
import Image from 'next/image'
Image
export default function Craigslist() {
  // Get the first three services from OffcanvasData
  const services = OffcanvasData.slice(0, 3)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {services.map((service, index) => (
        <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
          <div className='relative h-64'>
            <Image
              src={`/images/${service.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} // Assuming images are named accordingly
              alt={service.title}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
            <p className='text-sm'>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
