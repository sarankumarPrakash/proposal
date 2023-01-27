import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'

const NavBar = () => {
  return (
    <div className='main'>
      <div className='Navbar'>
        <h3><Link to="/" >Proposal Website</Link></h3>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/about">About us </Link></li>
        <li><Link to ="/memories">Memories</Link></li>
        <li><Link to ="/apologize">Apologize</Link></li>
        {/* <li><Link to ="/">Proposal</Link></li> */}
      </ul> 
      </div>
    </div>
  )
}

export default NavBar