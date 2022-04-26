

export default function Morebtns({code, title, skills, img, key}) {
  return (
    <div 
      className="hidden inset-0 cursor-pointer absolute z-10 group-hover:inline-flex flex-col gap-y-2 justify-center items-center gap-x-5  hover:bg-primary hover:bg-opacity-90 hover:brightness-[.7]"
      key={key}
    >
        <p className="text-white font-bold text-base md:text-2xl">
          {title}
        </p>
        <div className="flex gap-3 px-4 flex-wrap">
          {skills?.map(skill=>(
            <p className="text-white text-sm lg:text-base">{skill.skill}</p>
          ))}
        </div>
        <div className="flex gap-8 mt-10 items-center">
    
            <a 
              href={img} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="External link"
              aria-role="button"
              className='inline-block self-center text-sm md:text-base  text-gold border border-gold outline-none  font-cor backdrop-blur-sm py-2 px-8 hover:bg-gold hover:text-black  '
            >
              VIEW
            </a>
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label='Github link'
              aria-role="button"
              className='text-sm md:text-base text-white font-cor   backdrop-blur-sm  py-2 px-8 border hover:bg-white hover:text-black'
            >
              CODE
            </a>
        </div>
    </div>
  )
}
