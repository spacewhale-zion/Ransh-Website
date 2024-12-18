import './Faqs.scss'
import {useState} from 'react'
import { motion } from 'framer-motion';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';

function Faqs() {

    const data = [
        {
          question: "What makes your products stand out?",
          answer: "Our solutions focus on innovation and user experience, leveraging the latest technologies to provide intuitive and effective tools for our users."
        },
        {
          question: "How do you ensure product quality?",
          answer: "We prioritize quality by following best practices in software development, including rigorous testing and user feedback during the development process."
        },
        {
          question: "What industries do you serve?",
          answer: "We develop products specifically for the defense, sports, and ed-tech industries, offering web-based solutions that address the unique challenges of each sector."
        },
        {
          question: "What makes you a product-based company?",
          answer: "Unlike service-based companies that provide outsourced solutions, we focus on creating and launching our own innovative products tailored to industry needs."
        },
        {
          question: "Do you offer customization of your products?",
          answer: "While our products are designed to solve broad industry challenges, we also provide customization options to meet specific client needs."
        },
        {
          question: "Are your products scalable?",
          answer: "Yes, all of our web-based solutions are designed with scalability in mind, ensuring they can grow alongside your business or organizational needs."
        }
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
    <div className="app__wrapper mt-2 md:mt-10 ">
      <motion.div
      whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
      transition={{duration: 0.5}}
      className="">
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
