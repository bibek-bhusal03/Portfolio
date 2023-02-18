import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  url: string;
  progress: number;
  directionLeft? : boolean;
}

function Skill({ progress, url, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1}}
      whileInView={{ opacity: 1, x: 0 }}
      src={url}
      className='rounded-full border border-gray-500 object-cover w-16 h-16 md:h-29 md:w-29 xl:w-33 xl:h-33 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-29 md:w-29 xl:w-33 xl:h-33 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill