import Header from './Header';
import earth from '../public/earth.svg'
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion"
import ja from '../public/ja.svg'
import ne from '../public/ne.svg'
import jp from '../public/ba-jp.svg'


export default function Hero() {

  const hiVariants = {
    init:{
      opacity:0,
      y:30,
      transformOrigin:'left',
      rotate:5,
    },
    animate:{
      opacity:1,
      rotate:0,
      y:0,
    
      transition:{
        duration:0.5,
        delay:1.5
      }

    }

  }
  const nameVariants = {
    init:{
      opacity:0,
      y:30,
      transformOrigin:'left',
      rotate:5,
    },
    animate:{
      opacity:1,
      rotate:0,
      y:0,
    
      transition:{
        duration:0.5,
        delay:1.7
      }

    }

  }
  const welcomeVariants = {
    init:{
      opacity:0,
      y:30,
      transformOrigin:'left',
      rotate:5,
    },
    animate:{
      opacity:1,
      rotate:0,
      y:0,
    
      transition:{
        duration:0.5,
        delay:1.9
      }

    }

  }

  const callVariants = {
    init:{
      opacity:0,
      x:-500,

    },
    animate:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
        delay:2.5,
        type: "spring",
        stiffness: 100 
      }
    }
  }

  const imgVariants = {
    init:{
      opacity:0,
      scale:0,
      rotate:180,
    },
    animate:{
      opacity:1,
      scale:1,
      rotate:0,
      transition:{
        duration:1.7,
        ease:'easeInOut'

      }
    }
  }

  const heroVariants = {
    init:{
      opacity:0,
      width:0
    },
    animate:{
      width:'100%',
    
      opacity:1,

      transition:{
        duration:1.8,
        ease:'easeInOut'

      }
    },
    exit:{
      width:'100%',
      opacity:1
    }
  }

  

 

  return (
    <>
    <AnimatePresence>
      <Header />
      <motion.div 
        variants={heroVariants}
        initial='init'
        animate='animate'
        exit='exit'
        id='home' 
        className="p-[5vw] bg-primary justify-center items-center w-screen pt-36 md:pt-13 flex flex-col  gap-x-[3rem] md:gap-x-[7rem]  xl:gap-x-[10rem] 2xl:gap-x-[14rem] sm:flex-row md:h-screen bg-hero bg-cover bg-fixed "
        >
  {/* Right */}
        <div className="mb-20">
          <motion.p 
            className="text-white text-base tracking-wider lg:text-2xl font-mon mb-2 lg:mb-4"
            variants={hiVariants}
            initial='init'
            animate='animate'
          
          >
            Hi, there !
          </motion.p>
          <motion.h1 
            className="text-white text-5xl lg:text-[4rem] font-bold font-mon mb-4 lg:mb-6"
            variants={nameVariants}
            initial='init'
            animate='animate'
          >
            I'm Sayuri
          </motion.h1>
          <motion.h2 
            className="text-lGray  text-lg mb-8 lg:text-2xl lg:mb-[3.5rem]"
            variants={welcomeVariants}
            initial='init'
            animate='animate'

          >
            Thank you for visiting my website
          </motion.h2>
        
          <motion.div 
            variants={callVariants}
            initial='init'
            animate='animate'
          >
            <a
              href="#works"
              className="text-white tracking-widest text-xl md:text-2xl lg:text-3xl uppercase  relative line hover:after:w-full transition-all hover:after:duration-200 hover:after:ease-in-out font-cor"
            
            >
              View Work
            </a>
          </motion.div>
            
        </div>
  {/*left  */}
        <motion.figure 
            className="hidden md:inline-flex relative flex-1 w-[100px] max-w-[600px] h-auto "
            variants={imgVariants}
            initial='init'
            animate='animate'
        
        >
             <Image src={earth} className='w-full h-full' />
       
        </motion.figure>
        
      </motion.div>
    </AnimatePresence> 
    </>
  )
}
