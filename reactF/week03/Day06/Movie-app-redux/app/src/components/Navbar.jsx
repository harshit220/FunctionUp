import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width:"80%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
    </div>
  )
}

export default Navbar