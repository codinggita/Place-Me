import { useState } from 'react'
import './nav.css'
import logo from './assets/placeMelogo.svg'
import { Link } from 'react-router-dom';

function Nav() {
    const [count, setCount] = useState(0);
  
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
         {/* It's only for responsive mobile */}
        {/* function openNav(params) {
          
        } */}

        <div id='mysidepanel' className='sidepanel'>
        <Link to="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</Link>
          <Link id='link1' to='/myprofile'>My Profile</Link>
          <Link id='link1' to='/'>Services</Link>
          <Link id='link1' to='/Company'>Company</Link>
          <Link id='link1' to='/feedback'>Feedback</Link>
          <Link id='link1' to=''>Notifications</Link>
        </div>
        {/* <button className='openbtn' onClick={openNav()}>&#9776; Toggle Sidepanel</button> */}
        
        
       {/* Above code is for only mobile */}

        </div>
        </nav>
        
      </>
    )
  }
  
  export default Nav
  