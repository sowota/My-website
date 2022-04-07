

export default function WorkBtns({projectUrl, code, justifyEnd }) {
  return (
    <div className={`flex gap-x-5 ${justifyEnd}`}>
        <a 
          href={projectUrl} 
          className='text-sm font-cor btn'
          target="_blank" 
          rel="noopener noreferrer"
         >
           View Work
        </a>
        <a 
          href={code} 
          className='text-sm font-cor btn'
          target="_blank" 
          rel="noopener noreferrer"
        >
          Code
        </a>
    </div>
  )
}
