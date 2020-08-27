import Head from 'next/head'
import {posts} from '../components/data' 
import Header from '../components/header'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex-container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {
          posts.map((post) =>
            <Link href= {`posts/${post.id}`}><a>
              <div className="flex mb-4" key={post.id}>
                <div className="w-full">
                  <div className="rounded overflow-hidden shadow-lg">
                    <div className="flex mb-4">
                      <div className="w-1/16">
                        <img className="w-32" src={post.image} alt={post.title} />
                      </div>
                      <div className="w-15/4">
                        <div className="px-6 py-4">
                          <div className="font-bold text-l mb-2">{post.title}</div>
                          <p className="text-gray-700 text-base">
                            {post.description}
                          </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.publishedDate}</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></a>
            </Link>
          )
        }
        </main>
    </div>
  )
}
