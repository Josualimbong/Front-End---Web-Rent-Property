import './navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Nginep.com</span>
        </Link>

        <div className="navItems">
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
