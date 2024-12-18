import './ContactUs.scss'
import { useState} from 'react';
import { motion } from 'framer-motion';

const ContactUs = ({header}) => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' }); 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const {name, email, message, phone} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
        setIsFormSubmitted(true);
        setLoading(false);
    }, 5000);
}

return (
    <div className=" bg-[#FFD646] my-10 py-10">
<motion.div
whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
transition={{duration: 0.5}}
className='app__wrapper '>
        <h2 className='h1-text'>{header}</h2>
        <div className="app__flex mt-10">
            {!isFormSubmitted ?
                <div className=" app__flex-contact w-full">
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
