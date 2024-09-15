import './Testimonials.scss'
import {motion} from 'framer-motion';
import {images} from '../../constants';
import { useState } from 'react';
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";


function Testimonials() {
  
  const data = [
    {
      id: 1,
      imageUrl: `${images.test01}`,
      name: 'Mr. Roy1',
      designation: 'CEO @ Company',
      description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
    },
    {
      id: 2,
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy2',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
    },
    {
      id: 3,
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy3',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
    },
    {
      id: 4,
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy4',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
      },
      {
        id: 5,
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy5',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
      },
      {
        id: 6,
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy5',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
      }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleItems = window.innerWidth > 1080 ? 4 : 1;

const handleNext = () => {
  if (currentIndex < data.length-visibleItems) {
    setCurrentIndex(currentIndex + 1);
  }
};

const handlePrev = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};



  return (
    <div className="app__wrapper mt-2 md:mt-10 ">
        <div className="">
        <h1 className="h1-text">Testimonials</h1>

<motion.div
whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
transition={{duration: 0.5}}
className="app__test__profiles ">
   <div className="slider-container">

<div className="slider">
  <div
    className="slider-track"
    style={{ transform: `translateX(-${currentIndex * (100/(1.9*visibleItems))}%)` }}
  >
    {data.map((item) => (
      <>
    <motion.div 
    whileInView={{ opacity: 1}}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className='slider-item'
    key={item.id}
    >
      <div className="">
      <div className="">
      <h2 className='bold-text'>{item.name}</h2>
      <h2 className='p-text text-[#080061]   '>{item.designation}</h2>

      </div>
      <img src={item.imageUrl} alt={item.title}/>

      
      
      </div>

      
      <p className='p-text text-[#08006199] text-center mt-1'>{item.description}</p>


    </motion.div>
    <motion.div 
    whileInView={{ opacity: 1}}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className='slider-item-tab'
    key={item.id}
    >
      <img src={item.imageUrl} alt={item.title}/>
      <div className="">
      <div className="">
      <h2 className='bold-text'>{item.name}</h2>
      <h2 className='p-text text-[#080061]   '>{item.designation}</h2>

      </div>
      

      
      <p className='p-text text-[#08006199] text-left mt-1'>{item.description}</p>

      </div>

      


    </motion.div>
    </>
  ))}
  </div>
</div>
<div className="flex flex-row gap-3">
<button onClick={handlePrev} disabled={currentIndex === 0}>
  <MdArrowCircleLeft />
</button>
<button onClick={handleNext} disabled={currentIndex >= data.length - visibleItems}>
<MdArrowCircleRight />

</button>
</div>
  </div>
  
  </motion.div>
        </div>
      
    </div>
  )





}

export default Testimonials
