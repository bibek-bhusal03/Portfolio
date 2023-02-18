import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {

}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl-spaxe-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill url="./html.webp" progress={78}/>
        <Skill url="./css.webp" progress={75}/>
        <Skill url="./javascript.webp" progress={78}/>
        <Skill url="./tailwindcss.webp" progress={70}/>
        <Skill url="./reactjs.webp" progress={70}/>
        <Skill url="./redux.webp" progress={50}/>
        <Skill url="./firebase.webp" progress={50}/>
        <Skill url="./nextjs.webp" progress={70}/>
        <Skill url="./typescript.webp" progress={60}/>
        <Skill url="./vscode.webp" progress={80}/>
        {/* {skills?.slice(0, skills.length / 2).map(skill => (
           <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map(skill => (
           <Skill key={skill._id} skill={skill} directionLeft />
        ))} */}
      </div>
    </motion.div>
  )
}

export default Skills