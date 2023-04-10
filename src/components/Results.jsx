import React from 'react'

const Results = ({result}) => {
  return (
    <div>
       <p className='font-extrabold italic text-[60px] md:text-[80px]'><span className='text-Purple'>{result.ageYear ? `${result.ageYear}` : `- -`}</span> Years</p> 
       <p className='font-extrabold italic text-[60px] md:text-[80px]'><span className='text-Purple'>{result.ageMonth || result.ageMonth == 0 ? `${result.ageMonth}` : `- -`}</span> months</p> 
       <p className='font-extrabold italic text-[60px] md:text-[80px]'><span className='text-Purple'>{result.ageDay || result.ageDay == 0 ? `${result.ageDay}` : `- -`}</span> days</p> 
    </div>
  )
}

export default Results