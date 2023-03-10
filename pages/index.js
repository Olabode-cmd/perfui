import Head from 'next/head'
import Navbar from './components/Navbar'
import Sectionhero from './components/Sectionhero'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Sectionhero />

        <h1>Hello Motherfvcker!</h1>
      </main>
    </>
  )
}
