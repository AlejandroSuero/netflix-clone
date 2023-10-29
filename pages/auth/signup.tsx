import { useState } from "react"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"
import { useUserRegister } from "@/hooks/use-user-register"
import { AuthButtons, type AuthButtonsProps } from "@/components/auth/buttons"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signup = useUserRegister({ username, email, password, url: "/auth/signin" })

  const credentials: AuthButtonsProps = {
    main: {
      text: "Sign up",
      handleClick: signup
    },
    google: {
      text: "Continue with Google",
      handleClick: () => {}
    },
    github: {
      text: "Continue with Github",
      handleClick: () => {}
    }
  }

  return (
    <Auth
      title="Sign up"
      footer={{
        text: "Already have an account?",
        link: "Sign in"
      }}
      link="/auth/signin"
    >
      <section className="flex flex-col gap-4">
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
      </section>
      <AuthButtons
        main={credentials.main}
        google={credentials.google}
        github={credentials.github}
      />
    </Auth>
  )
}

export default SignUp
