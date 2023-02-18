import React from 'react'
import { motion } from 'framer-motion'


type Props = {
 
}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>

      <motion.img 
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x:0,
        opacity: 1,
      }}
      viewport={{once: true}}
      transition={{
        duration: 1.2,
      }}
      src='./profile.JPG'
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px] xl:mt-10'
      />
      <div className='space-between px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
        <p className='text-base'>I&rsquo;m Bibek. I&rsquo;m a freelance designer/front-end developer based in Nepal. I&rsquo;ve been coding for over 2 years now. With this 🌟passion i&rsquo;ve build clones of some popular sites. I am always thinking of ways to solve real world problems with coding and the best possible ways I can serve solutions to my client. Besides coding I love reading and football!</p>
      </div>
    </motion.div>
  )
}