import './Faqs.scss'
import {useState} from 'react'
import { motion } from 'framer-motion';
import { BiPlus } from 'react-icons/bi';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';

function Faqs() {

const data = [
    {
        question: "Lorem ipsum dolor sit amet consectet roin nascetur dictum turpis nisi orci dui?",
        answer: "Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi. Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi."
    },
    {
        question: "Lorem ipsum dolor sit amet consectet roin nascetur dictum turpis nisi orci dui?",
        answer: "Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi. Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi."
    },
    {
        question: "Lorem ipsum dolor sit amet consectet roin nascetur dictum turpis nisi orci dui?",
        answer: "Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi. Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi."
    },
    {
        question: "Lorem ipsum dolor sit amet consectet roin nascetur dictum turpis nisi orci dui?",
        answer: "Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi. Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio. Lorem ipsum dolor sit amet consectet. Ri nascetur dictum turpis nisi."
    },

];

  const [openIndex , setOpenIndex] = useState(null);

  const handleIndexChange = (index) => {
       if(openIndex == index)
       {
        setOpenIndex(null);
       } else {
        setOpenIndex(index);
       }
  }

  return (
    <div className="faq__wrapper ">
      <motion.div
      whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
      transition={{duration: 0.5}}
      className="px-20 pb-8">
      <h1 className="h1-text">Frequently Asked Questions</h1>

<div className="app__faqs ">
  {data.map((item, index) => (
      <div
      className={`${openIndex!== index ? 'app__faq-closeditem' : 'app__faq-openitem'}`}
      key={index}
      onClick={() => handleIndexChange(index)}
      >
        <div className="app__faq-question">
        <p className='p-text'>{item.question}</p>
        <GoPlus className={`${openIndex!== index ? '':'hidden'}`}/>
        <FiMinus className={`${openIndex === index ? '':'hidden'}`}/>
        </div>
       {openIndex === index && (
        <motion.div
              whileInView={{y: [-50, 0], opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__faq-answer'
        >
        <p className='p-text'>{item.answer}</p>
        </motion.div>  
    ) }
      </div>
    
    
  ))}
  <button className='p-text'>Load More</button>
  </div>

      </motion.div>
          </div>
  )
}

export default Faqs
