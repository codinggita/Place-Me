import { useState } from 'react'
import './nav.css'
import logo from './assets/placeMelogo.svg'

function Nav() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <nav className='nav'>
        <div className='navdiv'>

        <img id="logoimg" src={logo} alt="Logo"/>
        <div className='list'>
            <a href="">My Profile</a>
            <a href="">Services</a>
            <a href="">Company</a>
            <a href="">Feedback</a>
            <a href="">Notifications</a>
            <button>Sign up</button>
        </div>
        </div>
        </nav>
        
      </>
    )
  }
  
  export default Nav
  