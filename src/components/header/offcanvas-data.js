// offcanvas-data.js

export const OffcanvasData = [
  {
    title: 'Home',
    path: '/',
    cName: 'offcanvas-text'
  },
  {
    title: 'About',
    path: '/about',
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
      { title: 'Commercial Services', path: '/services/commercial' },
      { title: 'Realtor Services', path: '/services/realtor' }
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
