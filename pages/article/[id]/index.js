import articleStyles from '../../../styles/article_styles.module.css';
import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const article = ({article}) => {
  const router = useRouter()
  const {id} = router.query

  return (
    <>
    <Meta title={article.title} />
      <div className={articleStyles.card} >
        <h1>{article.title}</h1>
        <img src={article.thumbnailUrl} alt="" />
        <br />
        <Link href='/'>Goback</Link>
      </div>
    </>
  )
}
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  
  const article = await res.json();
  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}) )

  return {
    paths,
    fallback: false,
  }
}


// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`)
  
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)

//   const articles = await res.json()
//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({params: {id: id.toString()}}) )

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article
