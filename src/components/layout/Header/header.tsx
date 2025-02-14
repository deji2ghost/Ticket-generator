import Button from "../../ui/CustomButton/Button"
import logo from "../../../../public/logo.svg"

const Header = () => {
  return (
    <div className='border border-[#0E464F] flex items-center justify-between p-2 rounded-md mb-4'>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="border p-2 border-[#ffffff]"><img src={logo} /></div>
          <p>ticz</p>
        </div>
        <ul className='hidden'>
          <li>Events</li>
          <li>My tickets</li>
          <li>About Project</li>
        </ul>
      </div>
      <Button className='bg-[#FFFFFF] text-[#0A0C11] p-3 rounded-md' text='MY TICKETS ->'/>
    </div>
  )
}

export default Header
