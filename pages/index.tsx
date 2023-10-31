import { Navbar } from "@/components"
import type { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import Head from "next/head"

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
  return (
    <>
      <Head>
        <title>Netflix clone - Home</title>
        <meta property="title" content="Netflix clone - Home" key="title" />
        <meta property="description" content="Welcome to aome's Netflix clone where you can watch movies from BlenderStudios and many more, only non-copyrighted movies available" key="description" />
      </Head>
      <>
        <Navbar />
        <button
          className="w-full h-10 bg-white"
          onClick={async () => { await signOut() }}
        >
          Logout
        </button>
      </>
    </>
  )
}
