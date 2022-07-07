import Head from 'next/head'
import Articles from '../components/Articles'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Yea Yea</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      <Articles articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=5`)
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}
