import type { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react"

interface InputProps {
  id: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  label: string
  type?: HTMLInputTypeAttribute
}

const Input: FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type
}) => {
  return (
    <div className="relative">
      <input
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        className="input peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="label peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
