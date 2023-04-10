import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Form from './components/Form'
import Results from './components/Results'
import { validateForm, calculateAge } from './components/functions'

const App = () => {

  const [isSubmited, setIsSubmited] = useState(false)
  const [birthDate, setBirthDate] = useState({birthDay: '', birthMonth: '', birthYear: ''})
  const [formErrors, setFormErrors] = useState({errorDay: ''})
  const [result, setResult] = useState({})
  const [happyBirthDay, setIsHappyBirthDay] = useState(false)

  const time = new Date()


  useEffect(()=> {
    if(result.ageDay === 0 && result.ageMonth === 0){
      setIsHappyBirthDay(true)
    } else {
      setIsHappyBirthDay(false)
    }

    if(Object.keys(formErrors).length == 0) {
      setIsSubmited(true)
    }
  },[formErrors])

  const handleChange = (e) => {
    const {id, value} = e.target
    switch(id){
      case('day'):
      setBirthDate(prev => {
        return {...prev, birthDay: value}
      })
      break

      case('month'):
      setBirthDate(prev => {
        return {...prev, birthMonth: value}
      })
      break

      case('year'):
      setBirthDate(prev => {
        return {...prev, birthYear: value}
      })
      break
    }
  }
 
  const handleSubmit = () => {
    setFormErrors(validateForm(birthDate))
    if(isSubmited) {
      setResult(calculateAge(birthDate))
    }
  }

  return (
    <div className='bg-Lightgrey h-screen flex flex-col justify-center items-center'>
      {happyBirthDay && <p className='border-2 border-black font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-sm p-1 mb-2'>happy birthday</p>}
      <div className='bg-white flex flex-col gap-4 justify-center items-start p-4 rounded-3xl rounded-br-[30%] shadow-xl md:container md:max-w-sm md:rounded-md md:rounded-br-[30%]'>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={formErrors}
        />
        <Results
          result={result}
        />
      </div>
      {happyBirthDay && <Confetti numberOfPieces={400} />}
    </div>
  )
}

export default App