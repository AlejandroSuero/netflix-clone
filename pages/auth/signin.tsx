import { useCallback, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"

const SignIn = () => {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signin = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/"
      })
      await router.push("/")
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [email, password, router])

  return (
    <Auth
      handleClick={signin}
      title="Sign in"
      button="Sign in"
      footer={{
        text: "First time using Netflix?",
        link: "Create an account"
      }}
      link="/auth/signup"
    >
      <Input
        tabIndex={0}
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

export default SignIn
