import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaCaretDown } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { OffcanvasData } from './offcanvas-data'
import WhiteLogo from './white-logo'

function HeaderOne() {
  const [offcanvas, setOffcanvas] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false) // Initialize to false

  const showOffcanvas = () => setOffcanvas(!offcanvas)

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const isSticky = e => {
    const header = document.querySelector('.header-section')
    const scrollTop = window.scrollY
    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky')
  }

  const headerCss = `flex lg:justify-between justify-end items-center`
  return (
    <Fragment>
      <header className='absolute w-full z-50'>
        <div className='sticky-holder header-section sticky-style-1'>
          <div className='custom-container container'>
            <div className='grid grid-cols-12 items-center leading-[120px]'>
              <div className='lg:col-span-3 col-span-6 mr-4'>
                <WhiteLogo />
              </div>
              <div className='lg:col-span-6 lg:block hidden ml-3'>
                <nav>
                  <ul className='main-menu text-white'>
                    <li className={router.pathname == '/' ? 'active' : ''}>
                      <Link href='/'>
                        <span className='transition-transform duration-300 hover:scale-90'>Home</span>
                      </Link>
                    </li>

                    <li className={router.pathname == '/about' ? 'active' : ''}>
                      <Link href='/aboutus'>
                        <span>About</span>
                      </Link>
                    </li>
                    <li
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className={router.pathname.startsWith('/services') ? 'active' : ''}
                    >
                      <Link href='#services'>
                        <span>Services</span>
                      </Link>
                      {servicesOpen && (
                        <ul className='sub-menu'>
                          {/* Render only the first three services */}
                          {OffcanvasData.find(item => item.title === 'Services')
                            .subcategories.slice(0, 3)
                            .map((subcategory, subIndex) => (
                              <li
                                key={subIndex}
                                className={router.pathname.startsWith(subcategory.path) ? 'active' : ''}
                              >
                                <Link href={subcategory.path}>
                                  <span className='transition-transform duration-300 hover:text-lg'>
                                    {subcategory.title}
                                  </span>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>

                    <li className={router.pathname == '/posts' ? 'active' : ''}>
                      <Link href='/#testimonials'>
                        {' '}
                        <span>Testimonials</span>
                      </Link>
                    </li>
                    <li className={router.pathname == '/contact' ? 'active' : ''}>
                      <Link href='#footer'>
                        <span>Request Quote</span>
                      </Link>
                    </li>
                    <li className={router.pathname == '/contact' ? 'active' : ''}>
                      <Link href='#footer'>
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='lg:col-span-3 col-span-6'>
                <div className={`outer-box ${headerCss}`}>
                  <ul className='language-list text-white'>
                    <li></li>
                    <li></li>
                  </ul>
                  <div className='offcanvas-area'>
                    <div className='offcanvas'>
                      <button className='menu-bars flex text-white text-[24px]' aria-label='Right Align'>
                        <FaBars onClick={showOffcanvas} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={offcanvas ? 'offcanvas-menu-wrap active' : 'offcanvas-menu-wrap'}>
        <nav className='offcanvas-menu'>
          <ul className='offcanvas-menu-items' onClick={showOffcanvas}>
            <li className='navbar-toggle flex justify-between items-center pb-[15px]'>
              <div className='logo'>
                <Link href='/'>
                  <Image src='/images/logo/logo-footer.webp' alt='Logo' width={150} height={50} />
                </Link>
              </div>
              <button
                className='menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all'
                aria-label='Right Align'
              >
                <AiOutlineClose />
              </button>
            </li>
            {OffcanvasData.map((item, index) => {
              // Determine the target URL based on the item title
              let targetUrl = ''
              switch (item.title) {
                case 'Home':
                  targetUrl = '#'
                  break
                case 'About':
                  targetUrl = '/aboutus'
                  break
                case 'Services':
                  targetUrl = '/#services' // Scroll to the Services section on the home page
                  break
                case 'Reviews':
                  targetUrl = '/#testimonials' // Scroll to the Reviews section on the home page
                  break
                case 'Request Quote':
                  targetUrl = '/#contact' // Scroll to the Request Quote section on the home page
                  break
                case 'Contact':
                  targetUrl = '/#footer'
                  break
                default:
                  // Handle any other titles not matched in the switch statement
                  targetUrl = '#' // Fallback behavior (optional)
              }

              return (
                <li key={index} className={item.cName}>
                  <Link href={targetUrl}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </Fragment>
  )
}

export default HeaderOne
