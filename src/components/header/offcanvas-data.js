// offcanvas-data.js

export const OffcanvasData = [
  {
    title: 'Home',
    path: '/',
    cName: 'offcanvas-text'
  },
  {
    title: 'About',
    path: '/aboutus',
    cName: 'offcanvas-text'
  },
  {
    title: 'Services',
    cName: 'offcanvas-text dropdown',
    subcategories: [
      {
        title: 'Residential Services',
        path: '/services/residential',
        subServices: [
          // Add 12 services for Residential Services
          {
            title: 'Appliance Removal',
            description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
            path: '/services/residential/applianceremoval'
          },
          {
            title: 'Backyard Junk Removal',
            description: 'Reclaim Your Place with Expert Backyard Trash Removal Albuquerque',
            path: '/services/residential/backyardjunkremoval'
          },
          {
            title: 'Cement and Asphalt Removal',
            description: 'Effortless Cement and Asphalt Removal for Clear Surfaces',

            path: '/services/residential/cementandasphaltremoval'
          },
          {
            title: 'Cinder Block Removal',
            description: 'Smart & Efficient Cinder Block Removal in Albuquerque NM',
            path: '/services/residential/cinderblockremoval'
          },
          {
            title: 'Couch Removal',
            description: 'Farewell to Your Old Couch in Albuquerque with Zia Later',
            path: '/services/residential/couchremoval'
          },
          {
            title: 'Furniture Removal',
            description: 'Streamline Your Space with Professional Old Furniture Removal in Albuquerque',
            path: '/services/residential/furnitureremoval'
          },
          {
            title: 'Hoarder Cleanups',
            description: 'Compassionate Hoarder Junk Cleanup in Albuquerque for a Fresh Startup',
            path: '/services/residential/hoardercleanups'
          },
          {
            title: 'Hot Tub Removal',
            description: 'Effortless Hot Tub Removal and Disposal service Albuquerque',
            path: '/services/residential/hottubremoval'
          },
          {
            title: 'Home Remodel Junk Removal',
            description: 'Streamline Your Home Remodel with Expert Junk Removal',
            path: '/services/residential/homeremodeljunkremoval'
          },
          {
            title: 'Mattress Removal',
            description: 'Hassle-Free Mattress removal Service in Albuquerque',
            path: '/services/residential/mattressremoval'
          },
          {
            title: 'Shed Junk Removal',
            description: 'Clear Your Space and Restore Order with Shed Junk Removal Services in Albuquerque',
            path: '/services/residential/shedjunkremoval'
          },
          {
            title: 'Wood Removal',
            description: 'Effortless Wood Removal Services Albuquerque for a Clutter-Free Space',
            path: '/services/residential/woodremoval'
          }
          ,
          {
            title: 'Tree and Branch Removal',
            description: 'Efficient Branch and Tree Removal Service Albuquerque',
            path: '/services/residential/treeandbranchremoval'
          }
          ,
          {
            title: 'Yard Debris and Yard Waste Removal',
            description: 'Transform Your Yard with Our Expert Debris and Waste Removal Service',
            path: '/services/residential/yarddebrisandyardwasteremoval'
          }
        ]
      },
      {
        title: 'Commercial Services',
        path: '/services/commercial',
        subServices: [
          // Add 12 services for Residential Services
          {
            title: 'Cardboard Removal',
            description: 'Effortless Cardboard Removal Service in Albuquerque',
            path: '/services/commercial/cardboardremoval'
          },
          {
            title: 'Construction Waste Removal',
            description: 'Efficient Construction Waste Removal Service in Albuquerque',
            path: '/services/commercial/constructionwasteremoval'
          },
          {
            title: 'Dumpster Cleanouts',
            description: 'Make Your Disposal Hassle-free with Professional Trash Dumpster Rental Service.',

            path: '/services/commercial/dumpstercleanouts'
          },
          {
            title: 'Metal Recycling',
            description: 'Maximize Sustainability with Expert Metal Recycling Services',
            path: '/services/commercial/metalrecycling'
          },
          {
            title: 'Office Cleanouts',
            description: 'Efficient Office Cleanouts for a Productive Workspace',
            path: '/services/commercial/officecleanouts'
          },
          {
            title: 'Pallet Removal',
            description: 'Efficient Pallet Removal for Clear and Functional Spaces',
            path: '/services/commercial/palletremoval'
          },
          {
            title: 'Recycling Services',
            description: 'Promoting Sustainability with Reliable Recycling Services',
            path: '/services/commercial/recyclingservices'
          },
          {
            title: 'Shipping Container Cleanouts',
            description: 'Efficient Cleanouts for Clear and Functional Shipping Containers',
            path: '/services/commercial/shippingcontainercleanouts'
          },
          {
            title: 'Senior Home Junk Removal',
            description: 'Compassionate Home Junk Removal for Safe and Comfortable',
            path: '/services/commercial/seniorhomejunkremoval'
          },
          {
            title: 'Restaurant Cleanouts',
            description: 'Streamline Your Restaurant with Expert Cleanout Services',
            path: '/services/commercial/restaurantcleanouts'
          },
          {
            title: 'Trash Removal',
            description: 'Effortless Trash Removal for Clean and Tidy Spaces',
            path: '/services/commercial/trashremoval'
          },
          {
            title: 'Tire Removal',
            description: 'Efficient Tire Removal & Disposal Services in Albuquerque NM',
            path: '/services/commercial/tireremoval'
          }
          ,
          {
            title: 'Warehouse Cleanouts',
            description: 'Efficient Warehouse Cleanouts for Organized and Productive Spaces',
            path: '/services/commercial/warehousecleanouts'
          }
        ]
      },
      { title: 'Realtor Services',
       path: '/services/realtor',
       subServices: [
        // Add 12 services for Residential Services
        {
          title: 'Apartment Cleanouts',
          description: 'Hassle-free Apartment Cleanouts Services Albuquerque',
          path: '/services/realtor/apartmentcleanouts'
        },
        {
          title: 'Foreclosure Junk Removal',
          description: 'Swift Foreclosure Junk Removal to Simplify Property Transitions',
          path: '/services/realtor/foreclosurejunkremoval'
        },
        {
          title: 'Garage Cleanouts',
          description: 'Clean Out Your Garage and Transform It into a Relaxing Oasis',

          path: '/services/realtor/garagecleanouts'
        },
        {
          title: 'Hoarder Junk Removal',
          description: 'Compassionate Hoarder Junk Removal for a Fresh Start',
          path: '/services/realtor/hoarderjunkremoval'
        },
        {
          title: 'Rental Property Junk Removal',
          description: 'Effortless Junk Removal Solutions for Rental Property Owners',
          path: '/services/realtor/rentalpropertyjunkremoval'
        },
        {
          title: 'Tenant Junk Removal',
          description: 'Reliable junk removal services for satisfied tenants every time',
          path: '/services/realtor/tenantjunkremoval'
        }
      ]}
    ]
  },
  {
    title: 'Reviews',
    path: '/reviews',
    cName: 'offcanvas-text'
  },
  {
    title: 'Request quote',
    path: '/request-quote',
    cName: 'offcanvas-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    cName: 'offcanvas-text'
  }
]
