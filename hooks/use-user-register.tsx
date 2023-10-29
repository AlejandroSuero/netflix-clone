import axios from "axios"
import { signIn, type SignInOptions } from "next-auth/react"
import { useRouter } from "next/router"
import { useCallback } from "react"

interface UseUserRegister {
  credential?: "credentials" | "github"
  username?: string
  email?: string
  password?: string
  callbackUrl: string
}

const useUserRegister = ({
  credential,
  username,
  email,
  password,
  callbackUrl
}: UseUserRegister) => {
  const router = useRouter()
  let options: SignInOptions

  switch (credential) {
    case "github":
      options = { callbackUrl }
      break
    case "credentials":
      options = { email, password, redirect: false, callbackUrl }
      break
    default:
      options = { username, email, password }
      break
  }

  const signin = useCallback(async () => {
    try {
      await signIn(credential, options)
      if (credential === "credentials") await router.push(callbackUrl)
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [callbackUrl, credential, options, router])

  const signup = useCallback(async () => {
    try {
      await axios.post("/api/register", options)
      await router.push(callbackUrl)
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [options, router, callbackUrl])

  if (!credential) return signup
  return signin
}

export {
  useUserRegister
}
