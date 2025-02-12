import Button from "../../ui/CustomButton/Button"

const Header = () => {
  return (
    <div className='border border-[#0E464F] flex items-center'>
      <div>h</div>
      <ul className='hidden'>
        <li>Events</li>
        <li>My tickets</li>
        <li>About Project</li>
      </ul>
      <Button className='bg-[#FFFFFF] p-3 rounded-md' text='MY TICKETS ->'/>
    </div>
  )
}

export default Header
