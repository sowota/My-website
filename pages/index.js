
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero';
import Works from '../components/Works';
import About from '../components/About';
import { client } from './../client';
import top from '../public/toTop.png'
import { useState, useEffect } from 'react';
import Footer from './../components/Footer';

const Home = ({works, experiences, selfIntro, subWorks}) => {

  

  const [isVisible, setIsVisible] = useState(false)

  const backToTop =()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 1000){
        setIsVisible(true)
      }else{
        setIsVisible(false)
      }
    })
  })

  return (
    <div  >
      <Head>
        <title>Sayuri T</title>
      </Head>

      <main className='w-full overflow-hidden relative'>
        <Hero/>
        <Works works={works} subWorks={subWorks}/>
        <About experiences={experiences} selfIntro={selfIntro}/>
        <Footer />

      </main>
      <div 
        className={`w-[2rem] lg:w-[3rem] fixed right-9 z-10 bottom-9 cursor-pointer hover:animate-bounce ${isVisible? '': 'hidden'}`}
        onClick={backToTop}
      >
           <Image src={top} className='w-full h-full'/>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async ()=>{
  const query = `*[_type == "work"]{
    _id,
    projectName,
    description,
    image,
    skill,
    projectUrl,
    code
  }`

  const query2 = `*[_type == "experience"]{
    _id,
    typeOfWork,
    workDetails,
    compName,
    startDate,
    endDate
    
  }`

  const works = await client.fetch(query)
  const experiences = await client.fetch(query2)

  const query3 = `*[_type == "selfIntro"]{
    _id,
    name,
    where,
    body,
    hobby,
    
  }`

  const selfIntro = await client.fetch(query3)

  const query4 = `*[_type == "workSub"]{
    _id,
    title,
    skill,
    workSubImg,
    subImgUrl,
    subImgCode,
    
  }`

  const subWorks = await client.fetch(query4)

  return {
    props:{
      works,
      experiences,
      selfIntro,
      subWorks,
    }
  }
}