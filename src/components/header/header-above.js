import Link from 'next/link'
import { Fragment } from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'
import HeaderOne from './header-1'

function HeaderAbove() {
  return (
    <Fragment>
      <header className='w-full z-10'>
        <div className='custom-container container'>
          <div className='flex justify-around items-center py-2'>
            <div className='flex items-center space-x-2'>
              <Link href='tel:+1(509) 475-8228' passHref>
                <span className='boxed-btn text-white text-[18px] leading-[30px] flex items-center'>
                  <span>Call Now</span>
                </span>
              </Link>
              <div className='flex items-center'>
                <FaPhone className='text-black mr-2' />
                <Link href='tel:+1(509) 475-8228' passHref>
                  <span className='hover:text-black transition-all mb-2'>+1 (509) 475-8228</span>
                </Link>
              </div>
              <div className='vertical-line'></div>
              <div className='flex items-center'>
                <FaEnvelope className='text-black mr-2' />
                <Link href='mailto:dan@mrjunkaway.com' passHref>
                  <span className='hover:text-black transition-all mb-2'>dan@mrjunkaway.com</span>
                </Link>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <FaFacebook className='text-black' />
              <FaTwitter className='text-black' />
              <FaGoogle className='text-black' />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default HeaderAbove
