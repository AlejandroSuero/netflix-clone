import axios from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useCallback } from "react"

interface UseUserRegister {
  username?: string
  email: string
  password: string
  url: string
}

const useUserRegister = ({
  username,
  email,
  password,
  url
}: UseUserRegister) => {
  const router = useRouter()

  const signin = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: url
      })
      await router.push(url)
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [email, password, router, url])

  const signup = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        username,
        email,
        password
      })
      await router.push(url)
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error)
    }
  }, [username, email, password, router, url])

  if (username) return signup
  return signin
}

export {
  useUserRegister
}
