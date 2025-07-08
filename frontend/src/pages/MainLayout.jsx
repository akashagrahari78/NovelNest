import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({children}) => {
  return (
    <div className='relative'>
        <Navbar/>
        <main>{children} </main>
    </div>
  )
}

export default MainLayout