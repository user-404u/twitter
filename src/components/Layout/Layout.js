import React from 'react'
import './Layout.css'
import icon from '../../icon.png'
import Sidebar from '../sidebar/Sidebar'
import HeadNav from '../headNav/Headnav'
import Loadin from '../loading/Loadin'
const  Layout = (props) => {
  return (
    <div className='parent'>
        <header className='header'>
            <nav className='nav'>
                <img src={icon} className="react-logo" alt={"reactLogo"}/>
                <Sidebar/>
            </nav>
        </header>
        <div className='content'>
            <div className='head'>
              {props.title}
              <HeadNav/>

              </div>
              
            {<Loadin/> && props.children}
        </div>
    </div>
  )
}

export default  Layout