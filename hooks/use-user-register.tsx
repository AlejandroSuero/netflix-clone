import axios from "axios"
import { signIn, type SignInOptions } from "next-auth/react"
import { useCallback } from "react"

type Credential = "credentials" | "github" | "google"

interface UseUserRegister {
  credential?: Credential
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
  let options: SignInOptions

  switch (credential) {
    case "github":
      options = { callbackUrl }
      break
    case "google":
      options = { callbackUrl }
      break
    case "credentials":
      options = { email, password, callbackUrl }
      break
    default:
      options = { username, email, password }
      break
  }

  const signin = useCallback(async () => {
    try {
      await signIn(credential, options)
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [credential, options])

  const signup = useCallback(async () => {
    try {
      await axios.post("/api/register", options)
      await signin()
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [options, signin])

  if (!credential) return signup
  return signin
}

export {
  useUserRegister
}
