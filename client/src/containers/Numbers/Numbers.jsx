import './Numbers.scss';
import { motion } from 'framer-motion';

function Numbers() {

const data = [
    {
        title: 'Years of Experience',
        value: '10+'
    },
    {
        title: 'Years of Experience',
        value: '10+'
    },
    {
        title: 'Years of Experience',
        value: '10+'
    },
    {
        title: 'Years of Experience',
        value: '10+'
    },
    
];

  return (
    <div className="app__wrapper mt-10 ">
      <motion.div
      whileInView={{y:[100,  0] ,opacity: [0,1]}}
      transition={{duration: 0.5}}
      className="">
      <h1 className="h1-text-num">Numbers speak for themselves</h1>

<div className="app__number-div  ">
  {data.map((item, index) => (
    <div 

    className='app__number-item '
    key={ index}
    >
      <h2 className='bold-text text-white'>{item.value}</h2>
      <p className='p-text text-[white] text-center font-normal'>{item.title}</p>


    </div>
  ))}
  </div>

<div className="app__number-div-mobile grid-cols-2 ">
  {data.map((item, index) => (
    <div 

    className='app__number-item-mobile '
    key={ index}
    >
      <h2 className='bold-text text-white'>{item.value}</h2>
      <p className='p-text text-[white] text-center font-normal'>{item.title}</p>


    </div>
  ))}
  </div>

      </motion.div>
          </div>
  )
}

export default Numbers
