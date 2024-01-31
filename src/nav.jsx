import { useState } from 'react'
import './nav.css'
import logo from './assets/placeMelogo.svg'
import { Link } from 'react-router-dom';

function Nav() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <nav className='nav'>
        <div className='navdiv'>

        <img id="logoimg" src={logo} alt="Logo"/>
        <div className='list'>
            <p><Link id='link1' to="/myprofile">My Profile</Link></p>
            <p><Link id='link1' to="">Services</Link></p>
            <p><Link id='link1' to="/Company">Company</Link></p>
            <p><Link id='link1' to="/feedback">Feedback</Link></p>
            <p><Link id='link1' to="">Notifications</Link></p>
            <button>Sign up</button>
        </div>
        </div>
        </nav>
        
      </>
    )
  }
  
  export default Nav
  