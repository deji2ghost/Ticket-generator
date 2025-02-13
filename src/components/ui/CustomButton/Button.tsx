

const Button = ({text, className, handleClick}: {text: string, className: string, handleClick?: () => void}) => {
  return (
    <div className="inline-block rounded-md">
      <button onClick={handleClick} className={`${className} outline-none border-none`}>
        {text}
      </button>
    </div>
  )
}

export default Button