/* eslint-disable no-undef */
import './Navbar.scss';
import {useState} from 'react'
import { HiMenu, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
   <nav className='app__navbar'>
    <div className="app__navbar-logo">
        <img src={'./logo.svg'} alt= 'logo' />
    </div>
    <ul className='app__navbar-links'>
        {[ 'home', 'company', 'projects'].map((item) => (
            <li className='app__links p-text' key={`link-${item}`}>
                <div/>
                <a href={`#${item}`}>{item}</a>

            </li>
        ))}
    </ul>
    <div className="app__navbar-search">
        <input
        type='text'
        placeholder='Search anything'
        />
    </div>
    <div className="app__navbar-menu">
       <HiMenu onClick={() => setToggle(true)}/>

        {
            toggle && (
                <motion.div
                   whileInView={{ x: [300, 0]}}
                   transation={{duration: 0.85, ease: 'easeOut'}}
                >
                <HiX onClick={() => setToggle(false)}/>
            <ul>
                {[ 'home', 'company', 'projects'].map((item) => (
            <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>

            </li>
        ))}
        </ul>
                </motion.div>
            )
        }
    </div>
   </nav>
  )
}

export default Navbar
