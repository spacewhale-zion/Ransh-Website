import './Navbar.scss';
import { useState, useEffect } from 'react';
import {  HiMenu, HiX } from 'react-icons/hi';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.querySelector('.app__navbar-dropdown');
            if (dropdown && !dropdown.contains(event.target)) {
                setIsCompanyOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
const menuItems = [
    { name: 'home', link: '/' },
    { name: 'company', link: '#' },
    { name: 'projects', link: '/projects' }
];
const subMenuItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Careers', link: '/notfound' },
    { name: 'Blogs', link: '/notfound' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'CSR', link: '/notfound' },
    { name: "FAQ'S", link: '/faq' }
];

return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo">
            <img src={'./logo.svg'} alt='logo' />
        </div>
        <ul className='app__navbar-links'>
            {menuItems.map((item) => (
                <li className='app__links p-text' key={`link-${item}`}>
                    {item.name === 'company' ? (
                        <>
                            <div className='flex flex-row gap-x-2  w-full items-center justify-center app__navbar-link-icon' onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
                                {item.name}
                                <IoIosArrowDown />
                            </div>
                            {isCompanyOpen && (
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transation={{ duration: 1.5, ease: 'easeInOut' }}
                                    className='app__navbar-dropdown'
                                >
                                    <ul className="">
                                        {subMenuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link to={`${item.link}`}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </>
                    ) : (
                        <Link to={`${item.link}`}>{item.name}</Link>
                    )}
                </li>
            ))}
        </ul>
        <div className="app__navbar-search">
            <input type='text' placeholder='Search anything' />
        </div>
        <div className="app__navbar-menu">
            <HiMenu onClick={() => setToggle(!toggle)} />

            {toggle && (
                <motion.div
                    whileInView={{ x: [-300, 0] }}
                    transation={{ duration: 1, ease: 'easeOut' }}
                    className='app__navbar-menu-links'
                >
                    <HiX onClick={() => setToggle(!toggle)} />
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                {item.name === 'company' ? (
                                    <>
                                        <div className='flex flex-row items-center justify-start w-full' onClick={() => { setIsCompanyOpen(!isCompanyOpen) }}>
                                            {item.name}
                                            <IoIosArrowDown />
                                        </div>
                                        {isCompanyOpen && (
                                            <motion.div
                                                whileInView={{ opacity: [0, 1] }}
                                                transation={{ duration: 1.5, ease: 'easeInOut' }}
                                                className='app__navbar-dropdown-mobile'
                                            >
                                                <ul>
                                                    {subMenuItems.map((item, index) => (
                                                        <li key={index}>
                                                            <Link to={`${item.link}`}>{item.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </>
                                ) : (
                                    <Link to={`${item.link}`} onClick={() => setToggle(!toggle)}>{item.name}</Link>
                                )}
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
