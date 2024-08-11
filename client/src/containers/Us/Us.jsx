import './Us.scss'
import {motion} from 'framer-motion';
import {images} from '../../constants';

function Us() {

  const data = [
    {
      imageUrl: `${images.us01}`,
      title: 'Expertise & Experience',
      description: 'Our team consists of seasoned professionals with years of experience in the industry. We leverage our deep knowledge and expertise to deliver exceptional service, ensuring that every project meets the highest standards of quality.'
    },
    {
      imageUrl: `${images.us02}`,
      title: 'Customer-Centric',
      description: 'At the heart of our operations is a commitment to our clients\' satisfaction. We prioritize understanding your unique needs and tailor our services to meet them effectively. By maintaining open communication.'
    },
    {
      imageUrl: `${images.us03}`,
      title: 'Innovative Solutions',
      description: 'Innovation is key to staying ahead in today\'s fast-paced world. We pride ourselves on our ability to think outside the box and offer creative, cutting-edge solutions that drive success. Our dedication to continuous improvement.'
    },
    {
      imageUrl: `${images.us04}`,
      title: 'Reliable & Trustworthy',
      description: 'Reliability is a cornerstone of our business. We understand the importance of meeting deadlines and delivering on our promises. Our clients can count on us to be dependable, transparent, and ethical in all our dealings.'
    }
  ];

  return (
    <div className="app__wrapper ">
      <div className="px-20 py-12 h-[80vh]">
      <h1 className="h1-text">Why Us?</h1>

<div className="app__profiles ">
  {data.map((item, index) => (
    <motion.div 
    whileInView={{ opacity: 1}}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className='app__profile-item h-[450px]'
    key={item.title + index}
    >
      <img src={item.imageUrl} alt={item.title}/>
      <h2 className='bold-text mt-5'>{item.title}</h2>
      <p className='p-text text-[#08006199] text-center mt-1 text-ellipsis font-normal'>{item.description}</p>


    </motion.div>
  ))}
  </div>

      </div>
          </div>
  )
}

export default Us
