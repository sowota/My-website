import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Chrono } from "react-chrono";


import Title from './Title';
import Subtitle from './Subtitle';

export default function About({experiences, selfIntro}) {

  const items = experiences.map(experience => {
    return {
      title: `${experience.endDate} - ${experience.startDate}`
    }
  })

  //console.log(experiences);
  return (
    <section id='about' className=" bg-gradient-to-b from-dGray via-[#334A52] to-primary w-screen p-[5vw]  ">
       <Title title="About"/>
      <div className="w-[90%] max-w-7xl mx-auto lg:mt-[8vw]">
       
        <div className="xl:flex gap-y-16 lg:flex-row lg:gap-x-16 xl:gap-x-[10rem] ">
          
        {/* Self-intro */}
          {selfIntro.map((item, i) =>(
            <div 
              className=' text-white md:text-lg flex flex-col gap-2 basis-6/12'
              key={i}
            >
          {/* Name */}
              <div className="flex flex-col gap-y-3 ">
                <span className='text-sm text-lGray'>WHO </span>
                <p  className='aboutText aboutBorder'>
                  {item.name}
                </p>
              </div>
          {/* Where */}
              <div className="flex flex-col gap-y-3">
                <span className='text-sm text-lGray'>WHERE </span>
                <p className=' aboutBorder'> 
                  {item.where}
                </p>
              </div>
          {/* What */}
              <div className="flex flex-col gap-y-3">
                <span className='text-sm text-lGray'>WHAT </span>
                <p className='aboutBorder'>   
                  {item.body}
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
              <span className='text-sm text-lGray'>LIKE </span>
                <p className='aboutBorder'>
                  
                  {item.hobby}
                </p>
              </div>
            </div>
          ))}
              
        {/* Timeline */}
          <div className='grid gap-y-16 mt-[8rem] xl:mt-0' >
        {/* Work */}
            <div className='grid gap-y-12'>
              <Subtitle title='work experiece'/>
        {/* Work */}
              <div>
                {experiences.map((experience, i) => (
                  <div 
                    className='grid gap-y-2 md:grid-flow-col  gap-x-5 '
                    key={i}
                  >
                    <p className='min-w-[13rem]  text-white'>
                      {`${experience.endDate} - ${experience.startDate}`}
                    </p>
                    <div className='hidden  md:block bg-lGray relative w-1 before:absolute before:w-6 before:h-6 before:bg-lGray before:rounded-full before:-translate-x-[.6rem] grow-0'></div>
        
                    <div className=' bg-bLight shadow-lg p-5 mb-5  rounded-md ml-6 md:min-w-[24rem] max-w-[24rem]'>
                      <h3 className="text-lg text-white mb-3 ">
                        {experience?.typeOfWork}
                      </h3>
                      <ul className="text-white text-sm mb-5">
                        <li className="indent-4">
                          {experience?.workDetails}
                        </li>
                      </ul>
                      <p className="text-lGray text-sm font-cor">
                        {experience?.compName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        {/* Volunteer */}
            <div className='grid gap-y-12'>
              <Subtitle title='Volunteer' />
              <div className="md:grid md:grid-flow-col gap-x-5">
                  <div className='grid md:grid-flow-col gap-y-2'>
                    <div className="">
                      <p className='min-w-[13rem] text-white'>
                        Apri, 2018 - Jul, 2019
                      </p>
                      <p className='text-lGray text-sm'>
                        Auckland, New Zealand / Fiji
                      </p>
                    </div>
                    <div className='hidden md:block bg-lGray relative w-1 before:absolute before:w-6 before:h-6 before:bg-lGray before:rounded-full before:-translate-x-[.6rem] grow-0'></div>
        
                    <div className='bg-bLight shadow-lg p-5 md:min-w-[24rem] max-w-[24rem] rounded-md ml-6'>
                      <h3 className="text-lg text-white mb-3 ">
                        ボランティア活動
                      </h3>
                      <ul className="text-white text-sm mb-5">
                          <li className="indent-4">
                            家庭問題で心に傷を負った学生たちのカウンセリング
                          </li>
                          
                      </ul>
                      <p className="text-lGray text-sm font-cor">
                        UPF
                      </p>
                    </div>
                </div>
        
              </div>
        
            </div>
        
        {/* Education */}
            <div className='grid  gap-y-12'>
              <Subtitle title='Education'/>
              <div className="md:grid md:grid-flow-col gap-x-5">
                  <div className='grid md:grid-flow-col gap-y-2 '>
                    <div className="">
                      <p className='min-w-[13rem] text-white'>Mar, 2012 - Aug, 2017</p>
                      <p className='text-lGray text-sm'>Seoul, Korea</p>
                    </div>
                    <div className='hidden  md:block bg-lGray relative w-1 before:absolute before:w-6 before:h-6 before:bg-lGray before:rounded-full before:-translate-x-[.6rem] grow-0'></div>
        
                    <div className='bg-bLight shadow-lg p-5 md:min-w-[24rem] max-w-[24rem] rounded-md ml-6'>
                      <h3 className="text-lg text-white mb-3 ">Bachelor of International Studies</h3>
                      <p className="text-white text-base"></p>
                      <p className="text-lGray text-sm font-cor">Ewha Womans University (梨花女子大学)</p>
                    </div>
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
