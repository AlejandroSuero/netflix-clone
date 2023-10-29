import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import type { FC, MouseEventHandler, ReactNode } from "react"
import { Button } from ".."

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
      <Button
        variant="filled"
        text="Sign in"
        foreground="white"
        background="red"
        customStyles="font-bold tracking-wide rounded-md w-full mt-10 transition focus:outline-none"
        handleClick={main.handleClick}
      />
      <div className="flex items-center justify-around gap-2 text-white opacity-50 my-2">
        <div className="w-full border-t border-white"></div>
        <p>or</p>
        <div className="w-full border-t border-white"></div>
      </div>
      <Button
        variant="filled"
        foreground="black"
        background="white"
        customStyles="flex justify-center items-center gap-3 border border-transparent font-bold tracking-wide rounded-md w-full focus:outline-none"
        handleClick={google.handleClick}
      >
        <FcGoogle />
        <span>{google.text}</span>
      </Button>
      <Button
        variant="filled"
        foreground="white"
        background="black"
        customStyles="flex justify-center items-center gap-3 border border-white mt-3 border-opacity-20 font-bold tracking-wide rounded-md w-full focus:outline-none"
        handleClick={github.handleClick}
      >
        <FaGithub />
        <span>{github.text}</span>
      </Button>
    </>
  )
}

export { AuthButtons }
