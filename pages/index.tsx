import useCurrentUser from "@/hooks/useCurrentUser"
import type { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

export async function getServerSideProps (context: NextPageContext) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home () {
  const { data: user } = useCurrentUser()
  return (
    <>
      <h1 className="text-2xl font-bold text-red-600">Netflix Clone</h1>
      <p className="text-white">Logged in as: <span className="px-2 py-1 bg-red-700">{user?.name}</span></p>
      <button
        className="bg-white text-base h-10 w-full"
        onClick={async () => { await signOut() }}
      >Logout!</button>
    </>
  )
}
