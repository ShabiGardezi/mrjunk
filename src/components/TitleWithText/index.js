// components/TitleWithText.js

import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const TitleWithText = ({ title, text, text2, backgroundImage }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '20px', // Adjust padding as needed
    height: '350px' // Set the height of the background container
  }

  return (
    <div style={containerStyle}>
      <div
        className=''
        style={{ width: '55%', margin: 'auto', fontSize: '40px', fontWeight: 'bold', color: 'white', marginTop: '5%' }}
      >
        <h1>{title}</h1>
      </div>
      <p>
        {text} <IoIosArrowForward className='ml-2 text-gray-500' /> {text2}
      </p>
    </div>
  )
}

export default TitleWithText
