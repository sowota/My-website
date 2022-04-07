
import Title from './Title';
import {client, urlFor } from '../client';
import Image from 'next/image';
import MoreProjects from './MoreProjects';
import WorkBtns from './WorkBtns';

export default function Works({works, subWorks}) {
  
  return (
    <section id='works' className="w-screen px-[4vw] lg:px-0 py-[5vw] bg-dGray mix-blend-darken bg-cover ">
      <Title title='Work'  />
      <div className=" grid ">   
        <div className="grid gap-y-[7rem] lg:gap-y-0">
  {/*First portfolio  */}
          {works?.slice(0,1).map((work, i) =>(
            <div 
              className="grid  lg:w-[90%] xl:w-[80%] gap-y-7 lg:grid-cols-7 lg:py-[4vw] lg:mr-auto"
              key={i}
            >
              {/* img */}
              <div className="md:w-[75%] lg:w-full lg:col-start-1 lg:col-span-5 lg:row-start-1 max-h-[600px] ">
                <img 
                  loading='lazy' 
                  src={urlFor(work?.image).url()} 
                  alt='project image'
                  className="w-full h-full object-contain"
                />
              </div>
              {/* details */}
              <div className="gap-y-8 lg:row-start-1 lg:col-start-5 lg:col-span-5 lg:self-center lg:justify-self-end grid lg:gap-y-[5rem]  ">
                <div className="lg:justify-self-end">
                  <h2 className='text-xl font-bold mb-6 md:text-3xl lg:text-4xl text-white font-mon lg:text-right'>
                    {work?.projectName}
                  </h2>
                  <p className="workDescription">
                    {work?.description}
                  </p>
                  {/* buttons */}
                  <WorkBtns justifyEnd='lg:justify-end' projectUrl={work?.projectUrl} code={work?.code}/>
                </div>
                        {/* Skills */}
                <div className='flex items-center lg:justify-self-end gap-5 md:gap-7'>
                    {work?.skill?.map(eachSkill =>(
                  <div className='flex flex-col items-center gap-y-3'>
                      <div className="w-[1.8rem] md:w-[2.4rem] lg:w-[3rem] h-[46px] flex items-center justify-center">
                        <img 
                          loading='lazy'  
                          src={urlFor(eachSkill?.image).url()} 
                          alt='skill logo' 
                          className='w-full object-contain'
                        />
                      </div>
                      <p className='hidden md:block text-white text-xs md:text-sm'>{eachSkill?.skill}</p>
                  </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
  {/* Sec portfolio */}
          {works?.slice(1,2).map((work, i) =>(
            <div 
              className="grid lg:w-[90%] xl:w-[80%] gap-y-7 lg:grid-cols-7 lg:py-[4vw] ml-auto "
              key={i}
            >
 {/* img */}
              <div className="md:w-[75%] lg:w-full lg:row-start-1 lg:col-start-3 lg:col-span-5 max-h-[600px] ">
                <img loading='lazy' src={urlFor(work?.image).url()} alt='project image'
                  className="w-full h-full object-contain"/>
              </div>
                

              <div className="gap-y-8 lg:col-start-1 lg:col-span-3 lg:self-center lg:row-start-1 grid lg:gap-y-[5rem] relative z-10 ">
                <div className="lg:justify-self-start">
                  <h2 className='text-xl mb-6 md:text-3xl lg:text-4xl text-white font-mon text-left font-bold'>
                    {work?.projectName}
                   
                  </h2>
                  {/* Descpription */}
                  <p className='workDescription'>
                    {work?.description}
                  </p>
                  {/* buttons */}
                 
                    <WorkBtns projectUrl={work?.projectUrl} code={work.code}/>
                </div>
          {/* Skills */}
                <div className='flex items-center gap-5 md:gap-7 flex-wrap'>
                    {work?.skill?.map(eachSkill =>(
                  <div className='flex flex-col items-center gap-y-3'>
                      <div className="w-[1.8rem] md:w-[2.4rem] lg:w-[3rem] h-[46px] flex items-center justify-center">
                        <img loading='lazy'  src={urlFor(eachSkill?.image).url()} alt='skill logo' className='w-full object-contain'/>
                      </div>
                      <p className='hidden md:block text-white text-xs md:text-sm'>{eachSkill.skill}</p>
                  </div>
                    ))}
                </div>
              </div>

              
            </div>
          ))}

  {/* Third portfolio         */}
  {works?.slice(2,3).map((work, i) =>(
            <div 
              className="grid  lg:w-[90%] xl:w-[80%] gap-y-7 lg:grid-cols-7 lg:py-[4vw] lg:mr-auto"
              key={i}
            >
              {/* img */}
              <div className=" md:w-[75%] lg:w-full lg:col-start-1 lg:col-span-5 lg:row-start-1 max-h-[600px] ">
                <img 
                  loading='lazy' 
                  src={urlFor(work?.image).url()} 
                  alt='project image'
                  className="w-full h-full object-contain"
                />
              </div>
              {/* details */}
              <div className="gap-y-8 lg:row-start-1 lg:col-start-5 lg:col-span-5 lg:self-center lg:justify-self-end grid lg:gap-y-[5rem]   ">
                <div className="lg:justify-self-end">
                  <h2 className='text-xl font-bold mb-6 md:text-3xl lg:text-4xl text-white font-mon lg:text-right'>
                    {work?.projectName}
                  </h2>
                  <p className="workDescription">
                    {work?.description}
                  </p>
                {/* buttons */}
                  <WorkBtns justifyEnd='lg:justify-end' projectUrl={work?.projectUrl} code={work?.code}/>
                </div>
              {/* Skills */}
                <div className='flex items-center lg:justify-self-end gap-5 md:gap-7'>
                    {work?.skill?.map(eachSkill =>(
                  <div className='flex flex-col items-center gap-y-3'>
                      <div className="w-[1.8rem] md:w-[2.4rem] lg:w-[3rem] h-[46px] flex items-center justify-center">
                        <img 
                          loading='lazy'  
                          src={urlFor(eachSkill?.image).url()} 
                          alt='skill logo' 
                          className='w-full object-contain'
                        />
                      </div>
                      <p className='hidden md:block text-white text-xs md:text-sm'>{eachSkill?.skill}</p>
                  </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MoreProjects subWorks={subWorks}/>


    </section>
  )
}


