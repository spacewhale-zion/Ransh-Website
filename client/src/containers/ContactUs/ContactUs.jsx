import './ContactUs.scss'
import { useState} from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' }); 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const {name, email, message, phone} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {

  }
return (
    <div className="app__wrapper">
<motion.div
whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
transition={{duration: 0.5}}
className='h-[80vh] py-12 px-20 bg-[#FFD646] '>
        <h2 className='h1-text'>Contact Us</h2>
        <div className="app__flex mt-10">
            {!isFormSubmitted ?
                <div className=" app__flex w-full">
                    <div className="app__footer-form app__flex ">
                    <div className="app__flex ">
                        <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className='p-text' type='tel' placeholder='Your Phone Number' name='phone' value={phone} onChange={handleChangeInput} />
                    </div>
                    </div>
                    <div className="app__flex app__footer-form">
                    <div className="">
                        <textarea
                            value={message}
                            placeholder='Your Message'
                            className='p-text'
                            name='message'
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type='button' className='p-text ' onClick={handleSubmit}>{loading ? 'Sending' : 'Submit'}</button>
                    </div>
                    
                </div> :
                <div>
                    <h2 className='head-text'>Thank You for getting in Touch</h2>
                </div>
            }
        </div>
    </motion.div>
    </div>
    
)
}

export default ContactUs
