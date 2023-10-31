import useCurrentUser from "@/hooks/useCurrentUser"
import { type NextPageContext } from "next"
import { getSession } from "next-auth/react"
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
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1
          className="font-extrabold tracking-wide text-4xl md:text-6xl text-white text-center"
        >
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={async () => { await router.push("/") }}>
            <div className="group flex-row mx-auto">
              <div
                className="flex items-center justify-center group-hover:cursor-pointer"
              >
                <Image
                  src="/images/profiles/shinji.jpg"
                  alt="Frame from the anime Evangelion, where Shinji Ikari is sitting on a chair and looking down"
                  width={170}
                  height={170}
                  title={`Enter your profile: ${user?.name}`}
                  className="rounded-md border-2 border-transparent group-hover:border-white/10 group-hover:shadow-xl group-hover:shadow-white/5"
                />
              </div>
              <div
                className="mt-4 text-white/50 text-base md:text-2xl text-center group-hover:text-white"
              >
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
