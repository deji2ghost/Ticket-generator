

const Button = ({text, className, disabled, handleClick}: {text: string, disabled?: boolean, className: string, handleClick?: () => void}) => {
  return (
    <div className="inline-block rounded-md">
      <button disabled={disabled} onClick={handleClick} className={`${className} outline-none`}>
        {text}
      </button>
    </div>
  )
}

export default Button