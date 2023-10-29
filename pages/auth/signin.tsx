import { useState } from "react"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"
import { useUserRegister } from "@/hooks/use-user-register"
import { AuthButtons, type AuthButtonsProps } from "@/components/auth/buttons"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signin = useUserRegister({ email, password, url: "/" })

  const credentials: AuthButtonsProps = {
    main: {
      text: "Sign in",
      handleClick: signin
    },
    google: {
      text: "Sign in with Google",
      handleClick: () => {}
    },
    github: {
      text: "Sign in with Github",
      handleClick: () => {}
    }
  }

  return (
    <Auth
      title="Sign in"
      footer={{
        text: "First time using Netflix?",
        link: "Create an account"
      }}
      link="/auth/signup"
    >
      <section className="flex flex-col gap-4">
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
      </section>
      <AuthButtons
        main={credentials.main}
        google={credentials.google}
        github={credentials.github}
      />
    </Auth>
  )
}

export default SignIn
