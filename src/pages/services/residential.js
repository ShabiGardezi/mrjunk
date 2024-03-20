// pages/services/residential.js

import React, { Fragment } from 'react'
import TitleWithText from '@/components/TitleWithText'
import backgroundImage from '../../../public/images/service/img-seven.jpg'
import ResidentialServicesCards from '@/components/ResidentialServicesCards'
import HeaderOne from '@/components/header/header-1'

const ResidentialServicesPage = () => {
  return (
    <Fragment>
      <HeaderOne />
      <div>
        <TitleWithText
          title='Residential Services'
          // text={`Services`}
          // text2={`Residential Services`}
          backgroundImage={backgroundImage.src} // Access the URL of the image
        />
      </div>
      <ResidentialServicesCards />
    </Fragment>
  )
}

export default ResidentialServicesPage
