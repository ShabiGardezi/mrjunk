import React from "react";
import Link from "next/link";
import { OffcanvasData } from "../header/offcanvas-data"; // Import data

const RealtorServicesCards = () => {
  // Find the "Services" category
  const servicesCategory = OffcanvasData.find(
    (item) => item.title === "Services"
  );

  // Find the "Residential Services" subcategory under "Services" category
  const realtorServices = servicesCategory?.subcategories.find(
    (sub) => sub.title === "Realtor Services"
  );

  // Extract subServices data (if "Residential Services" is found)
  const subServicesData = realtorServices?.subServices;
  console.log(subServicesData);
  // Handle potential undefined values gracefully
  if (!subServicesData) {
    return <p>Loading realtor services...</p>; // Or display a placeholder
  }

  return (
    <div className="container mx-auto py-8">
  <h1 className="text-3xl font-bold mb-4 text-center">Realtor Services</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {subServicesData.map((service, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg overflow-hidden relative" // Add relative class here
      >
        {/* <Link href={service.path}> */}
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <h2>{service.title}</h2>
        </div>
        <div className="relative">
          <img
            src={`/images/realtor-services/realtor-services${index + 1}.jpg`} // Adjust image paths as needed
            alt={service.title}
            className="w-full h-300 object-cover object-center transform transition-transform hover:scale-110 z-0" // Add transform and transition-transform classes
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 z-10 flex items-center justify-center">
            <h2 className="text-white text-xl font-bold">{service.title}</h2>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">
            {service.description}
          </h3>
        </div>
        {/* </Link> */}
      </div>
    ))}
  </div>
</div>

  );
};

export default RealtorServicesCards;
