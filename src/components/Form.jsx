import React from 'react'

const Form = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <div className='flex gap-4 justify-start font-normal text-[20px]'>
        <div className='flex flex-col'>
          <label htmlFor="day" className='uppercase text-[14px] text-Smokeygrey'>day</label>
          <input type="text" id='day' maxLength={2} onChange={handleChange} placeholder='DD' className='border-2 border-Offwhite w-10 rounded-sm px-1 md:w-16 md:h-6 outline-none  focus:border-Purple' />
          <p className='text-Lightred font-normal text-[13px] md:text-[16px]'>{errors.errorDay}</p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="month" className='uppercase text-[14px] text-Smokeygrey'>month</label>
          <input type="text" id='month' maxLength={2} onChange={handleChange} placeholder='MM' className='border-2 border-Offwhite w-10 rounded-sm px-1 md:w-16 md:h-6 outline-none  focus:border-Purple' />
          <p className='text-Lightred font-normal text-[13px] md:text-[16px]'>{errors.errorMonth}</p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="year" className='uppercase text-[14px] text-Smokeygrey'>year</label>
          <input type="text" id='year' maxLength={4} onChange={handleChange} placeholder='YYYY' className='border-2 border-Offwhite w-10 rounded-sm px-1 md:w-16 md:h-6 outline-none  focus:border-Purple' />
          <p className='text-Lightred font-normal text-[13px] md:text-[16px]'>{errors.errorYear}</p>
        </div>
      </div>
      <div className='border-[1px] relative mt-4'>
          <img src="/icon-arrow.svg" alt="btn-img" onClick={handleSubmit} className='bg-Purple rounded-full p-2 absolute right-[50%] translate-x-[50%] -top-5 cursor-pointer md:right-4 hover:bg-black' />
      </div>
    </div>
  )
}

export default Form