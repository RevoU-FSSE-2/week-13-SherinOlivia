import { useState } from 'react';
import './App.css'
import { Login, Register } from './containers'

function App() {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if(step === 1 || step === 2) {
        setStep((prevStep) => prevStep+1);
    }

    return
  }

  const handlePrev = () => {
    if(step === 2 || step === 3) {
        setStep((prevStep) => prevStep - 1);
    }

    return
  }

  return (
    <>
      {step === 1 && (
        <Login />    
      )}
      {step === 2 && (
        <Register />  
      )}
    </>
  )
}

export default App

