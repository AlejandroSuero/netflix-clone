import { useCallback, useState } from "react"

import type { ChangeEvent, ReactNode } from "react"

import Image from "next/image"
import Input from "@/components/Input"

interface VariantOptions {
  title: ReactNode
  footer: ReactNode
  action: ReactNode
}

interface Variant {
  login: VariantOptions
  register: VariantOptions
}

const variants: Variant = {
  login: {
    title: "Sign in",
    footer: "First time using Netflix?",
    action: "Sign in"
  },
  register: {
    title: "Create an account",
    footer: "Already have an account?",
    action: "Sign up"
  }
}

const Auth = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [variant, setVariant] = useState("login")

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
  }, [])

  return (
    <div className="relative h-screen w-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-70">
        <nav className="px-12 py-16">
          <Image
            src="/images/logo.png"
            alt="Netflix logo"
            width={167}
            height={45}
          />
        </nav>
        <div className="flex justify-center">
          <main className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-xl w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variants[variant as keyof Variant].title}
            </h2>
            <section className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="username"
                  label="Username"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
                  type="text"
                  value={username}
                />)}
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
            <button
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variants[variant as keyof Variant].action}
            </button>
            <p
              className="text-neutral-400 mt-12">
              {variants[variant as keyof Variant].footer}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer">
                {variant === "login" ? variants.register.title : variants.login.title}
              </span>
            </p>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Auth
