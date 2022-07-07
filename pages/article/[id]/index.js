import articleStyles from '../../../styles/article_styles.module.css';
import {useRouter} from 'next/router'
import Link from 'next/link'

const article = ({article}) => {
  const router = useRouter()
  const {id} = router.query

  return (
    <div className={articleStyles.card} >
      <h1>{article.title}</h1>
      <img src={article.thumbnailUrl} alt="" />
      <br />
      <Link href='/'>Goback</Link>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch (`https://jsonplaceholder.typicode.com/photos/${context.params.id}`)
  
  const article = await res.json();
  return {
    props: {
      article,
    },
  }

}

export default article
