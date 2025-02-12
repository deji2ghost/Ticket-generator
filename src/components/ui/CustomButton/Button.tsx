

const Button = ({text, className}: {text: string, className: string}) => {
  return (
    <div className="inline-block rounded-md">
      <button className={`${className} outline-none border-none`}>
        {text}
      </button>
    </div>
  )
}

export default Button