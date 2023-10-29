import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import type { FC, MouseEventHandler, ReactNode } from "react"

interface AuthCredentials {
  text: ReactNode
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export interface AuthButtonsProps {
  main: AuthCredentials
  google: AuthCredentials
  github: AuthCredentials
}

const AuthButtons: FC<AuthButtonsProps> = ({ main, google, github }) => {
  return (
    <>
      <button
        onClick={main.handleClick}
        className="bg-red-700 py-3 text-white font-bold tracking-wide rounded-md w-full mt-10 hover:bg-red-800 transition focus:outline-none focus:bg-red-800"
      >
        {main.text}
      </button>
      <div className="flex items-center justify-around gap-2 text-white opacity-50 my-2">
        <div className="w-full border-t border-white"></div>
        <p>or</p>
        <div className="w-full border-t border-white"></div>
      </div>
      <button
        onClick={google.handleClick}
        className="flex justify-center gap-3 items-center border border-transparent bg-gray-100 py-3 text-white font-bold tracking-wide rounded-md w-full hover:bg-gray-300 transition focus:outline-none focus:bg-gray-300"
      >
        <FcGoogle />
        <span className="text-black opacity-70">{google.text}</span>
      </button>
      <button
        onClick={github.handleClick}
        className="flex justify-center gap-3 items-center border border-white border-opacity-20 bg-black py-3 text-white font-bold tracking-wide rounded-md w-full mt-3 hover:opacity-80 transition focus:outline-none focus:opacity-80"
      >
        <FaGithub />
        <span>{github.text}</span>
      </button>
    </>
  )
}

export { AuthButtons }
