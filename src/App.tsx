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
      <footer>
        <Button disabled={ step === 1 } handleClick={handleBack} className='' text='Cancel' />
        <Button disabled={ step === 3 } handleClick={handleFront} className='' text='Next' />
      </footer>
    </div>
  )
}

export default App