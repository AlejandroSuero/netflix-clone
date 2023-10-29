import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import type { FC, MouseEventHandler, ReactNode } from "react"
import { signIn } from "next-auth/react"

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
        className="font-bold tracking-wide rounded-md w-full mt-10 transition focus:outline-none py-3 bg-red-700 hover:bg-red-800 focus:bg-red-800 text-white"
        onClick={main.handleClick}
      >{main.text}</button>
      <div className="flex items-center justify-around gap-2 text-white opacity-50 my-2">
        <div className="w-full border-t border-white"></div>
        <p>or</p>
        <div className="w-full border-t border-white"></div>
      </div>
      <button
        className="flex justify-center items-center gap-3 border border-transparent font-bold tracking-wide rounded-md w-full focus:outline-none py-3 bg-white hover:bg-white/90 focus:bg-white/90 text-black"
        onClick={google.handleClick}
      >
        <FcGoogle size={25} />
        <span>{google.text}</span>
      </button>
      <button
        onClick={async () => await signIn("github", { callbackUrl: "/" })}
        className="flex justify-center items-center gap-3 border border-white mt-3 border-opacity-20 font-bold tracking-wide rounded-md w-full focus:outline-none py-3 bg-black hover:bg-white hover:bg-opacity-[0.075] focus:bg-black text-white"
      >
        <FaGithub size={25} />
        <span>{github.text}</span>
      </button>
    </>
  )
}

export { AuthButtons }
