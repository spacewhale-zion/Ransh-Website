import './Project.scss'
import {useState} from 'react'
import {images} from '../../constants';
import { motion } from 'framer-motion';

function Projects() {

  const data = [
    {
      imageUrl: `${images.project01}`,
      title: 'Project 1',
      categories: ['UX Design', 'Illustrations', 'UI Design', 'Some Domain Name'],
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing libero lobortis sapien elit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet. Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing.'
    },
    {
      imageUrl: `${images.project01}`,
      title: 'Project 2',
      categories: ['UX Design', 'Illustrations', 'UI Design', 'Some Domain Name'],
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing libero lobortis sapien elit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet. Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing.'
    },
    {
      imageUrl: `${images.project01}`,
      title: 'Project 3',
      categories: ['UX Design', 'Illustrations', 'UI Design', 'Some Domain Name'],
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing libero lobortis sapien elit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet. Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing.'
    },
    {
      imageUrl: `${images.project01}`,
      title: 'Project 4',
      categories: ['UX Design', 'Illustrations', 'UI Design', 'Some Domain Name'],
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing libero lobortis sapien elit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet. Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing.'
    },
    {
      imageUrl: `${images.project01}`,
      title: 'Project 5',
      categories: ['UX Design', 'Illustrations', 'UI Design', 'Some Domain Name'],
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing libero lobortis sapien elit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet. Lorem ipsum dolor sit amet consectetur. Cursus eu ipsum nam pharetra eget sit. Dolor facilisi sed praesent leo ullamcorper quam neque mauris. Massa non ac amet sagittis cum. Feugiat quam nibh in vehicula adipiscing.'
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
    <div className="project__wrapper ">
      <motion.div
      whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
      transition={{duration: 0.5}}
      className="px-20 pb-8">
      <h1 className="h1-text">Our Projects</h1>

<div className="app__projects ">
  {data.map((item, index) => (
  openIndex !== index ? (
      <div
      className="app__project-closeditem"
      key={index}
      onClick={() => handleIndexChange(index)}
      >
        <div className="">
        <h2 className='bold-text'>{item.title}</h2>
        <ul className="app__work-filter  ">
          {item.categories.map((item, index)=> (
            <li key={index}
            className={`app__work-filter-item app__flex p-text `}
            >
           {item}
            </li>
          ))}
        </ul>
        </div>
      </div>
    ): (
      <motion.div 
      whileInView={{y:[100, 50, 0] ,opacity: [0,0,1]}}
    transition={{duration: 0.5}}
      className='app__project-openitem '
      key={ index}
      onClick={() => handleIndexChange(index)}
      >
        <motion.div
              whileInView={{x: [-100, 0], opacity: [0, 1]}}
              transition={{duration: 0.5}}
        className="">
        <h2 className='bold-text'>{item.title}</h2>
        <ul className="app__work-filter  ">
          {item.categories.map((item, index)=> (
            <li key={index}
            className={`app__work-filter-item app__flex p-text `}
            >
           {item}
            </li>
          ))}
        </ul>
        <p className='p-text '>{item.description}</p>
        <button className='p-text text-white text-center'>View Case Study</button>
        </motion.div>
        
        <img src={item.imageUrl} alt={item.title}/>
  
  
      </motion.div>
    ) 
    
  ))}
  </div>

      </motion.div>
          </div>
  )
}

export default Projects
