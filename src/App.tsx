import './App.css'
import Header from './components/layout/Header/header'
import HeroSection from './components/Template/HeroSection'
import Button from './components/ui/CustomButton/Button'
import { UseTicketHook } from './context/ticketContext'

function App() {
  const { step, setStep, pick, validateForm, isFormValid } = UseTicketHook();

  const handleFoward = () => {
    if (step === 1 && pick === null) {
      return; 
    }

    if (step === 2) {
      validateForm();
      if (!isFormValid) return;
    }

    if (step === 3) {
      localStorage.removeItem("formData");
      alert("Your ticket was generated")
      setStep(1)
      return
    }

    setStep(step + 1)
  }

  const handleBackward = () => {
    setStep(step - 1)
    validateForm()
  }

  return (
    <div className='px-5'>
      <Header />
      <HeroSection />
      <footer className="flex flex-col gap-1 md:flex-row-reverse md:w-full md:justify-between">
        <Button
          disabled={(step === 1 && pick === null)}
          handleClick={handleFoward}
          className="w-full md:w-[480px] p-2 border-none rounded-md bg-[#24A0B5] text-[#fff]"
          text={step === 1 ? "Next" : step === 2 ? "Get My Free Ticket" : "Download Ticket"}
        />
        <Button
          disabled={step === 1}
          handleClick={handleBackward}
          className="w-full md:w-[480px] p-2 rounded-md border border-[#24A0B5] text-[#24A0B5]"
          text={step === 1 ? "Cancel" : step === 2 ? "Back" : "Book Another Ticket"}
        />
      </footer>
    </div>
  );
}


export default App