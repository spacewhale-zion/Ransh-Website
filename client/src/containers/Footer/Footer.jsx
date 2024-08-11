import './Footer.scss';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import {  FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



function Footer() {
return (
    <footer>
        <div className="app__footer">
            <div className="app__footer-left gap-9">
                <div className="flex flex-col text-left gap-8 justify-start">
                    <img src="./logo.svg" alt="logo" />
                    <p className="p-text text-white opacity-80">
                        Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turi nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet constet. Lorem ipsum dolor sit amet consectet.
                    </p>
                </div>
                <div className="app__footer-contact">
                    <h2 className="bold-text">Contact Us</h2>
                    <div className="flex gap-4">
                        <BiSolidPhoneCall />
                        <p className="p-text"> +1012 3456 789</p>
                    </div>
                    <div className="flex gap-4">
                        <IoMailSharp />
                        <p className="p-text"> demo@gmail.com</p>
                    </div>
                    <div className="flex gap-4">
                        <FaLocationDot />
                        <p className="p-text"> 132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                    </div>
                </div>
                <div className="app__footer-socials">
                    <h2 className="bold-text">Follow us on</h2>
                    <div className="flex ">
                        <FaFacebook />
                        <FaXTwitter />
                        <AiFillInstagram />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
            <div className="app__footer-right">
                <div className="app__footer-links">
                    <div >
                        <h2 className="bold-text">Company</h2>
                        <ul>
                            {['About Us', 'Carrer', 'Contact Us', 'CSR', 'FAQ\'s'].map((item, index) => (
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="bold-text">Projects</h2>
                        <ul>
                            {['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'].map((item, index) => (
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="app__footer-newsletter">
                    <h2 className='bold-text'>Join Our Newsletter</h2>
                    <div >
                        <input type='text' placeholder='Enter your email'/>
                        <button>Send</button>
                    </div>
                    <p className='p-text'>Will send you weekly updates</p>
                </div>
            </div>
        </div>
    </footer>
);
}

export default Footer
