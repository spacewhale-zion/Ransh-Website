import { Navbar } from '../../components';
import './Header.scss';
import {motion} from 'framer-motion';

const Header = () => {

  
  return (

    <div className="home header-wrapper ">
            <Navbar/>

<motion.div 
whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
transition={{duration: 0.5}}
className='app__header  app__flex '>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.5}}
      className='app__header-info flex flex-col items-center justify-center '
      >
        <div className='app__header-badge   '>
          <div className=" app__flex">
            <div className=" ml-5">
              <h2 className='head-text mb-8 md:mr-0 mr-4'>Not sure on how to get <span>solution</span> to your problems? </h2>
              <p className='p-text text-white text-left mr-4 md:mr-0'>Lorem ipsum dolor sit amet consectetur. In id faucibus quis mauris. Nequ ipsum interdum leo venenatis ridiculus arcu vestibulum lacus risus. Diam elementum phasellus dui fermentum. Dictumst non aliquam in aliquet eu nam sit.</p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full ">
          <div className=" flex md:flex-row flex-col justify-start md:items-center items-start flex-1 mb-4  mt-10 w-full ml-5 gap-4">
           <button className='p-text text-white text-center'>Explore Projects</button>
           <button className='p-text text-white text-center'>Contact Us</button>
           </div>
           <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='mobile__img'      
      >
        <img src={'./header-profile.svg'}  alt='profile_bg'/>
      </motion.div>
          </div>

        </div>

      </motion.div>

       <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img '      
      >
        <img src={'./header-profile.svg'}  alt='profile_bg'/>
      </motion.div>
    </motion.div>
    </div>
    
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Header;