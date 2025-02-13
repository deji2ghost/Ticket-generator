import './App.css'
import Header from './components/layout/Header/header'
import HeroSection from './components/Template/HeroSection'
import Button from './components/ui/CustomButton/Button'

function App() {

  const handleBack = () => {
    
  }

  const handleFront = () => {

  }

  return (
    <div className='p-3 text-[#FFFFFF]'>
      <Header />
      <HeroSection step={1} />
      <footer>
        <Button handleClick={handleBack} className='' text='Cancel' />
        <Button handleClick={handleFront} className='' text='Next' />
      </footer>
    </div>
  )
}

export default App
