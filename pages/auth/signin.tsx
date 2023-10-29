import { useState } from "react"

import type { ChangeEvent } from "react"

import { Auth, Input } from "@/components"
import { useUserRegister } from "@/hooks/use-user-register"
import { AuthButtons, type AuthButtonsProps } from "@/components/auth/AuthButtons"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const credentials: AuthButtonsProps = {
    main: {
      text: "Sign in",
      handleClick: useUserRegister({ credential: "credentials", email, password, callbackUrl: "/profiles" })
    },
    google: {
      text: "Sign in with Google",
      handleClick: useUserRegister({ credential: "google", callbackUrl: "/profiles" })
    },
    github: {
      text: "Sign in with Github",
      handleClick: useUserRegister({ credential: "github", callbackUrl: "/profiles" })
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
