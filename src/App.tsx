import './App.css'
import Header from './components/layout/Header/header'
import HeroSection from './components/Template/HeroSection'
import Button from './components/ui/CustomButton/Button'
import { UseTicketHook } from './context/ticketContext'

function App() {

  const { step, setStep } = UseTicketHook()

  const handleBack = () => {
    const newStep = step - 1
    setStep(newStep)
  }

  const handleFront = () => {
    const newStep = step + 1
    setStep(newStep)
  }

  return (
    <div className='p-3 text-[#FFFFFF]'>
      <Header />
      <HeroSection />
      <footer className='flex flex-col gap-1 md:flex-row-reverse md:w-full md:justify-between'>
        <Button disabled={ step === 3 } handleClick={handleFront} className='w-full md:w-[480px] p-2 border-none rounded-md bg-[#24A0B5] text-[#fff]' text='Next' />
        <Button disabled={ step === 1 } handleClick={handleBack} className='w-full md:w-[480px] p-2 rounded-md border border-[#24A0B5] text-[#24A0B5]' text='Cancel' />
      </footer>
    </div>
  )
}

export default App