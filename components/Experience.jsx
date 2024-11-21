import { workExperience } from '@/data'
import { button } from 'framer-motion/client'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className='py-20' id='experience'>
      <h1 className='heading'>
        My {' '}
        <span className='text-purple'>Work experience</span>
      </h1>
      <div className='w-full mt-12 grid-b'>
        {workExperience.map((card)=>(
          <Button
            key={card.id}
            // duration={Math.floor(Math.random()* 10000 + 10000)}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
          >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
              <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-12 md:w-10 w-6' />
              <div className=''>
                <h1 className='flex float-start text-start text-xl md:text-2xl font-bold'>
                  {card.title}
                </h1>
                <p className='flex float-start text-start text-white-100 mt-3 font-semibold'>
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience