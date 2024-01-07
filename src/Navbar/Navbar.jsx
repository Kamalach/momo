import React from 'react'
import{Link} from 'react-router-dom';

const Navbar = () => {
  const link= [
   {
    name:"About-Us",
    link:"about",
   },

   {
    name:"Our menu",
    link:"menu",
   },

   {
    name:"Our services",
    link:"servies",
   },

   

  ]
  return(
  <>
  <div className="navbar">
  <Link to="">
    <div className='navlogo'>
       <img src="" alt="" />
    </div>
  </Link>
  <div className='link'>
    {link.map((name,))}


  </div>
     
  </div>
  
  
  
  </>
  )

  

}

export default Navbar