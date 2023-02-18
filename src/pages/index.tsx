import Head from 'next/head'
import Link from 'next/link'
import About from '../../components/About'
import ContactMe from '../../components/ContactMe'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'



type Props = {
  
}


  const Home = ({}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap overflow-y-scroll overflow-x-scroll-hidden z-0 scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Bibek&rsquo;s portfolio</title>
      </Head>
      <Header  />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* about */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      
      {/* skills */}
      <section id='skills' className="snap-start">
        <Skills/>
      </section>
      {/* projects */}
      
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact me */}

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className=' flex items-center justify-center'>
          <img width={10}
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="./bulb.jpg" alt="" />
          </div>
          </footer>
          </Link>
    </div>
  )
}
export default  Home;
