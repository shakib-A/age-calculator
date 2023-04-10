import { monthDetail } from "./monthDetail"

const time = new Date()
const currentDay = time.getDate()
const currentMonth = time.getMonth() + 1
const currentYear = time.getFullYear()

const validateForm = (value) => {
    const hasLetter = /[a-zA-Z]/
    const {birthDay, birthMonth, birthYear} = value
    const errorObj = {}

    //birthday errors
    if(hasLetter.test(birthDay)) {
     errorObj.errorDay = 'Numbers Only!'
    } else if (birthDay.length === 0) {
     errorObj.errorDay = "Can't be blank"
    } else if (birthDay.length === 1) {
     errorObj.errorDay = 'two digits are required'
    } else if (parseInt(birthDay) > monthDetail[parseInt(birthMonth) - 1].daysNumber) {
      errorObj.errorDay = 'enter valid day'
    } 
    
    //birthmonth errors
    if(hasLetter.test(birthMonth)) {
     errorObj.errorMonth = 'Numbers Only!'
    } else if (birthMonth.length === 0) {
     errorObj.errorMonth = "Can't be blank"
    } else if (birthMonth.length === 1) {
      errorObj.errorMonth = 'two digits are required'
    } else if (parseInt(birthMonth) > 12) {
      errorObj.errorMonth =  'Enter valid month'
    } 

    //birthyear errors
    if(hasLetter.test(birthYear)) {
      errorObj.errorYear = 'Numbers Only!'
    } else if (birthYear.length === 0) {
      errorObj.errorYear = "Can't be blank"
    } else if (birthYear.length <= 3) {
     errorObj.errorYear = 'Four digits are required'
    } else if (parseInt(birthYear) > time.getFullYear()) {
     errorObj.errorYear = "You have NOT born yet!!!"
    }

    return errorObj
  }


  const calculateAge = (value) => {
    const {birthDay, birthMonth, birthYear} = value
    const result = {}
    // ageYear calculation
    if(parseInt(birthMonth) > currentMonth) {
      result.ageYear = currentYear - parseInt(birthYear) - 1
    } else if (parseInt(birthMonth) < currentMonth) {
      result.ageYear = currentYear - parseInt(birthYear)
    } else if (parseInt(birthMonth) == currentMonth && parseInt(birthDay) < currentDay) {
      console.log(currentDay)
      result.ageYear = currentYear - parseInt(birthYear) - 1
    } else {
      result.ageYear = currentYear - parseInt(birthYear)
    }

    // ageMonth calculation 
    if(parseInt(birthMonth) > currentMonth) {
      result.ageMonth = 12 - parseInt(birthMonth) + currentMonth -1
    } else if (parseInt(birthMonth) < currentMonth) {
      result.ageMonth = currentMonth - parseInt(birthMonth) -1
    }

    //ageDay calculation
    if(parseInt(birthDay) > currentDay) {
      result.ageDay = monthDetail[currentMonth - 1].daysNumber - parseInt(birthDay) + currentDay 
    } else if (parseInt(birthDay) < currentDay) {
      result.ageDay = currentDay - parseInt(birthDay)
      result.ageMonth += 1
    }

    if(parseInt(birthDay) == currentDay && parseInt(birthMonth) == currentMonth) {
      result.ageDay = 0
      result.ageMonth = 0
    }
    return result
  }

  export {validateForm, calculateAge}