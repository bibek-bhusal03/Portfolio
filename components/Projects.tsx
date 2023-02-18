import React from 'react'
import { motion } from 'framer-motion'


type Props = {
}

function Projects({  }: Props) {
  const projects = [1, 2, 3];
  const summary = ["This is a clone of Hulu 2.0 that is fully responsive, has slick animation, and it basically provides you with whatever  genre of movies  you want to watch. It also shows you the general information of what the movie is about, likes it has got, when was it's released date.", "This is a clone of LinkedIn that is fully responsive, has smooth animation, and login and logout function. It also has the functionality to make a post and it stores it in firebase.", "This is an Image Gallery( integrated with pixabay API ) that is fully responsive, has buttery animation, and it basically provide you with whatever  image  you want. It also shows you how much likes, downloads, views it has got."]
  const url = ['./huluclone.webp', './linkedinclone.webp', './imagegallery.webp']
  const title = ['Hulu clone 2.0', 'LinkedIn clone', 'Image gallery']
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-4 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80 pt-5'>
        {projects.map((project, i) => (
          <div
          key={i}
          className='w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
           <motion.img
            className='xl:max-h-80'
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             alt="" src={url[i]}/>
      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {3}:</span>{" "}
              {title[i]}
              </h4>

              <p className='text-lg text-center md:text-left'>
               {summary[i]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects