import useCurrentUser from "@/hooks/useCurrentUser"
import type { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

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

const Profiles = () => {
  const router = useRouter()
  const { data: user } = useCurrentUser()
  return (
    <>
      <Head>
        <title>Netflix clone - Profiles</title>
        <meta property="og:title" content="Netflix clone - Profiles" key="title" />
        <meta property="og:description" content="Here is where you can manage your profiles" key="profiles" />
        <meta property="og:image" content="/images/hero.jpg" key="image" />
      </Head>
      <div className="flex items-center h-full justify-center">
        <main className="flex flex-col">
          <header>
            <h1 className="text-5xl text-white font-bold tracking-wide text-center">Who is watching?</h1>
          </header>
          <div className="flex items-center justify-center gap-8 mt-10">
            <div onClick={async () => { await router.push("/") }}>
              <picture className="group flex-row w-44 mx-auto">
                <div className="rounded-md aspect-square flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white/50 group-hover:shadow-xl group-hover:shadow-white/10 overflow-hidden">
                  <Image
                    src="/images/profiles/shinji.jpg"
                    alt="Shinji Ikari from Evangelion, performing one of his most famous poses, sit on a chair and think"
                    width={200}
                    height={200}
                  />
                </div>
                <p
                  className="mt-4 text-white/70 text-2xl font-semibold text-center group-hover:text-white"
                >{user?.name}</p>
              </picture>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Profiles
