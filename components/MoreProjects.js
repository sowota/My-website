import { urlFor } from '../client';
import Morebtns from './Morebtns';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export default function MoreProjects({subWorks}) {
  return (
    <div className="flex gap-y-[5rem] gap-x-[2rem] flex-col place-content-center md:flex-row mt-[8rem] pr-[3vw]">
        <div className="lg:w-[30%] flex-1 flex items-start gap-5 justify-center">
            <h3 className="text-white text-2xl xl:text-4xl">
                 Check Out More
            </h3>
            <ArrowNarrowRightIcon className="hidden md:inline-block text-white w-[1.8rem] xl:w-[2.5rem]"/>
        </div>

        <div className='grid gap-y-6 place-content-center xl:grid-cols-2  gap-x-3 xl:gap-y-3  '>
            {subWorks?.map((work, i) =>(
                <div 
                    className="group relative group w-auto md:w-[550px] h-[320px] lg:w-[550px] xl:w-[500px] lg:h-[360px] cursor-pointer"
                    key={i}
                >
                    <img
                        loading='lazy' 
                        src={urlFor(work?.workSubImg).url()} 
                        className='w-full h-full border-2 border-white object-cover'
                    />
               
                <Morebtns 
                    title={work?.title} 
                    skills={work?.skill}
                    img={work?.subImgUrl}
                    code={work?.subImgCode}
                    key={work?.title}
                />
                </div>
            ))}
            
        </div>
    </div>
  )
}
