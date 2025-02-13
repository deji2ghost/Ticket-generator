
interface Form {
  placeholder?: string;
  value: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string
  className?: string
}

const Input = ({ placeholder, value, className, type, handleChange, name }: Form) => {
  return (
    <div className={`relative inline-block rounded-[8px]`}>
      <input
        className={`py-3 w-full px-4 border font-[400] rounded-[8px] text-[16px] outline-none focus:shadow-2xl ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default Input;