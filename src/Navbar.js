import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='Navbar'>  
      <div className='HomeNavbar'>
        <Link to="/" > Home </Link> 
      </div>

      <div className='ProfileNavbar'>
        <Link to="/menu" > Profile </Link> 
      </div>

      <div className='ContactNavbar'> 
        <Link to="/contact" > Contact </Link>
      </div>  
    </div>
  )
}