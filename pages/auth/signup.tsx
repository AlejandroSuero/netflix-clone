import { useState } from "react"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Auth
      title="Sign up"
      button="Sign up"
      footer={{
        text: "Already have an account?",
        link: "Sign in"
      }}
      link="/auth/signin"
    >
      <Input
        tabIndex={1}
        id="username"
        label="Username"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
        type="text"
        value={username}
      />
      <Input
        tabIndex={2}
        id="email"
        label="Email"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
        type="email"
        value={email}
      />
      <Input
        tabIndex={3}
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
