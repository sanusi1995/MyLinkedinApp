import React from 'react'
import Myicon from '../assets/myicon.png' 
import Search from '../assets/search.png'
import Home3 from '../assets/Home3.png'
import Jobs3 from '../assets/Job3.png'
import Message from '../assets/Message.png'
import MyNetwork from '../assets/My network.png'
import Notification2 from '../assets/Notification2.png'
import Work3 from '../assets/Work3.png'


export default function Navbar({ onNavClick }) {
  return (
    <div className='navbar'>

        <div className="navbar-wrap">
              <div className="navbarContentColOne">
                
                <img className='logoContainer' src={Myicon} alt="Linkedin logo" />
                
                <div className="appSearchNavbar">
                <input type="text" placeholder='Search'/>
                </div>
                <div className="searchIcon-navbar">
                <img src= {Search} alt="Search bar" />
                </div>
              </div>

        <div className="navbarContainerColTwo">
          <ul>
            <li onClick={() => onNavClick('home')}>  
              <div className="homeIcon">
              <img src= {Home3} alt="Home3 Icon" />
              </div>
              <div className="homeIconText">Home</div>
            </li>

            <li onClick={() => onNavClick('jobs')}>
              <div className="homeIcon">
              <img src= {Jobs3} alt="Job3 Icon" />
              </div>
              <div className="homeIconText">Jobs</div>
            </li>

            <li onClick={() => onNavClick('messages')}>
              <div className="homeIcon">
              <img src= {Message} alt="Message Icon" />
              </div>
              <div className="homeIconText">Message</div>
            </li>

            <li onClick={() => onNavClick('network')}>
              <div className="homeIcon">
              <img src= {MyNetwork} alt="Network Icon" />
              </div>
              <div className="homeIconText">Networks</div>
            </li>

            <li onClick={() => onNavClick('notifications')}>
              <div className="homeIcon">
              <img src= {Notification2} alt="Notification2 Icon" />
              </div>
              <div className="homeIconText">Notifications</div>
            </li>

            <li  onClick={() => onNavClick('works')}>
              <div className="homeIcon">
              <img src= {Work3} alt="Work3 Icon" />
              </div>
              <div className="homeIconText">Works</div>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )
}

