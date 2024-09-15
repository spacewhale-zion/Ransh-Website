import './Navbar.scss';
import { useState } from 'react';
import {  HiMenu, HiX } from 'react-icons/hi';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    
// const menuItems = [
//     { name: 'home', link: '#' },
//     { name: 'company', link: '#' },
//     { name: 'projects', link: '#' }
// ];
return (
        <nav className='app__navbar'>
            <div className="app__navbar-logo">
                <img src={'./logo.svg'} alt='logo' />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'company', 'projects'].map((item) => (
                    <li className='app__links p-text' key={`link-${item}`}>
                        {item === 'company' ? (
                            < >
                                <div className='flex flex-row gap-x-2  w-full items-center justify-center app__navbar-link-icon' onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
                                    {item}
                                    <IoIosArrowDown />
                                </div>
                                {isCompanyOpen && (
                                    <motion.div
                                    whileInView={{  opacity: [0,1]}}
                                    transation={{ duration: 1.5, ease: 'easeInOut', }}
                                    className='app__navbar-dropdown'
                                    >
                                        <ul className="">
                                        {['About Us', 'Carrers', 'Blogs', 'Contact Us', 'CSR', "FAQ'S"].map((item, index) => (
                                        <li key={index}>
                                            <a href="#">{item}</a>
                                        </li>
                                        ))}
                                    </ul>
                                    </motion.div>
                                    
                                )}
                            </>
                        ) : (
                            <a href={`#${item}`}>{item}</a>
                        )}
                    </li>
                ))}
            </ul>
            <div className="app__navbar-search">
                <input type='text' placeholder='Search anything' />
            </div>
            <div className="app__navbar-menu">
                <HiMenu onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transation={{ duration: 0.85, ease: 'easeOut' }}
                        className='app__navbar-menu-links'
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'company', 'projects'].map((item) => (
                                <li key={item}>
                                    {item === 'company' ? (
                            < >
                                <div className='flex flex-row items-center justify-start w-full' onClick={() =>{ setIsCompanyOpen(!isCompanyOpen)}}>
                                   {item}
                                    <IoIosArrowDown />
                                </div>
                                {isCompanyOpen && (
                                    <motion.div
                                    whileInView={{  opacity: [0,1]}}
                                    transation={{ duration: 1.5, ease: 'easeInOut', }}
                                    className='app__navbar-dropdown-mobile'
                                    >
                                        <ul >
                                        {['About Us', 'Carrers', 'Blogs', 'Contact Us', 'CSR', "FAQ'S"].map((item, index) => (
                                        <li key={index}>
                                            <a href="#">{item}</a>
                                        </li>
                                        ))}
                                    </ul>
                                    </motion.div>
                                    
                                )}
                            </>
                        ) : (
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        )}
                                    {/* <a href={`#${item}`} >
                                        {item}
                                    </a> */}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
)
};

export default Navbar;
