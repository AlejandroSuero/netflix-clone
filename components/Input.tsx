import type { ChangeEventHandler, FC, HTMLProps } from "react"

interface InputProps extends HTMLProps<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  label: string
}

const Input: FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type,
  tabIndex
}) => {
  return (
    <div className="relative">
      <input
        tabIndex={tabIndex}
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        className="input peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="label peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-zinc-400"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
