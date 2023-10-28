import { useCallback, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"

const SignUp = () => {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signup = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        username,
        email,
        password
      })
      await router.push("/auth/signin")
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [username, email, password, router])

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
