import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import type { FC, ReactNode } from "react"

interface AuthProps {
  title: string
  button: string
  footer: {
    text: string
    link: string
  }
  link: string
  children?: ReactNode
}

const Auth: FC<AuthProps> = ({
  title,
  footer,
  button,
  link,
  children
}) => {
  return (
    <>
      <Head>
        <title>{`Netflix clone - ${title}`}</title>
        <meta property="og:title" key="title" name="title" content={`Netflix clone - ${title}`}></meta>
        <meta property="og:description" key="descrition" name="description" content={`Authentication page in which you can ${title.toLowerCase()} and enjoy our movies catalog`} />
      </Head>
      <div className="relative h-screen w-screen lg:bg-[url('/images/hero.jpg')] lg:bg-no-repeat lg:bg-center lg:bg-fixed lg:bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50 flex flex-col">
          <nav className="px-16 pt-10">
            <Link href="/" className="block w-fit" title="Go back home">
              <Image src="/images/logo.png" alt="Netflix logo" width={167} height={45} quality={100} loading="eager" priority />
            </Link>
          </nav>
          <div className="flex-1 flex justify-center self-center w-full h-full">
            <main className="bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md rounded-xl w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {title}
              </h2>
              <section className="flex flex-col gap-4">
                {children}
              </section>
              <button
                className="bg-red-700 py-3 text-white font-bold tracking-wide rounded-md w-full mt-10 hover:bg-red-800 transition focus:outline-none focus:bg-red-800"
              >
                {button}
              </button>
              <p className="text-neutral-400 mt-12">
                {footer.text}
                <Link
                  href={link}
                  className="text-white opacity-[0.85] ml-1 font-semibold cursor-pointer hover:underline hover:opacity-100 focus:opacity-100 focus:outline-none focus:underline"
                >
                  {footer.link}
                </Link>
              </p>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
