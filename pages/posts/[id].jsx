import Head from 'next/head'
import {posts} from '../../components/data' 
import Header from '../../components/header'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  console.log(router);
  return (
    <div className="flex-container">
      <Head>
        <title>Single Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <h1>Single Page Coming Soon</h1>
      </main>
    </div>
  )
}
