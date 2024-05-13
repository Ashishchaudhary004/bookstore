import React from 'react'
import list from '../../public/list.json';
import Card from './Card';
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-3 '>
        <div className=' items-center justify-center text-center pt-28'>
          <h1 className='text-4xl font-semibold md:text-4xl  text-black mt-4'>Welcome to our Books Store </h1>       
          <h2 className='text-2xl font-semibold  text-black mt-2'>Discover Your Inner Strength: <span className='text-pink-600'>Inspirational Stories for Personal Growth</span></h2>
          <p className=' text-neutral-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga qui repudiandae? Earum, nemo obcaecati labore expedita distinctio totam suscipit perferendis? Adipisci veniam minus dolor reiciendis corrupti totam perferendis numquam!</p>

          <div className='w-74 h-74 grid grid-cols-1 md:grid-cols-3 mt-8'>
          {
            list.map((data)=>( 
              <Card key={data.id} data={data}/>
            ))
          }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Course
