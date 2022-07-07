import { server } from '../config'

import Articles from '../components/Articles'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Articles articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=5`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     }
//   }
// }
