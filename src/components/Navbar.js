import React, {useState} from 'react'
import thirdweb from '../photos/thirdweb.png'
import './style.css'
import menu from '../photos/menu.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <nav className='na' >
        <div className='imm mmi'>
          <img className='im mi' src={thirdweb} alt="PRN" />
          <h3 className='el lee'><span>PRN</span> </h3>
        </div>
        <div className="menu" onClick={ ()=>{ setMenuOpen (!menuOpen)}}>
          <img className='ham' src={menu} alt="Hamburger" />
        </div>
        <div className='llu ull'>
          <ul className={ menuOpen? "lu uul open": "lu uul"} >
            <li className='le eee'><Link className='ae ze' to="/">Home</Link></li>
            <li className='le eee'><Link className='ae ze' to="/politics">Politics</Link></li>
            <li className='le eee'><Link className='ae ze' to="/sports">Sports</Link></li>
            <li className='le eee'><Link className='ae ze' to="/health">Health</Link></li>
            <li className='le eee'><Link className='ae ze' to="/science">Science</Link></li>
            <li className='le eee'><Link className='ae ze' to="/technology">Technology</Link></li>
            <li className='le eee'><Link className='ae ze' to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}



export default Navbar