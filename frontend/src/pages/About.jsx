import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

const About = () => {

  const {token} = useContext(userContext)

  return (
    <div> About : {token} </div>
  )
}

export default About