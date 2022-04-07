

export default function Morebtns({code, title, skills, img, key}) {
  return (
    <div 
      className="hidden inset-0 cursor-pointer absolute z-10 group-hover:inline-flex flex-col gap-y-8 justify-center items-center gap-x-5  hover:bg-primary hover:bg-opacity-90 hover:brightness-[.7]"
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
        <div className="flex gap-8">
    
            <a 
              href={img} 
              target="_blank" 
              rel="noopener noreferrer"
              className='inline-block text-sm md:text-base lg:text-xl text-gold border border-gold font-bold outline-none  font-cor backdrop-blur-sm  p-5 py-3 hover:bg-gold hover:text-black  '
            >
              View
            </a>
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-sm md:text-base lg:text-xl text-white font-cor font-bold backdrop-blur-sm  p-5 py-3 border hover:bg-white hover:text-black'
            >
              Code
            </a>
        </div>
    </div>
  )
}
