import {MenuAlt1Icon, XIcon} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {FiGithub} from 'react-icons/fi'
import { useRouter } from 'next/router'


export default function Header() {

  const router = useRouter()
  const[preScrollProps, setPreScrollProps] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [navColor, setNavColor] = useState(false)

  const headerVariants = {
    initial:{
      opacity:0,
     
     
    },
    animate:{
      opacity:1,
    
     
      transition:{
        delay:1.5,
        duration:0.8
      }
    }
  }

  

  const handleScroll = () =>{
    const currentScroll = window.scrollY || document.documentElement.scrollTop

    setIsVisible(preScrollProps > currentScroll  || currentScroll < 10)

    setPreScrollProps(currentScroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[preScrollProps, isVisible])

  const changeNavColor =()=>{
    if(window.scrollY >= 70){
      setNavColor(true)
    }else{
      setNavColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavColor)
  },)

  const menu =[
    'home',
    'works',
    'about'
  ]

  const [isShown, setIShown] = useState(false)

  const variants = {
    open:{
      opacity:1,
      right:0,
    },
    closed:{
      opacity:0,
      right:'-100%',
    }
  }

  const handleClick = () => {
    setIShown(prevState=> !prevState)
  }




  return (
    <motion.header 
      variants={headerVariants}
      initial='initial'
      animate='animate' 

      className={`fixed flex justify-between items-center top-0 left-0 right-0 z-10 ${navColor? 'bg-dGray/60 backdrop-blur-xl backdrop-opacity-90 ' : 'bg-transparent' } shadow-md px-6 py-4 lg:px-[6vw] xl:px-[8vw]  transition-all ${isVisible? 'top-0': '-translate-y-[70px]'}`}>
     
        <div 
          className="text-white text-xl tracking-wider font-cor italic cursor-pointer "
          onClick={()=>router.push('/')}
        >
          <span className=" font-bold text-4xl text-gold">S</span>
          AYURI
        </div>
        {/* Tablet */}
        <nav className="hidden md:inline-flex items-center justify-evenly">
          <ul className="flex gap-8 items-center">
          {menu.map((menuItem, i) =>(
                <li key={i} className=''><a href={`#${menuItem}`} className='text-lg uppercase text-white hover:text-gold'>{menuItem}</a></li>
              ))}
            <a href='https://github.com/sowota'>
              <FiGithub className="text-white text-lg hover:text-gold hover:scale-[1.2] transition-all duration-75 cursor-pointer "/>
            </a>
          </ul>
         
          
        </nav>
        {/* Smartphone */}
        <nav className="md:hidden ">
          {isShown ? <XIcon className="absolute top-6 right-6 z-20 w-10 text-white cursor-pointer border p-1 hover:opacity-60 transition-all duration-['50ms'] ease-linear" onClick={handleClick} /> : 
                    <MenuAlt1Icon className="w-10 text-white cursor-pointer border p-1 hover:opacity-60" onClick={handleClick}/>
          
          }
            <motion.ul 
              variants={variants}
              animate={isShown? 'open': 'closed'}
              transition={{duration: .5}}
              className='fixed top-0 right-0 bottom-0 shadow-lg shadow-primary bg-[#002731] p-10 pt-[15rem] w-[300px] h-screen  flex flex-col items-center gap-20 '
            >
              {menu.map((menuItem, i) =>(
                <li 
                  key={i} 
                  onClick={handleClick}
                >
                  <a href={`#${menuItem}`} className='text-2xl uppercase text-white hover:text-gold'>{menuItem}</a>
                </li>
              ))}

            <a href='https://github.com/sowota'>
              <FiGithub className="text-white text-2xl hover:text-gold hover:scale-[1.2] transition-all duration-75 cursor-pointer "/>
            </a>
            </motion.ul>
        
        </nav>
      

    </motion.header>
  )
}
