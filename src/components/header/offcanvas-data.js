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
      { title: 'Residential Services', path: '/services/residential' },
      { title: 'Commercial Services', path: '/services/commercial' },
      { title: 'Realtor Services', path: '/services/realtor' },
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
        title: 'Service 3',
        description: 'Reclaim Your Place with Expert Backyard Trash Removal Albuquerque',

        path: '/services/residential/service-3'
      },
      {
        title: 'Service 4',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-4'
      },
      {
        title: 'Service 5',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-5'
      },
      {
        title: 'Service 6',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-6'
      },
      {
        title: 'Service 7',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-7'
      },
      {
        title: 'Service 8',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-8'
      },
      {
        title: 'Service 9',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-9'
      },
      {
        title: 'Service 10',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-10'
      },
      {
        title: 'Service 11',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-11'
      },
      {
        title: 'Service 12',
        description: 'No More Clutter: Junk Appliance Removal Services in Albuquerque',
        path: '/services/residential/service-12'
      }
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
