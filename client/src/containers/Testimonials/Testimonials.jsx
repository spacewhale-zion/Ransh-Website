import './Testimonials.scss'
import {motion} from 'framer-motion';
import {images} from '../../constants';

function Testimonials() {

const data = [
    {
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
    },
    {
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
    },
    {
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
    },
    {
        imageUrl: `${images.test01}`,
        name: 'Mr. Roy',
        designation: 'CEO @ Company',
        description: 'Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus aliquam mauris odio.Lorem ipsum dolor sit amet consectet. Proin nascetur dictum turpis nisi orci dui. Libero urna risus.'
    }
];

  return (
    <div className="app__wrapper ">
        <div className="px-20 h-[80vh] py-12">
        <h1 className="h1-text">Testimonials</h1>

<div className="app__test__profiles ">
  {data.map((item, index) => (
    <motion.div 
    whileInView={{ opacity: 1}}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className='app__test__profile-item'
    key={item.title + index}
    >
      <h2 className='bold-text mt-5'>{item.name}</h2>
      <h2 className='p-text text-[#080061]   mt-5'>{item.designation}</h2>
      <div className="flex justify-center items-center p-6">
      <img src={item.imageUrl} alt={item.title}/>
      
      </div>
      
      <p className='p-text text-[#08006199] text-center mt-1'>{item.description}</p>


    </motion.div>
  ))}
  </div>
        </div>
      
    </div>
  )
}

export default Testimonials
