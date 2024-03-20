import React from 'react'
import Link from 'next/link'
import { OffcanvasData } from '../header/offcanvas-data' // Import data

const ResidentialServicesCards = () => {
  // Efficiently find residential services subcategory
  const residentialServices = OffcanvasData.find(item => item.title === 'Services' && item.subcategories)

  // Extract residential services (if found)
  const servicesData = residentialServices?.subcategories?.slice(3, 15) // Get services 4-14 (assuming 3 'Services' items)

  // Handle potential undefined values gracefully
  if (!servicesData) {
    return <p>Loading residential services...</p> // Or display a placeholder
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4' style={{ margin: '10px' }}>
      {servicesData.map((service, index) => (
        <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
          <Link href={service.path}>
            <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
              <h2>{service.title}</h2>
            </div>
            <img
              src={`/images/residential-services/residential-services${index + 1}.jpg`} // Adjust image paths as needed
              alt={service.title}
              className='w-full h-300 object-cover object-center'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{service.description}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ResidentialServicesCards
