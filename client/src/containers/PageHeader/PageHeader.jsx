import { Navbar } from '../../components';
import './PageHeader.scss';
import {motion} from 'framer-motion';
import { images } from '../../constants';

const PageHeader = ({heading, description}) => {

  
  return (

    <div className="home-page page-wrapper ">
            <Navbar/>

<motion.div 
whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
transition={{duration: 0.5}}
className='page__header  app__flex '>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.5}}
      className='page__header-info flex flex-col items-center justify-center '
      >
        <div className='page__header-badge   '>
          <div className="">
            <div className=" ml-5">
              <h2 className='head-text mb-8 md:mr-0 mr-4'>{heading} </h2>
              <p className='p-text text-white text-left md:mr-0 mr-4'>{description}</p>
            </div>
          </div>
          <div className="flex flex-row justify-end mt-5 md:h-full h-[8vh] w-full ">
          {/* <div className=" flex md:flex-row flex-col justify-start md:items-center items-start flex-1 mb-4  mt-10 w-full ml-5 gap-4">
           <button className='p-text text-white text-center'>Explore Projects</button>
           <button className='p-text text-white text-center'>Contact Us</button>
           </div> */}
           <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='mobile__img-page'      
      >
        <img src={images.pagehead}  alt='profile_bg'/>
      </motion.div>
          </div>

        </div>

      </motion.div>

       <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='page__header-img '      
      >
        <img src={images.pagehead}  alt='profile_bg'/>
      </motion.div>
    </motion.div>
    </div>
    
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default PageHeader;