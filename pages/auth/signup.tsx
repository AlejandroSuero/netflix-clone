import { useState } from "react"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"
import { useUserRegister } from "@/hooks/use-user-register"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signup = useUserRegister({ username, email, password, url: "/auth/signin" })

  return (
    <Auth
      handleClick={signup}
      title="Sign up"
      button="Sign up"
      footer={{
        text: "Already have an account?",
        link: "Sign in"
      }}
      link="/auth/signin"
    >
      <Input
        tabIndex={0}
        id="username"
        label="Username"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
        type="text"
        value={username}
      />
      <Input
        id="email"
        label="Email"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
        type="email"
        value={email}
      />
      <Input
        id="password"
        label="Password"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
        type="password"
        value={password}
      />
    </Auth>
  )
}

export default SignUp
