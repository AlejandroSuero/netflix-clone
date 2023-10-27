import { useState } from "react"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Auth
      title="Sign in"
      button="Sign in"
      footer={{
        text: "First time using Netflix?",
        link: "Create an account"
      }}
      link="/auth/signup"
    >
      <Input
        tabIndex={1}
        id="email"
        label="Email"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
        type="email"
        value={email}
      />
      <Input
        tabIndex={2}
        id="password"
        label="Password"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
        type="password"
        value={password}
      />
    </Auth>
  )
}

export default SignIn
