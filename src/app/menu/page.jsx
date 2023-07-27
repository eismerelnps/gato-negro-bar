import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Image from 'next/image'
import MenuContainer from '../components/menu/MenuContainer'



export default function page() {
  return (
    <div className=''>
      <NavBar />
      <div>
        <Image
        src={'/cover.jpg'}
        alt='gato-negro-image'
        width={500}
        height={500}
        />
      </div> 
      <div className=''>
       <MenuContainer />
      </div>
    </div>
  )
}
