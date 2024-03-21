import React from 'react'
import Link from 'next/link'
import { OffcanvasData } from '../header/offcanvas-data' // Import data

const CommercialServicesCards = () => {
  // Find the "Services" category
  const servicesCategory = OffcanvasData.find(item => item.title === 'Services')

  // Find the "Residential Services" subcategory under "Services" category
  const commercialServices = servicesCategory?.subcategories.find(sub => sub.title === 'Commercial Services')

  // Extract subServices data (if "Residential Services" is found)
  const subServicesData = commercialServices?.subServices

  // Handle potential undefined values gracefully
  if (!subServicesData) {
    return <p>Loading residential services...</p> // Or display a placeholder
  }

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Commercial Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {subServicesData.map((service, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <Link href={service.path}>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
                <h2>{service.title}</h2>
              </div>
              <img
                src={`/images/commercial-services/commercial-services${index + 1}.jpg`} // Adjust image paths as needed
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
    </div>
  )
}

export default CommercialServicesCards